/*
    @polymerMixin
*/
export const NextEntityPaginateMixin = function(propName, superClass) {
	return class extends superClass {
		static get properties() {
			return {
				paginatedFetched: Array,
				nextLink: Object,
				nextEntity: Object,

				paginated: Array,
				renderSize: {
					type: Number,
					value: 10
				},
				renderPage: {
					type: Number,
					value: 1
				}
			};
		}

		static get observers() {
			return [
				'__tokenChanged(token)',
				`_itemsChanged(${propName})`,
				'_pageChanged(paginatedFetched, renderSize, renderPage)'
			];
		}

		constructor() {
			super();
			this._boundNextEntityChanged = this._nextEntityChanged.bind(this);
		}

		get sirenEntityElement() {
			if (!this.__sirenEntityElement) {
				this.__sirenEntityElement = document.createElement('d2l-siren-entity');
				this.__sirenEntityElement.token = this.token;
				this.__sirenEntityElement.addEventListener('entity-changed', this._boundNextEntityChanged);
				this.shadowRoot.appendChild(this.__sirenEntityElement);
			}
			return this.__sirenEntityElement;
		}

		get hasMore() {
			return !!this.nextLink || this.hasHidden;
		}

		get hasHidden() {
			return this.paginatedFetched && this.paginated && (this.paginatedFetched.length > this.paginated.length);
		}

		_nextEntityChanged() {
			this.nextEntity = this.sirenEntityElement.entity;
			this.paginatedFetched = this.paginated.concat(this.nextEntity.entities);
			this.nextLink = this.nextEntity.getLinkByRel('next');
			this.__target.clearTriggers();
		}

		__tokenChanged(token) {
			if (this.__sirenEntityElement) {
				this.__sirenEntityElement.token = token;
			}
		}

		_itemsChanged() {
			this.renderPage = 1;
			this.paginatedFetched = this.get(propName).entities;
			this.nextLink = this.get(propName).getLinkByRel('next');
			this._pageChanged();
		}

		_pageChanged() {
			this.paginated = this.paginatedFetched && this.paginatedFetched.slice(0, this.renderSize * this.renderPage);
		}

		loadMoreData(e) {
			if (this.hasHidden) {
				this.renderPage++;
				e.target.clearTriggers();
			} else if (this.hasMore) {
				this.renderPage++;
				this.sirenEntityElement.href = this.nextLink.href;
				this.__target = e.target;
			} else {
				e.target.clearTriggers();
			}
		}
	};
};

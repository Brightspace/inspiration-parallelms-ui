/*
    @polymerMixin
*/
export const PaginateMixin = function(propName, superClass) {
	return class extends superClass {
		static get properties() {
			return {
				paginated: Array,
				hasMore: Boolean,
				size: {
					type: Number,
					value: 10
				},
				page: {
					type: Number,
					value: 1
				}
			};
		}

		static get observers() {
			return [
				`_itemsChanged(${propName})`,
				'_pageChanged(size, page)'
			];
		}

		_itemsChanged() {
			this.page = 1;
			this._pageChanged();
		}

		_pageChanged() {
			const prop = this.get(propName);
			if (prop) {
				this.paginated = prop.slice(0, this.size * this.page);
				this.hasMore = prop.length > this.paginated.length;
			}
		}

		loadMoreData(e) {
			if (this.hasMore) {
				this.page++;
			}
			e.target.clearTriggers();
		}
	};
};

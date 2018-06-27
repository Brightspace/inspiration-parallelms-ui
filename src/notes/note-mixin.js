import './notes-shim.js';

/*
    @polymerMixin
*/
export const NoteMixin = function(superClass) {
	return class extends superClass {
		constructor() {
			super();
			this._addedNotesShim = false;
		}

		connectedCallback() {
			super.connectedCallback();
			this._attachNotesShim(this.entity, this.token);
		}

		_attachNotesShim(entity, token) {
			if (this._addedNotesShim || !this.shadowRoot || !entity || !token) {
				return;
			}
			const link = entity.getLinkByRel('https://api.brightspace.com/rels/note');
			if (!link) {
				return;
			}
			const notesShim = document.createElement('d2l-notes-shim');
			notesShim.token = this.token;
			notesShim.href = link.href;
			this.shadowRoot.appendChild(notesShim);
			this._addedNotesShim = true;
		}

		_propertiesChanged(props, changedProps, prevProps) {
			super._propertiesChanged(props, changedProps, prevProps);
			if (
				changedProps &&
				(changedProps.entity !== undefined || changedProps.token !== undefined) &&
				this.entity !== undefined &&
				this.token !== undefined
			) {
				this._attachNotesShim(this.entity, this.token);
			}
		}
	};
};

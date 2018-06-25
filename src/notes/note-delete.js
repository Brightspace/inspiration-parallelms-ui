import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { SirenActionMixin } from '../siren-action-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '@polymer/paper-input/paper-textarea.js';
import '@polymer/paper-button/paper-button.js';

/* @mixes SirenEntityMixin
   @mixes SirenActionMixin */
class NoteDelete extends SirenActionMixin(SirenEntityMixin(PolymerElement)) {
	static get template() {
		return html`
		<style>
            :host {
                display: block;
            }
        </style>
        <span on-tap="_deleteNote">Delete</span>
`;
	}

	static get is() { return 'd2l-note-delete'; }

	static get properties() {
		return {
			resourceLink: String
		};
	}

	static get observers() {
		return [
			'_changed(entity)'
		];
	}

	_toggleInput() {
		this.showTextArea = !this.showTextArea;
	}

	_deleteNote() {
        var self = this;
        var action = this.entity.getActionByName('delete-note');
        if (action) {
            console.log(action)
            this.performSirenAction(action).then(function() {
			});
        }
	}

	_changed(entity) {
		this.resourceLink = entity.getLinkByRel('self');
	}

	// Leaving this guy in case we need it in the future
	_getActions(entity) {
		if (entity.entities[0] !== undefined) {
			return entity.entities[0].actions;
		} else {
			return [];
		}
	}
}

window.customElements.define(NoteDelete.is, NoteDelete);

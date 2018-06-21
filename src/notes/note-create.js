import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { SirenActionMixin } from '../siren-action-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '@polymer/paper-input/paper-textarea.js';
import '@polymer/paper-button/paper-button.js';

/* @mixes SirenEntityMixin
   @mixes SirenActionMixin */
class NoteCreate extends SirenActionMixin(SirenEntityMixin(PolymerElement)) {
	static get template() {
		return html`
		<style>
            :host {
                display: block;
            }

            .add-note-button {
                font-size: 12px;
                background-color: cornflowerblue;
                color: white;
                height: 100%;
                margin-top: 20px;
            }

            .text-area-button {
                padding: 0px;
                font-size: 12px;
                margin: 0px;
            }

        </style>
        <template is="dom-if" if="[[!showTextArea]]">
            <paper-button class="add-note-button" on-tap="_toggleInput">Take Note</paper-button>
        </template>
        <template is="dom-if" if="[[showTextArea]]">
            <paper-textarea label="Write a note"></paper-textarea>
            <paper-button class="text-area-button" on-tap="_saveNote">Save</paper-button>
            <paper-button class="text-area-button" on-tap="_toggleInput">Cancel</paper-button>
        </template>
`;
	}

	static get is() { return 'd2l-note-create'; }

	static get properties() {
		return {
			resourceLink: String,
			showTextArea: {
				type: Boolean,
				value: false
			}
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

	_saveNote() {
		// Save new note, link with this.resourceLink
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

window.customElements.define(NoteCreate.is, NoteCreate);

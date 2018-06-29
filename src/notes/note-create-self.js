import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { SirenActionMixin } from '../siren-action-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '@polymer/paper-input/paper-textarea.js';
import '@polymer/paper-button/paper-button.js';

/* @mixes SirenEntityMixin
   @mixes SirenActionMixin */
class NoteCreateSelf extends SirenActionMixin(SirenEntityMixin(PolymerElement)) {
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
			<template is="dom-if" if="[[showSaved]]">
				Note saved!
			</template>
			<template is="dom-if" if="[[!showSaved]]">
				<paper-textarea label="Write a note" value="{{noteText}}"></paper-textarea>
				<paper-button class="text-area-button" on-tap="_saveNote">Save</paper-button>
				<paper-button class="text-area-button" on-tap="_toggleInput">Cancel</paper-button>
			</template>			
        </template>
`;
	}

	static get is() { return 'd2l-note-create-self'; }

	static get properties() {
		return {
			showTextArea: {
				type: Boolean,
				value: false
			},
			noteText: {
				type: String,
				value: ''
			},
			showSaved: {
				type: Boolean,
				value: false
			}
		};
	}

	_toggleInput() {
		this.showTextArea = !this.showTextArea;
	}

	_saveNote() {
		var self = this;
		var action = this.entity.getActionByName('add-note');
		if (action) {
			var fields = this.getSirenFields(action);
			fields.has('text') && fields.set('text', self.noteText);

			this.performSirenAction(action, fields).then(function() {
				self.noteText = '';
				self.showSaved = true;
				setTimeout(function() {
					self.showSaved = false;
					self.showTextArea = false;
				}, 2000, self);
			});
		}
	}
}

window.customElements.define(NoteCreateSelf.is, NoteCreateSelf);

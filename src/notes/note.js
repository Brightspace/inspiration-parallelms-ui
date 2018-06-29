import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { LocalizationMixin } from '../localization-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { SirenActionMixin } from '../siren-action-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '../shared-styles.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-icon-button/paper-icon-button.js';

/* @mixes LocalizationMixin
   @mixes SirenEntityMixin
   @mixes SirenActionMixin */
class Note extends LocalizationMixin(SirenActionMixin(SirenEntityMixin(PolymerElement))) {

	static get template() {
		return html`
		<style include="shared-styles">
			@import url('https://fonts.googleapis.com/css?family=Permanent+Marker');
            :host {
				display: block;
				font-family: 'Permanent Marker', cursive;
			}
		</style>
		<div class="noteBox">
			<template is="dom-if" if="[[!deleted]]">
				"[[text]]"
				- [[date]]
				<paper-icon-button on-tap="_deleteNote" icon="delete" style="color: orange;"></paper-icon-button>
			</template>
			<template is="dom-if" if="[[deleted]]">
				Note deleted.
			</template>
		</div>
`;
	}

	static get is() { return 'd2l-note'; }

	static get properties() {
		return {
			text: String,
			date: String,
			deleted: {
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

	_changed(entity) {
		// Checking for class note, because delete returns the collection
		if (!entity  || !entity.hasClass('note') || !entity.properties) return;
		this.text = entity.properties.text;
		this.date = this._formatDate(entity.getSubEntityByClass('create-date').properties.date, this.locale);
	}

	_deleteNote() {
		var self = this;
		var action = this.entity.getActionByName('delete-note');
		if (action) {
			this.performSirenAction(action).then(function() {
				self.deleted = true;
			});
		}
	}

	_getHrefByRel(entity, rel) {
		const link = entity && entity.getLinkByRel && entity.getLinkByRel(rel);
		return link && link.href || '';
	}
}

window.customElements.define(Note.is, Note);

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '../siren-entity.js';
import './notes-count.js';
import './note-create.js';

class NotesShim extends PolymerElement {
	static get template() {
		return html`
		<style>
			:host {
				display: block;
				position: relative;
				z-index: 3;
			}
			.notes {
				position: absolute;
				right: 1em;
				top: -2.25em;
			}
		</style>
		<d2l-siren-entity href="[[href]]" token="[[token]]" entity="{{notes}}"></d2l-siren-entity>
		<span class="notes">
			<template is="dom-if" if="[[hasNotes]]">
				<d2l-notes-count on-tap="_toggleNotes" href="[[href]]" token="[[token]]"></d2l-notes-count>
			</template>
			<template is="dom-if" if="[[!hasNotes]]">
				<d2l-note-create href="[[href]]" subject-href="[[source]]" token="[[token]]"></d2l-note-create>
			</template>
			<template is="dom-if" if="[[showNotes]]">
				<template is="dom-repeat" items="[[notes.entities]]">
					<d2l-note href="[[item.href]]" token="[[token]]"></d2l-note>
				</template>
				<d2l-note-create href="[[href]]" subject-href="[[source]]" token="[[token]]"></d2l-note-create>
			</template>
		</span>
`;
	}

	static get is() { return 'd2l-notes-shim'; }

	static get properties() {
		return {
			notes: Object,
			href: String,
			token: String,
			source: String,
			showNotes: {
				type: Boolean,
				value: false
			},
			hasNotes: {
				type: Boolean,
				computed: '_hasNotes(notes)'
			}
		};
	}

	_hasNotes(entity) {
		return (entity && entity.properties && entity.properties.count && entity.properties.count > 0) || false;
	}

	_toggleNotes() {
		this.showNotes = !this.showNotes;
	}
}

window.customElements.define(NotesShim.is, NotesShim);

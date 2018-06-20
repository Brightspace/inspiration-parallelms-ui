import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {SirenEntityMixin} from './siren-entity-mixin.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
import './notes/note.js';

class MyVirtualNotebook extends SirenEntityMixin(PolymerElement) {

	static get template() {
		return html`
<h1>My Virtual Notebook</h1>
<template is="dom-repeat" items="[[notes]]">
	<d2l-note href="{{item}}" token="{{token}}"></d2l-note>
</template>
`;
	}

	static get properties() {
		return {
			notes: {
				type: Array,
				value: []
			}
		};
	}

	static get observers() {
		return [
			'_changed(entity)'
		];
	}

	static get is() {
		return 'my-virtual-notebook';
	}

	_changed() {
		this._getUrlForNotes(this.href);
	}

	async _getUrlForNotes(href) {
		const response = await fetch(href)
			.then(res => res.json());
		this.notes = response.entities.map(e => e.href);
	}
}

window.customElements.define(MyVirtualNotebook.is, MyVirtualNotebook);

import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {SirenActionMixin} from './siren-action-mixin.js';
import {SirenEntityMixin} from './siren-entity-mixin.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
import './notes/contextual-note.js';
import './notes/note-create-self.js';

class MyVirtualNotebook extends SirenActionMixin(SirenEntityMixin(PolymerElement)) {

	static get template() {
		return html`
<h1>My Virtual Notebook</h1>
<h2>Write Notes to Self:</h2>
	<d2l-note-create-self href="https://notes.api.dev.brightspace.com/" token="[[token]]"></d2l-note-create-self>
<h2>Notes:</h2>
Sort By:
<select id="orderBy" on-change="_updateOrder">
  <option value={{const.DATE_DESC}}>Recent</option>
  <option value={{const.DATE_ASC}}>Oldest</option>
</select>
<template id="tt" is="dom-repeat" items="[[notes]]" as="note" >
	<d2l-contextual-note id="note{{index}}" href="{{note}}" token="{{token}}"></d2l-contextual-note>
</template>
`;
	}

	static get properties() {
		return {
			href: {
				type: String
			},
			notes: {
				type: Array,
				value: []
			},
			const: {
				type: Object,
				value: {
					DATE_DESC: 'date-desc',
					DATE_ASC: 'date-asc'
				}
			}
		};
	}

	static get observers() {
		return [
			'_changed(entity, token)'
		];
	}

	static get is() {
		return 'my-virtual-notebook';
	}

	_changed(entity, token) {
		if (token && entity && entity.entities) {
			this.notes = entity.entities.map(subEntity => subEntity.href);
		}
	}

	_updateOrder() {
		const sortOrder = this.$.orderBy.value;
		const fields = new URLSearchParams();
		fields.set('sortBy', sortOrder);
		const searchAction = this.entity.getActionByName('search');
		if (searchAction) {
			this.performSirenAction(searchAction, fields)
				.then((href) => this.href = href);
		}
	}

}

window.customElements.define(MyVirtualNotebook.is, MyVirtualNotebook);

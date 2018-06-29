import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {SirenActionMixin} from './siren-action-mixin.js';
import {SirenEntityMixin} from './siren-entity-mixin.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
import '@polymer/paper-button/paper-button.js';
import './notes/contextual-note.js';
import './notes/note-create-self.js';

class MyVirtualNotebook extends SirenActionMixin(SirenEntityMixin(PolymerElement)) {

	static get template() {
		return html`
<style>
paper-button {
	font-size: 12px;
	background-color: cornflowerblue;
	color: white;
	height: 100%;
	margin-top: 20px;
}
</style>
<h1>My Virtual Notebook</h1>
<h2>Write Notes to Self:</h2>
	<d2l-note-create-self href="https://notes.api.dev.brightspace.com/" token="[[token]]"></d2l-note-create-self>
<h2>Notes:</h2>
Sort By:
<select id="orderBy" on-change="_executeAction">
  <option value={{const.DATE_DESC}}>Recent</option>
  <option value={{const.DATE_ASC}}>Oldest</option>
</select>
<paper-input id="search" label="Search Notes" type="search"></paper-input>
<paper-button on-tap="_executeAction">Search</paper-button>
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

	_executeAction() {
		const sortOrder = this.$.orderBy.value;
		const search = this.$.search.value;
		const fields = new URLSearchParams();
		fields.set('sortBy', sortOrder);
		fields.set('search', search);
		const searchAction = this.entity.getActionByName('search');
		if (searchAction) {
			this.performSirenAction(searchAction, fields)
				.then((href) => this.href = href);
		}
	}

}

window.customElements.define(MyVirtualNotebook.is, MyVirtualNotebook);

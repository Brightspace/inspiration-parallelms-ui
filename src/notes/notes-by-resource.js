import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { SirenActionMixin } from '../siren-action-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import './note.js';
import './notes-count.js';

/* @mixes SirenEntityMixin
   @mixes SirenActionMixin */
class NotesByResource extends SirenActionMixin(SirenEntityMixin(PolymerElement)) {
	static get template() {
		return html`
		<style>
            :host {
                display: block;
            }
		</style>
		<d2l-notes-count on-tap="_showNotes" href="[[href]]" token="[[token]]"></d2l-notes-count>
		<template is="dom-if" if="[[showNotes]]">
			<ul>
			<template is="dom-repeat" items="[[notes]]">
				<li>
					<d2l-note href="[[item.href]]" token="[[token]]"></d2l-note>
				</li>
			</template>
			</ul>
		</template>
`;
	}

	static get is() { return 'd2l-notes-by-resource'; }

	static get properties() {
		return {
			resourceLink: String,
			notes: Object,
			showNotes: {
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
		if (!entity.properties) return;
		this.resourceLink = entity.getLinkByRel('self');
		this.notes = entity.getSubEntitiesByRel('https://api.brightspace.com/rels/note');
	}

	_showNotes() {
		this.showNotes = true;
	}
}

window.customElements.define(NotesByResource.is, NotesByResource);

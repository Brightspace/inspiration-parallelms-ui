import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '../shared-styles.js';

/* @mixes SirenEntityMixin */
class NotesCount extends SirenEntityMixin(PolymerElement) {
	static get template() {
		return html`
		<style include="shared-styles">
			:host {
				display: block;
				font-family: 'Permanent Marker', cursive;
			}
		</style>
    	<div class="noteBox">
			[[notesCount]]
		</div>
`;
	}

	static get is() { return 'd2l-notes-count'; }

	static get properties() {
		return {
			hasNotes: {
				type: Boolean,
				computed: '_hasNotes(notesCount)'
			},
			notesCount: {
				type: Number,
				value: 0
			}
		};
	}

	static get observers() {
		return [
			'_changed(entity)'
		];
	}
	_hasNotes(notesCount) {
		return notesCount > 0;
	}
	_changed(entity) {
		if (!entity.properties) return;
		this.notesCount = entity.properties.count;
	}
}

window.customElements.define(NotesCount.is, NotesCount);

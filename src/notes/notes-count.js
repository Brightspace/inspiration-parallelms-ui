import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { SirenActionMixin } from '../siren-action-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

/* @mixes SirenEntityMixin */
class NotesCount extends SirenActionMixin(SirenEntityMixin(PolymerElement)) {
	static get template() {
		return html`
		<style>
            :host {
                display: block;
            }
		</style>
        Count: [[notesCount]]
`;
	}

	static get is() { return 'd2l-notes-count'; }

	static get properties() {
		return {
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

	_changed(entity) {
		if (!entity.properties) return;
		this.notesCount = entity.properties.count;
	}
}

window.customElements.define(NotesCount.is, NotesCount);

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

/* @mixes SirenEntityMixin */
class NotesCount extends PolymerElement {
	static get template() {
		return html`
		<style>
            :host {
                display: block;
				position: absolute;
				right: 0;
				top: 0;
            }
		</style>
		<d2l-notes-count href="[[href]]" token="[[token]]"></d2l-notes-count>
`;
	}

	static get is() { return 'd2l-notes-shim'; }

	static get properties() {
		return {
			href: String,
			token: String
		};
	}
}

window.customElements.define(NotesCount.is, NotesCount);

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { LocalizationMixin } from '../localization-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { SirenActionMixin } from '../siren-action-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

/* @mixes LocalizationMixin
   @mixes SirenEntityMixin
   @mixes SirenActionMixin */
class Note extends LocalizationMixin(SirenActionMixin(SirenEntityMixin(PolymerElement))) {

	static get template() {
		return html`
		<style>
            :host {
                display: block;
            }
        </style>
        <template is="dom-if" if="[[isVisible]]">
        "[[text]]"
        - [[date]]
        </template>
`;
	}

	static get is() { return 'd2l-note'; }

	static get properties() {
		return {
			text: String,
			date: String,
			search: {
				type: String,
				observer: '_setVisibility'
			},
			isVisible: {
				type: Boolean,
				value: true
			}
		};
	}

	static get observers() {
		return [
			'_changed(entity)'
		];
	}

	_setVisibility(query) {
		if (!query) {
			this.isVisible = true;
		}
		else if (!this.text) {
			this.isVisible = false;
		}
		else {
			const queryIgnoreCase = query.toLowerCase();
			const textIgnoreCase = this.text.toLowerCase();

			this.isVisible = textIgnoreCase.includes(queryIgnoreCase);
		}
	}

	_changed(entity) {
		if (!entity.properties) return;
		this.text = entity.properties.text;
		this.date = this._formatDate(entity.getSubEntityByClass('create-date').properties.date, this.locale);
		this._setVisibility(this.search);
	}

	_getHrefByRel(entity, rel) {
		const link = entity && entity.getLinkByRel && entity.getLinkByRel(rel);
		return link && link.href || '';
	}
}

window.customElements.define(Note.is, Note);

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { PrefetchMixin } from '../prefetch-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import './content-activity-list.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes PrefetchMixin
   @mixes SirenEntityMixin */
class ContentModuleCard extends PrefetchMixin(SirenEntityMixin(PolymerElement)) {
	static get template() {
		return html`
        <style>
            :host {
                display: block;
            }
        </style>

        <d2l-content-activity-list href="[[_getSelfLink(entity)]]" token="{{token}}"></d2l-content-activity-list>
`;
	}

	static get interesting() {
		return [
			{
				getLinks: entity => entity.getLinkByRel('self'),
				elements: [window.customElements.get('d2l-content-activity-list')]
			}
		];
	}

	static get is() { return 'd2l-content-module-card'; }

	static get properties() {
		return {
			module: String,
			topics: {
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

	_changed(entity) {
		this.module = entity;
		this.topics = entity.getSubEntitiesByRel('item');
	}

	_getSelfLink(entity) {
		return entity.getLinkByRel('self').href;
	}
}

window.customElements.define(ContentModuleCard.is, ContentModuleCard);

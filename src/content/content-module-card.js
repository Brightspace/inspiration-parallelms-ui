import { PrefetchMixin } from '../prefetch-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import './content-activity-list.js';
import { LitElement, html } from '@polymer/lit-element';
/* @mixes PrefetchMixin
   @mixes SirenEntityMixin */
class ContentModuleCard extends PrefetchMixin(SirenEntityMixin(LitElement)) {
	_render({ entity, token }) {
		let selfLink;
		if (entity) {
			selfLink = entity.getLinkByRel('self').href;
		}
		return html`
        <style>
            :host {
                display: block;
            }
        </style>

        <d2l-content-activity-list href="${selfLink}" token="${token}"></d2l-content-activity-list>
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
}

window.customElements.define(ContentModuleCard.is, ContentModuleCard);

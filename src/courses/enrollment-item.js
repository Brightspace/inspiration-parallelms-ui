import '@polymer/paper-card/paper-card.js';
import { PrefetchMixin } from '../prefetch-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import '../my-course-page-prefetcher.js';
import './course-item.js';
import { LitElement, html } from '@polymer/lit-element';
/* @mixes PrefetchMixin
   @mixes SirenEntityMixin */
class EnrollmentItem extends PrefetchMixin(SirenEntityMixin(LitElement)) {
	_render({ entity, token }) {
		return html`
        <style>
            :host {
                display: block;
            }
        </style>
        <d2l-course-item style="margin:10px;" href="${this._getOrganizationLink(entity)}" token="${token}"></d2l-course-item>
`;
	}

	static get interesting() {
		return [
			{
				getLinks: entity => entity.getLinkByRel('https://api.brightspace.com/rels/organization'),
				elements: [window.customElements.get('d2l-course-item')]
			}
		];
	}

	static get is() { return 'd2l-enrollment-item'; }

	_getOrganizationLink(entity) {
		return entity && entity.getLinkByRel('https://api.brightspace.com/rels/organization').href;
	}
}

window.customElements.define(EnrollmentItem.is, EnrollmentItem);

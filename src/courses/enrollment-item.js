import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import { PrefetchMixin } from '../prefetch-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import '../my-course-page-prefetcher.js';
import './course-item.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes PrefetchMixin
   @mixes SirenEntityMixin */
class EnrollmentItem extends PrefetchMixin(SirenEntityMixin(PolymerElement)) {
	static get template() {
		return html`
        <style>
            :host {
                display: block;
            }
        </style>
        <d2l-course-item style="margin:10px;" href="[[_getOrganizationLink(entity)]]" token="{{token}}"></d2l-course-item>
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
		return entity.getLinkByRel('https://api.brightspace.com/rels/organization').href;
	}
}

window.customElements.define(EnrollmentItem.is, EnrollmentItem);

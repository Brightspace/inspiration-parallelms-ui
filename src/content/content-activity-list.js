import { PrefetchMixin } from '../prefetch-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import '../course-name.js';
import './content-activity-item.js';
import { LitElement, html } from '@polymer/lit-element';
/* @mixes PrefetchMixin
   @mixes SirenEntityMixin */
class ContentActivityList extends PrefetchMixin(SirenEntityMixin(LitElement)) {
	_render({ entity, token }) {
		const items = (entity && entity.entities || []).filter(item => item.hasLinkByRel('self'));
		return html`
        <style>
            :host {
                display: block;
            }

            .info-box {
                display: flex;
            }

            .info-box > * {
                margin-right: 20px;
            }
        </style>
        <paper-card style="width: calc(100% - 20px); margin: 10px; padding: 0px;">
            ${items.map(item => html`
				<d2l-content-activity-item href="${this._getSelfLink(item)}" token="${token}"></d2l-content-activity-item>`)}
        </paper-card>
`;
	}

	static get interesting() {
		return [
			{
				getLinks: entity => entity.entities && entity.entities.map(entity => entity.getLinkByRel('self')),
				elements: [window.customElements.get('d2l-content-activity-item')]
			}
		];
	}

	static get is() { return 'd2l-content-activity-list'; }

	_getSelfLink(entity) {
		return entity && entity.getLinkByRel('self').href;
	}
}

window.customElements.define(ContentActivityList.is, ContentActivityList);

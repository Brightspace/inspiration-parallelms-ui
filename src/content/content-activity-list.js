import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { PrefetchMixin } from '../prefetch-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import '../course-name.js';
import './content-activity-item.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes PrefetchMixin
   @mixes SirenEntityMixin */
class ContentActivityList extends PrefetchMixin(SirenEntityMixin(PolymerElement)) {
	static get template() {
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
            <template is="dom-repeat" items="[[items]]">
                <d2l-content-activity-item href="[[_getSelfLink(item)]]" token="{{token}}"></d2l-content-activity-item>
            </template>
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

	static get properties() {
		return {
			title: String,
			items: {
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
		this.title = entity.properties.title;
		this.items = entity.entities;
	}

	_getSelfLink(entity) {
		return entity.getLinkByRel('self').href;
	}
}

window.customElements.define(ContentActivityList.is, ContentActivityList);

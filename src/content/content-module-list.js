import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-tabs/paper-tab.js';
import '@polymer/iron-pages/iron-pages.js';
import { PrefetchMixin } from '../prefetch-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import './content-module-card.js';
import '../shared-styles.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes PrefetchMixin
   @mixes SirenEntityMixin */
class ContentModuleList extends PrefetchMixin(SirenEntityMixin(PolymerElement)) {
	static get template() {
		return html`
        <style include="shared-styles">
            :host {
                display: block;
                font-family: 'Source Sans Pro', sans-serif;
            }
            paper-tabs{
                --paper-tabs-selection-bar-color: white;
            }
        </style>
        <paper-card class="medium-card-size">
            <div class="card-header">
                <h2 class="card-header-text">Content</h2>
                <paper-tabs selected="{{selected}}" scrollable="" --paper-tabs-selection-bar-color="white">
                    <template is="dom-repeat" items="[[items]]">
                        <paper-tab>[[item.properties.title]]</paper-tab>
                    </template>
                </paper-tabs>
            </div>
            <iron-pages selected="{{selected}}">
                <template is="dom-repeat" items="[[items]]">
                    <d2l-content-module-card href="[[_getHref(item)]]" token="{{token}}"></d2l-content-module-card>
                </template>
            </iron-pages>
        </paper-card>
`;
	}

	static get interesting() {
		return [
			{
				getLinks: entity => entity.entities && entity.entities.map(entity => entity.getLinkByRel('self')),
				elements: [window.customElements.get('d2l-content-module-card')]
			}
		];
	}

	static get is() { return 'd2l-content-module-list'; }

	static get properties() {
		return {
			items: {
				type: Array,
				value: []
			},
			selected: {
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
		this.items = entity.entities;
	}

	_getHref(item) {
		return item.getLinkByRel('self').href;
	}
}

window.customElements.define(ContentModuleList.is, ContentModuleList);

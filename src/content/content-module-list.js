import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-tabs/paper-tab.js';
import '@polymer/iron-pages/iron-pages.js';
import { cssFromModules } from '@polymer/polymer/lib/utils/style-gather.js';
import { PrefetchMixin } from '../prefetch-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import './content-module-card.js';
import '../shared-styles.js';
import { LitElement, html } from '@polymer/lit-element';
/* @mixes PrefetchMixin
   @mixes SirenEntityMixin */
class ContentModuleList extends PrefetchMixin(SirenEntityMixin(LitElement)) {
	_render({ selected, entity, token }) {
		const items = entity && entity.entities || [];
		return html`
        <style>
			${ cssFromModules('shared-styles') }
            :host {
                display: block;
                font-family: 'Source Sans Pro', sans-serif;
            }
            paper-tabs {
                --paper-tabs-selection-bar-color: white;
            }
        </style>
        <paper-card class="medium-card-size">
            <div class="card-header">
                <h2 class="card-header-text">Content</h2>
                <paper-tabs selected=${selected} on-iron-activate=${e => this.selected = e.detail.selected} scrollable="" --paper-tabs-selection-bar-color="white">
                    ${items.map(item => html`
						<paper-tab>${item.properties.title}</paper-tab>`)}
                </paper-tabs>
            </div>
            <iron-pages selected="${selected}">
				${items.map(item => html`
					<d2l-content-module-card href="${this._getHref(item)}" token="${token}"></d2l-content-module-card>`)}
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
			selected: {
				type: Number,
				value: 0
			}
		};
	}

	_getHref(item) {
		return item.getLinkByRel('self').href;
	}
}

window.customElements.define(ContentModuleList.is, ContentModuleList);

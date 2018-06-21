import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-tabs/paper-tab.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-scroll-threshold/iron-scroll-threshold.js';
import { cssFromModules } from '@polymer/polymer/lib/utils/style-gather.js';
import { microTask } from '@polymer/polymer/lib/utils/async.js';
import { PrefetchMixin } from '../prefetch-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import './discussions-forum-item.js';
import '../shared-styles.js';
import { LitElement, html } from '@polymer/lit-element';
/* @mixes PrefetchMixin
   @mixes SirenEntityMixin */
class DiscussionsForumList extends PrefetchMixin(SirenEntityMixin(LitElement)) {
	_render({ entity, token, selected }) {
		const forums = entity && entity.entities || [];
		const hasForums = forums.length > 0;
		return html`
        <style>
			${ cssFromModules('shared-styles') }
            :host {
                display: block;
                font-family: 'Source Sans Pro', sans-serif;
            }
            paper-tabs{
                --paper-tabs-selection-bar-color: white;
            }
            iron-scroll-threshold {
                display: none;
            }
        </style>
        <paper-card id="card" class="medium-card-size">
            <div class="card-header">
                <h2 class="card-header-text">Discussions</h2>
				${hasForums ? html`
					<paper-tabs selected=${selected} on-iron-activate=${e => this.selected = e.detail.selected} scrollable="" --paper-tabs-selection-bar-color="white">
						${forums.map(item => html`
							<paper-tab>${item.properties.name}</paper-tab>`)}
					</paper-tabs>` : null}
            </div>
			${hasForums ? html`
				<iron-pages selected="${selected}" on-iron-select=${e => microTask.run(() => this.forumItem = e.detail.item)}>
					${forums.map(item => html`
						<d2l-discussions-forum-item href="${this.getHref(item)}" token="${token}"></d2l-discussions-forum-item>`)}
				</iron-pages>` : html`<span>There are no discussions</span>`}
        </paper-card>
        <slot></slot>
        <iron-scroll-threshold scroll-target="card" on-lower-threshold="${e => this.loadMoreData(e)}"></iron-scroll-threshold>
`;
	}

	static get interesting() {
		return [
			{
				getLinks: entity => entity.entities && entity.entities.map(item => item.getLinkByRel('self')),
				elements: [window.customElements.get('d2l-discussions-forum-item')]
			}
		];
	}

	static get is() { return 'd2l-discussions-forum-list'; }

	static get properties() {
		return {
			forumItem: Object,
			selected: {
				type: Number,
				value: 0
			},
			token: String,
			href: String
		};
	}

	getHref(item) {
		return item.getLinkByRel('self') && item.getLinkByRel('self').href;
	}

	loadMoreData(e) {
		this.forumItem && this.forumItem.loadMoreData(e);
		e.target.clearTriggers();
	}
}

window.customElements.define(DiscussionsForumList.is, DiscussionsForumList);

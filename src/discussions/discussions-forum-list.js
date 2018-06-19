import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-tabs/paper-tab.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-scroll-threshold/iron-scroll-threshold.js';
import { PrefetchMixin } from '../prefetch-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import './discussions-forum-item.js';
import '../shared-styles.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes PrefetchMixin
   @mixes SirenEntityMixin */
class DiscussionsForumList extends PrefetchMixin(SirenEntityMixin(PolymerElement)) {
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
            iron-scroll-threshold {
                display: none;
            }
        </style>
        <paper-card id="card" class="medium-card-size">
            <div class="card-header">
                <h2 class="card-header-text">Discussions</h2>
                <template is="dom-if" if="{{hasForums}}">
                    <paper-tabs selected="{{selected}}" scrollable="" --paper-tabs-selection-bar-color="white">
                        <template is="dom-repeat" items="[[forums]]">
                            <paper-tab>[[item.properties.name]]</paper-tab>
                        </template>
                    </paper-tabs>
                </template>
            </div>
            <template is="dom-if" if="{{hasForums}}">
                <iron-pages selected="{{selected}}" selected-item="{{forumItem}}">
                    <template is="dom-repeat" items="[[forums]]">
                        <d2l-discussions-forum-item href="[[getHref(item)]]" token="{{token}}"></d2l-discussions-forum-item>
                    </template>
                </iron-pages>
            </template>
            <template is="dom-if" if="{{!hasForums}}">
                <span>There are no discussions</span>
            </template>
        </paper-card>
        <slot></slot>
        <iron-scroll-threshold scroll-target="card" on-lower-threshold="loadMoreData"></iron-scroll-threshold>
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
			forums: {
				type: Array,
				value: []
			},
			forumItem: Object,
			selected: {
				type: Number,
				value: 0
			},
			token: String,
			href: String,
			hasForums: {
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

	_changed(entity) {
		this.forums = entity.entities;
		this.hasForums = this.forums.length > 0;
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

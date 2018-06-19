import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { PrefetchMixin } from '../prefetch-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import './discussions-topic-post-item.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes PrefetchMixin
   @mixes SirenEntityMixin */
class DiscussionsTopicPostList extends PrefetchMixin(SirenEntityMixin(PolymerElement)) {
	static get template() {
		return html`
        <style>
            :host {
                display: block;
            }
        </style>
        <div role="listbox">
            <template is="dom-repeat" items="[[posts]]">
                <d2l-discussions-topic-post-item href="[[getHref(item)]]" token="{{token}}"></d2l-discussions-topic-post-item>
            </template>
        </div>
        <slot></slot>
`;
	}

	static get interesting() {
		return [
			{
				getLinks: entity => entity.entities && entity.entities.map(item => item.getLinkByRel('self')),
				elements: [window.customElements.get('d2l-discussions-topic-post-item')]
			}
		];
	}

	static get is() { return 'd2l-discussions-topic-post-list'; }

	static get properties() {
		return {
			posts: {
				type: Array,
				value: []
			},
			token: String,
			href: String
		};
	}

	static get observers() {
		return [
			'_changed(entity)'
		];
	}

	_changed(entity) {
		this.posts = entity.entities;
	}

	getHref(item) {
		return item.getLinkByRel('self') && item.getLinkByRel('self').href;
	}
}

window.customElements.define(DiscussionsTopicPostList.is, DiscussionsTopicPostList);

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-item/paper-item-body.js';
import './discussions-topic-post-reply-item.js';
import { PrefetchMixin } from '../prefetch-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import '../shared-styles.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes PrefetchMixin
   @mixes SirenEntityMixin */
class DiscussionsTopicPostReplyList extends PrefetchMixin(SirenEntityMixin(PolymerElement)) {
	static get template() {
		return html`
        <style include="shared-styles">
            :host {
                display: block;
            }
        </style>
        <div class="basic-left-padding">
            <template is="dom-repeat" items="[[replies]]">
                <d2l-discussions-topic-post-reply-item href="{{_getHref(item)}}" token="{{token}}"></d2l-discussions-topic-post-reply-item>
            </template>
        </div>
        <slot></slot>
`;
	}

	static get interesting() {
		return [
			{
				getLinks: entity => entity.entities && entity.entities.map(item => item.getLinkByRel('self')),
				elements: [window.customElements.get('d2l-discussions-topic-post-reply-item')]
			}
		];
	}

	static get is() { return 'd2l-discussions-topic-post-reply-list'; }

	static get properties() {
		return {
			post: {
				type: Object,
				value: {}
			},
			replies: {
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
		this.post = entity;
		this.replies = this.post.entities;
	}

	_getHref(item) {
		return item.getLinkByRel('self') && item.getLinkByRel('self').href;
	}
}

window.customElements.define(DiscussionsTopicPostReplyList.is, DiscussionsTopicPostReplyList);

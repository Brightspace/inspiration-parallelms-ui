import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-item/paper-item-body.js';
import './discussions-topic-post-reply-item.js';
import { cssFromModules } from '@polymer/polymer/lib/utils/style-gather.js';
import { PrefetchMixin } from '../prefetch-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import '../shared-styles.js';
import { LitElement, html } from '@polymer/lit-element';
/* @mixes PrefetchMixin
   @mixes SirenEntityMixin */
class DiscussionsTopicPostReplyList extends PrefetchMixin(SirenEntityMixin(LitElement)) {
	_render({ entity, token }) {
		const replies = entity && entity.entities || [];
		return html`
        <style>
			${cssFromModules('shared-styles')}
            :host {
                display: block;
            }
        </style>
        <div class="basic-left-padding">
			${replies.map(item => html`
				<d2l-discussions-topic-post-reply-item href="${this._getHref(item)}" token="${token}"></d2l-discussions-topic-post-reply-item>`)}
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

	_getHref(item) {
		return item && item.hasLinkByRel('self') && item.getLinkByRel('self').href;
	}
}

window.customElements.define(DiscussionsTopicPostReplyList.is, DiscussionsTopicPostReplyList);

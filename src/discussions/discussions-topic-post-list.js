import { PrefetchMixin } from '../prefetch-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import './discussions-topic-post-item.js';
import { LitElement, html } from '@polymer/lit-element';
/* @mixes PrefetchMixin
   @mixes SirenEntityMixin */
class DiscussionsTopicPostList extends PrefetchMixin(SirenEntityMixin(LitElement)) {
	_render({ entity, token }) {
		const posts = entity && entity.entities || [];
		return html`
        <style>
            :host {
                display: block;
            }
        </style>
        <div role="listbox">
			${posts.map(item => html`<d2l-discussions-topic-post-item href="${this.getHref(item)}" token="${token}"></d2l-discussions-topic-post-item>`)}
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
			token: String,
			href: String
		};
	}

	getHref(item) {
		return item.getLinkByRel('self') && item.getLinkByRel('self').href;
	}
}

window.customElements.define(DiscussionsTopicPostList.is, DiscussionsTopicPostList);

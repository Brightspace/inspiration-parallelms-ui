import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { PrefetchMixin } from '../prefetch-mixin.js';
import { PaginateMixin } from '../paginate-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import './discussions-topic.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes PrefetchMixin
   @mixes PaginateMixin
   @mixes SirenEntityMixin */
class DiscussionsForumItem extends PrefetchMixin(PaginateMixin('topics', SirenEntityMixin(PolymerElement))) {
	static get template() {
		return html`
        <style>
            :host {
                display: block;
            }
        </style>
        <span>[[forum.properties.description.Text]]<span>
        <template is="dom-repeat" items="[[paginated]]">
            <d2l-discussions-topic href="[[getHref(item)]]" token="{{token}}"></d2l-discussions-topic>
        </template>
        <slot></slot>
    </span></span>
`;
	}

	static get interesting() {
		return [
			{
				getLinks: entity => entity.entities && entity.entities.map(item => item.getLinkByRel('self')),
				elements: [window.customElements.get('d2l-discussions-topic')]
			}
		];
	}

	static get is() { return 'd2l-discussions-forum-item'; }

	static get properties() {
		return {
			forum: {
				type: Object,
				value: {}
			},
			topics: {
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
		this.forum = entity;
		this.topics = entity.getSubEntitiesByClass('topic');
	}

	getHref(item) {
		return item.getLinkByRel('self') && item.getLinkByRel('self').href;
	}
}

window.customElements.define(DiscussionsForumItem.is, DiscussionsForumItem);

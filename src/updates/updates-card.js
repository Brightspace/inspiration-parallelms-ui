import '@polymer/iron-pages/iron-pages.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-tabs/paper-tab.js';
import '@polymer/paper-tabs/paper-tabs.js';
import { PrefetchMixin } from '../prefetch-mixin.js';
import '../shared-styles.js';
import '../siren-entity.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import './update-item.js';
import './update-item-grades.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes PrefetchMixin
   @mixes SirenEntityMixin */
class UpdatesCard extends PrefetchMixin(SirenEntityMixin(PolymerElement)) {
	static get template() {
		return html`
        <style include="shared-styles">
            :host {
                display: block;
            }
        </style>

        <d2l-siren-entity href="[[updatesFeedLink.href]]" token="[[token]]" entity="{{updatesFeedEntity}}"></d2l-siren-entity>

        <paper-card class="medium-card-size">
            <div class="card-header">
                <h2 class="card-header-text">New Updates</h2>
                <paper-tabs selected="{{selected}}" scrollable="" --paper-tabs-selection-bar-color:="" white="">
                    <paper-tab>News</paper-tab>
                    <paper-tab>Grades</paper-tab>
                </paper-tabs>
            </div>
            <iron-pages selected="{{selected}}">
                <div>
                    <template is="dom-if" if="{{hasUpdates}}">
                        <template is="dom-repeat" items="[[newsUpdates]]" strip-whitespace="">
                            <d2l-update-item href="[[_getSelfLink(item)]]" token="{{token}}"></d2l-update-item>
                        </template>
                    </template>
                    <template is="dom-if" if="{{!hasUpdates}}">
                        <span>There are no updates</span>
                    </template>
                </div>
                <div>
                    <template is="dom-if" if="{{hasGrades}}">
                        <template is="dom-repeat" items="[[gradeUpdates]]" strip-whitespace="">
                            <d2l-update-item-grades href="[[_getSelfLink(item)]]" token="{{token}}"></d2l-update-item-grades>
                        </template>
                    </template>
                    <template is="dom-if" if="{{!hasGrades}}">
                        <span>There are no grades</span>
                    </template>
                </div>
            </iron-pages>
        </paper-card>
`;
	}

	static get interesting() {
		return [
			{
				getLinks: entity => entity.hasClass('root') && entity.getLinkByRel('feed'),
				elements: [this]
			}, {
				getLinks: entity => entity.hasClass('feed') && entity.getSubEntitiesByClass('news').map(entity => entity.getLinkByRel('self')),
				elements: [window.customElements.get('d2l-update-item')]
			}, {
				getLinks: entity => entity.hasClass('feed') && entity.getSubEntitiesByClass('grade').map(entity => entity.getLinkByRel('self')),
				elements: [window.customElements.get('d2l-update-item-grades')]
			}
		];
	}

	static get is() { return 'd2l-updates-card'; }

	static get properties() {
		return {
			organizationFilter: String,
			selected: {
				type: Number,
				value: 0
			},
			newsUpdates: {
				type: Array,
				value: []
			},
			gradeUpdates: {
				type: Array,
				value: []
			},
			hasUpdates: {
				type: Boolean,
				value: true
			},
			hasGrades: {
				type: Boolean,
				value: true
			},
			updatesFeedLink: {
				type: Object,
				computed: '_getLinkByRel(entity, "feed")'
			},
			updatesFeedEntity: Object
		};
	}

	static get observers() {
		return [
			'_changed(updatesFeedEntity, organizationFilter)'
		];
	}

	_changed(updatesFeedEntity, organizationFilter) {
		if (!updatesFeedEntity) {
			return;
		}

		var newsEntities = updatesFeedEntity.getSubEntitiesByClass('news') || [];
		var gradeEntities = updatesFeedEntity.getSubEntitiesByClass('grade') || [];

		if (organizationFilter) {
			newsEntities = newsEntities.filter(function(item) {
				return item.links.some(function(link) {
					return link.href === organizationFilter;
				});
			});
			gradeEntities = gradeEntities.filter(function(item) {
				return item.links.some(function(link) {
					return link.href === organizationFilter;
				});
			});
		}

		this.newsUpdates = newsEntities;
		this.gradeUpdates = gradeEntities;
		this.hasUpdates = this.newsUpdates && this.newsUpdates.length > 0;
		this.hasGrades = this.gradeUpdates && this.gradeUpdates.length > 0;
	}

	_getSelfLink(entity) {
		return entity.getLinkByRel('self').href;
	}
}

window.customElements.define(UpdatesCard.is, UpdatesCard);

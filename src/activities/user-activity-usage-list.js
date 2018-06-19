import '@polymer/paper-card/paper-card.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import { PrefetchMixin } from '../prefetch-mixin.js';
import '../shared-styles.js';
import '../siren-entity.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import './user-activity-usage.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes PrefetchMixin
   @mixes SirenEntityMixin */
class UserActivityUsageList extends PrefetchMixin(SirenEntityMixin(PolymerElement)) {
	static get template() {
		return html`
        <style include="shared-styles">
            :host {
                display: block;
            }
        </style>

        <d2l-siren-entity href="[[customDateRangeHref]]" token="[[token]]" entity="{{activitiesUsagesEntity}}"></d2l-siren-entity>

        <paper-card class="medium-card-size">
            <div class="card-header">
                <h2 class="card-header-text">Upcoming Work</h2>
            </div>
            <template is="dom-if" if="{{hasActivites}}">
                <template is="dom-repeat" items="{{activitiesUsagesEntity.entities}}">
                    <d2l-user-activity-usage href="[[_getSelfLink(item)]]" token="{{token}}"></d2l-user-activity-usage>
                </template>
            </template>
            <template is="dom-if" if="{{!hasActivites}}">
                <span>There is no upcoming working</span>
            </template>
        </paper-card>
`;
	}

	static get interesting() {
		return [
			{
				getLinks: entity => entity.entities && entity.entities.map(item => item.getLinkByRel('self')),
				elements: [window.customElements.get('d2l-user-activity-usage')]
			}
		];
	}

	static get is() { return 'd2l-user-activity-usage-list'; }

	static get properties() {
		return {
			hasActivites: {
				type: Boolean,
				value: true
			},
			customDateRangeHref: {
				type: String,
				computed: '_getMonthDateRangeHref(entity)'
			}
		};
	}

	_getSelfLink(entity) {
		return entity.getLinkByRel('self').href;
	}

	static get observers() {
		return [
			'_changed(entity)'
		];
	}

	_changed(activitiesUsagesEntity) {
		if (activitiesUsagesEntity.entities && activitiesUsagesEntity.entities.length > 0) {
			this.hasActivites = true;
		} else {
			this.hasActivites = false;
		}
	}

	_getMonthDateRangeHref(entity) {
		var action = entity.getActionByName('select-custom-date-range');
		if (!action) {
			return entity.getLinkByRel('self').href;
		}
		var now = new Date();
		var firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
		var lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

		var href = action.href + '?start=' + encodeURIComponent(firstDay.toISOString()) + '&end=' + encodeURIComponent(lastDay.toISOString());
		return href;
	}
}

window.customElements.define(UserActivityUsageList.is, UserActivityUsageList);

import '@polymer/paper-item/paper-item.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import { GlobalSearch } from './global-search.js';
import { PrefetchMixin } from './prefetch-mixin.js';
import './search-result-item.js';
import './shared-styles.js';
import './siren-entity.js';
import { SirenEntityMixin } from './siren-entity-mixin.js';
import './calendar/calendar.js';
import './my-view1.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes PrefetchMixin
   @mixes SirenEntityMixin */
class AppMainPage extends PrefetchMixin(SirenEntityMixin(PolymerElement)) {
	static get template() {
		return html`
        <style include="shared-styles">
            :host {
                display: block;
            }

            .layout {
                display: flex;
                flex-wrap: wrap;
                width: calc(100%);
                align-items: stretch;
            }

            .calendar {
                width: 100%;
                margin: 20px 20px 0px 10px;
            }
            .row {
                width: 100%
            }

        </style>
        <d2l-siren-entity href="{{whoami.href}}" token="{{token}}" entity="{{userEntity}}"></d2l-siren-entity>
        <div class="layout">
            <paper-card class="calendar">
                <d2l-calendar data="{{events}}"></d2l-calendar>
			</paper-card>
        </div>
`;
	}

	static get interesting() {
		return [
			{
				getLinks: entity => entity.getLinkByRel('self'),
				elements: [window.customElements.get('my-view1')] // we link to view1
			}
		];
	}

	static get is() { return 'my-app-main-page'; }

	static get properties() {
		return {
			token: {
				type: String
			},
			entity: Object,
			whoami: {
				type: Object,
				computed: '_getLinkByRel(entity, "https://api.brightspace.com/rels/whoami")',
				notify: true
			},
			myEnrollments: {
				type: Object,
				computed: '_getLinkByRel(userEntity, "https://api.brightspace.com/rels/my-enrollments")'
			},
			userEntity: Object,
			route: Object,
			events: {
				type: Array,
				value: []
			},
			values: String,
			count: String
		};
	}

	connectedCallback() {
		if (super.connectedCallback) {
			super.connectedCallback();
		}
		this.__interval = setInterval(this._getThisWeek.bind(this), 2000);
	}

	disconnectedCallback() {
		if (super.disconnectedCallback) {
			super.disconnectedCallback();
		}
		clearInterval(this.__interval);
	}

	_getLinkByRel(entity, rel) {
		return entity && entity.getLinkByRel(rel);
	}
	_getThisWeek() {
		var start = new Date();
		start.setDate(start.getDate() - 15);
		var end = new Date();
		end.setDate(end.getDate() + 15);
		this.events = GlobalSearch.dates(start, end);
	}
	_goToPage() {
		this.set('route.path', 'view1');
	}
}

window.customElements.define(AppMainPage.is, AppMainPage);

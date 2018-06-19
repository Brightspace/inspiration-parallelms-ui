import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import './activities/user-activity-usage-list.js';
import './content/content-module-list.js';
import './course-name.js';
import './courses/courses-card.js';
import './user/user-card.js';
import './discussions/discussions-forum-list.js';
import './content/content-module-list.js';
import './awards/awards-card.js';
import './link/auth-link.js';
import './shared-styles.js';
import './updates/updates-card.js';
import './search/search-input.js';
import { PrefetchMixin } from './prefetch-mixin.js';
import './siren-entity.js';
import { SirenEntityMixin } from './siren-entity-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes PrefetchMixin
   @mixes SirenEntityMixin */
class MyView1 extends PrefetchMixin(SirenEntityMixin(PolymerElement)) {
	static get template() {
		return html`
        <style include="shared-styles">
            :host {
                display: block;
            }

            .not {
                display: flex;
                flex-wrap: wrap;
                width: calc(100%);
            }

            .col {
                flex: 1;
                width: 50%;
                padding: 20px;
            }

            .card-item {
                max-width: 1200px;
                width: calc(100% - 40px);
                padding: 20px;
                margin-left: auto; margin-right: auto;
            }

            @media (max-width:1000px) {
                .card-item {
                    width: calc(100% - 40px);
                }
            }
        </style>

        <d2l-siren-entity href="{{organization.href}}" token="{{token}}" entity="{{orgEntity}}"></d2l-siren-entity>
        <d2l-siren-entity href="{{whoami.href}}" token="{{token}}" entity="{{userEntity}}"></d2l-siren-entity>

        <div class="not">
            <d2l-content-module-list href="{{content.href}}" token="{{token}}" class="card-item"></d2l-content-module-list>
            <d2l-user-activity-usage-list href="{{myActivities.href}}" token="{{token}}" class="card-item"></d2l-user-activity-usage-list>
            <d2l-courses-card href="{{myEnrollments.href}}" token="{{token}}" class="card-item"></d2l-courses-card>
            <d2l-discussions-forum-list href="{{discussions.href}}" token="{{token}}" class="card-item"></d2l-discussions-forum-list><br>
            <d2l-updates-card href="{{myUpdates.href}}" token="{{token}}" class="card-item"></d2l-updates-card>
            <d2l-awards-card href="{{myAwards.href}}" token="{{token}}" class="card-item"></d2l-awards-card>
            <!-- <d2l-auth-link href='{{resolveUrl("my-app.html")}}' token download="my-app.html">Download App with auth</d2l-auth-link> -->
        </div>
`;
	}

	static get interesting() {
		return [
			{
				getLinks: entity => entity.hasClass('root') && entity.getLinkByRel('https://api.brightspace.com/rels/whoami'),
				elements: [this] // need whoami (class user)
			}, {
				getLinks: entity => entity.hasClass('root') && entity.getLinkByRel('https://api.brightspace.com/rels/organization'),
				elements: [this] // need organization (class organization)
			}, {
				getLinks: entity => entity.hasClass('user') && entity.getLinkByRel('https://activities.api.brightspace.com/rels/my-activities'),
				elements: [window.customElements.get('d2l-user-activity-usage-list')]
			}, {
				getLinks: entity => entity.hasClass('user') && entity.getLinkByRel('https://api.brightspace.com/rels/updates'),
				elements: [window.customElements.get('d2l-updates-card')]
			}, {
				getLinks: entity => entity.hasClass('user') && entity.getLinkByRel('https://api.brightspace.com/rels/my-enrollments'),
				elements: [window.customElements.get('d2l-courses-card')]
			}, {
				getLinks: entity => entity.hasClass('organization') && entity.getLinkByRel('https://api.brightspace.com/rels/discussions'),
				elements: [window.customElements.get('d2l-discussions-forum-list')]
			}, {
				getLinks: entity => entity.hasClass('organization') && entity.getLinkByRel('https://api.brightspace.com/rels/my-organization-awards'),
				elements: [window.customElements.get('d2l-awards-card')]
			}, {
				getLinks: entity => entity.hasClass('organization') && entity.getLinkByRel('https://api.brightspace.com/rels/sequence'),
				elements: [window.customElements.get('d2l-awards-card')]
			}
		];
	}

	static get is() { return 'my-view1'; }

	static get properties() {
		return {
			organization: {
				type: Object,
				computed: '_getLinkByRel(entity, "https://api.brightspace.com/rels/organization")'
			},
			whoami: {
				type: Object,
				computed: '_getLinkByRel(entity, "https://api.brightspace.com/rels/whoami")'
			},
			orgEntity: Object,
			myActivities: {
				type: Object,
				computed: '_getLinkByRel(userEntity, "https://activities.api.brightspace.com/rels/my-activities")'
			},
			myUpdates: {
				type: Object,
				computed: '_getLinkByRel(userEntity, "https://api.brightspace.com/rels/updates")'
			},
			discussions: {
				type: Object,
				computed: '_getLinkByRel(orgEntity, "https://api.brightspace.com/rels/discussions")'
			},
			myEnrollments: {
				type: Object,
				computed: '_getLinkByRel(userEntity, "https://api.brightspace.com/rels/my-enrollments")'
			},
			content: {
				type: Object,
				computed: '_getLinkByRel(orgEntity, "https://api.brightspace.com/rels/sequence")'
			},
			myAwards: {
				type: Object,
				computed: '_getLinkByRel(orgEntity, "https://api.brightspace.com/rels/my-organization-awards")'
			},
			userEntity: Object,

			renderActivityUsageList: {
				type: Boolean,
				value: true
			}
		};
	}

	_getLinkByRel(entity, rel) {
		return entity && entity.getLinkByRel(rel);
	}
}

window.customElements.define(MyView1.is, MyView1);

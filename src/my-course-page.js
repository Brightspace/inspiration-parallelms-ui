import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import './activities/user-activity-usage-list.js';
import './awards/awards-card.js';
import './discussions/discussions-forum-list.js';
import './updates/updates-card.js';
import './shared-styles.js';
import './siren-entity.js';
import { SirenEntityMixin } from './siren-entity-mixin.js';
import './courses/course-banner.js';
import './content/content-module-list.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes SirenEntityMixin */
class CoursePage extends SirenEntityMixin(PolymerElement) {
	static get template() {
		return html`
        <style include="shared-styles">
            :host {
                display: block;
                padding: 10px;
            }

            .card-item {
                max-width: 1200px;
                width: calc(100% - 40px);
                padding: 20px;
                margin-left: auto; margin-right: auto;
            }


        </style>

        <d2l-siren-entity href="[[route.__queryParams.course]]" token="[[token]]" entity="{{organizationEntity}}"></d2l-siren-entity>
        <d2l-course-banner token="{{token}}" href="[[organizationLink.href]]" class="banner"></d2l-course-banner>

        <d2l-siren-entity href="[[href]]" token="[[token]]" entity="{{rootEntity}}"></d2l-siren-entity>
        <d2l-siren-entity href="[[userLink.href]]" token="[[token]]" entity="{{userEntity}}"></d2l-siren-entity>

        <d2l-content-module-list href="{{content.href}}" token="{{token}}" class="card-item"></d2l-content-module-list>
        <d2l-updates-card organization-filter="[[route.__queryParams.course]]" href="[[updatesLink.href]]" token="[[token]]" class="card-item"></d2l-updates-card>
        <d2l-awards-card href="[[awardsLink.href]]" token="[[token]]" class="card-item"></d2l-awards-card>
        <d2l-user-activity-usage-list href="[[activitiesLink.href]]" token="[[token]]" class="card-item"></d2l-user-activity-usage-list>
        <d2l-discussions-forum-list href="[[discussionsLink.href]]" token="[[token]]" class="card-item"></d2l-discussions-forum-list>
`;
	}

	static get is() { return 'my-course-page'; }

	static get properties() {
		return {
			route: Object,
			organizationEntity: Object,
			activitiesLink: {
				type: Object,
				computed: '_getLinkByRel(organizationEntity, "https://activities.api.brightspace.com/rels/my-organization-activities")'
			},
			awardsLink: {
				type: Object,
				computed: '_getLinkByRel(organizationEntity, "https://api.brightspace.com/rels/my-organization-awards")'
			},
			discussionsLink: {
				type: Object,
				computed: '_getLinkByRel(organizationEntity, "https://api.brightspace.com/rels/discussions")'
			},
			organizationLink: {
				type: Object,
				computed: '_getLinkByRel(organizationEntity, "self")'
			},
			content: {
				type: Object,
				computed: '_getLinkByRel(organizationEntity, "https://api.brightspace.com/rels/sequence")'
			},
			rootEntity: Object,
			userLink: {
				type: Object,
				computed: '_getLinkByRel(entity, "https://api.brightspace.com/rels/whoami")'
			},
			userEntity: Object,
			updatesLink: {
				type: Object,
				computed: '_getLinkByRel(userEntity, "https://api.brightspace.com/rels/updates")'
			}

		};
	}
}

window.customElements.define(CoursePage.is, CoursePage);

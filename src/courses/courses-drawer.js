import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/iron-scroll-threshold/iron-scroll-threshold.js';
import '../my-course-page-prefetcher.js';
import { NextEntityPaginateMixin } from '../next-entity-paginate-mixin.js';
import { PrefetchMixin } from '../prefetch-mixin.js';
import '../shared-styles.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import '../siren-entity.js';
import './enrollment-item.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes PrefetchMixin
   @mixes NextEntityPaginateMixin
   @mixes SirenEntityMixin */
class CoursesDrawer extends PrefetchMixin(NextEntityPaginateMixin('myEnrollmentsEntity', SirenEntityMixin(PolymerElement))) {
	static get template() {
		return html`
        <style include="shared-styles">
            :host {
                display: block;
            }
        </style>
        <d2l-siren-entity href="[[userLink.href]]" token="[[token]]" entity="{{userEntity}}"></d2l-siren-entity>
        <d2l-siren-entity href="[[myEnrollmentsLink.href]]" token="[[token]]" entity="{{myEnrollmentsEntity}}"></d2l-siren-entity>

        <template is="dom-if" if="{{hasCourses}}">
            <iron-scroll-threshold scroll-target="[[scroller]]" on-lower-threshold="loadMoreData">
                <template is="dom-repeat" items="{{paginated}}">
                    <d2l-enrollment-item href="[[item.href]]" token="{{token}}"></d2l-enrollment-item>
                </template>
            </iron-scroll-threshold>
        </template>
        <template is="dom-if" if="{{!hasCourses}}">
            <span>You have no courses</span>
        </template>
`;
	}

	static get interesting() {
		return [
			{
				getLinks: entity => entity.hasClass('root') && entity.getLinkByRel('https://api.brightspace.com/rels/whoami'),
				elements: [this] // need whoami (class user)
			}, {
				getLinks: entity => entity.hasClass('user') && entity.getLinkByRel('https://api.brightspace.com/rels/my-enrollments'),
				elements: [this] // need my-enrollments from whoami (class enrollments)
			}, {
				getLinks: entity => entity.hasClass('enrollments') && entity.getLinkByRel('next'),
				elements: [this] // prefetch all the next links
			}, {
				getLinks: entity => entity.hasClass('enrollments') && entity.entities,
				elements: [window.customElements.get('d2l-enrollment-item')]
			}, {
				getLinks: entity => entity.hasClass('root') && entity.getLinkByRel('self'),
				elements: [window.D2L.MyCoursePagePrefetcher] // special case. The my-course-page uses both the root and the organization
			}
		];
	}

	static get is() { return 'd2l-courses-drawer'; }

	static get properties() {
		return {
			scroller: Object,
			hasCourses: {
				type: Boolean,
				value: true
			},
			userEntity: Object,
			userLink: {
				type: Object,
				computed: '_getLinkByRel(entity, "https://api.brightspace.com/rels/whoami")'
			},
			myEnrollmentsEntity: Object,
			myEnrollmentsLink: {
				type: Object,
				computed: '_getLinkByRel(userEntity, "https://api.brightspace.com/rels/my-enrollments")'
			}
		};
	}

	static get observers() {
		return [
			'_changed(myEnrollmentsEntity)'
		];
	}

	_changed(myEnrollmentsEntity) {
		this.hasCourses = myEnrollmentsEntity.entities && myEnrollmentsEntity.entities.length > 0;
	}
}

window.customElements.define(CoursesDrawer.is, CoursesDrawer);

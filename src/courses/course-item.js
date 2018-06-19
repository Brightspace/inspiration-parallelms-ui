import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-collapse/iron-collapse.js';
import '@polymer/paper-card/paper-card.js';
import { PrefetchMixin } from '../prefetch-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import '../siren-entity.js';
import { LocalizationMixin } from '../localization-mixin.js';
import '../content/content-module-list.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes LocalizationMixin
   @mixes PrefetchMixin
   @mixes SirenEntityMixin */
class CourseItem extends LocalizationMixin(PrefetchMixin(SirenEntityMixin(PolymerElement))) {
	static get template() {
		return html`
        <style>
            :host {
                display: block;
                --adjusting-background: whitesmoke;
            }
            :host([is-active]) {
                --adjusting-background: white;
            }
            paper-card {
                width: 100%;
                padding: 0px;
                background-color: var(--adjusting-background);
            }
            div {
                margin: 10px;
            }
            h4 {
                margin: 0px;
            }
        </style>

            <d2l-siren-entity href="[[courseImage.href]]" token="[[token]]" entity="{{courseImageEntity}}"></d2l-siren-entity>
            <a href="[[_coursePageHref]]">
                <paper-button on-tap="_goToCoursePage">
                    <paper-card is-active="" image="[[image.href]]">
                        <div>
                            <h4>[[entity.properties.name]] ([[entity.properties.code]]) </h4>
                        </div>
                        <template is="dom-if" if="[[startDate]]">
                            <div>Start Date: [[startDate]]</div>
                        </template>
                        <template is="dom-if" if="[[startDate]]">
                            <div>End Date: [[endDate]]</div>
                        </template>
                    </paper-card>
                </paper-button>
            </a>
`;
	}

	static get interesting() {
		return [
			{
				getLinks: entity => entity.getSubEntityByRel('https://api.brightspace.com/rels/organization-image'),
				elements: [] // Just prefetch the org image and we use it directly
			}, {
				getLinks: entity => entity.getLinkByRel('self'),
				elements: [window.D2L.MyCoursePagePrefetcher] // We link to course-page
			}
		];
	}

	static get is() { return 'd2l-course-item'; }

	static get properties() {
		return {
			isActive: {
				type: Boolean,
				reflectToAttribute: true
			},
			startDate: {
				type: String,
				value: ''
			},
			endDate: {
				type: String,
				value: ''
			},
			courseImage: {
				type: Object,
				computed: '_getSubEntityByRel(entity, "https://api.brightspace.com/rels/organization-image")'
			},
			courseImageEntity: Object,
			image: {
				type: Object,
				value: { href: ''},
				computed: '_getLinkByClass(courseImageEntity, "banner")'
			},
			_coursePageHref: {
				type: String,
				computed: '_computeCoursePageHref(href)'
			}
		};
	}

	static get observers() {
		return [
			'_changed(entity)'
		];
	}

	_changed(entity) {
		this.isActive = entity.properties.isActive;

		if (entity.properties.startDate) {
			this.startDate = this._formatDate(entity.properties.startDate, this.locale);
		}
		if (entity.properties.endDate) {
			this.endDate = this._formatDate(entity.properties.endDate, this.locale);
		}
	}

	toggle() {
		this.$.collapse.toggle();
	}

	_computeCoursePageHref(href) {
		return 'course-page?course=' + href;
	}
}

window.customElements.define(CourseItem.is, CourseItem);

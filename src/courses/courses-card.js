import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/iron-scroll-threshold/iron-scroll-threshold.js';
import { NextEntityPaginateMixin } from '../next-entity-paginate-mixin.js';
import { PrefetchMixin } from '../prefetch-mixin.js';
import '../shared-styles.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import './enrollment-item.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes PrefetchMixin
   @mixes NextEntityPaginateMixin
   @mixes SirenEntityMixin */
class CoursesCard extends PrefetchMixin(NextEntityPaginateMixin('entity', SirenEntityMixin(PolymerElement))) {
	static get template() {
		return html`
        <style include="shared-styles">
            :host {
                display: block;
            }
            .courses-card {
                height: 100%;
                max-height: 800px;
            }
        </style>
        <paper-card id="card" class="courses-card medium-card-size">
            <div class="card-header">
                <h2 class="card-header-text">My Courses</h2>
            </div>
            <template is="dom-if" if="{{hasCourses}}">
                <iron-scroll-threshold scroll-target="card" on-lower-threshold="loadMoreData">
                    <template is="dom-repeat" items="{{paginated}}">
                        <d2l-enrollment-item href="[[item.href]]" token="{{token}}"></d2l-enrollment-item>
                    </template>
                </iron-scroll-threshold>
            </template>
            <template is="dom-if" if="{{!hasCourses}}">
                <span>You have no courses</span>
            </template>
        </paper-card>
`;
	}

	static get interesting() {
		return [
			{
				getLinks: entity => entity.entities,
				elements: [window.customElements.get('d2l-enrollment-item')]
			}, {
				getLinks: entity => entity.getLinkByRel('next'),
				elements: [this] // prefetch all the next links
			}
		];
	}

	static get is() { return 'd2l-courses-card'; }

	static get properties() {
		return {
			hasCourses: {
				type: Boolean,
				value: true
			}
		};
	}

	static get observers() {
		return [
			'_changed(entity)'
		];
	}

	_changed(entity) {
		this.hasCourses = (entity.entities && entity.entities.length > 0);
	}
}

window.customElements.define(CoursesCard.is, CoursesCard);

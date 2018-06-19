import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import '../siren-entity.js';
import '../shared-styles.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes SirenEntityMixin */
class CourseBanner extends SirenEntityMixin(PolymerElement) {
	static get template() {
		return html`
        <style include="shared-styles">
            container {
                display: flex;
            }
            .header {
                text-align: center;
                font-size: 2em;
                font-weight: bold;
            }
            .course-image-container {
                justify-content: center;
                align-content: center;
                margin: 0 auto;
            }
        </style>

        <d2l-siren-entity href="[[courseImage.href]]" token="[[token]]" entity="{{courseImageEntity}}"></d2l-siren-entity>
        <div class="container">
            <div class="header">[[entity.properties.name]]</div>

            <div class="flex-parent course-image-container basic-top-bottom-padding">
                <img src="[[imageHref]]">
            </div>
        </div>
`;
	}

	static get is() { return 'd2l-course-banner'; }

	static get properties() {
		return {
			courseImageEntity: Object,
			courseImage: {
				type: Object,
				computed: '_getSubEntityByRel(entity, "https://api.brightspace.com/rels/organization-image")'
			},
			imageHref: {
				type: String,
				computed: '_getRightImage(courseImageEntity)'
			}
		};
	}

	_getRightImage(courseImageEntity) {
		var links = this._getLinksByClass(courseImageEntity, 'wide');
		links = links.filter(function(link) {
			return link.class.includes('max') && link.class.includes('low-density');
		});
		return links[0].href;
	}
}

window.customElements.define(CourseBanner.is, CourseBanner);

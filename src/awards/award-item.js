import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-tooltip/paper-tooltip.js';
import 'd2l-image/d2l-image.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes SirenEntityMixin */
class AwardItem extends SirenEntityMixin(PolymerElement) {
	static get template() {
		return html`
        <style>
            :host {
                display: inline-block;
                --adjusting-background: whitesmoke;
            }
            :host([is-active]) {
                --adjusting-background: white;
            }
            paper-card {
                color: grey;
                width: 350px;
                margin: 10px;
                background-color: var(--adjusting-background);
            }
            .award-image {
                width: 50px;
                height: 50px;
                padding: 5px;
                margin-left: auto;
                margin-right: auto;
            }
            .awarded {
                padding: 5px;
                float: right;
            }
            .award-title {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin: 5px;
                text-align: center;
            }
        </style>
        <paper-card is-active="">
            <template is="dom-if" if="[[isAwarded]]">
                <paper-tooltip position="top">Congratulations! You have this award!</paper-tooltip>
            </template>
            <div>
                <d2l-image class="award-image" image-url="[[image.href]]" token="[[token]]"></d2l-image>
                <paper-tooltip>[[item.properties.description]]</paper-tooltip>
            </div>
            <div>
                <div class="award-title">
                    [[item.properties.name]]
                </div>
                <paper-tooltip>[[item.properties.name]]</paper-tooltip>
            </div>
        </paper-card>
`;
	}

	static get is() { return 'd2l-award-item'; }

	static get properties() {
		return {
			item: {
				type: Object,
				reflectToAttribute: true
			},
			image: {
				type: Object,
				computed: '_getSubEntityByRel(item, "https://api.brightspace.com/rels/award-image")'
			},
			isAwarded: {
				type: Boolean,
				computed: '_hasClass(item, "awarded")'
			}
		};
	}
}

window.customElements.define(AwardItem.is, AwardItem);

import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-tooltip/paper-tooltip.js';
import 'd2l-image/d2l-image.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { LitElement, html } from '@polymer/lit-element';
/* @mixes SirenEntityMixin */
class AwardItem extends SirenEntityMixin(LitElement) {
	_render({ token, item }) {
		let isAwarded = false;
		let image;
		let imageHref;
		let description;
		let name;
		if (item) {
			isAwarded = this._hasClass(item, 'awarded');
			image = this._getSubEntityByRel(item, 'https://api.brightspace.com/rels/award-image');
			imageHref = image && image.href;
			description = item.properties.description;
			name = item.properties.name;
		}
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
            ${ isAwarded ? html`<paper-tooltip position="top">Congratulations! You have this award!</paper-tooltip>` : null }
            <div>
                <d2l-image class="award-image" imageUrl="${imageHref}" token="${token}"></d2l-image>
                <paper-tooltip>${description}</paper-tooltip>
            </div>
            <div>
                <div class="award-title">
                    ${name}
                </div>
                <paper-tooltip>${name}</paper-tooltip>
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
			isAwarded: {
				type: Boolean
			}
		};
	}
}

window.customElements.define(AwardItem.is, AwardItem);

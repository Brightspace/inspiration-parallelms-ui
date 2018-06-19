import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import './award-item.js';
import '../shared-styles.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes SirenEntityMixin */
class AwardsCard extends SirenEntityMixin(PolymerElement) {
	static get template() {
		return html`
        <style include="shared-styles">
            :host {
                display: block;
            }
        </style>
        <paper-card class="medium-card-size">
            <div class="card-header">
                <h2 class="card-header-text">My Available Awards</h2>
            </div>
            <template is="dom-if" if="{{hasAwards}}">
                <template is="dom-repeat" items="{{entity.entities}}">
                    <d2l-award-item item="[[item]]"></d2l-award-item>
                </template>
            </template>
            <template is="dom-if" if="{{!hasAwards}}">
                <span>You have no awards</span>
            </template>
        </paper-card>
`;
	}

	static get is() { return 'd2l-awards-card'; }

	static get properties() {
		return {
			entity: Object,
			hasAwards: {
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
		this.hasAwards = (entity.entities && entity.entities.length > 0);
	}
}

window.customElements.define(AwardsCard.is, AwardsCard);

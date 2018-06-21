import '@polymer/paper-card/paper-card.js';
import { cssFromModules } from '@polymer/polymer/lib/utils/style-gather.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import './award-item.js';
import '../shared-styles.js';
import { LitElement, html } from '@polymer/lit-element';
/* @mixes SirenEntityMixin */
class AwardsCard extends SirenEntityMixin(LitElement) {
	_render({ entity }) {
		const hasAwards = !!entity && (entity.entities && entity.entities.length > 0);
		const entities = entity && entity.entities || [];
		return html`
		<style>
			${ cssFromModules('shared-styles') }
			:host {
				display: block;
			}
		</style>
        <paper-card class="medium-card-size">
            <div class="card-header">
                <h2 class="card-header-text">My Available Awards</h2>
            </div>
			${ hasAwards ? entities.map(item => html`
				<d2l-award-item item="${item}"></d2l-award-item>`) : html`
				<span>You have no awards</span>` }
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
}

window.customElements.define(AwardsCard.is, AwardsCard);

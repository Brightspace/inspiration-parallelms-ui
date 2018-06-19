import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import '@polymer/paper-card/paper-card.js';
import './user-name.js';
import './user-image.js';
import '../shared-styles.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes SirenEntityMixin */
class UserCard extends SirenEntityMixin(PolymerElement) {
	static get template() {
		return html`
        <style include="shared-styles">
            :host {
                display: block;
            }
            .image {
                width: 50px;
                height: 50px;
            }
            .center {
                align-self: center;
            }
        </style>

        <paper-card class="flex-parent" style="width:100%; padding: 10px;">
            <div class="flex-1">
                <d2l-user-image class="image" href="{{href}}" token="{{token}}"></d2l-user-image>
            </div>
            <div class="flex-right center">
                <d2l-user-name href="{{href}}" token="{{token}}"></d2l-user-name>
            </div>
        </paper-card>
`;
	}

	static get is() { return 'd2l-user-card'; }
}

window.customElements.define(UserCard.is, UserCard);

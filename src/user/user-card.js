import '@polymer/paper-card/paper-card.js';
import './user-name.js';
import './user-image.js';
import '../shared-styles.js';
import { cssFromModules } from '@polymer/polymer/lib/utils/style-gather.js';
import { LitElement, html } from '@polymer/lit-element';
/* @mixes SirenEntityMixin */
class UserCard extends LitElement {
	_render({ href, token }) {
		return html`
        <style>
			${cssFromModules('shared-styles')}
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
                <d2l-user-image class="image" href="${href}" token="${token}"></d2l-user-image>
            </div>
            <div class="flex-right center">
                <d2l-user-name href="${href}" token="${token}"></d2l-user-name>
            </div>
        </paper-card>
`;
	}

	static get is() { return 'd2l-user-card'; }

	static get properties() {
		return {
			href: String,
			token: String
		};
	}
}

window.customElements.define(UserCard.is, UserCard);

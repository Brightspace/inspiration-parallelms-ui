import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-menu-button/paper-menu-button.js';
import './user-name.js';
import './user-image-top.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes SirenEntityMixin */
class UserCardTop extends SirenEntityMixin(PolymerElement) {
	static get template() {
		return html`
        <style include="shared-styles">
            :host {
                display: block;
            }
            .image {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .user-name {
                color: black;
                margin: 0 auto;
            }
            a:link, a:visited {
                background-color: cornflowerblue;
                color: white;
                padding: 5px 10px;
                border-radius: 5%;
                text-align: center;
                text-decoration: none;
                margin: 0 auto;
            }
            .logout-link {
                margin-bottom: 10px;
            }
        </style>

        <paper-menu-button horizontal-align="right" vertical-offset="58">
            <d2l-user-image-top class="image" href="{{whoami.href}}" token="{{token}}" slot="dropdown-trigger"></d2l-user-image-top>

            <paper-item slot="dropdown-content"><d2l-user-name href="{{whoami.href}}" token="{{token}}" class="user-name"></d2l-user-name></paper-item>
            <paper-item slot="dropdown-content" class="logout-link"><a href="./">Logout</a></paper-item>
        </paper-menu-button>
      <slot></slot>
`;
	}

	static get is() { return 'd2l-user-card-top'; }

	static get properties() {
		return {
			token: {
				type: String,
				notify: true
			},
			href: String,
			whoami: {
				type: Object,
				computed: '_getLinkByRel(entity, "https://api.brightspace.com/rels/whoami")',
				notify: true
			}
		};
	}
}

window.customElements.define(UserCardTop.is, UserCardTop);

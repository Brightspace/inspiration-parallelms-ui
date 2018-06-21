import { SirenEntityMixin } from '../siren-entity-mixin.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-menu-button/paper-menu-button.js';
import { cssFromModules } from '@polymer/polymer/lib/utils/style-gather.js';
import './user-name.js';
import './user-image-top.js';
import '../shared-styles.js';
import { LitElement, html } from '@polymer/lit-element';
/* @mixes SirenEntityMixin */
class UserCardTop extends SirenEntityMixin(LitElement) {
	_render({ entity, token }) {
		const whoamiRel = 'https://api.brightspace.com/rels/whoami';
		const whoami = entity &&
			entity.hasLinkByRel(whoamiRel) &&
			entity.getLinkByRel(whoamiRel);
		const whoamiHref = whoami && whoami.href;
		return html`
        <style>
			${cssFromModules('shared-styles')}
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
            <d2l-user-image-top class="image" href="${whoamiHref}" token="${token}" slot="dropdown-trigger"></d2l-user-image-top>

            <paper-item slot="dropdown-content"><d2l-user-name href="${whoamiHref}" token="${token}" class="user-name"></d2l-user-name></paper-item>
            <paper-item slot="dropdown-content" class="logout-link"><a href="./">Logout</a></paper-item>
        </paper-menu-button>
      <slot></slot>
`;
	}

	static get is() { return 'd2l-user-card-top'; }
}

window.customElements.define(UserCardTop.is, UserCardTop);

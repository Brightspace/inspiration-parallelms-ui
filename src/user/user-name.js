import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes SirenEntityMixin */
class UserName extends SirenEntityMixin(PolymerElement) {
	static get template() {
		return html`
        {{displayName.properties.name}}
`;
	}

	static get is() { return 'd2l-user-name'; }

	static get properties() {
		return {
			displayName: {
				type: Object,
				computed: '_getSubEntityByRel(entity, "https://api.brightspace.com/rels/display-name")'
			}
		};
	}
}

window.customElements.define(UserName.is, UserName);

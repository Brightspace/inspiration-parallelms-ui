import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { LitElement, html } from '@polymer/lit-element';
/* @mixes SirenEntityMixin */
class UserName extends SirenEntityMixin(LitElement) {
	_render({ entity }) {
		let name;
		if (entity) {
			const displayName = entity.getSubEntityByRel('https://api.brightspace.com/rels/display-name');
			name = displayName && displayName.properties.name;
		}
		return html`
        ${name}
`;
	}

	static get is() { return 'd2l-user-name'; }
}

window.customElements.define(UserName.is, UserName);

import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { LitElement, html } from '@polymer/lit-element';
/* @mixes SirenEntityMixin */
class UserFirstName extends SirenEntityMixin(LitElement) {
	_render({ entity }) {
		let name;
		if (entity) {
			const firstName = entity.getSubEntityByRel('https://api.brightspace.com/rels/first-name');
			name = firstName.properties.name;
		}
		return html`
        ${name}
`;
	}

	static get is() { return 'd2l-user-first-name'; }
}

window.customElements.define(UserFirstName.is, UserFirstName);

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes SirenEntityMixin */
class UserFirstName extends SirenEntityMixin(PolymerElement) {
	static get template() {
		return html`
        {{firstName.properties.name}}
`;
	}

	static get is() { return 'd2l-user-first-name'; }

	static get properties() {
		return {
			firstName: {
				type: Object,
				computed: '_getSubEntityByRel(entity, "https://api.brightspace.com/rels/first-name")'
			}
		};
	}
}

window.customElements.define(UserFirstName.is, UserFirstName);

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import '../siren-entity.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes SirenEntityMixin */
class Root extends SirenEntityMixin(PolymerElement) {
	static get template() {
		return html`
        <d2l-siren-entity href="{{organizationsLink.href}}" token="{{token}}" entity="{{organizationsEntity}}">
    </d2l-siren-entity>
`;
	}

	static get is() { return 'd2l-root'; }

	static get properties() {
		return {
			organizations: {
				type: Object,
				notify: true,
				computed: '_getSubEntitiesByRel(organizationsEntity, "https://api.brightspace.com/rels/organization")'
			},
			organizationsEntity: Object,
			organizationsLink: {
				type: Object,
				computed: '_getLinkByRel(entity, "https://api.brightspace.com/rels/organizations")'
			},
			organizationLink: {
				type: Object,
				computed: '_getLinkByRel(entity, "https://api.brightspace.com/rels/organization")',
				notify: true
			},
			whoamiLink: {
				type: Object,
				computed: '_getLinkByRel(entity, "https://api.brightspace.com/rels/whoami")',
				notify: true
			}
		};
	}
}

window.customElements.define(Root.is, Root);

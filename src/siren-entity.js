import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { SirenEntityMixin } from './siren-entity-mixin.js';
/* @mixes SirenEntityMixin */
class SirenEntity extends SirenEntityMixin(PolymerElement) {

	static get is() { return 'd2l-siren-entity'; }

	static get properties() {
		return {
			entity: {
				type: Object,
				notify: true
			}
		};
	}

}

window.customElements.define(SirenEntity.is, SirenEntity);

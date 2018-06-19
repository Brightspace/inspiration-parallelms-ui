import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { SirenEntityMixin } from './siren-entity-mixin.js';
import './shared-styles.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes SirenEntityMixin */
class CourseName extends SirenEntityMixin(PolymerElement) {
	static get template() {
		return html`
        {{entity.properties.name}}
`;
	}

	static get is() { return 'd2l-course-name'; }
}

window.customElements.define(CourseName.is, CourseName);

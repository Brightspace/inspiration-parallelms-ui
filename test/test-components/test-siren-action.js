import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { SirenActionMixin } from '../../src/siren-action-mixin.js';
/* @mixes SirenActionMixin */
class TestSirenAction extends SirenActionMixin(PolymerElement) {
	static get is() { return 'test-siren-action'; }
}

window.customElements.define(TestSirenAction.is, TestSirenAction);

import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {PrefetchMixin} from './prefetch-mixin.js';
import {SirenEntityMixin} from './siren-entity-mixin.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';


class MyVirtualNotebook extends PrefetchMixin(SirenEntityMixin(PolymerElement)) {

	static get template() {
		return html`
<h1>My Virtual Notebook</h1>
`;
	}

	static get is() {
		return 'my-virtual-notebook';
	}

}

window.customElements.define(MyVirtualNotebook.is, MyVirtualNotebook);

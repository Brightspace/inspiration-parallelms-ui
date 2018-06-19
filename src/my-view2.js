import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class MyView2 extends PolymerElement {
	static get template() {
		return html`
        <style include="shared-styles">
            :host {
                display: block;
                padding: 10px;
            }
        </style>

        <div class="card">
            <div class="circle">2</div>
            <h1>View Two</h1>
            <p>Ea duis bonorum nec, falli paulo aliquid ei eum.</p>
            <p>Id nam odio natum malorum, tibique copiosae expetenda mel ea.Detracto suavitate repudiandae no eum. Id adhuc minim soluta nam.Id nam odio natum malorum, tibique copiosae expetenda mel ea.</p>
        </div>
`;
	}

	static get is() { return 'my-view2'; }
}

window.customElements.define(MyView2.is, MyView2);

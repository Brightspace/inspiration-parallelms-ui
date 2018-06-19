import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './calendar/calendar.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class MyView3 extends PolymerElement {
	static get template() {
		return html`
        <style include="shared-styles">
            :host {
                display: block;
                padding: 10px;
            }
        </style>

        <div class="card">
            <d2l-calendar data="{{_data()}}"></d2l-calendar>
        <div>
    </div></div>
`;
	}

	static get is() { return 'my-view3'; }
	static properties() {
		return {
			data: Array
		};
	}
	_data() {
		return [];
	}
}

window.customElements.define(MyView3.is, MyView3);

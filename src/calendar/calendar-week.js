import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-item/paper-item.js';
import '../shared-styles.js';
import './calendar-item.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

class CalendarWeek extends PolymerElement {

	static get template() {
		return html`
		<style include="shared-styles">
            :host {
                display: block;
            }
        </style>
        <paper-item >
            <tr>
                <template is="dom-repeat" items="{{days}}" >
                    <calendar-item day="{{item.day}}" data="{{item.data}}" ></calendar-item>
                </template>
            </tr>
        </paper-item>
`;
	}

	static get is() { return 'calendar-week'; }

	static get properties() {
		return {
			days: Array
		};
	}
}

window.customElements.define(CalendarWeek.is, CalendarWeek);

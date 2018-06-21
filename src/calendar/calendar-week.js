import '@polymer/paper-item/paper-item.js';
import '../shared-styles.js';
import './calendar-item.js';
import { cssFromModules } from '@polymer/polymer/lib/utils/style-gather.js';
import { LitElement, html } from '@polymer/lit-element';

class CalendarWeek extends LitElement {
	_render({ days }) {
		return html`
		<style>
			${cssFromModules('shared-styles')}
            :host {
                display: block;
            }
        </style>
        <paper-item>
            <tr>
                ${days.map(item => html`<calendar-item day="${item.day}" data="${item.data}" ></calendar-item>`)}
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

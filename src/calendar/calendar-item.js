import '@polymer/paper-card/paper-card.js';
import '../shared-styles.js';
import { cssFromModules } from '@polymer/polymer/lib/utils/style-gather.js';
import { LitElement, html } from '@polymer/lit-element';
class CalendarItem extends LitElement {
	_render({ data, day }) {
		const count = this._getCount(data);
		const showCount = this._showCount(count);
		return html`
        <style>
			${cssFromModules('shared-styles')}
            :host {
                display: block;
            }
            .number {
                margin-right: 0px;
            }
            .header {
                text-align: right;
            }
            .card {
                background-color: #aeaeae;
                color: #fafafa;
                font-size: 1.5em;
            }
        </style>
        <div class="day">
            <div class="header">
                <span class="number">${day}</span>
            </div>
            <div>
				${ showCount ? html`<span class="card">${count}</span>` : null }
            </div>
        </div>
`;
	}

	static get is() { return 'calendar-item'; }

	static get properties() {
		return {
			data: Array,
			day: String
		};
	}
	_getCount(data) {
		return data && data.length;
	}
	_showCount(count) {
		return count > 0;
	}
}

window.customElements.define(CalendarItem.is, CalendarItem);

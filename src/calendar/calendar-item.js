import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '../shared-styles.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class CalendarItem extends PolymerElement {
	static get template() {
		return html`
        <style include="shared-styles">
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
                <span class="number">{{day}}</span>
            </div>
            <div>
                <template is="dom-if" if="{{showCount}}">
                    <span class="card">{{count}}</span>
                </template>
            </div>
        </div>
`;
	}

	static get is() { return 'calendar-item'; }

	static get properties() {
		return {
			data: Array,
			day: String,
			count: {
				value: 0,
				computed: '_getCount(data)',
				notify: true
			},
			showCount: {
				type: Boolean,
				computed: '_showCount(count)'
			}
		};
	}
	_getCount(data) {
		return data.length;
	}
	_showCount(count) {
		return count > 0;
	}
}

window.customElements.define(CalendarItem.is, CalendarItem);

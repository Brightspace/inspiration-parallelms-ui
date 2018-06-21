import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '../shared-styles.js';
import '../search-results-page.js';
import './calendar-item.js';
import { cssFromModules } from '@polymer/polymer/lib/utils/style-gather.js';
import { LitElement, html } from '@polymer/lit-element';
class D2LCalendar extends LitElement {
	_render({ data }) {
		return html`
        <style>
			${cssFromModules('shared-styles')}
            :host {
                display: block;
            }
            .calendar {
                width: 100%;
            }
            .row {
                display: flex;
                flex-wrap: nowrap    ;
                justify-content: space-between;
                border-left: 2px solid #fafafa;
            }
            .date {
                flex:1;
                padding: 2%;
                height: auto;
                width: auto;
                border-right: 2px solid #fafafa;
                border-bottom: 2px solid #fafafa;
            }
            .date:hover {
                background-color: #dedede
            }
            .selected {
                background: #006FBF;
                color: white;
            }
        </style>

        <div class="calendar">
			${this._getWeeks(data).map(item => html`
				<div class="row">${item.map(item => html`
					<calendar-item on-tap="${() => this.itemTapped(item)}" class="date" day="${item.day}" data="${item.data}"></calendar-item>`)}
				</div>`)}
        </div>
		${ this.selectedItem ? html`
			<span style="display: block; align-self: center; background: #E6EAF0; padding: 10px; width: calc(100% - 20px); text-align: center;">Items for ${this.selectedDay}</span>
			<d2l-search-results-page style="padding-bottom: 20px; background: #E6EAF0" results="${this.selectedResults}"></d2l-search-results-page>
			` : null }
`;
	}

	static get is() { return 'd2l-calendar'; }

	static get properties() {
		return {
			data: Array,
			weeks: {
				type: Array,
				computed: '_getWeeks(data)'
			},
			selectedItem: {
				type: Boolean,
				value: false
			},
			selectedResults: {
				type: Array,
				value: []
			},
			selectedDay: {
				type: Number,
				value: 0
			}
		};
	}

	itemTapped(item) {
		this.selectedResults = item.data;
		this.selectedItem = true;
		this.selectedDay = item.day;
	}

	// strait up lifted form https://codepen.io/odran037/pen/RrjjOr
	_getWeeks(data) {
		var d = new Date();

		Date.prototype.monthDays = function() {
			var d = new Date(this.getFullYear(), this.getMonth() + 1, 0);
			return d.getDate();
		};

		var details = {
			// totalDays: monthDays(d.getMonth(), d.getFullYear()),
			totalDays: d.monthDays(),
			weekDays: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
			months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
		};
		var start = new Date(d.getFullYear(), d.getMonth()).getDay();
		var cal = [];
		var day = 1;

		var dataPerDay = {};
		for (const dataPoint of data) {
			const day = new Date(dataPoint.date).getDate();
			dataPerDay[day] = dataPerDay[day] || [];
			dataPerDay[day].push(dataPoint);
		}

		for (var i = 0; i <= 6; i++) {
			cal[i] = [];
			for (var j = 0; j < 7; j++) {
				if (i === 0) {
					cal[i].push({ day: details.weekDays[j], data: [], readOnly: true });
				} else if (day > details.totalDays) {
					//cal[i].push({ day: 'wer', data: [] });
				} else {
					if (i === 1 && j < start) {
						cal[i].push({ day: '', data: [] });
					} else {
						cal[i].push({ day: day, data: dataPerDay[day] || [] });
						day++;
					}
				}
			}
		}
		return cal;
	}
}

window.customElements.define(D2LCalendar.is, D2LCalendar);

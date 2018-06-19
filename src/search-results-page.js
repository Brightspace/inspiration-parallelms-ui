import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/iron-scroll-threshold/iron-scroll-threshold.js';
import './search-result-item.js';
import { PaginateMixin } from './paginate-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes PaginateMixin */
class SearchResultsPage extends PaginateMixin('results', PolymerElement) {
	static get template() {
		return html`
        <style include="shared-styles">
            :host {
                display: block;
            }

            .not {
                display: flex;
                flex-wrap: wrap;
                width: calc(100%);
            }

            .col {
                flex: 1;
                width: 50%;
                padding: 20px;
            }

            .item-header {
                font-size: 12px;
                margin-top: 10px;
                color: darkgrey;
                max-width: 1200px;
                width: calc(100% - 40px);
                margin: 10px auto 0 auto;
            }

            .card-item {
                max-width: 1200px;
                width: calc(100% - 40px);
                margin: 0 auto 0 auto;
            }

            iron-scroll-threshold {
                display: none;
            }

            @media (max-width:1000px) {
                .card-item {
                    width: calc(100% - 40px);
                }
            }
        </style>
        <div class="not">
            <template is="dom-repeat" items="{{paginated}}">
                <span class="item-header">[[item.type]]</span>
                <paper-card class="card-item">
                    <d2l-search-result-item result="{{item}}"></d2l-search-result-item>
                </paper-card>
            </template>
        </div>

        <iron-scroll-threshold scroll-target="document" on-lower-threshold="loadMoreData"></iron-scroll-threshold>
`;
	}

	static get is() { return 'd2l-search-results-page'; }

	static get properties() {
		return {
			results: {
				type: Array,
				notify: true
			}
		};
	}

	// static get observers() {
	//     return [
	//         '_searchResultChanged(results)'
	//     ];
	// }

	// _searchResultChanged(results) {
	//     console.log(results);
	// }
}

window.customElements.define(SearchResultsPage.is, SearchResultsPage);

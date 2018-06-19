import '@polymer/paper-input/paper-input.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { GlobalSearch } from '../global-search.js';
import '../discussions/discussions-topic.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes SirenEntityMixin */
class SearchInput extends PolymerElement {
	static get template() {
		return html`
        <paper-input label="Search" value="{{value}}"></paper-input>
`;
	}

	static get is() { return 'd2l-search-input'; }

	static get properties() {
		return {
			value: {
				type: String,
				value: '',
				notify: true
			},
			results: {
				type: Array,
				notify: true
			}
		};
	}

	constructor() {
		super();
	}

	static get observers() {
		return [
			'_searchResultChanged(value)'
		];
	}

	_searchResultChanged(text) {
		this.results = [];
		if (text.length > 1) {
			this.results = GlobalSearch.search(text);
		}
	}
}

window.customElements.define(SearchInput.is, SearchInput);

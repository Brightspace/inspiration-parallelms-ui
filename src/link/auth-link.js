import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { AuthDownloadMixin } from './auth-download-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes AuthDownloadMixin */
class AuthLink extends AuthDownloadMixin(PolymerElement) {
	static get template() {
		return html`
        <style>
            :host {
                display: block;
            }
        </style>
        <a id="link" href="{{href}}" download="{{_getFilename(download, href)}}"><slot></slot></a>
`;
	}

	static get is() { return 'd2l-auth-link'; }

	static get properties() {
		return {
			href: String,
			token: String,
			download: String
		};
	}

	constructor() {
		super();
		this._boundHandleClick = this.handleClick.bind(this);
	}

	connectedCallback() {
		super.connectedCallback();
		this.addEventListener('click', this._boundHandleClick);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.removeEventListener('click', this._boundHandleClick);
	}

	handleClick(e) {
		// Stop the navigation, setup the SW, and navigate to the intercepted link
		e.preventDefault();
		this.authDownloadFile(this.href, this.token, this.filename);
	}

	get filename() {
		if (this.download) {
			return this.download;
		}
		if (this.href) {
			return this.href
				.substring(this.href.lastIndexOf('/') + 1)
				.substring(this.href.lastIndexOf('\\'));
		}
		return 'download';
	}

	_getFilename() {
		return this.filename;
	}
}

window.customElements.define(AuthLink.is, AuthLink);

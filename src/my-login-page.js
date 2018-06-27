import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import { EntityStore } from './entity-store.js';
import './siren-entity.js';
import './shared-styles.js';
import './courses/courses-drawer.js';
import './my-welcome-page.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
// from https://stackoverflow.com/questions/2090551/parse-query-string-in-javascript
function parseQuery(qstr) {
	var query = {};
	var a = (qstr[0] === '?' ? qstr.substr(1) : qstr).split('&');
	for (var i = 0; i < a.length; i++) {
		var b = a[i].split('=');
		query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
	}
	return query;
}
class LoginPage extends PolymerElement {
	static get template() {
		return html`
        <style include="shared-styles">
            :host {
                display: block;
                overflow: hidden;
            }
            .header {
                text-align: center;
                font-weight: lighter;
            }
            .login-container {
                width: 300px;
                height: auto;
                margin-left: auto;
                margin-right: auto;
            }
            .endpoints-dropdown {
                width: 100%;
            }
            .login-button {
                background-color: cornflowerblue; color: white; height: 100%; width: 100%; margin: 0;
            }
        </style>
        <template is="dom-if" if="{{wannaLogIn}}">
            <d2l-siren-entity href="{{entrypoint}}" token="{{token}}" entity="{{rootEntity}}"></d2l-siren-entity>
        </template>
        <div class="login-container">
            <h2 class="header" id="headerText">ParalleLMS</h2>
            <paper-dropdown-menu label="Endpoints" class="endpoints-dropdown" id="dropdown">
                <paper-listbox slot="dropdown-content" selected="{{selected}}">
                    <template is="dom-repeat" items="{{endpoints}}">
                        <paper-item>{{item}}</paper-item>
                    </template>
                </paper-listbox>
            </paper-dropdown-menu>
            <paper-input label="Token" value="{{token}}" id="tokenInput"></paper-input>
            <paper-input label="LMS URL" value="{{lmsUrl}}" id="lms"></paper-input>
            <paper-checkbox class="basic-top-bottom-padding" checked="{{enableOffline}}" id="checkbox">Enable offline mode</paper-checkbox>
            <paper-button class="login-button" on-tap="_login" id="loginButton">Log In</paper-button>
        </div>
        <slot></slot>
`;
	}

	ready() {
		// only designed to work if token is the only parameter

		super.ready();
		if (window.location.search) {
			var queryStringParams = parseQuery(window.location.search);
			if (queryStringParams.token) {
				this.token = queryStringParams.token;
				if (queryStringParams.host.endsWith('parallelms2.devlms.brightspace.com')) {
					this.entrypoint = 'https://api.dev.brightspace.com';
				}
				this._login();
			}
		}
	}

	static get is() { return 'my-login-page'; }

	static get properties() {
		return {
			token: {
				type: String,
				notify: true
			},
			lmsUrl: {
				type: String,
				notify: true
			},
			href: {
				type: String,
				notify: true
			},
			selected: {
				type: Number,
				value: 0,
				observer: '_endpointChanged'
			},
			endpoints: {
				type: Array,
				value: [
					'https://api.proddev.d2l',
					'https://api.dev.brightspace.com',
					'https://api.brightspace.com'
				]
			},
			entrypoint: {
				type: String,
				value: 'https://api.proddev.d2l'
			},
			rootEntity: {
				type: Object,
				observer: '_rootEntityChanged'
			},
			wannaLogIn: {
				type: Boolean,
				value: false
			},
			route: Object,
			enableOffline: Boolean
		};
	}

	static get observers() {
		return [
			'_startPrefetch(enableOffline, entrypoint, token)'
		];
	}

	_endpointChanged() {
		this.entrypoint = this.endpoints[this.selected];
	}

	_login() {
		if (this.href && this.href !== '') {
			this._performLogin();
		} else if (this.token && this.token !== '') {
			this.wannaLogIn = true;
		} else {
			this.wannaLogIn = false;
		}

		if (!this.wannaLogIn && this.lmsUrl) {
			var link = document.createElement('a');
			link.setAttribute('href', this.lmsUrl);
			var lmsHost = link.protocol + '//' + link.hostname;
			var port = link.port || ((link.protocol === 'https:') ? 443 : 80);
			var url = 'https://resource-invalidator.api.dev.brightspace.com:3000/sendtoauth?host=' + encodeURIComponent(lmsHost) + '&port=' + port + '&callback=' + encodeURIComponent(window.location.href);
			window.location = url;
		}
	}

	_animateShit() {
		var self = this;
		var delay = 500;
		var animation = 'bounceOutRight';
		setTimeout(function() {
			self.$.headerText.classList.add(animation);
			self.$.headerText.classList.add('animated');

			setTimeout(function() {
				self.$.dropdown.classList.add(animation);
				self.$.dropdown.classList.add('animated');

				setTimeout(function() {
					self.$.tokenInput.classList.add(animation);
					self.$.tokenInput.classList.add('animated');

					self.$.lms.classList.add(animation);
					self.$.lms.classList.add('animated');

					setTimeout(function() {
						self.$.loginButton.classList.add(animation);
						self.$.loginButton.classList.add('animated');

						self.$.checkbox.classList.add(animation);
						self.$.checkbox.classList.add('animated');
					}, delay);
				}, delay);
			}, delay);
		}, delay);

		setTimeout(function() {
			self.$.headerText.classList.add('invisible');
			self.$.headerText.classList.remove(animation);
			self.$.headerText.classList.remove('animated');
		}, 3000);
	}

	_rootEntityChanged() {
		var rootEntityLink = this.rootEntity && this.rootEntity.getLinkByRel('self') && this.rootEntity.getLinkByRel('self').href;
		if (rootEntityLink) this.href = rootEntityLink;
		this._performLogin();
	}

	_performLogin() {
		var self = this;
		if (this.href && this.href !== '') {
			this._animateShit();
			var animation = 'bounceOutRight';
			setTimeout(function() {
				self.set('route.path', 'welcome-page');
				self.$.headerText.classList.remove('invisible');

				self.$.dropdown.classList.remove(animation);
				self.$.dropdown.classList.remove('animated');
				self.$.dropdown.classList.remove('invisible');

				self.$.tokenInput.classList.remove(animation);
				self.$.tokenInput.classList.remove('animated');
				self.$.tokenInput.classList.remove('invisible');

				self.$.lms.classList.remove(animation);
				self.$.lms.classList.remove('animated');
				self.$.lms.classList.remove('invisible');

				self.$.loginButton.classList.remove(animation);
				self.$.loginButton.classList.remove('animated');
				self.$.loginButton.classList.remove('invisible');

				self.$.checkbox.classList.remove(animation);
				self.$.checkbox.classList.remove('animated');
				self.$.checkbox.classList.remove('invisible');
			}, 3500);
			self.wannaLogIn = false;
		} else {
			this.wannaLogIn = false;
		}
	}

	_startPrefetch(enableOffline, entrypoint, token) {
		if (enableOffline && entrypoint && token) {
			// The courses-drawer is always shown
			import('./courses/courses-drawer.js').then(() => window.customElements.get('d2l-courses-drawer').beginPrefetch(entrypoint, token));
			// We link to the welcome-page
			import('./my-welcome-page.js').then(() => window.customElements.get('my-welcome-page').beginPrefetch(entrypoint, token));

			EntityStore.addInvalidationListener(() => {
				window.customElements.get('d2l-courses-drawer').beginPrefetch(entrypoint, token);
				window.customElements.get('my-welcome-page').beginPrefetch(entrypoint, token);
			});
		}
	}
}

window.customElements.define(LoginPage.is, LoginPage);

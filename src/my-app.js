import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-toolbar/paper-toolbar.js';
import '@polymer/paper-input/paper-input.js';
import './my-icons.js';
import './course-name.js';
import './root/root.js';
import './shared-styles.js';
import './user/user-card-top.js';
import './search-results-page.js';
import './search/search-input.js';
import './courses/courses-drawer.js';
import './my-app-main-page.js';
import './my-login-page.js';
import './my-welcome-page.js'
import './my-virtual-notebook.js';
import './my-view1.js';
import './my-view2.js';
import './my-view3.js';
import './my-view404.js';
import './my-course-page.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
window.performance && performance.mark && performance.mark('parallelms-app.beforeRegister');

class MyApp extends PolymerElement {
	static get template() {
		return html`
        <style include="shared-styles">
            :host {
                --app-primary-color: #4285f4;
                --app-secondary-color: black;
                display: block;
                height: 100vh;
            }

            app-header {
                color: #fff;
                background-color: var(--app-primary-color);
            }

            app-header paper-icon-button {
                --paper-icon-button-ink-color: white;
            }

            app-toolbar {
                background-color: #E87511;
            }

            .drawer-contents {
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 100%;
                overflow: auto;
            }

            .title {
                margin-top: 20px;
                margin-bottom: 20px;
                text-align: center;
            }

            a:active {
                color: blue;
            }

            .search-bar {
                width: 100%;
                --paper-input-container-color: white;
                --paper-input-container-focus-color: white;
                --paper-input-container-input-color: white;
                padding-left: 20px;
                padding-right: 20px;
            }
        </style>

        <app-location route="{{route}}"></app-location>

        <app-route route="{{route}}" pattern="/:page" data="{{routeData}}" tail="{{subroute}}"></app-route>

        <app-drawer-layout force-narrow="">
            <app-drawer opened="{{drawerOpened}}" slot="drawer" id="drawer">
                <div id="drawercontents" class="drawer-contents">
                    <a href="./app-main-page" class="title">ParalleLMS</a>
                    <a href="view1" class="title">Organization Home</a>
                    <a href="virtual-notebook" class="title">Virtual Notebook</a>
                    <d2l-courses-drawer href="{{rootHref}}" token="{{token}}" scroller="[[\$.drawercontents]]"></d2l-courses-drawer>
                </div>
            </app-drawer>
            <app-header-layout>
                <app-header slot="header">
                    <app-toolbar>
                        <paper-icon-button icon="menu" on-click="_toggleDrawer"></paper-icon-button>
                        <template is="dom-if" if="{{showSearch}}">
                            <d2l-search-input label="Search" class="search-bar" value="{{searchString}}" results="{{searchResults}}"></d2l-search-input>
                            <template is="dom-if" if="{{token}}">
                                <d2l-user-card-top class="flex-right" style="white-space:nowrap; align-self: center;" token="{{token}}" href="{{rootHref}}"></d2l-user-card-top>
                            </template>
                        </template>
                    </app-toolbar>
                </app-header>

                <div>
                    <template is="dom-if" if="{{showSearchResults}}">
                        <d2l-search-results-page results="{{searchResults}}"></d2l-search-results-page>
                    </template>

                    <template is="dom-if" if="{{!showSearchResults}}">
                        <iron-pages selected="[[page]]" attr-for-selected="name" fallback-selection="view404" role="main">
                            <my-app-main-page name="app-main-page" href="{{rootHref}}" token="{{token}}" route="{{route}}"></my-app-main-page>
                            <my-view1 name="view1" token="{{token}}" href="{{rootHref}}"></my-view1>
                            <my-virtual-notebook name="virtual-notebook" token="{{token}}" href="{{rootHref}}"></my-virtual-notebook>
                            <my-login-page name="login-page" href="{{rootHref}}" token="{{token}}" route="{{route}}"></my-login-page>
                            <my-welcome-page name="welcome-page" href="{{rootHref}}" token="{{token}}" route="{{route}}"></my-welcome-page>
                            <my-view2 name="view2"></my-view2>
                            <my-view3 name="view3"></my-view3>
                            <my-view404 name="view404"></my-view404>
                            <my-course-page name="course-page" href="{{rootHref}}" token="{{token}}" route="{{route}}"></my-course-page>
                        </iron-pages>
                    </template>
                </div>
            </app-header-layout>
        </app-drawer-layout>
`;
	}

	static get is() { return 'my-app'; }

	static get properties() {
		return {
			page: {
				type: String,
				reflectToAttribute: true,
				observer: '_pageChanged'
			},
			routeData: Object,
			subroute: String,
			// This shouldn't be neccessary, but the Analyzer isn't picking up
			// Polymer.Element#rootPath
			rootPath: String,
			searchString: String,
			showSearchResults: {
				type: String,
				value: false
			},
			searchResults: Array,
			rootHref: {
				type: String
			},
			token: {
				type: String
			},
			showSearch: {
				type: Boolean,
				value: false
			},
			drawerOpened: Boolean
		};
	}

	static get observers() {
		return [
			'_routePageChanged(routeData.page)',
			'_searchResultChanged(searchString)'
		];
	}

	constructor() {
		super();
		window.performance && performance.mark && performance.mark('parallelms-app.created');
	}

	_toggleDrawer() {
		this.$.drawer.toggle();
	}

	_routePageChanged(page) {
		// redirect to login page when there is no token
		if (page !== 'login-page' && !this.token) {
			page = 'login-page';
		}

		// If no page was found in the route data, page will be an empty string.
		// Default to 'login-page' in that case.
		this.page = page || 'login-page';
		this.searchString = '';
		this.drawerOpened = false;
		if (page === '' || page === 'welcome-page' || page === 'login-page') {
			this.showSearch = false;
		} else if (this.token !== '') {
			this.showSearch = true;
		}
	}

	_pageChanged(page) {
		// Load page import on demand. Show 404 page if fails
		var resolvedPageUrl = this.resolveUrl('./src/my-' + page + '.js');
		import(resolvedPageUrl).catch(this._showPage404.bind(this));
	}

	_showPage404() {
		this.page = 'view404';
	}

	_searchResultChanged() {
		this.showSearchResults = this.searchString.length > 1;
	}
}

window.customElements.define(MyApp.is, MyApp);

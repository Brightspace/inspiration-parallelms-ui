import 'file-saver';

var fileServiceWorker;
/*
    @polymerMixin
*/
export const AuthDownloadMixin = function(superClass) {
	return class extends superClass {
		static get properties() {
			return {
				swSupported: Boolean
			};
		}

		constructor() {
			super();
			this.swSupported = 'serviceWorker' in navigator;
		}

		disconnectedCallback() {
			if (super.disconnectedCallback) {
				super.disconnectedCallback();
			}
			this._iframe && document.body.removeChild(this._iframe);
		}

		_initWorker() {
			if (!fileServiceWorker) {
				fileServiceWorker = navigator.serviceWorker.register(this.resolveUrl('./src/link/link-sw.js'));
			}
			return fileServiceWorker.then(function(swReg) {
				var swRegTmp = swReg.installing || swReg.waiting;

				return new Promise(function(resolve) {
					if (swReg.active) {
						resolve(swReg);
					}
					swRegTmp.onstatechange = function() {
						if (swRegTmp.state === 'activated') {
							resolve(swReg);
						}
					};
				});
			});
		}

		_sendMessage(message) {
			return new Promise(function(resolve, reject) {
				var messageChannel = new MessageChannel();
				messageChannel.port1.onmessage = function(event) {
					if (event.data.error) {
						reject(event.data.error);
					} else {
						resolve(event.data);
					}
				};
				this._initWorker().then(function(swReg) {
					swReg.active.postMessage(message,
						[messageChannel.port2]);
				}).catch(reject);
			}.bind(this));
		}

		_fetch(href, token) {
			var headers = new Headers();
			headers.set('Authorization', `Bearer ${token}`);
			return fetch(href, {
				method: 'GET',
				headers: headers,
				mode: 'cors'
			})
				.then(function(response) {
					return response.blob();
				});
		}

		_fileSaverSaveAs(href, token, filename) {
			return this._fetch(href, token)
				.then(function(results) {
					window.saveAs(results[1], filename);
				});
		}

		authDownloadFile(href, token, filename) {
			var self = this;
			if (this.swSupported) {
				return this._sendMessage({
					url: href,
					filename: filename,
					headers: {
						'Authorization': `Bearer ${token}`
					}
				})
					.then(function(message) {
						// Use an iframe to prevent navigation if file fails to download
						self.iframe.src = message.href;
					})
					.catch(function() {
						return this._fileSaverSaveAs(href, token, filename);
					}.bind(this));
			} else {
				return this._fileSaverSaveAs(href, token, filename);
			}
		}

		get iframe() {
			if (!this._iframe) {
				this._iframe = document.createElement('iframe');
				this._iframe.hidden = true;
				document.body.appendChild(this._iframe);
			}
			return this._iframe;
		}
	};
};

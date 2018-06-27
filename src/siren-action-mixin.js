import { EntityStore } from './entity-store.js';
/*
    @polymerMixin
*/
export const SirenActionMixin = function(superClass) {
	return class extends superClass {
		static get properties() {
			return {
				token: {
					type: String
				}
			};
		}

		getSirenFields(action) {
			if (!action.fields) {
				return null;
			}
			var url = new URL(action.href, window.location.origin);
			var fields;
			if (action.method === 'GET' || action.method === 'HEAD') {
				fields = url.searchParams;
			} else if (action.type === 'application/x-www-form-urlencoded') {
				fields = new URLSearchParams();
			} else {
				fields = new FormData();
			}
			action.fields.forEach(function(field) {
				// if the field is specified multiple times, assume it is intentional
				fields.append(field.name, field.value);
			});
			return fields;
		}

		performSirenAction(action, fields) {
			if (!action) {
				return Promise.reject(new Error('No action given'));
			}
			var headers = new Headers();
			this.token && headers.append('Authorization', `Bearer ${this.token}`);

			var url = new URL(action.href, window.location.origin);
			var body;

			fields = fields || this.getSirenFields(action);
			if (action.method === 'GET' || action.method === 'HEAD') {
				url = new URL(url.pathname + '?' + fields.toString(), url.origin);
			} else {
				body = fields;
			}

			if (body && action.type.indexOf('json') !== -1) {
				var json = {};
				for (var key of body.keys()) {
					var values = body.getAll(key);
					if (values.length > 1) {
						json[key] = values;
					} else {
						json[key] = values[0];
					}
				}
				headers.set('Content-Type', action.type);
				body = JSON.stringify(json);
			}

			var token = this.token;

			return fetch(url.href, {
				method: action.method,
				body: body,
				headers: headers
			})
				.then(function(res) {
					if (!res.ok) {
						throw new Error(`${ res.statusText } response executing ${ action.method } on ${ url.href }.`);
					}
					return res.json();
				})
				.then(function(json) {
					return EntityStore.update(url.href, token, json);
				});
		}
	};
};

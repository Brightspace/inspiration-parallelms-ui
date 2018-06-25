import { GlobalSearch } from './global-search.js';

const listeners = {};
const updateService = 'https://resource-invalidator.api.dev.brightspace.com';

function fetchMessages() {
	fetch(`${updateService}/messages`, {credentials: 'include'})
		.then(function(response) {
			return response.json();
		})
		.then(result => {
			for (const resource of result.resources) {
				if (listeners[resource]) {
					for (var i = 0; i < listeners[resource].length; i++) {
						const token = listeners[resource][i];

						EntityStore.fetch(resource, token, true);
					}
				}
			}
			fetchMessages();
		}).catch(fetchMessages);
}

const registryPromise = new Promise((resolve) => {
	function connect() {

		fetch(`${updateService}/register`, {
			method: 'POST',
			credentials: 'include'
		})
			.then(() =>{
				resolve();
				fetchMessages();
			}, () => {
				setTimeout(connect, 2000);
			});
	}

	connect();

});

function listenForChanges(resource, token)  {
	if (listeners[resource]) {
		if (!listeners[resource].includes(token)) {
			listeners[resource].push(token);
		}
	} else {
		listeners[resource] = [token];
	}

	registryPromise.then(() => {
		fetch(`${updateService}/listen`, {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify({resource: resource}), // must match 'Content-Type' header
			headers: {
				'content-type': 'application/json'
			},
		});
	})
		.catch(() => listenForChanges(resource, token));

}

/*
    This store is hacked together to develop entity-mixin.
*/
export const EntityStore = {

	_store: new Map(),

	_listeners: new Map(),

	_invalidationListeners: new Set(),

	_initContainer(map, entityId, token, init) {
		if (!map.has(token)) {
			map.set(token, new Map());
		}
		var entityMap = map.get(token);
		if (init && !entityMap.has(entityId)) {
			entityMap.set(entityId, init);
		}
		return entityMap.get(entityId);
	},

	addListener: function(entityId, token, listener) {

		if (!entityId || typeof token !== 'string' || typeof listener !== 'function') {
			return;
		}

		this._initContainer(this._listeners, entityId, token, new Set()).add(listener);

	},

	addInvalidationListener: function(listener) {
		this._invalidationListeners.add(listener);
	},

	removeInvalidationListener: function(listener) {
		this._invalidationListeners.delete(listener);
	},

	fetch: function(entityId, token, bypassCache) {
		var entity = this._initContainer(this._store, entityId, token);
		if (!entity || bypassCache) {
			this._store.get(token).set(entityId, { 'status': 'fetching', 'entity': null });

			var headers = new Headers();
			headers.set('Authorization', `Bearer ${token}`);

			if (bypassCache) {
				headers.set('pragma', 'no-cache');
				headers.set('cache-control', 'no-cache');
			}

			fetch(entityId, {
				method: 'GET',
				headers: headers
			})
				.then(function(res) {
					return res.json();
				})
				.then(function(json) {
					this.update(entityId, token, json);
					if (bypassCache) {
						for (const listener of this._invalidationListeners) {
							listener(entityId, token, json);
						}
					}
				}.bind(this))
				.catch(function(err) {
					this.setError(entityId, token, err);
				}.bind(this));
		}

		return this._store.get(token).get(entityId);
	},

	update: function(entityId, token, entity) {
		this._initContainer(this._store, entityId, token);
		listenForChanges(entityId, token);
		return new Promise((resolve) => {
			this._store.get(token).set(entityId, { 'status': '', 'entity': entity });

			GlobalSearch.update(entityId, token, this._store.get(token).get(entityId));
			this._notify(entityId, token, entity);

			resolve(entity);
		});
	},

	setError: function(entityId, token, error) {
		this._initContainer(this._store, entityId, token);
		return new Promise((resolve) => {

			this._store.get(token).set(entityId, { 'status': 'error', 'entity': null, 'error': error });
			this._notifyError(entityId, token, error);

			resolve(error);

		});
	},

	removeListener: function(entityId, token, listener) {

		if (!entityId || typeof token !== 'string' || typeof listener !== 'function' || !this._listeners) {
			return;
		}

		this._initContainer(this._listeners, entityId, token, new Set()).delete(listener);

	},

	_notify: function(entityId, token, entity) {
		const listenerSet = this._initContainer(this._listeners, entityId, token, new Set());
		for (const listener of listenerSet) {
			listener(entity);
		}
	},

	_notifyError: function(entityId, token, error) {
		const listenerSet = this._initContainer(this._listeners, entityId, token, new Set());
		for (const listener of listenerSet) {
			listener(null, error);
		}
	}

};

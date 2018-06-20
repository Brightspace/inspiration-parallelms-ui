import { GlobalSearch } from './global-search.js';

var listeners = {};

function listenForChanges(resource, token)  {
	if (listeners[resource]) {
		if (!listeners[resource].includes(token)) {
			listeners[resource].push(token);
		}
	} else {
		listeners[resource] = [token];
	}
}

// from https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
function guid() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
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

import { fetchEntityIfNeeded } from './redux-entity-fetch.js';
import { EntityStore } from './redux-entity-store.js';

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

						EntityStore.dispatch(fetchEntityIfNeeded(resource, token, true));
					}
				}
			}
			fetchMessages();
		}).catch(() => {
			// give some break between failures
			setTimeout(fetchMessages, 3000);
		});
}

const registryPromise = new Promise((resolve) => {
	function connect() {

		fetch(`${updateService}/register`, {
			method: 'POST',
			credentials: 'include'
		})
			.then((response) =>{
				if (response.status !== 200) {
					return setTimeout(connect, 2000);
				}
				resolve();
				fetchMessages();
			}, () => {
				setTimeout(connect, 2000);
			});
	}

	connect();

});

function listenForChanges(resource, token) {
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
			body: JSON.stringify({resource: resource}),
			headers: {
				'content-type': 'application/json'
			},
		});
	})
		.catch(() => listenForChanges(resource, token));

}

let lastUpdated = 0;
EntityStore.subscribe(() => {
	const state = EntityStore.getState();
	Object.keys(state.entitiesByHref).forEach(href => {
		Object.keys(state.entitiesByHref[href]).forEach(token => {
			const entity = state.entitiesByHref[href][token];
			if (!entity.isFetching && entity.lastUpdated && entity.lastUpdated > lastUpdated) {
				listenForChanges(href, token);
			}
		});
	});
	lastUpdated = Date.now();
});

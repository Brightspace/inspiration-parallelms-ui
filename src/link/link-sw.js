'use strict';

var map = {};

self.addEventListener('message', function(event) {
	var uniqLink = self.registration.scope + 'intercept-me-nr' + Math.random();
	map[uniqLink] = event.data;

	var port = event.ports[0];
	port.postMessage({ href: uniqLink });
});

self.addEventListener('fetch', function(event) {
	if (map.hasOwnProperty(event.request.url)) {
		var data = map[event.request.url];
		var request = new Request(data.url, {
			method: event.request.method,
			headers: event.request.headers,
			mode: 'cors',
			credentials: event.request.credentials
		});
		Object.keys(data.headers).forEach(function(header) {
			request.headers.append(header, data.headers[header]);
		});
		event.respondWith(fetch(request)
			.then(function(response) {
				if (!data.filename) {
					return;
				}
				var disposition = response.headers.get('content-disposition');
				if (disposition && disposition.contains('attachment')) {
					return;
				}
				var newHeaders = new Headers(response.headers);
				newHeaders.append('Content-Disposition', 'attachment; filename*=UTF-8\'\'' + data.filename);

				return new Response(response.body, {
					status: response.status,
					statusText: response.statusText,
					headers: newHeaders
				});
			}));
		delete map[event.request.url];
	}
});

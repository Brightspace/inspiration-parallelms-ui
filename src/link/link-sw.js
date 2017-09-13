'use strict';

var map = {};

self.addEventListener('message', function(event) {
	// create a unique link that the anchor tag can use that this SW will intercept
	var uniqLink = self.registration.scope + 'intercept-me-nr' + Math.random();
	map[uniqLink] = event.data;

	var port = event.ports[0];
	port.postMessage({ href: uniqLink });
});

self.addEventListener('fetch', function(event) {
	if (map.hasOwnProperty(event.request.url)) {
		var data = map[event.request.url];
		delete map[event.request.url];
		if (data.headers) {
			// The request needs to be a cors request to set headers
			var request = new Request(data.url, {
				method: event.request.method,
				headers: event.request.headers,
				mode: 'cors',
				credentials: event.request.credentials
			});
			Object.keys(data.headers).forEach(function(header) {
				request.headers.append(header, data.headers[header]);
			});
		}
		event.respondWith(fetch(request)
			.then(function(response) {
				// Set Content-Disposition on the response if necessary
				var disposition = response.headers.get('content-disposition');
				if (disposition && disposition.contains('attachment')) {
					return;
				}
				var newHeaders = new Headers(response.headers);
				var filename = data.filename || 'download';
				newHeaders.append('Content-Disposition', 'attachment; filename*=UTF-8\'\'' + filename);

				return new Response(response.body, {
					status: response.status,
					statusText: response.statusText,
					headers: newHeaders
				});
			}));
	}
});

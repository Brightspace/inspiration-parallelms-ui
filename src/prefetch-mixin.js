import { EntityStore } from './redux-entity-store.js';
import { fetchEntityIfNeeded } from './redux-entity-fetch.js';
import { idlePeriod } from '@polymer/polymer/lib/utils/async.js';
let prefetching = 0;
const concurrency = 100;

/*
    @polymerMixin
    Calls EntityStore.fetch for relevant subentities to be prefetched
    and listens for changes on subsequent subentities, prefetching as required

    The class needs to have the static property interesting defined

    static get interesting() {
        return [
            {
                // Returns an iterable of objects containing an 'href' property or strings
                getLinks: entity => entity.getSubEntitiesByRel('https://api.brightspace.com/rels/user-profile').map(entity => entity.getLinkByRel('self')),
                // An iterable of element constructors that in the template gets passed the links from getLinks and use PrefetchMixin
                elements: [window.customElements.get('d2l-user-image'), window.customElements.get('d2l-user-name')]
            },
            { getLinks: entity => entity.getSubEntitiesByRel('alternate').map(entity => entity.href), elements: [window.customElements.get('x-alternate')] }
        ];
    }
*/
export const PrefetchMixin = function(superClass) {
	return class extends superClass {
		static _prefetchForElements(entity, token, elements) {
			for (const interestingElement of elements) {
				interestingElement.beginPrefetch && interestingElement.beginPrefetch(entity, token);
			}
		}

		// fetch interesting entity and iterate through the elements
		static _doPrefetch(href, token, elements) {
			// limit the amount of requests we do at once
			if (prefetching >= concurrency) {
				idlePeriod.run(() => this._doPrefetch(href, token, elements));
				return;
			}

			// actually do the fetch
			prefetching++;
			EntityStore.dispatch(fetchEntityIfNeeded(href, token))
				.then(() => {
					prefetching--;
					const state = EntityStore.getState();
					const entitiesByToken = state.entitiesByHref[href];
					const entity = entitiesByToken && entitiesByToken[token];
					if (entity && !entity.isFetching) {
						this._prefetchForElements(entity.entity, token, elements);
					}
				});
		}

		static beginPrefetch(entity, token) {
			if (typeof entity === 'object') {
				entity = window.D2L.Hypermedia.Siren.Parse(entity);
			}

			// get interesting entities
			for (const { getLinks, elements } of this.interesting) {
				let links = typeof entity === 'string' ? entity : getLinks(entity);
				if (!links) {
					continue;
				}
				if (typeof links === 'string' || !(Symbol.iterator in links)) {
					links = [links];
				}
				for (const link of links) {
					if (!link) {
						continue;
					}
					const href = link.href || link;
					if (!href) {
						continue;
					}

					idlePeriod.run(() => this._doPrefetch(href, token, elements));
				}
			}
		}
	};
};

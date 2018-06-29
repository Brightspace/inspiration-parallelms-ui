import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { REQUEST_ENTITY, RECEIVE_ENTITY } from './redux-entity-fetch.js';
import { UPDATE_ENTITY } from './redux-entity-update.js';
import { START_PREFETCH } from './redux-prefetch.js';

const loggerMiddleware = createLogger();

const entity = (state = {
	didInvalidate: false,
	isFetching: false,
	entity: null
}, action) => {
	switch (action.type) {
		case REQUEST_ENTITY:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			});
		case RECEIVE_ENTITY:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				entity: action.entity,
				lastUpdated: action.receivedAt
			});
		case UPDATE_ENTITY:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				entity: action.entity,
				lastUpdated: action.updatedAt
			});
		default:
			return state;
	}
};

const entitiesByToken = (state = {}, action) => {
	switch (action.type) {
		case REQUEST_ENTITY:
		case RECEIVE_ENTITY:
		case UPDATE_ENTITY:
			return Object.assign({}, state, {
				[action.token]: entity(state[action.token], action)
			});
		default:
			return state;
	}
};

const entitiesByHref = (state = {}, action) => {
	switch (action.type) {
		case REQUEST_ENTITY:
		case RECEIVE_ENTITY:
		case UPDATE_ENTITY:
			return Object.assign({}, state, {
				[action.href]: entitiesByToken(state[action.href], action)
			});
		default:
			return state;
	}
};

const prefetcher = (state = { needsPrefetch: false }, action) => {
	switch (action.type) {
		case START_PREFETCH:
			return Object.assign({}, state, {
				needsPrefetch: false
			});
		case REQUEST_ENTITY:
			if (action.bypassCache) {
				return Object.assign({}, state, {
					needsPrefetch: true
				});
			}
			return state;
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	entitiesByHref,
	prefetcher
});

export const EntityStore = createStore(rootReducer, applyMiddleware(
	thunkMiddleware,
	loggerMiddleware
));

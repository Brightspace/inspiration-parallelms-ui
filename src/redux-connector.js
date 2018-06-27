import {EntityStore} from './redux-entity-store.js';

export function connectToRedux(elm) {
	elm.stateReceiver(EntityStore.getState());
	EntityStore.subscribe(() => {
		elm.stateReceiver(EntityStore.getState());
	});
}

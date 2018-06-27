import { connectToRedux } from './redux-connector.js';
import { fetchEntityIfNeeded } from './redux-entity-fetch.js';
import { EntityStore } from './redux-entity-store.js';

/*
    @polymerMixin
    A component mixin for HM entity with support for callback for updates
        - registers for store updates when attached to DOM
        - unregisters from store updates when removed from DOM
        - unregisters old, registers new callback when href changes
        - assumes one entity per component (maybe valid assumption)
*/
export const EntityMixin = function(superClass) {
	return class extends superClass {
		static get properties() {
			return {
				href: {
					type: String,
					reflectToAttribute: true
				},
				token: String,
				entity: Object
			};
		}

		constructor() {
			super();
			connectToRedux(this);
		}

		stateReceiver(state) {
			const entitiesByToken = state.entitiesByHref[this.href];
			const entity = entitiesByToken && entitiesByToken[this.token];
			if (entity && !entity.isFetching) {
				this._entityChanged(entity.entity);
			}
		}

		_propertiesChanged(props, changedProps, prevProps) {
			super._propertiesChanged(props, changedProps, prevProps);
			if (
				changedProps &&
				(changedProps.href !== undefined || changedProps.token !== undefined) &&
				this.href !== undefined &&
				this.token !== undefined
			) {
				EntityStore.dispatch(fetchEntityIfNeeded(this.href, this.token))
					.then(() => this.stateReceiver(EntityStore.getState()));
			}
		}

		_entityChanged(entity) {
			this.entity = entity;
		}
	};
};

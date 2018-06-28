import { EntityMixin } from './entity-mixin.js';
/*
    @polymerMixin
    @mixes EntityMixin
*/
export const SirenEntityMixin = function(superClass) {
	return class extends EntityMixin(superClass) {
		_entityChanged(entity) {
			if (entity === this._rawEntity) {
				return;
			}
			this._rawEntity = entity;
			this.entity = window.D2L.Hypermedia.Siren.Parse(entity);
		}

		// Helper methods that can be used in computed properties

		_getSubEntityByRel(entity, rel) {
			return entity && entity.getSubEntityByRel(rel);
		}

		_getSubEntitiesByRel(entity, rel) {
			return entity && entity.getSubEntitiesByRel(rel);
		}

		_getSubEntityByClass(entity, cls) {
			return entity && entity.getSubEntityByClass(cls);
		}

		_getLinkByRel(entity, rel) {
			return entity && entity.getLinkByRel(rel);
		}

		_getLinkByClass(entity, cls) {
			return entity && entity.getLinkByClass(cls);
		}

		_getLinksByClass(entity, cls) {
			return entity && entity.getLinksByClass(cls);
		}

		_getActionByName(entity, name) {
			return entity && entity.getActionByName(name);
		}

		_hasActionByName(entity, name) {
			return entity && entity.hasActionByName(name);
		}

		_hasClass(entity, name) {
			return entity && entity.hasClass(name);
		}
	};
};

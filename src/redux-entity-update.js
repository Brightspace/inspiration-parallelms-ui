export const UPDATE_ENTITY = 'UPDATE_ENTITY';

export function updateEntity(href, token, entity) {
	return {
		type: UPDATE_ENTITY,
		href,
		token,
		entity,
		updatedAt: Date.now()
	};
}

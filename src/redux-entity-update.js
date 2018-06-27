export function invalidateEntity(href, token) {
	return {
		type: 'INVALIDATE_ENTITY',
		href,
		token
	};
}

export function updateEntity(href, token, entity) {
	return {
		type: 'UPDATE_ENTITY',
		href,
		token,
		entity,
		updatedAt: Date.now()
	};
}

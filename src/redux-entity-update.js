export const UPDATE_ENTITY = 'UPDATE_ENTITY';

export function updateEntity(href, token, entity) {
	const selfLink = entity && entity.links && entity.links.find(link => link.rel.includes('self'));
	if (selfLink) {
		href = selfLink.href;
	}
	return {
		type: UPDATE_ENTITY,
		href,
		token,
		entity,
		updatedAt: Date.now()
	};
}

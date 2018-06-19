import { PrefetchMixin } from './prefetch-mixin.js';
import './activities/user-activity-usage-list.js';
import './updates/updates-card.js';
import './discussions/discussions-forum-list.js';
import './awards/awards-card.js';
import './content/content-module-list.js';
export class MyCoursePagePrefetcher extends PrefetchMixin(null) {
	static get interesting() {
		return [
			{
				getLinks: entity => (entity.hasClass('organization') || entity.hasClass('course-offering')) && entity.getLinkByRel('https://activities.api.brightspace.com/rels/my-organization-activities'),
				elements: [window.customElements.get('d2l-user-activity-usage-list')]
			}, {
				getLinks: entity => entity.hasClass('user') && entity.getLinkByRel('https://api.brightspace.com/rels/updates'),
				elements: [window.customElements.get('d2l-updates-card')]
			}, {
				getLinks: entity => (entity.hasClass('organization') || entity.hasClass('course-offering')) && entity.getLinkByRel('https://api.brightspace.com/rels/discussions'),
				elements: [window.customElements.get('d2l-discussions-forum-list')]
			}, {
				getLinks: entity => (entity.hasClass('organization') || entity.hasClass('course-offering')) && entity.getLinkByRel('https://api.brightspace.com/rels/my-organization-awards'),
				elements: [window.customElements.get('d2l-awards-card')]
			}, {
				getLinks: entity => (entity.hasClass('organization') || entity.hasClass('course-offering')) && entity.getLinkByRel('https://api.brightspace.com/rels/sequence'),
				elements: [window.customElements.get('d2l-content-module-list')]
			}
		];
	}
}

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { LocalizationMixin } from '../localization-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { SirenActionMixin } from '../siren-action-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

import '../siren-entity.js';
import './note.js';

import '../courses/course-item.js';
import '../content/content-module-card.js';
import '../content/content-activity-item.js';
import '../discussions/discussions-topic-post-item.js';
import '../discussions/discussions-topic-post-list.js';
import '../discussions/discussions-topic.js';

/* @mixes LocalizationMixin
   @mixes SirenEntityMixin
   @mixes SirenActionMixin */
class ContextualNote extends LocalizationMixin(SirenActionMixin(SirenEntityMixin(PolymerElement))) {

	static get template() {
		return html`
		<style>
        :host {
            display: block;
        }
		</style>
		sourceLink: [[sourceLink]]
		<d2l-siren-entity href="[[sourceLink]]" token="[[token]]" entity="{{source}}"></d2l-siren-entity>
		<div class="contextual note">
			<d2l-note href="[[href]]" token="[[token]]" ></d2l-note>
			<div class="source-hook"></div>
		</div>
`;
	}

	static get is() { return 'd2l-contextual-note'; }

	static get properties() {
		return {
			sourceLink: {
				type: String,
				computed: '_getHrefByRel(entity, "https://notes.api.brightspace.com/rels/subject")'
			},
			source: Object,
			sourceType: {
				type: String,
				computed: '_getHandlerForSource(source)'
			}
		};
	}
	static get observers() {
		return [
			'_createInlineHandler(sourceType)'
		];
	}

	_getHrefByRel(entity, rel) {
		const link = (entity && entity.getLinkByRel && entity.getLinkByRel(rel)) || '';
		const href = (link && link.href) || '';
		return (href === 'undefined') ? '' : href;
	}
	_getHandlerForSource(source) {
		const classes_key = source.class && source.class.join('_');
		switch (classes_key) {
			case 'sequenced-activity': {
				return 'd2l-content-activity-item';
			}
			case 'sequence_sequence-description': {
				return 'd2l-content-module-card';
			}
			case 'active_organization':
			case 'active_cohort':
			case 'active_course-offering': {
				return 'd2l-course-item';
			}
			case 'thread_html': {
				return 'd2l-discussions-topic-post-item';
			}
			case 'topic_html': {
				return 'd2l-discussions-topic';
			}
			case 'threads_collection_paged': {
				return 'd2l-discussions-topic-post-list';
			}
			default: {
				return '';
			}
		}
	}
	_createInlineHandler(sourceType) {
		const hook = this.shadowRoot.querySelector('.source-hook');
		hook.innerHTML = '';
		if (!sourceType) {
			return;
		}
		const el = document.createElement(sourceType);
		el.href = this.sourceLink;
		el.token = this.token;

		hook.appendChild(el);
	}
}

window.customElements.define(ContextualNote.is, ContextualNote);

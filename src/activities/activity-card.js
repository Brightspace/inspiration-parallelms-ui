import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { SirenActionMixin } from '../siren-action-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes SirenEntityMixin
   @mixes SirenActionMixin */
class ActivityCard extends SirenActionMixin(SirenEntityMixin(PolymerElement)) {
	static get template() {
		return html`
        <style>
            :host {
                display: block;
            }

            input {
                margin-left: 20px;
            }
        </style>

        [[entity.properties.name]] ([[type]])

        <input id="fileUpload" type="file" hidden="[[!hasAddFileAction]]">
`;
	}

	static get is() { return 'd2l-activity-card'; }

	static get properties() {
		return {
			addFileAction: Object,
			hasAddFileAction: Boolean,
			type: String
		};
	}

	static get observers() {
		return [
			'_changed(entity)'
		];
	}

	_changed(entity) {
		if (entity.hasClass('assignment')) {
			this.type = 'Assignment';
		} else if (entity.hasClass('quiz')) {
			this.type = 'Quiz';
		} else {
			this.type = 'Unknown Activity Type';
		}

		this.hasAddFileAction = entity.hasActionByName('submit-file');
		if (this.hasAddFileAction) {
			this.addFileAction = entity.getActionByName('submit-file');

			const self = this;
			this.$.fileUpload.addEventListener('change', /* @this */ function() {
				const file = this.files[0];

				const formData = new FormData();
				formData.append('submission', file);
				self.performSirenAction(self.addFileAction, formData);
			});
		}
	}
}

window.customElements.define(ActivityCard.is, ActivityCard);

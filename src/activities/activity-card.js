import { SirenActionMixin } from '../siren-action-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { LitElement, html } from '@polymer/lit-element';
/* @mixes SirenEntityMixin
   @mixes SirenActionMixin */
class ActivityCard extends SirenActionMixin(SirenEntityMixin(LitElement)) {
	_render({ entity }) {
		let name;
		let type;
		let hasAddFileAction = false;
		if (entity) {
			name = entity.properties.name;
			if (entity.hasClass('assignment')) {
				type = 'Assignment';
			} else if (entity.hasClass('quiz')) {
				type = 'Quiz';
			} else {
				type = 'Unknown Activity Type';
			}

			hasAddFileAction = entity.hasActionByName('submit');
			if (hasAddFileAction) {
				this._addFileAction = entity.getActionByName('submit');
			}
		}
		return html`
		<style>
			:host {
				display: block;
			}

			input {
				margin-left: 20px;
			}
		</style>

		${name} (${type})

		<input id="fileUpload" type="file" hidden="${!hasAddFileAction}">
`;
	}

	static get is() { return 'd2l-activity-card'; }

	constructor() {
		super();
		this._boundOnFileUploadChange = this._onFileUploadChange.bind(this);
	}

	_firstRendered() {
		const fileUpload = this.shadowRoot.querySelector('#fileUpload');
		fileUpload.addEventListener('change', this._boundOnFileUploadChange);
	}

	_onFileUploadChange() {
		const file = this.shadowRoot.querySelector('#fileUpload').files[0];

		const formData = new FormData();
		formData.append('submission', file);
		this.performSirenAction(this._addFileAction, formData);
	}
}

window.customElements.define(ActivityCard.is, ActivityCard);

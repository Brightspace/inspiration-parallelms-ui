import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import './content-file-viewer.js';
import './content-activity-list.js';
import { PrefetchMixin } from '../prefetch-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { SirenActionMixin } from '../siren-action-mixin.js';
import { LitElement, html } from '@polymer/lit-element';
/* @mixes SirenEntityMixin
   @mixes PrefetchMixin
   @mixes SirenActionMixin */
class ContentActivityItem extends SirenActionMixin(PrefetchMixin(SirenEntityMixin(LitElement))) {
	_render({ entity, token, showChild }) {
		const title = entity ? entity.properties.title : null;
		return html`
        <style>
            :host {
                display: block;
            }

            .info-box {
                display: flex;
            }

            .info-box > * {
                margin-right: 20px;
            }
        </style>

        <div style="width: calc(100% - 20px); margin: 10px; padding: 0px;">
            <div on-tap="${e => this._toggleShowChild(e)}" style="font-weight:bold; padding: 10px 0px 0px 10px; background-color:lightgray;">${title}</div>
			${ showChild ? this._isList(entity) ? html`
				<d2l-content-activity-list href="${this._getSelfLink(entity)}" token="${token}"></d2l-content-activity-list>` : html`
				<d2l-content-file-viewer href="${this._getSelfLink(entity)}" token="${token}"></d2l-content-file-viewer>` : null }
        </div>
`;
	}

	static get interesting() {
		return [
			{
				getLinks: entity => entity.hasClass('sequence-description') && entity.getLinkByRel('self'),
				elements: [window.customElements.get('d2l-content-activity-list')]
			}, {
				getLinks: entity => !entity.hasClass('sequence-description') && entity.getLinkByRel('self'),
				elements: [window.customElements.get('d2l-content-file-viewer')]
			}
		];
	}

	static get is() { return 'd2l-content-activity-item'; }

	static get properties() {
		return {
			title: String,
			showChild: {
				type: Boolean,
				value: false
			}
		};
	}

	_toggleShowChild() {
		this.showChild = !this.showChild;
	}

	_isList(entity) {
		return entity.hasClass('sequence-description');
	}

	_getSelfLink(entity) {
		return entity.getLinkByRel('self').href;
	}
}

window.customElements.define(ContentActivityItem.is, ContentActivityItem);

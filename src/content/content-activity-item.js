import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import './content-file-viewer.js';
import './content-activity-list.js';
import { PrefetchMixin } from '../prefetch-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { SirenActionMixin } from '../siren-action-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes SirenEntityMixin
   @mixes PrefetchMixin
   @mixes SirenActionMixin */
class ContentActivityItem extends SirenActionMixin(PrefetchMixin(SirenEntityMixin(PolymerElement))) {
	static get template() {
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
            <div on-tap="_toggleShowChild" style="font-weight:bold; padding: 10px 0px 0px 10px; background-color:lightgray;">[[title]]</div>
            <template is="dom-if" if="{{showChild}}">
                <template is="dom-if" if="{{_isList(entity)}}">
                    <d2l-content-activity-list href="[[_getSelfLink(entity)]]" token="{{token}}"></d2l-content-activity-list>
                </template>
                <template is="dom-if" if="{{!_isList(entity)}}">
                    <d2l-content-file-viewer href="[[_getSelfLink(entity)]]" token="{{token}}"></d2l-content-file-viewer>
                </template>
            </template>
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

	static get observers() {
		return [
			'_changed(entity)'
		];
	}

	_toggleShowChild() {
		this.showChild = !this.showChild;
	}
	_changed(entity) {
		this.title = entity.properties.title;
	}

	_isList(entity) {
		return entity.hasClass('sequence-description');
	}

	_getSelfLink(entity) {
		return entity.getLinkByRel('self').href;
	}

	_onClickAction(e) {
		this.performSirenAction(e.model.item);
	}

	_getActions(entity) {
		if (entity.entities[0] !== undefined) {
			return entity.entities[0].actions;
		} else {
			return [];
		}
	}

	_mapFriendlyName(name) {
		var friendlyName;
		switch (name.toLowerCase()) {
			case 'view-activity':
				friendlyName = 'View';
				break;
			case 'view-activity-duration':
				friendlyName = 'Duration';
				break;
			default:
				friendlyName = '';
		}
		return friendlyName;
	}
}

window.customElements.define(ContentActivityItem.is, ContentActivityItem);

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { SirenActionMixin } from '../siren-action-mixin.js';
import { LocalizationMixin } from '../localization-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes SirenEntityMixin
   @mixes SirenActionMixin
   @mixes LocalizationMixin */
class UpdateItem extends LocalizationMixin(SirenActionMixin(SirenEntityMixin(PolymerElement))) {
	static get template() {
		return html`
        <style>
            :host {
                display: block;
            }
        </style>
            <paper-card style="width: calc(100% - 20px); margin: 10px; padding: 0px;">
                <div style="font-weight:bold; padding: 10px 0px 0px 10px">{{title}}</div>
                <div style="padding-left: 10px;">{{date}}</div>
                <div style="padding: 0px 10px 10px 10px;">{{body}}</div>
                <div style="background-color:lightgray;">
                    <template is="dom-repeat" items="{{entity.actions}}">
                        <paper-button on-tap="_onClickAction" style="margin: 0px;">[[item.name]]</paper-button>
                    </template>
                </div>

            </paper-card>
`;
	}

	static get is() { return 'd2l-update-item'; }

	static get properties() {
		return {
			title: String,
			date: {
				type:String,
				value: ''
			},
			body: String,
			token: String,
			href: String,
			entity: Object
		};
	}

	static get observers() {
		return [
			'_changed(entity)'
		];
	}

	_changed(entity) {
		this.title = entity.properties.title;
		this.body = entity.properties.body;

		this.date = this._formatDate(entity.properties.date, this.locale);
	}

	_onClickAction(e) {
		this.performSirenAction(e.model.item);
	}
}

window.customElements.define(UpdateItem.is, UpdateItem);

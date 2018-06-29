import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { SirenActionMixin } from '../siren-action-mixin.js';
import { LocalizationMixin } from '../localization-mixin.js';
import { NoteMixin } from '../notes/note-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes NoteMixin
   @mixes SirenEntityMixin
   @mixes SirenActionMixin
   @mixes LocalizationMixin */
class UpdateItemGrades extends NoteMixin(LocalizationMixin(SirenActionMixin(SirenEntityMixin(PolymerElement)))) {
	static get template() {
		return html`
        <style>
            :host {
                display: block;
            }
            paper-card {
                width: calc(100% - 20px);
                margin: 10px;
                padding: 0px;
            }
            #title {
                font-weight:bold;
                padding: 10px 0px 0px 10px;
            }
            #date {
                padding-left: 10px;
            }
            #grade {
                padding: 10px 10px 0px 10px;
            }
            #comments {
                padding: 0px 10px 10px 10px;
            }
            #action-buttons {
                background-color: lightgray;
            }
            paper-button {
                margin: 0px;
            }
        </style>

        <paper-card>
            <div id="title">{{title}}</div>
            <div id="date">{{date}}</div>
            <div id="grade">Grade received: {{value}}</div>
            <div id="comments">Comments: {{comments}}</div>
            <div id="action-buttons">
                <template is="dom-repeat" items="{{entity.actions}}" strip-whitespace="">
                    <paper-button on-tap="_onClickAction">[[item.name]]</paper-button>
                </template>
            </div>
        </paper-card>
`;
	}

	static get is() { return 'd2l-update-item-grades'; }

	static get properties() {
		return {
			title: String,
			date: {
				type:String,
				value: ''
			},
			value: String,
			comments: String,
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
		this.value = entity.properties.value;
		this.comments = entity.properties.comments;

		this.date = this._formatDate(entity.properties.date, this.locale);
	}

	_onClickAction(e) {
		this.performSirenAction(e.model.item);
	}
}

window.customElements.define(UpdateItemGrades.is, UpdateItemGrades);

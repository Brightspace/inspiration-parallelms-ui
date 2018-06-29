import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-item/paper-item-body.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-spinner/paper-spinner-lite.js';
import { PrefetchMixin } from '../prefetch-mixin.js';
import '../user/user-name.js';
import '../user/user-image.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import '../shared-styles.js';
import { SirenActionMixin } from '../siren-action-mixin.js';
import { NoteMixin } from '../notes/note-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes NoteMixin
   @mixes SirenActionMixin
   @mixes PrefetchMixin
   @mixes SirenEntityMixin */
class DiscussionsTopicPostReplyItem extends NoteMixin(SirenActionMixin(PrefetchMixin(SirenEntityMixin(PolymerElement)))) {
	static get template() {
		return html`
        <style include="shared-styles">
            :host {
                display: block; font-size: 12px;
            }
            .left-border {
                border-left: solid 3px lightgrey;
            }
            span, div {
                font-size: 12px;
            }
            .reply-image {
                width: 60px; height: 60px;
                margin-top: 5px;
                border-radius: 5px;
                overflow: hidden;
            }
            .reply-item {
                padding-top: 10px;
                padding-bottom: 10px;
            }
            [hidden] {
                display: none !important;
            }
        </style>
        <paper-item two-line="" class="left-border reply-item" on-tap="_toggleShowReply">
            <div style="width: 100%;" class="flex-parent">
                <!-- <span style="padding-right: 5px;" style="flex: 1;">↳</span> -->
                <d2l-user-image href="[[_getAuthorHref(entity)]]" token="[[token]]" class="reply-image"></d2l-user-image>
                <div class="flex-2 basic-left-padding">
                    <div style="font-weight: bold">
                        <d2l-user-name href="[[_getAuthorHref(entity)]]" token="[[token]]"></d2l-user-name> - [[date]]
                    </div>
                    <div id="message">[[entity.properties.message]]</div>
                </div>
            </div>
        </paper-item>
        <div hidden="{{!showReply}}">
                <div class="flex-parent left-border basic-left-padding basic-right-padding">
                    <paper-input class="flex-1 create-thread-input" label="Reply to this post" value="{{reply}}"></paper-input>
                    <paper-button style="font-size: 12px; background-color: cornflowerblue; color: white; height: 100%; margin-top: 20px;" on-tap="_sendReply">
                        <template is="dom-if" if="{{!sendingReply}}">
                            <span>Send</span>
                        </template>
                        <template is="dom-if" if="{{sendingReply}}">
                            <paper-spinner-lite active="" class="white" style="width: 18px; height: 18px;"></paper-spinner-lite>
                        </template>
                    </paper-button>
                </div>
            </div>
        <slot></slot>
`;
	}

	static get interesting() {
		return [
			{
				getLinks: entity => entity.getLinkByRel('author'),
				elements: [window.customElements.get('d2l-user-name'), window.customElements.get('d2l-user-image')]
			}
		];
	}

	static get is() { return 'd2l-discussions-topic-post-reply-item'; }

	static get properties() {
		return {
			post: {
				type: Object,
				value: {}
			},
			replies: {
				type: Array,
				value: []
			},
			token: String,
			href: String,
			item: {
				type: Object,
				value: {}
			},
			date: {
				type: String,
				value: ''
			},
			canReply: {
				type: Boolean,
				value: false
			},
			toggleReply: {
				type: Boolean,
				value: false
			},
			showReply: {
				type: Boolean,
				value: false
			},
			reply: {
				type: String,
				value: ''
			},
			sendingReply: {
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

	_getAuthorHref(entity) {
		return entity.getLinkByRel('author') && entity.getLinkByRel('author').href;
	}

	_changed(entity) {
		var dateEntity = this.entity.getSubEntityByClass('date');
		if (dateEntity) {
			var uglyAssDate = dateEntity.properties.date;
			this.date = new Intl.DateTimeFormat(this.locale, { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date(uglyAssDate));
		}
		// THIS IS NOT SAFE. YOU WILL DIE. DO NOT SHIP THIS.
		this.$.message.innerHTML = this.get('entity.properties.message');
		// I MEAN IT!! THIS IS NOT SAFE. YOU WILL DIE. DO NOT SHIP THIS.

		this.canReply = entity.hasActionByName('reply');
		this.showReply = this.toggleReply && this.canReply;
	}

	_sendReply() {
		var self = this;
		var action = this.entity.getActionByName('reply');
		if (action) {
			this.sendingReply = true;
			var fields = this.getSirenFields(action);
			fields.has('message') && fields.set('message', self.reply);
			fields.has('isHtml') && fields.set('isHtml', true);
			this.performSirenAction(action, fields).then(function() {
				self.reply = '';
				self.sendingReply = false;
			});
		}
	}

	_toggleShowReply() {
		this.toggleReply = !this.toggleReply;
		this.showReply = this.toggleReply && this.canReply;
	}
}

window.customElements.define(DiscussionsTopicPostReplyItem.is, DiscussionsTopicPostReplyItem);

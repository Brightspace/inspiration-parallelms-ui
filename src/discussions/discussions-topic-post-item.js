import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-item/paper-item-body.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-spinner/paper-spinner-lite.js';
import '@polymer/paper-button/paper-button.js';
import { PrefetchMixin } from '../prefetch-mixin.js';
import '../user/user-name.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { SirenActionMixin } from '../siren-action-mixin.js';
import './discussions-topic-post-reply-list.js';
import '../shared-styles.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes SirenActionMixin */
/* @mixes PrefetchMixin */
/* @mixes SirenEntityMixin */
class DiscussionsTopicPostItem extends SirenActionMixin(PrefetchMixin(SirenEntityMixin(PolymerElement))) {
	static get template() {
		return html`
        <style include="shared-styles">
            :host {
                display: block;
                font-size: 12px;
            }
            h5 {
                margin: 0; font-size: 14px
            }
            [hidden] {
                display: none !important;
            }
            .read {
                border-left: solid 3px lightgray;
            }
            .unread {
                border-left: solid 3px lightskyblue;
            }
            .light-borders {
                border-top: solid 1px lightgrey;
                border-bottom: solid 1px lightgrey;
                border-right: solid 1px lightgrey;
            }
            span {
                font-size: 12px;
            }
            .new-thread-container {
                margin-left: 10px; border-left: solid 3px lightgrey;
                margin-right: 10px;
            }
            .white {
                --paper-spinner-color: white;
            }
        </style>
        <div>
            <paper-item on-tap="toggleHideReplies" id="topicitem" class="light-borders">
                <paper-item-body three-line="" class="basic-top-bottom-padding">
                    <div class="flex-parent">
                        <h5 class="flex-1">[[post.properties.subject]]</h5>
                        <span class="flex-right">
                            <d2l-user-name href="{{authorHref}}" token="{{token}}"></d2l-user-name>
                        </span>
                    </div>
                    <div class="flex-parent">
                        <span class="flex-1">[[post.properties.replies]] replies, [[post.properties.unread]] unread</span>
                        <span class="flex-right">[[date]]</span>
                    </div>
                    <span style="font-size: 14px;" id="message"></span>
                </paper-item-body>
            </paper-item>
            <template is="dom-if" if="{{!hideReplies}}">
                <d2l-discussions-topic-post-reply-list href="[[repliesHref]]" token="{{token}}"></d2l-discussions-topic-post-reply-list>
                <div hidden="{{!canReply}}" class="flex-parent new-thread-container basic-left-padding">
                    <paper-input class="flex-1" style="width: 100%" label="Reply to this thread" value="{{reply}}"></paper-input>
                    <paper-button style="background-color: cornflowerblue; color: white; height: 100%; margin-top: 20px;" on-tap="_sendReply">
                        <template is="dom-if" if="{{!sendingReply}}">
                            <span>Send</span>
                        </template>
                        <template is="dom-if" if="{{sendingReply}}">
                            <paper-spinner-lite active="" class="white" style="width: 18px; height: 18px;"></paper-spinner-lite>
                        </template>
                    </paper-button>
                </div>
            </template>
        </div>
        <slot></slot>
`;
	}

	static get interesting() {
		return [
			{
				getLinks: entity => entity.getActionByName('get-all-posts'),
				elements: [window.customElements.get('d2l-discussions-topic-post-reply-list')]
			}, {
				getLinks: entity => entity.getLinkByRel('author'),
				elements: [window.customElements.get('d2l-user-name')]
			}
		];
	}

	static get is() { return 'd2l-discussions-topic-post-item'; }

	static get properties() {
		return {
			post: {
				type: Object,
				value: {}
			},
			token: String,
			href: String,
			date: {
				type: String,
				value: ''
			},
			repliesHref: {
				type: String,
				value: ''
			},
			hideReplies: {
				type: Boolean,
				value: true
			},
			authorHref: {
				type: String,
				value: ''
			},
			reply: String,
			canReply: {
				type: String,
				value: false
			},
			readClass: {
				type: String,
				value: 'read'
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

	_changed(entity) {
		this.post = entity;
		var dateEntity = this.post.getSubEntityByClass('created');
		if (dateEntity) {
			var uglyAssDate = dateEntity.properties.date;
			this.date = new Intl.DateTimeFormat(this.locale, { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date(uglyAssDate));
		}
		this.repliesHref = this.post.getActionByName('get-all-posts') && this.post.getActionByName('get-all-posts').href;
		this.authorHref = entity.getLinkByRel('author') && entity.getLinkByRel('author').href;
		this.canReply = this.post.hasActionByName('reply');
		if (this.post.properties && this.post.properties.unread > 0) this.readClass = 'unread';
		else this.readClass = 'read';
		this.$.topicitem.classList.add(this.readClass);
		// THIS IS NOT SAFE. YOU WILL DIE. DO NOT SHIP THIS.
		this.$.message.innerHTML = this.get('entity.properties.message');
		// I MEAN IT!! THIS IS NOT SAFE. YOU WILL DIE. DO NOT SHIP THIS.
	}

	toggleHideReplies() {
		this.hideReplies = !this.hideReplies;
	}

	_sendReply() {
		var self = this;
		var action = this.post.getActionByName('reply');
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
}

window.customElements.define(DiscussionsTopicPostItem.is, DiscussionsTopicPostItem);

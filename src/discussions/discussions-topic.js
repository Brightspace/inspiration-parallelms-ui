import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-spinner/paper-spinner-lite.js';
import { PrefetchMixin } from '../prefetch-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { SirenActionMixin } from '../siren-action-mixin.js';
import '../shared-styles.js';
import './discussions-topic-post-list.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes SirenActionMixin */
/* @mixes PrefetchMixin */
/* @mixes SirenEntityMixin */
class DiscussionsTopic extends SirenActionMixin(PrefetchMixin(SirenEntityMixin(PolymerElement))) {
	static get template() {
		return html`
        <style include="shared-styles">
            :host {
                display: block;
                font-size: 12px;
            }
            span {
                font-size: 12px;
            }
            h4 {
                margin: 0;
            }
            [hidden] {
                display: none !important;
            }
            .topic {
                width: calc(100% - 20px); margin: 10px; padding: 0;
            }
            .topic-header {
                background: lightgrey; color: white; padding: 10px;
                display: block;
            }
            .create-threads-input-container {
                padding:5px 10px 0 16px; background-color: lightgrey
            }
            .create-thread-input {
                width: 100%;
            }
            .white {
                --paper-spinner-color: white;
            }
        </style>
        <paper-card class="topic">
            <paper-item class="topic-header" on-tap="_toggleShowPosts">
                <h4>[[topic.properties.name]]</h4>
                <span id="desc"></span>
            </paper-item>
            <template is="dom-if" if="{{showPosts}}">
                <d2l-discussions-topic-post-list href="{{getThreadsHref}}" token="{{token}}"></d2l-discussions-topic-post-list>
                <div hidden="{{!canCreateThread}}" class="create-threads-input-container">
                    <span>Create a thread</span>
                    <div class="flex-parent">
                        <paper-input class="flex-1 create-thread-input" label="Subject" value="{{subject}}"></paper-input>
                        <paper-input class="flex-1 create-thread-input" label="Message" value="{{message}}"></paper-input>
                        <paper-button style="font-size: 12px; background-color: cornflowerblue; color: white; height: 100%; margin-top: 20px;" on-tap="_sendReply">
                            <template is="dom-if" if="{{!sendingReply}}">
                                <span>Create</span>
                            </template>
                            <template is="dom-if" if="{{sendingReply}}">
                                <paper-spinner-lite active="" class="white" style="width: 18px; height: 18px;"></paper-spinner-lite>
                            </template>
                        </paper-button>
                    </div>
                </div>
            </template>
        </paper-card>
        <slot></slot>
`;
	}

	static get interesting() {
		return [
			{
				getLinks: entity => entity.getActionByName('get-threads'),
				elements: [window.customElements.get('d2l-discussions-topic-post-list')]
			}
		];
	}

	static get is() { return 'd2l-discussions-topic'; }

	static get properties() {
		return {
			topic: {
				type: Object,
				value: {}
			},
			getThreadsHref: {
				type: String
			},
			getThreadsPageSize: {
				type: Number,
				value: 20
			},
			token: String,
			href: String,
			subject: String,
			message: String,
			canCreateThread: {
				type: Boolean,
				value: false
			},
			showPosts: {
				type: Boolean,
				value: false
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
		this.topic = entity;
		this.getThreadsHref = entity.getActionByName('get-threads') &&  entity.getActionByName('get-threads').href;
		this.canCreateThread = this.topic.hasActionByName('create-thread');
		// not safe don't do this
		this.$.desc.innerHTML = this.get('entity.properties.description');
	}

	_sendReply() {
		var self = this;
		var action = this.topic.getActionByName('create-thread');
		if (action) {
			this.sendingReply = true;
			var fields = this.getSirenFields(action);
			fields.has('message') && fields.set('subject', self.subject);
			fields.has('message') && fields.set('message', self.message);
			fields.has('isHtml') && fields.set('isHtml', true);
			this.performSirenAction(action, fields).then(function() {
				self.subject = '';
				self.message = '';
				self.sendingReply = false;
			});
		}
	}

	_toggleShowPosts() {
		this.showPosts = !this.showPosts;
	}
}

window.customElements.define(DiscussionsTopic.is, DiscussionsTopic);

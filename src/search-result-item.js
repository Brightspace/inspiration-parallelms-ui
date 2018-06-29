import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/paper-card/paper-card.js';
import './discussions/discussions-topic-post-item.js';
import './discussions/discussions-forum-item.js';
import './discussions/discussions-topic.js';
import './user/user-card.js';
import './content/content-activity-item.js';
import './content/content-module-card.js';
import './courses/course-item.js';
import './activities/user-activity-usage.js';
import './discussions/discussions-topic-post-reply-item.js';
import './updates/update-item.js';
import './updates/update-item-grades.js';
import './notes/contextual-note.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class SearchResultItem extends PolymerElement {
	static get template() {
		return html`
        <style include="shared-styles">
            :host {
                display: block;
            }
        </style>

        <div>
            <template is="dom-if" if="{{isThread}}">
                <d2l-discussions-topic-post-item href="{{result.href}}" token="{{result.token}}"></d2l-discussions-topic-post-item>
            </template>
            <template is="dom-if" if="{{isForum}}">
                <d2l-discussions-forum-item href="{{result.href}}" token="{{result.token}}"></d2l-discussions-forum-item>
            </template>
            <template is="dom-if" if="{{isTopic}}">
                <d2l-discussions-topic href="{{result.href}}" token="{{result.token}}"></d2l-discussions-topic>
            </template>
            <template is="dom-if" if="{{isCourseOffering}}">
                <d2l-course-item href="{{result.href}}" token="{{result.token}}"></d2l-course-item>
            </template>
            <template is="dom-if" if="{{isUser}}">
                <d2l-user-card href="{{result.href}}" token="{{result.token}}"></d2l-user-card>
            </template>
            <template is="dom-if" if="{{isActivity}}">
                <d2l-user-activity-usage href="{{result.href}}" token="{{result.token}}"></d2l-user-activity-usage>
            </template>
            <template is="dom-if" if="{{isPost}}">
                <d2l-discussions-topic-post-reply-item href="{{result.href}}" token="{{result.token}}"></d2l-discussions-topic-post-reply-item>
            </template>
            <template is="dom-if" if="{{isGrade}}">
                <d2l-update-item-grades href="{{result.href}}" token="{{result.token}}"><!--<d2l-update-item-grades -->
            </d2l-update-item-grades></template>
            <template is="dom-if" if="{{isNews}}">
                <d2l-update-item href="{{result.href}}" token="{{result.token}}"><!--<d2l-update-item -->
            </d2l-update-item></template>
            <template is="dom-if" if="{{isModule}}">
                <d2l-content-module-card href="{{result.href}}" token="{{result.token}}"><!--<d2l-content-module-card-->
            </d2l-content-module-card></template>
            <template is="dom-if" if="{{isContent}}">
                <d2l-content-activity-item href="{{result.href}}" token="{{result.token}}"><!--<d2l-content-activity-item -->
            </d2l-content-activity-item></template>
			<template is="dom-if" if="{{isNote}}">
                <d2l-contextual-note href="{{result.href}}" token="{{result.token}}"><!--<d2l-contextual-note -->
            </d2l-contextual-note></template>
            <template is="dom-if" if="{{isAMystery}}">
                What the HYPERMEDIA is this?
            </template>
        </div>
`;
	}

	static get is() { return 'd2l-search-result-item'; }

	static get properties() {
		return {
			result: Object,
			isThread: Boolean,
			isForum: Boolean,
			isTopic: Boolean,
			isCourseOffering: Boolean,
			isUser: Boolean,
			isActivity: Boolean,
			isPost: Boolean,
			isGrade: Boolean,
			isNews: Boolean,
			isContent: Boolean,
			isModule: Boolean,
			isNote: Boolean,
			isAMystery: Boolean
		};
	}

	static get observers() {
		return [
			'_resultChanged(result)'
		];
	}

	_resultChanged(result) {
		this.isAMystery = false;
		this.isThread = this.isForum = this.isTopic = this.isCourseOffering =
		this.isUser = this.isActivity = this.isPost = this.isGrade = this.isNews =
		this.isContent = this.isModule = this.isNote = false;
		switch (result.type) {
			case 'thread':
				this.isThread = true;
				break;
			case 'forum':
				this.isForum = true;
				break;
			case 'topic':
				this.isTopic = true;
				break;
			case 'course-offering':
				this.isCourseOffering = true;
				break;
			case 'user':
				this.isUser = true;
				break;
			case 'activity':
				this.isActivity = true;
				break;
			case 'post':
				this.isPost = true;
				break;
			case 'grade':
				this.isGrade = true;
				break;
			case 'news':
				this.isNews = true;
				break;
			case 'content':
				this.isContent = true;
				break;
			case 'module':
				this.isModule = true;
				break;
			case 'note':
				this.isNote = true;
				break;
			default:
				this.isAMystery = true;
		}
	}
}

window.customElements.define(SearchResultItem.is, SearchResultItem);

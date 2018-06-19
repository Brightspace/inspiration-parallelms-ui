import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import 'd2l-image/d2l-image.js';
import '@polymer/paper-card/paper-card.js';
import '../shared-styles.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes SirenEntityMixin */
class ContentFileViewer extends SirenEntityMixin(PolymerElement) {
	static get template() {
		return html`
        <style include="shared-styles">
            :host {
                display: block;
            }
            .image {
                width: 50px;
                height: 50px;
            }
            .center {
                align-self: center;
            }
            .content-iframe {
                width: 100%;
                height: 500px;
                border: none;
            }
        </style>
        <div>
            <template is="dom-if" if="[[isHtml]]">
                <iframe src="[[link]]" class="content-iframe"></iframe>
            </template>
            <template is="dom-if" if="[[isImage]]">
                <d2l-image image-url="[[link]]" token="{{token}}"></d2l-image>
            </template>
        </div>
`;
	}

	static get is() { return 'd2l-content-file-viewer'; }

	static get properties() {
		return {
			link: {
				type: String,
				value: ''
			},
			isHtml: {
				type: Boolean,
				value: false
			},
			isImage: {
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
		const _this = this;
		const fileActivity = entity.getSubEntityByClass('file-activity');
		if (fileActivity) {
			const file = fileActivity.getSubEntityByClass('file');
			const _link = file.getLinkByRel('alternate');
			switch (_link.type) {
				case 'text/html': {
					_this.link = _link.href;
					_this.isHtml = true;
					break;
				}
				case 'image/jpg':
				case 'image/jpeg':
				case 'image/png':
				case 'image/gif':
				case 'image/tif': {
					_this.link = _link.href;
					_this.isImage = true;
					break;
				}
			}
			return;
		}

		const linkActivity = entity.getSubEntityByClass('link-activity');
		if (linkActivity) {
			const _link = linkActivity.getLinkByRel('about');
			_this.link = _link.href;
			_this.isHtml = true;
			return;
		}
	}
}

window.customElements.define(ContentFileViewer.is, ContentFileViewer);

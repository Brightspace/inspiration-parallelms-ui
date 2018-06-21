import { SirenEntityMixin } from '../siren-entity-mixin.js';
import 'd2l-image/d2l-image.js';
import '@polymer/paper-card/paper-card.js';
import '../shared-styles.js';
import { cssFromModules } from '@polymer/polymer/lib/utils/style-gather.js';
import { LitElement, html } from '@polymer/lit-element';
/* @mixes SirenEntityMixin */
class ContentFileViewer extends SirenEntityMixin(LitElement) {
	_render({ entity, token }) {
		let link;
		let isHtml;
		let isImage;
		if (entity) {
			const fileActivity = entity.getSubEntityByClass('file-activity');
			const linkActivity = entity.getSubEntityByClass('link-activity');
			if (fileActivity) {
				const file = fileActivity.getSubEntityByClass('file');
				const _link = file.getLinkByRel('alternate');
				switch (_link.type) {
					case 'text/html': {
						link = _link.href;
						isHtml = true;
						break;
					}
					case 'image/jpg':
					case 'image/jpeg':
					case 'image/png':
					case 'image/gif':
					case 'image/tif': {
						link = _link.href;
						isImage = true;
						break;
					}
				}
			} else if (linkActivity) {
				const _link = linkActivity.getLinkByRel('about');
				link = _link.href;
				isHtml = true;
			}
		}
		return html`
        <style>
			${cssFromModules('shared-styles')}
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
			${ isHtml ? html`<iframe src="${link}" class="content-iframe"></iframe>` : null }
			${ isImage ? html`<d2l-image imageUrl="${link}" token="${token}"></d2l-image>` : null }
        </div>
`;
	}

	static get is() { return 'd2l-content-file-viewer'; }
}

window.customElements.define(ContentFileViewer.is, ContentFileViewer);

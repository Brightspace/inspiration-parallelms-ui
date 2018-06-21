import 'd2l-image/d2l-image.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { LitElement, html } from '@polymer/lit-element';
/* @mixes SirenEntityMixin */
class UserImage extends SirenEntityMixin(LitElement) {
	_render({ entity, token }) {
		let imageHref, isDefault;
		if (entity) {
			const userProfile = entity.getSubEntityByRel('https://api.brightspace.com/rels/user-profile');
			const profileImage = userProfile && userProfile.getSubEntityByRel('https://api.brightspace.com/rels/profile-image');
			const image = profileImage && profileImage.getLinkByRel('alternate');
			imageHref = image && image.href;
			isDefault = !!profileImage && profileImage.hasClass('default-image');
		}
		return html`
        <style>
            :host {
                display: block;
            }

            d2l-image, img {
                max-height: 400px;
                max-width: 400px;
            }

			img {
				width: 100%;
				height: 100%;
			}
        </style>
		${isDefault ? html`<img src="${imageHref}"></img>` : html`<d2l-image imageUrl="${imageHref}" token="${token}"></d2l-image>`}
`;
	}

	static get is() { return 'd2l-user-image'; }
}

window.customElements.define(UserImage.is, UserImage);

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import 'd2l-image/d2l-image.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* @mixes SirenEntityMixin */
class UserImageTop extends SirenEntityMixin(PolymerElement) {
	static get template() {
		return html`
        <style>
            :host {
                display: block;
            }

            .user-image-top {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        </style>
        <d2l-image class="user-image-top" image-url="{{image.href}}" token="{{token}}"></d2l-image>
`;
	}

	static get is() { return 'd2l-user-image-top'; }

	static get properties() {
		return {
			userProfile: {
				type: Object,
				computed: '_getSubEntityByRel(entity, "https://api.brightspace.com/rels/user-profile")'
			},
			profileImage: {
				type: Object,
				computed: '_getSubEntityByRel(userProfile, "https://api.brightspace.com/rels/profile-image")'
			},
			image: {
				type: Object,
				computed: '_getLinkByRel(profileImage, "alternate")'
			},
			isDefault: {
				type: Boolean,
				computed: '_hasClass(profileImage, "default-image")'
			}
		};
	}
}

window.customElements.define(UserImageTop.is, UserImageTop);

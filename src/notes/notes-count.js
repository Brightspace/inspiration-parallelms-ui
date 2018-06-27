import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

/* @mixes SirenEntityMixin */
class NotesCount extends SirenEntityMixin(PolymerElement) {
	static get template() {
		return html`
		<style>
            :host {
                display: block;
            }

						.box
						{
							position: relative;
							padding-top: .25em;
							padding-bottom: .25em;
							padding-left:	.65em;
							padding-right: .65em;
							margin: 0 auto;
							background-color: #feff3c;
							-webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1);
							-moz-box-shadow: 0 0 4px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1);
							box-shadow: 0 0 5px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1);
						}

						.box:before, .box:after
						{
							position: absolute;
							width: 40%;
							height: 10%;
							content: ' ';
							left: .2px;
							bottom: .2px;
							background: transparent;
							-webkit-transform: skew(-5deg) rotate(-5deg);
							-moz-transform: skew(-5deg) rotate(-5deg);
							-ms-transform: skew(-5deg) rotate(-5deg);
							-o-transform: skew(-5deg) rotate(-5deg);
							transform: skew(-5deg) rotate(-5deg);
							-webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
							-moz-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
							box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
							z-index: -1;
						}
		</style>
    <div class="box">
			[[notesCount]]
		</div>
`;
	}

	static get is() { return 'd2l-notes-count'; }

	static get properties() {
		return {
			hasNotes: {
				type: Boolean,
				computed: '_hasNotes(notesCount)'
			},
			notesCount: {
				type: Number,
				value: 0
			}
		};
	}

	static get observers() {
		return [
			'_changed(entity)'
		];
	}
	_hasNotes(notesCount) {
		return notesCount > 0;
	}
	_changed(entity) {
		if (!entity.properties) return;
		this.notesCount = entity.properties.count;
	}
}

window.customElements.define(NotesCount.is, NotesCount);

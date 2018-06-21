import { PrefetchMixin } from '../prefetch-mixin.js';
import { SirenEntityMixin } from '../siren-entity-mixin.js';
import '../course-name.js';
import './activity-card.js';
import '@polymer/paper-item/paper-item.js';
import { LitElement, html } from '@polymer/lit-element';
/* @mixes PrefetchMixin
   @mixes SirenEntityMixin */
class UserActivityUsage extends PrefetchMixin(SirenEntityMixin(LitElement)) {
	_render({ entity, locale, token }) {
		let dueDate, activityHref, organizationHref;
		let complete = false;
		if (entity) {
			if (entity.hasSubEntityByClass('due-date')) {
				const dateEntity = entity.getSubEntityByClass('due-date');
				if (dateEntity) {
					var uglyAssDate = dateEntity.properties.date;
					dueDate = new Intl.DateTimeFormat(locale, { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false }).format(new Date(uglyAssDate));
				}
			}
			if (entity.hasLinkByRel('https://api.brightspace.com/rels/assignment')) {
				activityHref = entity.getLinkByRel('https://api.brightspace.com/rels/assignment').href;
			} else if (entity.hasLinkByRel('https://api.brightspace.com/rels/quiz')) {
				activityHref = entity.getLinkByRel('https://api.brightspace.com/rels/quiz').href;
			}
			if (entity.hasLinkByRel('https://api.brightspace.com/rels/organization')) {
				organizationHref = entity.getLinkByRel('https://api.brightspace.com/rels/organization').href;
			}

			complete = entity.hasSubEntityByClass('complete');
		}
		return html`
        <style>
            :host {
                display: block;
                overflow:hidden;
            }

            .info-box {
                display: flex;
                padding: 10px;
                width: 100%;
            }

            .info-box > * {
                align-self: center;
            }

            .completion {
                padding: 10px;
                border-radius: 10px;
                color:white;
                font-weight: 400;
                width: max-content;
            }

            .right-space {
                margin-right: 10px;
                align-self: center;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .completion-info {
                flex: 1; display: flex;
            }
            @media (max-width:800px) {
                .completion-info {
                    flex: 1;
                    display: block;
                }
                .info-box {
                    display: block;
                }
            }
        </style>


        <paper-item>
            <div class="info-box">
                <div class="completion-info">
                    <div class="right-space">
						${ complete ? html`
							<div class="completion" style="background: #46A661;">COMPLETE</div>` : html`
							<div class="completion" style="background: #CD2026;">NOT COMPLETE</div>` }
                    </div>
                    <d2l-activity-card class="right-space" href="${activityHref}" token="${token}" style="font-weight: bold"></d2l-activity-card>
                    <span style="align-self: center;">in&nbsp;</span><d2l-course-name href="${organizationHref}" token="${token}" class="right-space"></d2l-course-name>
                </div>
                <span style="display: inline-block;">Due ${dueDate}</span>
            </div>
        </paper-item>
`;
	}

	static get interesting() {
		return [
			{
				getLinks: entity => entity.getLinkByRel('https://api.brightspace.com/rels/assignment'),
				elements: [window.customElements.get('d2l-activity-card')]
			}, {
				getLinks: entity => entity.getLinkByRel('https://api.brightspace.com/rels/quiz'),
				elements: [window.customElements.get('d2l-activity-card')]
			}, {
				getLinks: entity => entity.getLinkByRel('https://api.brightspace.com/rels/organization'),
				elements: [window.customElements.get('d2l-course-name')]
			}
		];
	}

	static get is() { return 'd2l-user-activity-usage'; }
}

window.customElements.define(UserActivityUsage.is, UserActivityUsage);

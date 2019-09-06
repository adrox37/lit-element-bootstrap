
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss, BsContentTypographyCss } from '@lit-element-bootstrap/content';

export class BsAlertLink extends LitElement {

    static get properties() {
        return {
            href: String,
            target: String
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            css`
                a {
                    font-weight: 700;
                }
                
                :host([primary]) a {
                    color: #002752;
                }

                :host([secondary]) a {
                    color: #202326;
                }

                :host([success]) a {
                    color: #0b2e13;
                }

                :host([info]) a {
                    color: #062c33;
                }

                :host([warning]) a {
                    color: #533f03;
                }

                :host([danger]) a {
                    color: #491217;
                }

                :host([light]) a {
                    color: #686868;
                }

                :host([dark]) a {
                    color: #040505;
                }
            `
        ];
    }

    render() {
        return html`
            <a href="${this.href}" .target="${this.target}"><slot></slot></a>
        `;
    }
    
    constructor() {
        super();
        this.href = '';
        this.target = '_self';
    }
};

if(!window.customElements.get("bs-alert-link"))  
    window.customElements.define('bs-alert-link', BsAlertLink);
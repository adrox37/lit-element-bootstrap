
import { LitElement, html, css } from 'lit-element';
import { BsDropdownItemMixin } from './bs-dropdown-item-mixin';
import { BsDropdownItemCss } from './bs-dropdown-item-css';
import { BsContentRebootCss } from '../../content';

export class BsDropdownItemLink extends BsDropdownItemMixin(LitElement) {
    
    static get properties() {
        return {
            index: Number,
            title: String,
            target: String
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsDropdownItemCss
        ];
    }
    
    render() {
        return html`

            <!-- TODO: replace the title property with a slot -->
            
            <a href="${this.target}" class="dropdown-item">${this.title}</a>
        `;
    }
    
    constructor() {
        super();
        this.index = 0;
        this.title = '';
        this.target = '#';
    }
};

if (!window.customElements.get("bs-dropdown-item-link")) window.customElements.define('bs-dropdown-item-link', BsDropdownItemLink);
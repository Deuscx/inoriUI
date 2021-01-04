import { LitElement, html } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import { style } from "./style-css";
/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class IButton extends LitElement {
  static get styles() {
    return style;
  }
  static get properties() {
    return {
      disabled: {
        type: Boolean,
      },
      href: {
        type: String,
      },
      download: {
        type: String,
      },
      icon: {
        type: String,
      },
      type: {
        type: String,
      },
      size: {
        type: String,
      },
      loading: {
        type: Boolean,
      },
    };
  }

  render() {
    return html`${this.href ? this.renderAnchor() : this.renderBtn()}`;
  }

  getRenderClasses() {
    return classMap({
      [`i-btn-${this.type}`]: this.type,
      "i-btn-default": !this.type,
      [`i-btn-${this.getSize(this.size)}`]: this.size,
    });
  }

  getSize(size) {
    const sizeMap = {
      large: "lg",
      small: "sm",
    };
    return sizeMap[size];
  }

  renderBtn() {
    return html`<button
      class="i-btn ${this.getRenderClasses()}"
      ?disabled="${this.disabled}"
    >
      ${this.loading ? html`<i-loading></i-loading>` : ""}
      ${this.icon && !this.loading && this.renderIcon()}
      <slot></slot>
    </button>`;
  }

  renderAnchor() {
    return html`<a
      class="i-btn ${this.getRenderClasses()}"
      ?disabled="${this.disabled}"
      href="${this.href}"
      download="${this.download}"
      rel="null"
      target="_blank"
    >
      ${this.loading ? html`<i-loading></i-loading>` : ""}
      ${this.icon && !this.loading && this.renderIcon()}
      <slot></slot>
    </a>`;
  }

  renderIcon() {
    return html`<span class="leading-icon">
      <i-icon name="${this.icon}"> </i-icon>
    </span>`;
  }
  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
  }
}

customElements.define("i-button", IButton);

export default IButton;

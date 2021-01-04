import { LitElement, html } from "lit-element";
import { style } from "./style-css.js";
import { styleMap } from "lit-html/directives/style-map";
import { classMap } from "lit-html/directives/class-map";
/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class ILoading extends LitElement {
  static get properties() {
    return {
      size: {
        type: String,
      },
      color: {
        type: String,
      },
      type: {
        type: String,
      },
    };
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
    this.type = "line";
  }

  static get styles() {
    return style;
  }

  /**
   * Implement to describe the element's DOM using lit-html.
   * Use the element current props to return a lit-html template result
   * to render into the element.
   */
  render() {
    return html`
      <svg class="i-loading" viewBox="22 22 44 44" style="${this.getStyle()}">
        <circle
          class="circle"
          cx="44"
          cy="44"
          r="20.2"
          fill="none"
          stroke-width="3.6"
        ></circle>
      </svg>
      <slot></slot>
    `;
  }

  getClass() {
    return classMap({
      [`i-loading-${this.type}`]: this.type,
    });
  }

  getStyle() {
    return styleMap({
      color: this.color,
      fontSize: this.size * 10,
    });
  }
}

customElements.define("i-loading", ILoading);

export default ILoading;

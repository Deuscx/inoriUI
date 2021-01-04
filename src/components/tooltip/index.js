import { LitElement, html } from "lit-element";
import { style } from "./style-css";
/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class ToolTip extends LitElement {
  static get properties() {
    return {
      flow: { type: String },
      color: { type: String },
      type: { type: String },
    };
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
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
    return html`<slot></slot>`;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "color" && this.shadowRoot) {
      this.style.setProperty("--bg", newValue);
    }
  }
}

customElements.define("i-tooltip", ToolTip);

export default ToolTip;

import { LitElement, html } from "lit-element";
import { style } from "./style-css";
import { classMap } from "lit-html/directives/class-map";
/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class Input extends LitElement {
  static get properties() {
    return {
      type: { type: String },
      value: { type: String },
      label: { type: String },
      disabled: { type: Boolean, reflect: true },
      placeholder: { type: String },
    };
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
    this.value = "";
    this.label = "";
  }

  static get styles() {
    return [style];
  }

  handleChange(e) {
    this.value = e.target.value;
    this.dispatchEvent(
      new CustomEvent("change", {
        bubbles: true,
        composed: true,
        detail: {
          value: this.value,
        },
      })
    );
  }

  handleInput(e) {
    this.value = e.target.value;
    this.dispatchEvent(
      new CustomEvent("input", {
        bubbles: true,
        composed: true,
        detail: {
          value: this.value,
        },
      })
    );
  }
  /**
   * Implement to describe the element's DOM using lit-html.
   * Use the element current props to return a lit-html template result
   * to render into the element.
   */
  render() {
    return this.renderDefault();
  }
  get _input() {
    return this.shadowRoot.querySelector(".input");
  }
  renderDefault() {
    return html`
      <input
        @change=${this.handleChange}
        @input=${this.handleInput}
        class=${this.getClassMap()}
        .value="${this.value}"
        .placeholder="${this.placeholder || this.label}"
        ?disabled="${this.disabled}"
      />
      <label>${this.label}</label>
      <slot name="addonAfter"></slot>
    `;
  }

  renderNumber() {}

  renderSearch() {}

  renderPassword() {}

  getClassMap() {
    return classMap({ input: true, "material-input": !!this.label });
  }
}

customElements.define("i-input", Input);

export default Input;

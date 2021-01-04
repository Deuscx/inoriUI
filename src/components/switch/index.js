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
class Switch extends LitElement {
  static get properties() {
    return {
      disabled: {
        type: Boolean,
        reflect: true,
      },
      checked: {
        type: Boolean,
        reflect: true,
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

    this.disabled = this.getAttribute("disabled") !== null;
    this.checked = this.getAttribute("checked") !== null;
  }
  get _switch() {
    return this.shadowRoot.querySelector("#switch");
  }
  static get styles() {
    return [style];
  }

  /**
   * Implement to describe the element's DOM using lit-html.
   * Use the element current props to return a lit-html template result
   * to render into the element.
   */
  render() {
    return html` <input
        type="checkbox"
        id="switch"
        .disabled="${this.disabled}"
        .checked="${this.checked}"
        @change=${this.handleChange}
      /><label for="switch"></label>`;
  }

  handleChange(e) {
    this.checked = e.target.checked;
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: {
          checked: this.checked,
        },
      })
    );
  }

  attributeChangedCallback(name, old, value) {
    if (name === "disabled" && this.shadowRoot) {
      if (this._switch && old !== value) {
        if (value === null || value === false) {
          this.removeAttribute("disabled");
          this._switch.removeAttribute("disabled");
        } else {
          this.setAttribute("disabled", "");
          this._switch.setAttribute("disabled", "disabled");
        }
      }
    }

    if (name === "checked" && this.shadowRoot) {
      if (this._switch && old !== value) {
        if (value !== null) {
          this._switch.checked = true;
        } else {
          this._switch.checked = false;
        }
      }
    }
  }
}

customElements.define("i-switch", Switch);

export default Switch;

import { LitElement, html } from "lit-element";
import { style as rowStyle } from "./row-css.js";
import { style as colStyle } from "./col-css.js";
/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class Row extends LitElement {
  static get properties() {
    return {
      gutter: {
        type: Array,
      },
      justify: {
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
  }

  static get styles() {
    return [rowStyle];
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
    if (name === "gutter" && this.shadowRoot) {
      let formatV = JSON.parse(newValue);
      if (typeof formatV === "number") {
        this.style.setProperty("--colgap", formatV + "px");
        if (this.style.getPropertyValue("--rowgap") !== "0px") {
          this.style.setProperty("--rowgap", 0 + "px");
        }
      } else if (Object.prototype.toString.call(formatV) === "[object Array]") {
        let [colgap, rowgap] = formatV;
        this.style.setProperty("--colgap", colgap + "px");
        this.style.setProperty("--rowgap", rowgap + "px");
      } else {
        throw new Error(" gutter should be array or number");
      }
    }

    if (name === "justify" && this.shadowRoot) {
      this.style.setProperty("--justify", newValue);
    }
  }
}

customElements.define("i-col", Row);

class Col extends LitElement {
  static get properties() {
    return {
      span: {
        type: Number,
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
  }

  static get styles() {
    return [colStyle];
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
    if (name == "span" && this.shadowRoot) {
      this.style.setProperty("--span", newValue);
    }
  }
}

customElements.define("i-row", Col);
export { Row, Col };

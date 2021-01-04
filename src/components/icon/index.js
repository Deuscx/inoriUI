import { LitElement, html } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import { styleMap } from "lit-html/directives/style-map";
import { style } from "./style-css";

/**
 * `IIcon` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class IIcon extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      color: { type: String },
      size: { type: String },
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
    this.typeMap = {
      default: "Material Icons",
      outline: "Material Icons Outlined",
      round: "Material Icons Round",
      two: "Material Icons Two Tone",
      sharp: "Material Icons Sharp",
    };
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
    const Type = this.type ? this.typeMap[this.type] : "Material Icons";
    return html`<i
      class=${classMap({
        "material-icons": true,
      })}
      style="${styleMap({
        fontFamily: Type,
        fontStyle: "normal",
        color: this.color,
      })}"
      >${this.name}</i
    >`;
  }
}

customElements.define("i-icon", IIcon);
export default IIcon;

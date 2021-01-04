import { LitElement, html } from "lit-element";
import { style } from "./style-css";
class MyElement extends LitElement {
  constructor() {
    super();
    //初始化属性
    this.message = "Hello world! From my-element";
    this.myBool = true;
    this.myArray = ["an", "array", "of", "test", "data"];
  }

  static get styles() {
    return style;
  }
  static get properties() {
    //定义属性
    return {
      message: { type: String },
      myBool: { type: Boolean },
      myArray: { type: Array },
    };
  }

  render() {
    // array / boolean 可使用的逻辑运算符
    return html`
      <p class="${this.myBool ? "red" : "blue"}">styled paragraph</p>
      <p>${this.message}</p>
      <ul>
        ${this.myArray.map((item) => html`<li>${item}</li>`)}
      </ul>
      ${this.myBool
        ? html`<p>Render some HTML if myBool is true</p>`
        : html`<p>Render some other HTML if myBool is false</p>`}
      <!--  Add a button with an event listener -->
      <button @click=${this.clickHandler}>Click</button>
    `;
  }

  //事件
  clickHandler(event) {
    console.log(event.target);
    this.myBool = !this.myBool;
  }
}

customElements.define("my-element", MyElement);

export default MyElement;

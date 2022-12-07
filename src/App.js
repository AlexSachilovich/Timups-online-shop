import { Component } from "./core";
import "./components";
export class App extends Component {
  render() {
    return `
       <t-header></t-header>
       <t-main></t-main>
        `;
  }
}

customElements.define("my-app", App);

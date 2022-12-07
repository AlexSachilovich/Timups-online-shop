import { Component } from "./core";
import "./components";
export class App extends Component {
  render() {
    return `
       <t-header></t-header>
        `;
  }
}

customElements.define("my-app", App);

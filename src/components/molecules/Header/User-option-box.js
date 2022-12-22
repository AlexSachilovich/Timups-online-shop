import { Component } from "../../../core";
import "./user-option-box.scss";
export class UserOptionBox extends Component {
  constructor() {
    super();
    this.quantity = 0;
  }
  render() {
    return `
        <div class="user_option-box">
            <a href="">
              <i class="fa fa-user" aria-hidden="true"></i>
            </a>
              <a href="">
                <i class="fa fa-search" aria-hidden="true"></i>
              </a>
            <a class="position-relative" href="">
              <i class="fa fa-cart-plus" aria-hidden="true"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  ${this.quantity}
              </span>
            </a>
        </div>
        `;
  }
}

customElements.define("t-user-option-box", UserOptionBox);

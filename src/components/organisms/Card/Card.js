import { Component } from "../../../core";
import "./card.scss";
export class Card extends Component {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return ["poster", "title", "price"];
  }
  render() {
    return `

    <div class="row">
          <div class="col-sm-6 col-xl-3">
            <div class="box">
                <div class="img-box">
                  <img src="../../assets/images/${this.props.poster}" alt="" />
                </div>
                <div class="detail-box">
                  <h6 class="h-box">${this.props.title}</h6>
                  <h6 class="h-box">
                    Price:
                    <span> $${this.props.price} </span>
                  </h6>
                </div>
                <button class="btn">
                  <span> Add to cart </span>
                </button>
            </div>
          </div>
          </div>

        `;
  }
}

customElements.define("t-card", Card);

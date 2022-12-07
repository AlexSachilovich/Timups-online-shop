import { Component } from "../../../core";
import "./main.scss";
export class Main extends Component {
  render() {
    return `
    <main class="shop_section layout_padding">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-xl-3">
            <div class="box">
              <a href="">
                <div class="img-box">
                  <img src="images/w2.png" alt="" />
                </div>
                <div class="detail-box">
                  <h6>Smartwatch</h6>
                  <h6>
                    Price:
                    <span> $125 </span>
                  </h6>
                </div>
                <div class="new">
                  <span> Add to cart </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="btn-box">
          <a href=""> View All </a>
        </div>
      </div>
    </main>
        `;
  }
}

customElements.define("t-main", Main);

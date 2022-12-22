import { Component } from "../../../core";
import "./header.scss";
import "../../../components";
export class Header extends Component {
  render() {
    return `
          <header class="hero_area">
            <header class="header_section">
              <div class="container-fluid">
                <nav class="navbar navbar-expand-lg custom_nav-container">
                  <a class="navbar-brand" href="index.html">
                    <span> Timups </span>
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"fa-search
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class=""> </span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link" href="index.html">Home </a>
                      </li>
                      <li class="nav-item active">
                        <a class="nav-link" href="watches.html">
                          Watches <span class="sr-only"></span></a
                        >
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="about.html"> About </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact Us</a>
                      </li>
                    </ul>
                    <t-user-option-box></t-user-option-box>
                  </div>
                </nav>
              </div>
            </header>
          </header>
        `;
  }
}

customElements.define("t-header", Header);

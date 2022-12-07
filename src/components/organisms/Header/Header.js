import { Component } from "../../../core";
import "./header.scss";
export class Header extends Component {
  render() {
    return `
        <div class="hero_area">
        <!-- header section strats -->
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
                <div class="user_option-box">
                  <a href="">
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-cart-plus" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <!-- end header section -->
      </div>
        `;
  }
}

customElements.define("t-header", Header);

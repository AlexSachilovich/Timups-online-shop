import * as core from "./core";
import "./components";
import { watchesService } from "./services/WatchesService";
export class App extends core.Component {
  constructor() {
    super();
    this.state = {
      watches: [],
    };
  }

  getWatches() {
    watchesService.getWatches().then(({ data }) => {
      this.setState((state) => {
        return {
          ...state,
          watches: data,
        };
      });
    });
  }
  componentDidMount() {
    this.getWatches();
  }

  render() {
    return `
          <t-header></t-header>
          <main class="shop_section layout_padding">
            <div class="container">
                  ${this.state.watches
                    .map(({ title, poster, price }) => {
                      return `
                      <t-card>
                        title="${title}"
                        poster="${poster}"
                        price="${price}"
                      ></t-card>
                    `;
                    })
                    .join(" ")}
            </div>
          </main>
          <t-footer><t-footer>
        `;
  }
}

customElements.define("my-app", App);

{
  /* <it-router>
<nav>
  <ul>
    <li>
        <it-link to="/">Home</it-link>
    </li>
    <li>
        <it-link to="/">Cart</it-link>
    </li>
  </ul>
</nav>
<it-route path="${appRoutes.home}" component="home-page" title="Home Page"></it-route>
<it-route path="${appRoutes.admin}" component="admin-page" title="Admin Page"></it-route>
<it-route path="${appRoutes.signIn}" component="sign-in-page" title="SignIn Page"></it-route>
<it-route path="${appRoutes.signUp}" component="sign-up-page" title="SignUp Page"></it-route>
<it-route path="${appRoutes.movieDetails}/:id" component="movie-details-page" title="Movie Details Page"></it-route>
<it-route path="${appRoutes.errorPage}" component="error-page" title="Not Found Page"></it-route>
<it-outlet></it-outlet>
</it-router> */
}

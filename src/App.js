import React, { Component } from "react";
import ProductList from "./components/productList";
import ProductDetail from "./components/productDetail";
import StyledNavBar from "./components/navBar";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Typography from "typography";
import altonTheme from "typography-theme-alton";
import Helmet from "react-helmet";

altonTheme.headerFontFamily = ["europa", "san-serif"];
altonTheme.bodyFontFamily = ["europa", "san-serif"];
const GlobalStyle = createGlobalStyle`
  @import url("https://use.typekit.net/yli5hth.css");

  body {
    font-family: europa, sans-serif;

    img {
      margin: 0;
    }
  }

`;

class App extends Component {
  constructor(props) {
    super(props);
    this.typography = new Typography(altonTheme);
    this.typography.injectStyles();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Helmet>
            <title>Ace & Tate by Kenny Leung</title>
            <link
              rel="icon"
              href="https://www.aceandtate.com/favicons/mstile-150x150.png"
              type="image/png"
            />
          </Helmet>
          <GlobalStyle />
          <StyledNavBar />
          <Route exact path="/" render={() => <ProductList />} />
          <Route path={`/product/:productSku`} component={ProductDetail} />
        </div>
      </Router>
    );
  }
}

export default App;

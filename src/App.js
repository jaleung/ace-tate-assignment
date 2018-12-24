import React, { Component } from "react";
import "./App.css";
import ProductList from "./components/productList";
import StyledNavBar from "./components/navBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StyledNavBar />
        <ProductList />
      </div>
    );
  }
}

export default App;

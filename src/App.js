import React, { Component } from "react";
import ProductList from "./components/productList";
import ProductDetail from "./components/productDetail";
import StyledNavBar from "./components/navBar";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    data: []
  };
  getData() {
    axios.get(`https://api.aceandtate.com/api/frames`).then(response => {
      const products = response.data.reduce((totalProduct, raw) => {
        raw.variants.forEach(product => {
          totalProduct.push(product);
        });
        return totalProduct;
      }, []);
      this.setState({
        data: products
      });

      // console.log(this.state.data);
    });
  }

  constructor(props) {
    super(props);
    this.getData();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <StyledNavBar />
          <Route
            exact
            path="/"
            render={() => <ProductList data={this.state.data} />}
          />
          <Route path={`/product/:productSku`} component={ProductDetail} />
        </div>
      </Router>
    );
  }
}

export default App;

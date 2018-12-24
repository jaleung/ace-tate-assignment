import React, { Component } from "react";
import ProductList from "./components/productList";
import StyledNavBar from "./components/navBar";
import axios from "axios";

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

      console.log(this.state.data);
    });
  }

  constructor(props) {
    super(props);
    this.getData();
  }
  render() {
    return (
      <div className="App">
        <StyledNavBar />
        <ProductList data={this.state.data} />
      </div>
    );
  }
}

export default App;

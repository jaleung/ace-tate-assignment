import React, { Component } from "react";
import axios from "axios";

class ProductList extends Component {
  state = {
    data: []
  };

  constructor(props) {
    super(props);
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

      console.log(this.state);
    });
  }

  render() {
    return <p>List</p>;
  }
}

export default ProductList;

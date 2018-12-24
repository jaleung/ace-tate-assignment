import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Card from "./card";

const StyledSection = styled.section`
  margin-top: 60px;
`;

class ProductList extends Component {
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
      <StyledSection>
        {this.state.data.map(card => (
          <Card key={card.sku} {...card} />
        ))}
      </StyledSection>
    );
  }
}

export default ProductList;

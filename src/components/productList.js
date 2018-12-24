import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Card from "./card";
import { Container, Row, Col } from "react-grid-system";

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
        <Container>
          <Row>
            {this.state.data.map(card => (
              <Col key={card.sku} sm={4}>
                <Card {...card} />
              </Col>
            ))}
          </Row>
        </Container>
      </StyledSection>
    );
  }
}

export default ProductList;

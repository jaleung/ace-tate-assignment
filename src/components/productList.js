import React from "react";
import Card from "./card";
import { Container, Row, Col } from "react-grid-system";
import StyledSection from "./global";

const ProductList = props => (
  <StyledSection>
    <Container>
      <Row>
        {props.data.map(card => (
          <Col key={card.sku} sm={4}>
            <Card {...card} />
          </Col>
        ))}
      </Row>
    </Container>
  </StyledSection>
);

export default ProductList;

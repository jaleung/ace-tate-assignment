import React from "react";
import styled from "styled-components";
import Card from "./card";
import { Container, Row, Col } from "react-grid-system";

const StyledSection = styled.section`
  margin-top: 60px;
`;

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

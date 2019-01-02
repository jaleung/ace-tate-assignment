import React from "react";
import Card from "./card";
import { Container, Row, Col } from "react-grid-system";
import StyledSection from "./global";
import { connect } from "react-redux";
import { getData } from "../actions";

const ProductList = props => {
  const fetched = props.getData();
  console.log(fetched);
  return (
    <StyledSection>
      <Container>
        <Row>
          lorem
          {}
          {/* {props.posts.map(card => (
          <Col key={card.sku} sm={4}>
            <Card {...card} />
          </Col>
        ))} */}
        </Row>
      </Container>
    </StyledSection>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.data
  };
};

export default connect(mapStateToProps, {getData})(ProductList);

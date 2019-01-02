import React, { Component } from "react";
import Card from "./card";
import { Container, Row, Col } from "react-grid-system";
import StyledSection from "./global";
import { connect } from "react-redux";
import { getData } from "../actions";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.props.getData();
  }
  render() {
    console.log("this.props", this.props);
    return (
      <StyledSection>
        <Container>
          <Row>
            {this.props.data.map(card => (
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

const mapStateToProps = state => {
  console.log("stateee", state);
  return {
    data: state.data
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(ProductList);

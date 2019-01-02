import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { popItemToState } from "../actions";
import { connect } from "react-redux";

const ProductImg = styled.img`
  max-width: 100%;
  transition: all 0.3s;
`;

const ProductName = styled.p`
  margin-top: 0.5em;
  margin-bottom: 1.2em;
  text-align: center;
`;

const ProductWrapper = styled.div`
  &:hover {
    cursor: pointer;
    img {
      filter: contrast(1.1);
      transition: all 0.3s;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

class Card extends Component {
  render() {
    const scaleString = "c_scale,w_400";
    let image_url = this.props.profile_image_url.replace(
      "/upload/v1",
      "/upload/" + scaleString + "/v1"
    );

    return (
      <ProductWrapper>
        <StyledLink
          to={`/product/${this.props.sku}`}
          onClick={() => this.props.popItemToState(this.props, true)}
        >
          <ProductImg src={image_url} alt={this.props.name} />
          <ProductName>
            <strong>{this.props.name} </strong>
            <span>{this.props.color}</span>
          </ProductName>
        </StyledLink>
      </ProductWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  { popItemToState }
)(Card);

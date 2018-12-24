import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;

const Card = props => {
  const scaleString = "c_scale,w_400";
  let image_url = props.profile_image_url.replace(
    "/upload/v1",
    "/upload/" + scaleString + "/v1"
  );
  return (
    <ProductWrapper>
      <StyledLink to={`/product/${props.sku}`}>
        <ProductImg src={image_url} alt={props.name} />
        <ProductName>
          <strong>{props.name} </strong>
          <span>{props.color}</span>
        </ProductName>
      </StyledLink>
    </ProductWrapper>
  );
};

export default Card;

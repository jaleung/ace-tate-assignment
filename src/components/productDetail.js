import React from "react";
import StyledSection from "./global";
import { Container, Row, Col } from "react-grid-system";
import Swiper from "react-id-swiper";
import "./swiper.css";
import styled from "styled-components";
import { connect } from "react-redux";

const Slide = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  padding-bottom: 100%;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`;

const Capitalise = styled.span`
  text-transform: capitalize;
`;

class ProductDetail extends React.Component {
  urls = [
    "profile_image_url",
    "front_image_url",
    "side_image_url",
    "head_female_image_url",
    "head_male_image_url",
    "special_image_url"
  ];

  render() {
    let slideImages = [];
    this.urls.forEach(url => {
      if (this.props.item[url]) {
        slideImages.push(this.props.item[url]);
      }
    });
    const galleryParams = {
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next.swiper-button-white",
        prevEl: ".swiper-button-prev.swiper-button-white"
      },
      pagination: {
        el: ".swiper-pagination.swiper-pagination-white",
        type: "bullets"
      },
      autoplay: {
        delay: 5000
      },
      fadeEffect: {
        crossFade: true
      }
    };

    return (
      <StyledSection>
        <Container>
          lorem
          <Row>
            <Col sm={8}>
              <Swiper {...galleryParams}>
                {slideImages.map(image => (
                  <Slide key={image} image={image} />
                ))}
              </Swiper>
            </Col>
            <Col sm={4}>
              <h1>{this.props.item.name}</h1>
              <p>{this.props.item.description}</p>

              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>Colour</strong>
                    </td>
                    <td>{this.props.item.color}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Material</strong>
                    </td>
                    <td>
                      <Capitalise>{this.props.item.material[0]}</Capitalise>
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3>£{this.props.item.price}</h3>
            </Col>
          </Row>
        </Container>
      </StyledSection>
    );
  }
}

const mapStateToProps = state => {
  return {
    item: state.activeItem
  };
};

export default connect(mapStateToProps)(ProductDetail);

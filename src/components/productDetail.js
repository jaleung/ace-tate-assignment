import React from "react";
import StyledSection from "./global";
import { Container, Row, Col } from "react-grid-system";
import Swiper from "react-id-swiper";
import "./swiper.css";
import styled from "styled-components";

const Slide = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  padding-bottom: 100%;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`;

const Thumbnail = styled.div`
  flex: 1;
  min-height: 108px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: props.location.state.props,
      slideImages: [],
      gallerySwiper: null,
      thumbnailSwiper: null
    };

    const urls = [
      "profile_image_url",
      "front_image_url",
      "side_image_url",
      "head_female_image_url",
      "head_male_image_url",
      "special_image_url"
    ];

    urls.forEach(url => {
      if (this.state.item[url]) {
        this.state.slideImages.push(this.state.item[url]);
      }
    });

    this.galleryRef = this.galleryRef.bind(this);
    this.thumbRef = this.thumbRef.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.gallerySwiper && nextState.thumbnailSwiper) {
      const { gallerySwiper, thumbnailSwiper } = nextState;

      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }

  galleryRef(ref) {
    if (ref) this.setState({ gallerySwiper: ref.swiper });
    console.log("from gallery: ", this.state);
  }

  thumbRef(ref) {
    if (ref) this.setState({ thumbnailSwiper: ref.swiper });
    console.log("from thumb: ", this.state);
  }

  render() {
    const galleryParams = {
      direction: "horizontal"
    };

    const thumbsParams = {
      slidesPerView: "auto",
      touchRatio: 1,
      freeMode: true,
      slideToClickedSlide: true,
      clickable: true
    };
    return (
      <StyledSection>
        <Container>
          <Row>
            <Col sm={6}>
              <Swiper {...galleryParams} ref={this.galleryRef}>
                {this.state.slideImages.map(image => (
                  <Slide key={image} image={image} />
                ))}
              </Swiper>

              <Swiper {...thumbsParams} ref={this.thumbRef}>
                {this.state.slideImages.map(image => (
                  <Thumbnail key={image} image={image} />
                ))}
              </Swiper>
            </Col>
            <Col sm={6}>
              <h1>{this.state.item.name}</h1>
              <p>{this.state.item.description}</p>
            </Col>
          </Row>
        </Container>
      </StyledSection>
    );
  }
}

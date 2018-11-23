import React from "react";
import PropTypes from "prop-types";
import Slider from 'react-slick';
import "./Carousel.scss";
import CarouselItem from "./CarouselItem";
import {MoonLoader} from "react-spinners";


const Carousel = ({ data, isLoading, error = {} }) => {
  const settings = {
    dots: false,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    speed: 500
  };
  if (isLoading) {
    return (<div className="loading">
      <MoonLoader
        sizeUnit={"px"}
        size={50}
        color={'#2e7423'}
      />
    </div>)
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
  <div className="carousel-wrapper">
    <Slider {...settings}>
      {data.map((item, idx) => createItem(item, idx))}
    </Slider>
  </div>
)};

const createItem = (item, idx) => (
    <CarouselItem key={idx} item={item}/>);

Carousel.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
};

export default Carousel;

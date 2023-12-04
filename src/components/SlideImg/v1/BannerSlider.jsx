import React from "react";
import { Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

const imgData = [
  {
    id: 1,
    image:
    "https://www.thepencompany.com/blog/wp-content/uploads/back-to-school-1.jpg",
    bigTitle: "Give some title",
    subTitle: "Give some subtitle",
    buttonText: "Shop Now",
  },
  {
    id: 2,
    image: "https://stationers.pk/cdn/shop/articles/7_Must_Have_Student_Stationery_Supplies_In_High_School.jpg?v=1635331870",
    bigTitle: "Give some title",
    subTitle: "Give some subtitle",
    buttonText: "Shop Now",
  },
  {
    id: 3,
    image:
      "https://properliving.co.uk/cdn/shop/products/stationery_kit.JPG?v=1452384014",
    bigTitle: "Give some title",
    subTitle: "Give some subtitle",
    buttonText: "Shop Now",
  },
];

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
  },
};

function BannerSlider() {
  return (
    <Carousel
      additionalTransform={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {imgData.map((img) => (
        <Box component={Link} to="/shop" key={img.id}>
          <Box
            component={"img"}
            src={img.image}
            alt="Image data"
            effect="blur"
            style={{
              display: "block",
              height: "90vh",
              margin: "auto",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      ))}
    </Carousel>
  );
}

export default BannerSlider;

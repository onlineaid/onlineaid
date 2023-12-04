import React, { useRef } from "react";
import { Paper, Box, Typography, Grid, Button } from "@mui/material";

import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
const items = [
  {
    id: 1,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://chaldn.com/_mpimage/cutting?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D96746&q=best&v=1&m=400&webp=1",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },
  {
    id: 2,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://chaldn.com/_mpimage/files-folders?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D96749&q=best&v=1&m=400&webp=1",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },
  {
    id: 3,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://deodap.in/cdn/shop/files/04_d8751488-faa9-4ac0-a356-c6c759988665_700x700.jpg?v=1700222987",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },
  {
    id: 4,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://m.media-amazon.com/images/I/71aRnFQNNsL._AC_UF894,1000_QL80_.jpg",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },
  {
    id: 5,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/10/354664732/BS/TI/MX/201305251/princess-stationary-set-250x250.png",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },
  {
    id: 6,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://m.media-amazon.com/images/I/51c7HavjcrL._AC_UF350,350_QL80_.jpg",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },
];

function ReuseableProductCarousel({ SectionTitle, RouteLink }) {
  return (
    <Paper elevation={10}>
      <Box sx={{ mt: 5, p: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography variant="h6" px={1}>
            {SectionTitle}
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to={`${RouteLink}`}
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            View all
          </Button>
        </Box>
        <Carousel
          additionalTransform={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="long-slider"
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
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 5,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {items.map((item, index) => (
            <Grid key={index} item>
              <Paper sx={{ m: 0.5 }}>
                <Box sx={{ p: 1 }}>
                  <Box
                    component={Link}
                    to={`/product`}
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      alt=""
                      sx={{ width: "100%", borderRadius: "5px" }}
                    />
                    {/* <Typography variant="body2">
                      {item.headline.substring(0, 25)}...
                    </Typography> */}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Carousel>
      </Box>
    </Paper>
  );
}

export default ReuseableProductCarousel;

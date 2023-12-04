import {
    Box,
    Container,
    Grid,
    Paper,
    Rating,
    Stack,
    Typography,
    useTheme,
  } from "@mui/material";
  import React from "react";
  import Marquee from "react-fast-marquee";
  import { Link } from "react-router-dom";
  
  export const productData = [
    {
      id: 1,
      name: "Example Product",
      description: "This is an example product description.",
      price: 19.99,
      currency: "USD",
      image:
        "https://demo2.prestabrain.com/stationero/wp-content/uploads/2022/03/product-25-1-400x400.jpg",
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
        "https://demo2.prestabrain.com/stationero/wp-content/uploads/2022/03/product-20-1-400x400.jpg",
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
        "https://demo2.prestabrain.com/stationero/wp-content/uploads/2022/03/product-24-1-400x400.jpg",
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
        "https://demo2.prestabrain.com/stationero/wp-content/uploads/2022/03/product-18-1-400x400.jpg",
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
        "https://demo2.prestabrain.com/stationero/wp-content/uploads/2022/03/product-17-1-400x400.jpg",
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
        "https://demo2.prestabrain.com/stationero/wp-content/uploads/2022/03/product-19-1-400x400.jpg",
      category: "Electronics",
      brand: "Example Brand",
      rating: 4.5,
      reviews: 10,
      availability: true,
    },
  ];
  
  function MarqueeProduct({SectionTitle}) {
    const theme = useTheme();
  
    return (
      <Paper sx={{ p: 1.5, my: 5 }}>
        <Typography variant="h6" mb={0.5}>
          {SectionTitle}
        </Typography>
  
        <Marquee>
          {productData.map((data) => (
            <Grid item xs={6} sm={6} md={3} lg={12 / 6} xl={2} key={data.id}>
              <Stack direction="row" spacing={2} sx={{ p: 0.5 }}>
                <Paper sx={{ p: 0.5 }}>
                  <Box
                    sx={{ textDecoration: "none", color: "inherit" }}
                    component={Link}
                    to={`/product`}
                  >
                    <Box
                      component="img"
                      sx={{
                        width: "200px",
                        borderRadius: theme.shape,
                      }}
                      src={data.image}
                      alt={data.name}
                    />
                    <Typography>{data.name}</Typography>
                    {/* <Typography>${data.price}</Typography> */}
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating-read"
                        defaultValue={data.rating}
                        precision={0.5}
                        readOnly
                      />
                    </Stack>
                  </Box>
                </Paper>
              </Stack>
            </Grid>
          ))}
        </Marquee>
      </Paper>
    );
  }
  
  export default MarqueeProduct;
  
import React, { useEffect, useRef } from "react";
import {
  Box,
  Grid,
  Paper,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

const productData = [
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

  {
    id: 7,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://images.glowroad.com/faceview/b1e/ic/cc/b9c/imgs/pd/1677740033292_IMG_20230227_164940-xlgnm400x400.jpg",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },

  {
    id: 8,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://m.media-amazon.com/images/I/81L0t7uUtgL._AC_UY1100_.jpg",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },

  {
    id: 9,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://m.media-amazon.com/images/I/61q1XUmWw9L._SL1000_.jpg",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },

  {
    id: 10,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://bossminis.co.uk/cdn/shop/products/4521329323299_b9617f240636cfb2e6b2892a98045a55__27010.1647482138_1000x1000.jpg?v=1648546030",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },

  {
    id: 11,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://i.ebayimg.com/images/g/sdEAAOSw6zBh9534/s-l1600.jpg",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },

  {
    id: 12,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://hellodiscountstore.com/cdn/shop/products/medium_125d3ce8-5ba9-4d8b-8bb6-abf262a62d67_1024x1024.jpg?v=1608319662",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },
];

function JustForYouSection({ SectionTitle, showRating = true }) {
  const theme = useTheme();

  return (
    <Paper sx={{ p: 2, mt: 5 }} elevation={10}>
      <Box>
        <Typography variant="h6" mb={2}>
          {SectionTitle}
        </Typography>
        <Grid container spacing={1}>
          {productData.map((data) => (
            <Grid item xs={6} sm={6} md={3} lg={12 / 6} xl={2} key={data.id}>
              <Paper sx={{ p: 0.5 }}>
                <Box
                  sx={{ textDecoration: "none", color: "inherit" }}
                  component={Link}
                  to={`/product`}
                  preventScrollReset={true}
                >
                  <Box
                    component="img"
                    sx={{
                      width: "100%",
                      borderRadius: theme.shape,
                    }}
                    src={data.image}
                    alt={data.name}
                  />
                  <Typography>{data.name}</Typography>
                  <Typography fontWeight={"bold"}>${data.price}</Typography>
                  {showRating && (
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating-read"
                        defaultValue={data.rating}
                        precision={0.5}
                        readOnly
                      />
                    </Stack>
                  )}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
}

export default JustForYouSection;

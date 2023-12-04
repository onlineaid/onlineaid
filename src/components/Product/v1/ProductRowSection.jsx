import React, { useRef } from "react";
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

export const productData = [
  {
    id: 1,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://demo2.prestabrain.com/stationero/wp-content/uploads/2022/03/product-14-1-400x400.jpg",
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
      "https://demo2.prestabrain.com/stationero/wp-content/uploads/2022/03/product-11-1-400x400.jpg",
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
      "https://demo2.prestabrain.com/stationero/wp-content/uploads/2022/03/product-1-1-400x400.jpg",
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
      "https://demo2.prestabrain.com/stationero/wp-content/uploads/2022/03/product-3-1-400x400.jpg",
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
      "https://demo2.prestabrain.com/stationero/wp-content/uploads/2022/03/product-6-1-400x400.jpg",
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
      "https://demo2.prestabrain.com/stationero/wp-content/uploads/2022/03/product-8-1-400x400.jpg",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },
];

function ProductRowSection({ SectionTitle }) {
  const theme = useTheme()

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
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
}

export default ProductRowSection;

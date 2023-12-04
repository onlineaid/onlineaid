import React from "react";
import { Box, Grid } from "@mui/material";
import MiniSection from "./MiniSection";

export const products = [
  {
    id: 1,
    image:
      "https://demo2.prestabrain.com/stationero/wp-content/uploads/2022/03/product-15-1-400x400.jpg",
    price: "$10.99",
  },
  {
    id: 2,
    image:
      "https://demo2.prestabrain.com/stationero/wp-content/uploads/2022/03/product-16-1-400x400.jpg",
    price: "$12.99",
  },
  {
    id: 3,
    image:
      "https://demo2.prestabrain.com/stationero/wp-content/uploads/2022/03/product-10-1-400x400.jpg",
    price: "$8.99",
  }
];

const products2 = [
  {
    id: 4,
    image:
      "https://demo2.prestabrain.com/stationero/wp-content/uploads/2022/03/product-2-1-400x400.jpg",
    price: "$14.99",
  },
  {
    id: 5,
    image:
      "https://www.jadroo.com/_next/image?url=https%3A%2F%2Fadmin.jadroo.com%2Fuploads%2Fmedia%2F2019%2F10%2FzZTxHISZdF%2FJRDL-013BE.jpg&w=640&q=75",
    price: "$9.99",
  },
  {
    id: 6,
    image:
      "https://www.jadroo.com/_next/image?url=https%3A%2F%2Fadmin.jadroo.com%2Fuploads%2Fmedia%2F2023%2F03%2FvEXYuUN5Cb%2Fimage.jpg&w=256&q=75",
    price: "$17.99",
  },
]


const products3 = [
  {
    id: 7,
    image:
      "https://www.jadroo.com/_next/image?url=https%3A%2F%2Fadmin.jadroo.com%2Fuploads%2Fmedia%2F2019%2F12%2FG45EUZOKwM%2F9054680787_1382393436.jpg&w=256&q=75",
    price: "$14.99",
  },
  {
    id: 8,
    image:
      "https://images.othoba.com/images/thumbs/0534276_stationery-magnetic-pencil-box-art-plastic-pencil-box-with-pencil-sharpner_300.jpeg",
    price: "$9.99",
  },
  {
    id: 9,
    image:
      "https://images.othoba.com/images/thumbs/0534233_stationery-magnetic-pencil-box-art-plastic-pencil-box-with-pencil-sharpener_300.jpeg",
    price: "$17.99",
  },
]

function ViewMobileResponsive() {
  return (
    <Box sx={{ mt: 5 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <MiniSection SectionTitle={"New Product"} products={products} />
        <MiniSection SectionTitle={"Color violate"}  products={products2}/>
        <MiniSection SectionTitle={"For your children"}  products={products3}/>
      </Grid>
    </Box>
  );
}

export default ViewMobileResponsive;

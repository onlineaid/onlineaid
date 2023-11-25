import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../../../layout/GlobalLayout/Layout";
import {
  Box,
  Container,
  Grid,
  Rating,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Divider,
  useTheme,
  Button,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import ProductDetailSlider from "./ProductDetailSlider";
import WhatWeProvide from "../../../components/Commitment/v1/WhatWeProvide";
import ProductInformationTabs from "../../../components/Tab/v1/ProductInformationTabs";

import ProductRowSection from "../../../components/Product/v1/ProductRowSection";

import Counter from "./Counter";
import ColorComponent from "./ColorComponent";
import ProductDetailsSkelton from "./ProductDetailsSkelton";
import { Link } from "react-router-dom";
import SocialShare from "../../../components/SocialShare";
import useScrollToTopOnMount from "../../../hook/useScrollToTopOnMount";
import ProductInfo from "./ProductInfo";

export default function ProductDetails() {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 2 seconds to demonstrate the loading component
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 
  return (
    <>
      <Helmet>
        <title>📄 Product Details</title>
        <meta name="description" content="Your page description" />
        {/* Add any other meta tags or custom styles here */}
      </Helmet>

      {loading ? (
        <ProductDetailsSkelton />
      ) : (
        <>
          <Layout>
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                  <Box sx={{ mt: 5 }}>
                    <ProductDetailSlider />
                  </Box>
                </Grid>

                <Grid item xs={12} md={5}>
                  <ProductInfo />
                </Grid>
              </Grid>

              <WhatWeProvide />
              <ProductInformationTabs />

              {/* YOU can use your custom product api data JUST use props data={api} */}
              <ProductRowSection SectionTitle={"Related Product"} />
            </Container>
          </Layout>
        </>
      )}
    </>
  );
}

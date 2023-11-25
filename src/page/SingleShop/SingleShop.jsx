import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import TitleMarquee from "./com/TitleMarquee";
import ProductMarquee from "./com/ProductMarquee";
import ProductInfo from "../ProductDetails/v1/ProductInfo";
import Layout from "../../layout/GlobalLayout/Layout";
import { Link } from "react-router-dom";

function SingleShop() {
  return (
    <Layout>
      <Container sx={{my: 5}}>
        {/* <TitleMarquee
          title={
            " I can be a React component, multiple React components, or just some text."
          }
        /> */}

        <Grid container spacing={4}>
          <Grid item xs={12} md={6} mt='5'>
            {/* <Typography variant="h3">TOMI WATCH BOX T077</Typography> */}
            {/* <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                <img
                  style={{ maxWidth: "100%" }}
                  src={
                    "https://haramainmartbd.com/frd-data/img/product/2023/09/_27_frd_1695205611.jpg"
                  }
                  alt=""
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <img
                  style={{ maxWidth: "100%" }}
                  src={
                    "https://haramainmartbd.com/frd-data/img/product/2023/09/_27_frd_1695205611.jpg"
                  }
                  alt=""
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <img
                  style={{ maxWidth: "100%" }}
                  src={
                    "https://haramainmartbd.com/frd-data/img/product/2023/09/_27_frd_1695205611.jpg"
                  }
                  alt=""
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <img
                  style={{ maxWidth: "100%" }}
                  src={
                    "https://haramainmartbd.com/frd-data/img/product/2023/09/_27_frd_1695205611.jpg"
                  }
                  alt=""
                />
              </Grid>
            </Grid> */}

            <Link to={'/v2/single'}><img
              style={{ maxWidth: "100%", borderRadius: '8px' }}
              src={
                "https://haramainmartbd.com/frd-data/img/product/2023/09/_27_frd_1695536248.jpeg"
              }
              alt=""
            /></Link>
            <img
              style={{ maxWidth: "100%",  borderRadius: '8px' }}
              src={
                "https://haramainmartbd.com/frd-data/img/product/2023/09/_27_frd_1695536993.jpg"
              }
              alt=""
            />
            <img
              style={{ maxWidth: "100%",  borderRadius: '8px' }}
              src={
                "https://haramainmartbd.com/frd-data/img/product/2023/09/_27_frd_1695629871.jpg"
              }
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProductInfo />
          </Grid>
        </Grid>
        <ProductMarquee SectionTitle={"More products of the same type"} />
      </Container>
    </Layout>
  );
}

export default SingleShop;

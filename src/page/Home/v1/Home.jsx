import React, { useEffect, useState, lazy, Suspense } from "react";
import { Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import LoadingLinearTop from "../../../components/Loading/LoadingLinearTop";

// Components
import ViewMobileResponsive from "../../../components/SlideImg/v1/ViewMobileResponsive";
import JustForYouSection from "../../../components/Product/v1/JustForYouSection";
import ViewProductWithDeal from "../../../components/Product/v1/ViewProductWithDeal";
import ProductRowSection from "../../../components/Product/v1/ProductRowSection";
import ViewProductWithSingle from "../../../components/Product/v1/ViewProductWithSingle";
import ReuseableProductCarousel from "../../../components/Product/v1/ReuseableProductCarousel";
import Loading from "../../../components/Loading/Loading";
import MarqueeProduct from "../../../components/Product/v1/MarqueeProduct";

// Lazy load component
const Layout = lazy(() => import("../../../layout/GlobalLayout/Layout"));
const BannerSlider = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("../../../components/SlideImg/v1/BannerSlider"));
      }, 1000); // Delay loading for 1 second
    })
);

function Home() {
  return (
    <>
      <Helmet>
        <title>🚀Buy Black Friday</title>
        <meta name="description" content="Your page description" />
      </Helmet>

      <Suspense fallback={<LoadingLinearTop />}>
        <Layout>
          {/* Render components using the currentPreset */}
          <Suspense fallback={<Loading />}>
            <BannerSlider />
          </Suspense>

          <Container>
            <Suspense fallback={<Loading />}>
              <MarqueeProduct SectionTitle={"Frequently selling product"} />
            </Suspense>


            <ProductRowSection SectionTitle={"Trading product"} />
            <ViewMobileResponsive />

            <JustForYouSection
              SectionTitle={"Just for you"}
              showRating={true}
            />
            <ViewProductWithDeal />

            <ReuseableProductCarousel
              SectionTitle={"Shop under $20"}
              RouteLink={"/v2/shop"}
            />

            <JustForYouSection
              SectionTitle={"New arrived products"}
              showRating={false}
            />

            <ViewProductWithSingle />

            <ProductRowSection SectionTitle={"Browse History"} />
          </Container>
        </Layout>
      </Suspense>
    </>
  );
}

export default Home;

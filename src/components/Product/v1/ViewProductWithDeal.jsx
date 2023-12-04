import React from "react";
import { Box, Grid } from "@mui/material";
import DealWithSingleImg from "./DealWithSingleImg";
import DealWithFourImg from "./DealWithFourImg";

const items = [
  {
    image:
      "https://chaldn.com/_mpimage/office-electronics?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D96740&q=best&v=1&m=400&webp=1",
  },
  {
    image:
      "https://chaldn.com/_mpimage/desk-organizers?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D96754&q=best&v=1&m=400&webp=1",
  },
  {
    image:
      "https://chaldn.com/_mpimage/highlighters-markers?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D28699&q=low&v=1&m=400&webp=1",
  },
  {
    image:
      "https://chaldn.com/_mpimage/arts-crafts?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D96737&q=best&v=1&m=400&webp=1",
  },
];

function ViewProductWithDeal() {
  return (
    <Box sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <DealWithFourImg
          items={items}
          SectionTitle={`Shop deals in Fashion`}
          RouteLink={"see"}
          BtnText={"See more"}
          ProductTitle={"Shop under $20"}
        />
        <DealWithFourImg
          items={items}
          SectionTitle={`Shop deals in Fashion`}
          RouteLink={"see"}
          BtnText={"See more"}
          ProductTitle={"Shop under $20"}
        />
        <DealWithFourImg
          items={items}
          SectionTitle={`Shop deals in Fashion`}
          RouteLink={"see"}
          BtnText={"See more"}
          ProductTitle={"Shop under $20"}
        />
        <DealWithSingleImg
          SectionTitle={`Shop deals in Fashion`}
          RouteLink={"see"}
          BtnText={"See more"}
        />
      </Grid>
    </Box>
  );
}

export default ViewProductWithDeal;

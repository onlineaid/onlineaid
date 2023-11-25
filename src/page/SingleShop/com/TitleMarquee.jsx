import React from "react";
import { Box } from "@mui/material";
import Marquee from "react-fast-marquee";

const TitleMarquee = ({title}) => (
  <Marquee>
    <Box> {title}</Box>
  </Marquee>
);

export default TitleMarquee;
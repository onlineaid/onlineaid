import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MenuDrawer from "../../Menu/v1/MenuDrawer";

export default function BottomHeader() {
  const theme =  useTheme()
  return (
    <Box sx={{  backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.default : theme.palette.background.default}}>
      {/* <Marquee> */}
      <Box sx={{ display: "flex", gap: 3, mx: 3, alignItems: "center" }}>
        <MenuDrawer />
        <Box sx={{ color: "white" }} component={Link} to={"/today"}>
          Today's Deals
        </Box>
        <Box sx={{ color: "white" }} component={Link} to={"/single"}>
          Product Promotion
        </Box>
        <Box sx={{ color: "white" }} component={Link} to={"/today"}>
          Customer Service
        </Box>
        <Box sx={{ color: "white" }} component={Link} to={"/today"}>
          Registry
        </Box>
        <Box sx={{ color: "white" }} component={Link} to={"/today"}>
          Gift Cards
        </Box>
        <Box sx={{ color: "white" }} component={Link} to={"/today"}>
          Sell
        </Box>
      </Box>
      {/* </Marquee> */}
    </Box>
  );
}

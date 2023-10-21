import React, { useState } from "react";
import { Box, Button, Paper, Slide } from "@mui/material";

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);

export default function SimpleSlide() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180 }}>
      <Box sx={{ width: `calc(100px + 16px)` }}>
        <Button onClick={handleChange} variant="contained">
          {checked ? "Hide" : "Show"}
        </Button>
        <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
          {icon}
        </Slide>
      </Box>
    </Box>
  );
}

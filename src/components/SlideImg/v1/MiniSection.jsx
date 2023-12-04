import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MobileMiniSlider from "./MobileMiniSlider";
import { Link } from "react-router-dom";


export default function MiniSection({ SectionTitle, products }) {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Paper elevation={10}>
        <Box
          sx={{
            borderRadius: 1,
            p: 2,
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>
            {SectionTitle}
          </Typography>
          {isSmallDevice ? (
            <Box
              sx={{
                borderRadius: 1,
              }}
            >
              <MobileMiniSlider products={products} />
            </Box>
          ) : (
            <Box
              sx={{
                borderRadius: 1,
                display: "flex",
                flexDirection: "row",
                gap: 1,
                justifyContent: "space-between",
              }}
            >
              {products.slice(0, 3).map((singleItem) => (
                <Box key={singleItem.id} sx={{ textAlign: "center" }}>
                  <Link
                    to="/shop"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <img
                      src={singleItem.image}
                      alt=""
                      style={{
                        display: "block",
                        height: "100px",
                        width: "100px",
                        borderRadius: "4px",
                      }}
                    />
                    <Typography component={"div"} sx={{ fontWeight: 700 }}>
                      {singleItem.price}
                    </Typography>
                    <Typography variant="caption" component={"div"}>
                      10 pairs
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Paper>
    </Grid>
  );
}

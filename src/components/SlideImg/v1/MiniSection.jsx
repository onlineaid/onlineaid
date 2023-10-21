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

export const products = [
  {
    id: 1,
    image:
      "https://s.alicdn.com/@sc04/kf/H1ae0ab3f3fbc4cb8be248fbe4299e58eD.jpg_480x480.jpg",
    price: "$10.99",
  },
  {
    id: 2,
    image:
      "https://s.alicdn.com/@sc04/kf/H4cc1fa84e3a44c219d282987b59aa029v.jpeg_250x250xz.jpg",
    price: "$12.99",
  },
  {
    id: 3,
    image:
      "https://s.alicdn.com/@sc04/kf/H0b91f507d7af4dc48c5f1707f9866d31r.jpeg_250x250xz.jpg",
    price: "$8.99",
  },
  {
    id: 4,
    image:
      "https://s.alicdn.com/@sc04/kf/H2ec527e4af284463beb556225d422ec3c.jpeg_250x250xz.jpg",
    price: "$14.99",
  },
  {
    id: 5,
    image:
      "https://s.alicdn.com/@sc04/kf/H3ecd4b2408a244eeb0a2d3321e586e10M.jpg_250x250xz.jpg",
    price: "$9.99",
  },
];

export default function MiniSection({ SectionTitle }) {
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

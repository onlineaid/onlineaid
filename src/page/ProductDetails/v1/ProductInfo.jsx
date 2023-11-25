import React from "react";
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
import { useState } from "react";
import Counter from "./Counter";
import ColorComponent from "./ColorComponent";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import SocialShare from "../../../components/SocialShare";


export default function ProductInfo() {
  const [size, setSize] = useState("");

  const theme = useTheme();

  const handleChange = (event) => {
    setSize(event.target.value);
  };
  return (
    <div>
      <Box mt={5}>
        <Typography sx={{ mb: 1.5, fontWeight: "bold" }}>IN STOCK</Typography>
        <Typography variant="h3" sx={{ mb: 1.5 }}>
          Foundations Matte Flip Flop
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mb: 1.5 }}>
          <Rating name="read-only" value={4.5} readOnly />
          <Typography sx={{ color: theme.palette.text.disabled }}>
            (3.1K reviews)
          </Typography>
        </Box>

        <Typography variant="h3" sx={{ mb: 1.5 }}>
          $97.14
        </Typography>

        <Typography variant="body1">
          Featuring the original ripple design inspired by Japanese bullet
          trains, the Nike Air Max 97 lets you push your style full-speed ahead.
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>Size</Typography>
          <FormControl
            sx={{
              m: 1,
              minWidth: 120,
            }}
            size="small"
          >
            <InputLabel>Size</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={size}
              label="Size"
              onChange={handleChange}
            >
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={12}>12</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Counter />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Typography>Color</Typography>
          <Box>
            <ColorComponent />
          </Box>
        </Box>

        <Divider sx={{ my: 5 }} />

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button sx={{ width: "50%" }} variant="contained">
            <AddShoppingCartIcon /> Add to Cart
          </Button>
          <Button
            component={Link}
            to={"/checkout"}
            sx={{ width: "50%" }}
            variant="contained"
          >
            Buy Now
          </Button>
        </Box>
        <SocialShare />
      </Box>
    </div>
  );
}

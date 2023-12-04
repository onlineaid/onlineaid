import React from "react";
import TitleBar from "./components/TitleBar";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Paper,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <TitleBar heading={"Profile"} btn={true} btnText={"Profile Info"} />

      <Paper>
        <Card>
          <CardMedia
            sx={{ height: 140 }}
            image="https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="green iguana"
          />
        </Card>
        <Box
          sx={{
            display: "flex",
            // justifyContent: "center",
            alignItems: "center",
            p: 3,
            maxWidth: "100%",
          }}
        >
          <Card>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Avatar
                  alt="User Avatar"
                  src="https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?auto=compress&cs=tinysrgb&w=300"
                  sx={{ width: 100, height: 100 }}
                />
                <Typography variant="h6" mt={2}>
                  John Doe
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  johndoe@example.com
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Gold
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 2,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={"/user/profile/update"}
                >
                  Edit Profile
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Paper>
    </>
  );
}

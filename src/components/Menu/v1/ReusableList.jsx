import { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
  Slide,
  Popover,
  useTheme,
} from "@mui/material";
import List01 from "./List/List01";
import { Link } from "react-router-dom";

const ReusableList = ({ title, lists, onClose, isOpening }) => {
  const theme = useTheme();
  // console.log(theme.palette.mode)
  // console.log(lists);
  // useEffect(() => {
  //   if (!isOpening) {
  //     const timeout = setTimeout(() => {
  //       onClose();
  //     }, 400);
  //     return () => clearTimeout(timeout);
  //   }
  // }, []);

  return (
    <Slide direction="right" in={isOpening} >
      <Box
        sx={{
          backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100] ,
          height: "100%",
          flexGrow: 1,
          top: "0",
          width: "280px",
          position: "fixed",
          overflowY: "scroll",
          // overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: 2,
            py: 2,
            gap: 2,
          }}
        >
          <Tooltip title="Back" arrow>
            <IconButton
              onClick={onClose}
              size="small"
              sx={{
                p: 0,
                borderRadius: "50%",
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {title}
          </Typography>
        </Box>

        <Divider component="div" />

        <List sx={{ mt: 0 }}>
          {lists.map((list) => (
            <ListItem
              button
              sx={{ py: 1 }}
              key={list.name}
              component={Link}
              to={list.path}
            >
              <ListItemText
                component={Link}
                to={`list.path`}
                primary={list.name}
                primaryTypographyProps={{
                  fontWeight: "medium",
                  variant: "body1",
                }}
              />
            </ListItem>
          ))}
        </List>
        {/* <Box sx={{ px: 2 }}>
        <List01 />
      </Box> */}
      </Box>
    </Slide>
  );
};

export default ReusableList;

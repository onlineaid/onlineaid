import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomWarning({ open, onClose }) {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Email Already in Use"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            The provided email is already registered. Please use a different
            email address.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

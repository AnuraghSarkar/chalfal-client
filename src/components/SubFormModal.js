import React, { useState } from "react";
import SubForm from "./SubForm";
import { DialogTitle } from "./CustomDialogTitle";

import {
  Dialog,
  DialogContent,
  Button,
  MenuItem,
  ListItemIcon,
} from "@material-ui/core";
import { useDialogStyles } from "../styles/muiStyles";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const SubFormModal = ({ type, handleCloseMenu }) => {
  const classes = useDialogStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenMenu = () => {
    handleClickOpen();
    handleCloseMenu();
  };
  return <></>;
};
export default SubFormModal;

import React, { useState } from "react";
import UpdateAvatarForm from "./UpdateAvatarForm";

import { DialogTitle } from "./CustomDialogTitle";
import {
  Dialog,
  DialogContent,
  MenuItem,
  ListItemIcon,
} from "@material-ui/core";
import { useDialogStyles } from "../styles/muiStyles";
import FaceIcon from "@material-ui/icons/Face";


const UpdateAvatarModal = ({ handleCloseMenu, user }) => {
    const classes = useDialogStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        handleCloseMenu();
    };

    const handleClose = () => {
        setOpen(false);
    };
}
export default UpdateAvatarModal;
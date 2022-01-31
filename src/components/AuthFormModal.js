import { useState } from "react";
import PropTypes from "prop-types";
import AuthForm from "./AuthForm";
import { DialogTitle } from "./CustomDialogTitle";

import {
  Dialog,
  DialogContent,
  Button,
  IconButton,
  MenuItem,
  useMediaQuery,
  ListItemIcon,
} from "@material-ui/core";
import { useDialogStyles } from "../styles/muiStyles";
import { useTheme } from "@material-ui/core/styles";
import { useNavStyles } from "../styles/muiStyles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const AuthFormModal = ({ closeMobileMenu, type }) => {
  const classes = useDialogStyles();
  const classesBtn = useNavStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMobileMenu = () => {
    handleClickOpen();
    closeMobileMenu();
  };

  return <></>;
};

export default AuthFormModal;

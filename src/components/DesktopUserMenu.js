import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import AuthFormModal from "./AuthFormModal";
import SubFormModal from "./SubFormModal";
import UpdateAvatarModal from "./UpdateAvatarModal";
import DarkModeMenuItem from "./DarkModeMenuItem";
import { getCircularAvatar } from "../utils/cloudinaryTransform";
import storageService from "../utils/localStorage";

import {
  Button,
  Menu,
  MenuItem,
  Avatar,
  Typography,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import { useUserMenuStyles } from "../styles/muiStyles";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

const DesktopUserMenu = ({ user, handleLogout }) => {
  const classes = useUserMenuStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    handleClose();
    handleLogout();
  };

  const loggedUser = storageService.loadUser() || user;
};

export default DesktopUserMenu;

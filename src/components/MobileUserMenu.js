import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import AuthFormModal from "./AuthFormModal";
import SubFormModal from "./SubFormModal";
import UpdateAvatarModal from "./UpdateAvatarModal";
import DarkModeMenuItem from "./DarkModeMenuItem";
import { getCircularAvatar } from "../utils/cloudinaryTransform";
import storageService from "../utils/localStorage";

const MobileUserMenu = ({ user, handleLogout }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useUserMenuStyles();

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

export default MobileUserMenu;

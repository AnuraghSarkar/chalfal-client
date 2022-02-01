import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAvatar, deleteAvatar } from "../reducers/userReducer";
import { notify } from "../reducers/notificationReducer";
import DeleteDialog from "./DeleteDialog";
import generateBase64Encode from "../utils/genBase64Encode";
import AlertMessage from "./AlertMessage";
import getErrorMsg from "../utils/getErrorMsg";

import {
  Button,
  useMediaQuery,
  IconButton,
  Typography,
} from "@material-ui/core";
import { useAvatarFormStyles } from "../styles/muiStyles";
import { useTheme } from "@material-ui/core/styles";
import PublishIcon from "@material-ui/icons/Publish";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import FaceIcon from "@material-ui/icons/Face";

const UpdateAvatarForm = ({ closeModal }) => {
  const classes = useAvatarFormStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const [avatarInput, setAvatarInput] = useState("");
  const [fileName, setFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setFileName(file.name);
    generateBase64Encode(file, setAvatarInput, true);
  };

  const clearfileSelection = () => {
    setAvatarInput("");
    setFileName("");
  };

  const handleAvatarUpload = async () => {
    if (avatarInput === "") {
      return setError("Select an image file first.");
    }

    try {
      setIsLoading(true);
      await dispatch(setAvatar(avatarInput));
      setIsLoading(false);

      dispatch(notify("Successfully updated the avatar!", "success"));
      setAvatarInput("");
      setFileName("");
      closeModal();
    } catch (err) {
      setIsLoading(false);
      setError(getErrorMsg(err), "error");
    }
  };

  const handleRemoveAvatar = async () => {
    try {
      await dispatch(deleteAvatar());
      dispatch(notify("Removed avatar.", "success"));
    } catch (err) {
      setError(getErrorMsg(err), "error");
    }
  };
};

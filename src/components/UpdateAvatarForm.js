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

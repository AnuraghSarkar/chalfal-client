import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addNewSub } from "../reducers/subReducer";
import { Formik, Form } from "formik";
import { TextInput } from "./FormikMuiFields";
import { notify } from "../reducers/notificationReducer";
import AlertMessage from "./AlertMessage";
import * as yup from "yup";
import getErrorMsg from "../utils/getErrorMsg";

import { useSubredditFormStyles } from "../styles/muiStyles";
import { Button, Typography } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import AddIcon from "@material-ui/icons/Add";

const validationSchema = yup.object({
  subredditName: yup
    .string()
    .required("Required")
    .max(20, "Must be at most 20 characters")
    .min(3, "Must be at least 3 characters")
    .matches(
      /^[a-zA-Z0-9-_]*$/,
      "Only alphanumeric characters allowed, no spaces/symbols"
    ),
  description: yup
    .string()
    .required("Required")
    .max(100, "Must be at most 100 characters")
    .min(3, "Must be at least 3 characters"),
});
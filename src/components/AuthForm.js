import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, signupUser } from "../reducers/userReducer";
import * as yup from "yup";

const validationSchemaSignup = yup.object({
  username: yup
    .string()
    .required("Required")
    .max(20, "Must be at most 20 characters")
    .min(3, "Must be at least 3 characters")
    .matches(
      /^[a-zA-Z0-9-_]*$/,
      "Only alphanumeric characters allowed, no spaces/symbols"
    ),

  password: yup
    .string()
    .required("Required")
    .min(6, "Must be at least 6 characters"),
});

const validationSchemaLogin = yup.object({
  username: yup.string().required("Required"),
  password: yup.string().required("Required"),
});

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, signupUser } from "../reducers/userReducer";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { TextInput } from "./FormikMuiFields";
import { notify } from "../reducers/notificationReducer";
import AlertMessage from "./AlertMessage";
import getErrorMsg from "../utils/getErrorMsg";

import {
  Button,
  Typography,
  Divider,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { useAuthStyles } from "../styles/muiStyles";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";

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

const AuthForm = () => {
  const dispatch = useDispatch();
  const [authType, setAuthType] = useState("login");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(null);
  const classes = useAuthStyles(authType)();

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      await dispatch(loginUser(values));
      dispatch(
        notify(`Welcome, ${values.username}. You're logged in!`, "success")
      );
    } catch (err) {
      setSubmitting(false);
      setError(getErrorMsg(err));
    }
  };

  const handleSignup = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      await dispatch(signupUser(values));
      dispatch(
        notify(
          `Welcome, ${values.username}. You've been successfully registered.`,
          "success"
        )
      );
    } catch (err) {
      setSubmitting(false);
      setError(getErrorMsg(err));
    }
  };

  return (
    <>
      <div className={classes.authWrapper}>
        <Formik
          validateOnChange={true}
          initialValues={{ username: "", password: "" }}
          onSubmit={authType === "login" ? handleLogin : handleSignup}
          validationSchema={
            authType === "login"
              ? validationSchemaLogin
              : validationSchemaSignup
          }
        >
          {({ isSubmitting }) => (
            <>
              <Form className={classes.form}>
                <Typography
                  variant="h5"
                  color="secondary"
                  className={classes.formTitle}
                >
                  {authType === "login"
                    ? "Login to your account"
                    : "Create a new account"}
                </Typography>
                <div className={classes.input}>
                  <PersonIcon className={classes.inputIcon} color="primary" />
                  <TextInput
                    name="username"
                    type="text"
                    placeholder="Enter username"
                    label="Username"
                    required
                    fullWidth
                  />
                </div>
                <div className={classes.input}>
                  <LockIcon className={classes.inputIcon} color="primary" />
                  <TextInput
                    name="password"
                    type={showPass ? "text" : "password"}
                    placeholder="Enter password"
                    label="Password"
                    required
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() =>
                              setShowPass((prevState) => !prevState)
                            }
                          >
                            {showPass ? (
                              <VisibilityOffIcon color="primary" />
                            ) : (
                              <VisibilityIcon color="primary" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

              </div>
            </>
          )}
        </Formik>
      </div>
    </>
  );
};
export default AuthForm;

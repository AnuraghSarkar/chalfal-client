import React from "react";
import { ReactComponent as Error404 } from "../svg/404-error.svg";

import { Typography, SvgIcon } from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const ErrorPage = ({ errorMsg }) => {
  const isNotFoundError =
    errorMsg.includes("does not exist") || errorMsg.includes("Malformatted");

};

export default ErrorPage;

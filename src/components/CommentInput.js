import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addComment } from "../reducers/postCommentsReducer";
import { notify } from "../reducers/notificationReducer";
import getErrorMsg from "../utils/getErrorMsg";

import { Link, Typography, TextField, Button } from "@material-ui/core";
import { useCommentInputStyles } from "../styles/muiStyles";
import SendIcon from "@material-ui/icons/Send";

const CommentInput = ({ user, postId, isMobile }) => {
  const classes = useCommentInputStyles();
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const handlePostComment = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await dispatch(addComment(postId, comment));
      setSubmitting(false);
      setComment("");
      dispatch(notify(`Comment submitted!`, "success"));
    } catch (err) {
      setSubmitting(false);
      dispatch(notify(getErrorMsg(err), "error"));
    }
  };
};

export default CommentInput;

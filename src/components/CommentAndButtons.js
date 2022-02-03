import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addReply,
  editComment,
  deleteComment,
} from "../reducers/postCommentsReducer";
import { notify } from "../reducers/notificationReducer";
import DeleteDialog from "./DeleteDialog";
import getErrorMsg from "../utils/getErrorMsg";

import { TextField, Button, Typography } from "@material-ui/core";
import { useCommentAndBtnsStyles } from "../styles/muiStyles";
import ReplyIcon from "@material-ui/icons/Reply";
import SendIcon from "@material-ui/icons/Send";
import EditIcon from "@material-ui/icons/Edit";

const CommentAndButtons = ({ isMobile, comment, postId, user }) => {
  const classes = useCommentAndBtnsStyles();
  const dispatch = useDispatch();
  const [replyOpen, setReplyOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [replyInput, setReplyInput] = useState("");
  const [editInput, setEditInput] = useState(comment.commentBody);
  const [submitting, setSubmitting] = useState(false);

  const handlePostReply = async () => {
    try {
      setSubmitting(true);
      await dispatch(addReply(postId, comment.id, replyInput));
      setSubmitting(false);
      setReplyOpen(false);
      setReplyInput("");
      dispatch(notify(`Reply submitted!`, "success"));
    } catch (err) {
      setSubmitting(false);
      dispatch(notify(getErrorMsg(err), "error"));
    }
  };
  const handleEditComment = async () => {
    try {
      setSubmitting(true);
      await dispatch(editComment(postId, comment.id, editInput));
      setSubmitting(false);
      setEditOpen(false);
      dispatch(notify(`Comment edited!`, "success"));
    } catch (err) {
      setSubmitting(false);
      dispatch(notify(getErrorMsg(err), "error"));
    }
  };

  const handleCommentDelete = async () => {
    try {
      await dispatch(deleteComment(postId, comment.id));
      dispatch(notify(`Comment deleted!`, "success"));
    } catch (err) {
      dispatch(notify(getErrorMsg(err), "error"));
    }
  };
};

export default CommentAndButtons;

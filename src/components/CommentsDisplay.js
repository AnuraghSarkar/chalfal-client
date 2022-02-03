import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { UpvoteButton, DownvoteButton } from "./VoteButtons";
import CommentsAndButtons from "./CommentAndButtons";
import ReplyAndButtons from "./ReplyAndButtons";
import {
  toggleCommentUpvote,
  toggleCommentDownvote,
  toggleReplyUpvote,
  toggleReplyDownvote,
} from "../reducers/postCommentsReducer";
import { notify } from "../reducers/notificationReducer";
import TimeAgo from "timeago-react";
import getErrorMsg from "../utils/getErrorMsg";

import { Typography, Link } from "@material-ui/core";
import { usePostCommentsStyles } from "../styles/muiStyles";
import ForumIcon from "@material-ui/icons/Forum";

const CommentsDisplay = ({ comments, postId, isMobile }) => {
      const classes = usePostCommentsStyles();
      const dispatch = useDispatch();
      const user = useSelector((state) => state.user);

      const handleCommentUpvote = async (commentId) => {
        const { upvotedBy, downvotedBy } = comments.find(
          (c) => c.id === commentId
        );

        try {
          if (upvotedBy.includes(user.id)) {
            const updatedUpvotedBy = upvotedBy.filter((u) => u !== user.id);
            dispatch(
              toggleCommentUpvote(
                postId,
                commentId,
                updatedUpvotedBy,
                downvotedBy
              )
            );
          } else {
            const updatedUpvotedBy = [...upvotedBy, user.id];
            const updatedDownvotedBy = downvotedBy.filter((d) => d !== user.id);
            dispatch(
              toggleCommentUpvote(
                postId,
                commentId,
                updatedUpvotedBy,
                updatedDownvotedBy
              )
            );
          }
        } catch (err) {
          dispatch(notify(getErrorMsg(err), "error"));
        }
    };
    const handleCommentDownvote = async (commentId) => {
      const { upvotedBy, downvotedBy } = comments.find(
        (c) => c.id === commentId
      );

      try {
        if (downvotedBy.includes(user.id)) {
          const updatedDownvotedBy = downvotedBy.filter((d) => d !== user.id);
          dispatch(
            toggleCommentDownvote(
              postId,
              commentId,
              updatedDownvotedBy,
              upvotedBy
            )
          );
        } else {
          const updatedDownvotedBy = [...downvotedBy, user.id];
          const updatedUpvotedBy = upvotedBy.filter((u) => u !== user.id);
          dispatch(
            toggleCommentDownvote(
              postId,
              commentId,
              updatedDownvotedBy,
              updatedUpvotedBy
            )
          );
        }
      } catch (err) {
        dispatch(notify(getErrorMsg(err), "error"));
      }
    };

};

export default CommentsDisplay;

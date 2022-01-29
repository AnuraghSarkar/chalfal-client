import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./reducers/userReducer";
import { fetchPosts } from "./reducers/postReducer";
import { setSubList, setTopSubsList } from "./reducers/subReducer";
import { setDarkMode } from "./reducers/themeReducer";
import { notify } from "./reducers/notificationReducer";
import getErrorMsg from "./utils/getErrorMsg";
import { Paper } from "@material-ui/core/";
import customTheme from "./styles/customTheme";
import { useMainPaperStyles } from "./styles/muiStyles";
import { ThemeProvider } from "@material-ui/core/styles";

const App = () => {
  const dispatch = useDispatch();
  const classes = useMainPaperStyles();
  const { darkMode } = useSelector((state) => state);

  useEffect(() => {
    const setPostsAndSubreddits = async () => {
      try {
        await dispatch(fetchPosts("hot"));
        await dispatch(setSubList());
        await dispatch(setTopSubsList());
      } catch (err) {
        dispatch(notify(getErrorMsg(err), "error"));
      }
    };

    dispatch(setUser());
    dispatch(setDarkMode());
    setPostsAndSubreddits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ThemeProvider theme={customTheme(darkMode)}>
      <Paper className={classes.root} elevation={0}></Paper>
    </ThemeProvider>
  );
};
export default App;

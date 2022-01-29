import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./reducers/userReducer";
import { fetchPosts } from "./reducers/postReducer";
import { setSubList, setTopSubsList } from "./reducers/subReducer";
import { setDarkMode } from "./reducers/themeReducer";
import { notify } from "./reducers/notificationReducer";
import getErrorMsg from "./utils/getErrorMsg";

const App = () => {
    const dispatch = useDispatch();
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
  return <></>;
};
export default App;

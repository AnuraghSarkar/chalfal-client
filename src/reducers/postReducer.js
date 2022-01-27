import postService from "../services/posts";

const postReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return action.payload;
    case "LOAD_MORE_POSTS":
      return {
        ...action.payload,
        results: [...state.results, ...action.payload.results],
      };
    case "TOGGLE_VOTE":
      return {
        ...state,
        results: state.results.map((r) =>
          r.id !== action.payload.id ? r : { ...r, ...action.payload.data }
        ),
      };
    case "DELETE_POST":
      return {
        ...state,
        results: state.results.filter((r) => r.id !== action.payload),
      };
    default:
      return state;
  }
};

export const fetchPosts = (sortBy) => {
  return async (dispatch) => {
    let posts;

    if (sortBy !== "subscribed") {
      posts = await postService.getPosts(sortBy, 10, 1);
    } else {
      posts = await postService.getSubPosts(10, 1);
    }

    dispatch({
      type: "SET_POSTS",
      payload: posts,
    });
  };
};

export const loadMorePosts = (sortBy, page) => {
  return async (dispatch) => {
    let posts;
    if (sortBy !== "subscribed") {
      posts = await postService.getPosts(sortBy, 10, page);
    } else {
      posts = await postService.getSubPosts(10, page);
    }

    dispatch({
      type: "LOAD_MORE_POSTS",
      payload: posts,
    });
  };
};

export default postReducer;

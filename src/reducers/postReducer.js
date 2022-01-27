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

export default postReducer;

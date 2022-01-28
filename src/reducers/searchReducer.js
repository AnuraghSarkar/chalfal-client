import postService from "../services/posts";

const searchReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return action.payload;
    case "TOGGLE_SEARCH_VOTE":
      return {
        ...state,
        results: state.results.map((r) =>
          r.id !== action.payload.id ? r : { ...r, ...action.payload.data }
        ),
      };
    case "LOAD_SEARCH_POSTS":
      return {
        ...action.payload,
        results: [...state.results, ...action.payload.results],
      };
    default:
      return state;
  }
};

export const setSearchResults = (query) => {
  return async (dispatch) => {
    const results = await postService.getSearchResults(query, 10, 1);

    dispatch({
      type: "SET_SEARCH_RESULTS",
      payload: results,
    });
  };
};

export default searchReducer;

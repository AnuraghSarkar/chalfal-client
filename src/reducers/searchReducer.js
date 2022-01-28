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

export default searchReducer;

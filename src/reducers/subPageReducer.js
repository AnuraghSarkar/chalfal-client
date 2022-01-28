const subPageReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_SUB":
      return action.payload;
    case "LOAD_SUB_POSTS":
      return {
        ...state,
        posts: {
          ...action.payload.posts,
          results: [...state.posts.results, ...action.payload.posts.results],
        },
      };
    case "TOGGLE_SUBPAGE_VOTE":
      return {
        ...state,
        posts: {
          ...state.posts,
          results: state.posts.results.map((p) =>
            p.id !== action.payload.id ? p : { ...p, ...action.payload.data }
          ),
        },
      };
    case "SUBSCRIBE_SUB":
      return {
        ...state,
        subDetails: { ...state.subDetails, ...action.payload },
      };
    case "EDIT_DESCRIPTION":
      return {
        ...state,
        subDetails: { ...state.subDetails, description: action.payload },
      };
    default:
      return state;
  }
};

export default subPageReducer;

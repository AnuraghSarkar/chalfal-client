const userPageReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return action.payload;
    case "TOGGLE_USERPAGE_VOTE":
      return {
        ...state,
        posts: {
          ...state.posts,
          results: state.posts.results.map((r) =>
            r.id !== action.payload.id ? r : { ...r, ...action.payload.data }
          ),
        },
      };
    case "LOAD_USER_POSTS":
      return {
        ...state,
        posts: {
          ...action.payload.posts,
          results: [...state.posts.results, ...action.payload.posts.results],
        },
      };
    default:
      return state;
  }
};

export default userPageReducer;

const subReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_ALL_SUBS_LIST":
      return { ...state, allSubs: action.payload };
    case "SET_TOP_SUBS_LIST":
      return { ...state, topSubs: action.payload };
    case "SUBSCRIBE_SUB_FROM_LIST":
      return {
        ...state,
        topSubs: state.topSubs.map((t) =>
          t.id !== action.payload.id ? t : { ...t, ...action.payload.data }
        ),
      };
    case "ADD_NEW_SUB":
      return {
        ...state,
        allSubs: [...state.allSubs, action.payload],
      };
    default:
      return state;
  }
};

export default subReducer;

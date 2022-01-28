import subService from "../services/subs";

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

export const setSubList = () => {
  return async (dispatch) => {
    const subs = await subService.getAllSubreddits();

    dispatch({
      type: "SET_ALL_SUBS_LIST",
      payload: subs,
    });
  };
};

export default subReducer;

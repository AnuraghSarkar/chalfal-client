const notificationReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return [...state, action.payload];
    case "CLEAR_NOTIFICATION":
      return state.filter((notification) => notification.id !== action.payload);
    default:
      return state;
  }
};

let timeoutID = null;

export const notify = (message, severity) => {
  const duration = severity === "error" ? 15 : 5;

  return (dispatch) => {
    clearTimeout(timeoutID);

    dispatch({
      type: "SET_NOTIFICATION",
      payload: { message, severity },
    });

    timeoutID = setTimeout(() => {
      dispatch({
        type: "CLEAR_NOTIFICATION",
      });
    }, duration * 1000);
  };
};

export default notificationReducer;

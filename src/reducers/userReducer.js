import authService from "../services/auth";
import userService from "../services/user";
import storageService from "../utils/localStorage";

const userReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "SIGNUP":
      return action.payload;
    case "LOGOUT":
      return null;
    case "SET_USER":
      return action.payload;
    case "SET_AVATAR":
      return { ...state, ...action.payload };
    case "REMOVE_AVATAR":
      return { ...state, avatar: { exists: false } };
    default:
      return state;
  }
};

export default userReducer;

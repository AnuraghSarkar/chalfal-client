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

export const loginUser = (credentials) => {
  return async (dispatch) => {
    const user = await authService.login(credentials);
    storageService.saveUser(user);
    authService.setToken(user.token);

    dispatch({
      type: "LOGIN",
      payload: user,
    });
  };
};


export const signupUser = (credentials) => {
  return async (dispatch) => {
    const user = await authService.signup(credentials);
    storageService.saveUser(user);
    authService.setToken(user.token);

    dispatch({
      type: "SIGNUP",
      payload: user,
    });
  };
};


export const logoutUser = () => {
  return (dispatch) => {
    storageService.logoutUser();
    authService.setToken(null);

    dispatch({
      type: "LOGOUT",
    });
  };
};

export default userReducer;

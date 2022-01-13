import axios from "axios";
import backendUrl from "../backendUrl";

export let token = null;

const setToken = (newToken) => {
  token = newToken;
};

const login = async (credentials) => {
  await axios.post(`${backendUrl}/api/login`, credentials).then((response) => {
    return response.data
  }).catch((err) => {
    return err.response.data
  });
};

const signup = async (enteredData) => {
  await axios.post(`${backendUrl}/api/signup`, enteredData).then((response) => {
    return response.data
  }).catch((err) => {
    return err.response.data
  });
};

const authService = {
  setToken,
  login,
  signup
};

export default authService;
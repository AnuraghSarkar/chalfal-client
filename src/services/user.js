import axios from "axios";
import backendUrl from "../backendUrl";
import { token } from "./auth";

const baseUrl = `${backendUrl}/api/users`;

const setConfig = () => {
  return { Headers: { "x-auth-token": token } };
};
const getUser = async (username, limit, page) => {
    const response = await axios.get(`${baseUrl}/${username}?limit=${limit}&page=${page}`, setConfig());
    return response.data;
};
 
const uploadAvatar = async (avatarObj) => { 
    const response = await axios.post(`${baseUrl}/avatar`, avatarObj, setConfig());
    return response.data;
};

const removeAvatar = async () => {
    const response = await axios.delete(`${backendUrl}/avatar`, setConfig());
    return response.data;
 };
const userService = {getUser, uploadAvatar, removeAvatar};
export default userService;
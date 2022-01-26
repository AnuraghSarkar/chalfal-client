import axios from "axios";
import backendUrl from "..backendUrl";
import { token } from "./auth";

const baseUrl = `${backendUrl}/api/posts`;

const setConfig = () => {
  return {
    headers: { "x-auth-token": token },
  };
};

const getPosts = async (sortBy, limit, page) => {
  const response = await axios.get(
    `${baseUrl}/?sortby=${sortBy}&limit=${limit}&page=${page}`
  );
  return response.data;
};

const getSubPosts = async (limit, page) => {
  const response = await axios.get(
    `${baseUrl}/subscribed/?limit=${limit}&page=${page}`,
    setConfig()
  );
  return response.data;
};

const getSearchResults = async (query, limit, page) => {
  const response = await axios.get(
    `${baseUrl}/search/?query=${query}&limit=${limit}&page=${page}`
  );
  return response.data;
};
const addNew = async (postObj) => {
  const response = await axios.post(`${baseUrl}`, postObj, setConfig());
  return response.data;
};
const editPost = async (id, postObj) => {
  const response = await axios.patch(`${baseUrl}/${id}`, postObj, setConfig());
  return response.data;
};

const postService = {
  getPosts,
  getSubPosts,
  getSearchResults,
  addNew,
  editPost,
};

export default postService;

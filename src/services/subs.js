import axios from "axios";
import backendUrl from "../backendUrl";
import { token } from "./auth";

const baseUrl = `${backendUrl}/api/subreddits`;

const setConfig = () => {
  return {
    headers: { "x-auth-token": token },
  };
};

const subService = {}; //subService is an object
export default subService;

import axios from "axios";
import { BACKEND_BASE_URL } from "./baseurl";

const BACKEND_URL = BACKEND_BASE_URL;

const axiosInstanceAuth = axios.create({
  baseURL: BACKEND_URL,
});

axiosInstanceAuth.interceptors.request.use(
  (config) => {
    const auth = localStorage.getItem("_TOKEN");
    if (auth) {
      config.headers = {
        Authorization: `${auth}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
axiosInstanceAuth.interceptors.response.use(
  (response) => response,
  (error) => {
    Promise.reject(error);
  }
);
export default axiosInstanceAuth;

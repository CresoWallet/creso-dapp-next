import axios from "axios";
import { BACKEND_BASE_URL } from "./baseurl";

const BACKEND_URL = BACKEND_BASE_URL;
const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
});
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      // "content-type": "multipart/form-data",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    Promise.reject(error);
  }
);

export default axiosInstance;

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
// Encrypt & Decrypt
const axiosInstanceAuth = axios.create({
  baseURL: BACKEND_URL,
});
// eslint-disable-next-line consistent-return
axiosInstanceAuth.interceptors.request.use(
  (config) => {
    const auth = JSON.parse(localStorage.getItem("Token"));
    // console.log(auth,"auth");
    if (auth) {
      // eslint-disable-next-line no-param-reassign
      config.headers = {
        Authorization: auth,
        Accept: "application/json",
        "Content-Type": "application/json",
        // "content-type": "multipart/form-data",
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
const axiosInstanceAuthFile = axios.create({
  baseURL: BACKEND_URL,
});
axiosInstanceAuthFile.interceptors.request.use(
  (config) => {
    const auth = JSON.parse(localStorage.getItem("Token"));
    // console.log(auth,"auth");
    if (auth) {
      // eslint-disable-next-line no-param-reassign
      config.headers = {
        Authorization: auth,
        Accept: "application/json",
        // "Content-Type": "application/json",
        "content-type": "multipart/form-data",
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
export { axiosInstanceAuth, axiosInstance, axiosInstanceAuthFile };

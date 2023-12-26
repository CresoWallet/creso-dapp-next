import axios from "axios";
import { BACKEND_BASE_URL } from "./baseurl";
// import cryptoJS from "crypto-js";
// const cryptoKey = process.env.REACT_APP_CRYPTOGRAPHY_SECRET_KEY;

// Encrypt & Decrypt
const BACKEND_URL = BACKEND_BASE_URL;

const axiosInstanceAuthFormData = axios.create({
  baseURL: BACKEND_URL,
});

// const decryptData = (encryptedData) => {
//   try {
//     const plain = cryptoJS.AES.decrypt(encryptedData.toString(), cryptoKey);
//     return JSON.parse(plain.toString(cryptoJS.enc.Utf8));
//   } catch (err) {
//     console.log("decData", err);
//   }
// };

axiosInstanceAuthFormData.interceptors.request.use(
  (config) => {
    const auth = localStorage.getItem("_TOKEN");
    // const auth = decryptData(localStorage.getItem("user"))?.data?.token;
    // if (auth) {
    config.headers = {
      Authorization: `${auth}`,
      Accept: "application/json",
      "content-type": "multipart/form-data",
    };
    // }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
axiosInstanceAuthFormData.interceptors.response.use(
  (response) => response,
  (error) => {
    Promise.reject(error);
  }
);
export default axiosInstanceAuthFormData;

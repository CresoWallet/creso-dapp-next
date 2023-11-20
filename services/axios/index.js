import { BASE_URL } from "@/constants";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: BASE_URL + "/api",
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

// export const setToken = (token) => {
//   axiosInstance.defaults.headers.common = { Authorization: `Bearer ${token}` };
// };

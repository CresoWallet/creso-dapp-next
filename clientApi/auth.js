import { BASE_URL } from "@/constants";
import { axiosInstance } from "@/services/axios";

export const loginApi = async (formData) => {
  const res = await axiosInstance(`/login`, {
    method: "POST",
    data: formData,
  });
  return res;
};


export const signUpAPI = async (formData) => {
  const res = await axiosInstance(`/register`, {
    method: "POST",
    data: formData,
  });

  return res;
}
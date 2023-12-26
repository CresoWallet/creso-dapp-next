import { axiosInstance } from "@/services/axios";

export const loginApi = async (formData) => {
  const res = await axiosInstance(`/login`, {
    method: "POST",
    data: formData,
  });
  return res;
};

export const logOut = async (formData) => {
  const res = await axiosInstance(`/logout`, {
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
};

export const authenticateUser = async (formData) => {
  const res = await axiosInstance(`/authenticate`, {
    method: "GET",
    data: formData,
  });

  return res;
};

export const sendOTPMail = async (formData) => {
  const res = await axiosInstance(`/sendOTP`, {
    method: "POST",
    data: formData,
  });
  return res;
};

export const verifyOTP = async (formData) => {
  const res = await axiosInstance(`/verifyOTP`, {
    method: "POST",
    data: formData,
  });

  return res;
};

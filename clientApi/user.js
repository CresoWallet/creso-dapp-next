import { BASE_URL } from "@/constants";
import { axiosInstance } from "@/services/axios";

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

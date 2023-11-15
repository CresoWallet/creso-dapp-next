import { axiosInstance } from "@/services/axios";

export const loginApi = async (formData) => {
  const res = await axiosInstance("/login", {
    method: "POST",
    data: formData,
  });
  return res;
};

import { axiosInstance } from "@/services/axios";

export const getUserWallets = async () => {
  const res = await axiosInstance("/wallet", {
    method: "GET",
  });

  return res;
};

export const transferEthAPI = async (formData) => {
  const res = await axiosInstance("/transfer", {
    method: "POST",
    data: formData,
  });

  return res;
};

export const getHistory = async (formData) => {
  const res = await axiosInstance(`/history`, {
    method: "POST",
    data: formData,
  });

  return res;
};

export const createEOAWalletAPI = async (formData) => {
  const res = await axiosInstance("/create/wallet", {
    method: "POST",
    data: formData,
  });
  return res;
};

export const backupWallet = async (formData) => {
  const res = await axiosInstance(`/backup/wallet`, {
    method: "POST",
    data: formData,
  });

  return res;
};

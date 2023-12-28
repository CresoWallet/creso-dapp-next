import { CRYPTO_TO_USD } from "@/constants";
import { axiosInstance } from "@/services/axios";
import axios from "axios";

export const getUserWallets = async () => {
  const res = await axiosInstance("/wallet", {
    method: "GET",
  });
  console.log("🚀 ~ getUserWallets ~ res:", res)

  return res;
};

export const transferEthAPI = async (formData) => {
  const res = await axiosInstance("/transfer", {
    method: "POST",
    data: formData,
  });
  console.log("🚀 ~ transferEthAPI ~ res:", res)

  return res;
};

export const getHistory = async (formData) => {
  const res = await axiosInstance(`/history`, {
    method: "POST",
    data: formData,
  });
  console.log("🚀 ~ getHistory ~ res:", res)

  return res;
};

export const createEOAWalletAPI = async (formData) => {
  const res = await axiosInstance("/create/wallet", {
    method: "POST",
    data: formData,
  });
  console.log("🚀 ~ createEOAWalletAPI ~ res:", res)
  return res;
};

export const createSmartWalletAPI = async (formData) => {
  const res = await axiosInstance("/create/smartwallet", {
    method: "POST",
    data: formData,
  });
  console.log("🚀 ~ createSmartWalletAPI ~ res:", res)
  return res;
};

export const backupWallet = async (formData) => {
  const res = await axiosInstance(`/backup/wallet`, {
    method: "POST",
    data: formData,
  });
  console.log("🚀 ~ backupWal ~ res:", res)

  return res;
};

export const addGuardian = async (formData) => {
  const res = await axiosInstance("/add/guardian", {
    method: "POST",
    data: formData,
  });
  console.log("🚀 ~ addGuardian ~ res:", res)
  return res;
};

export const getGuardians = async (formData) => {
  const res = await axiosInstance("/get/guardian", {
    method: "POST",
    data: formData,
  });
  console.log("🚀 ~ getGuardians ~ res:", res)
  return res;
};

export const getGuardedWallets = async () => {
  const res = await axiosInstance("/guardedWallets", {
    method: "GET",
  });
  console.log("🚀 ~ getGuardedWallets ~ res:", res)

  return res;
};

export const confirmRecovery = async (formData) => {
  const res = await axiosInstance("/confirm/guardian", {
    method: "POST",
    data: formData,
  });
  console.log("🚀 ~ confirmRecovery ~ res:", res)
  return res;
};

export const getRecoveryStatus = async (formData) => {
  const res = await axiosInstance("/recoveryStatus", {
    method: "POST",
    data: formData,
  });
  console.log("🚀 ~ getRecoveryStatus ~ res:", res)
  return res;
};

export const removeGuardian = async (formData) => {
  const res = await axiosInstance("/remove/guardian", {
    method: "POST",
    data: formData,
  });
  console.log("🚀 ~ removeGuardian ~ res:", res)
  return res;
};

export const startRecovery = async (formData) => {
  const res = await axiosInstance("/start/guardian", {
    method: "POST",
    data: formData,
  });
  console.log("🚀 ~ startRecovery ~ res:", res)
  return res;
};

export const getUserTokens = async (formData) => {
  const res = await axiosInstance("/get/user/tokens", {
    method: "POST",
    data: formData,
  });
  console.log("🚀 ~ getUserTokens ~ res:", res)
};

export const getUSDValue = async () => {
  try {
    const res = await axios.get(CRYPTO_TO_USD);
    console.log("🚀 ~ getUSDValue ~ res:", res)
    return res;
  } catch (error) { }
};

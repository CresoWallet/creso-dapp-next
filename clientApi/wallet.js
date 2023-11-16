import { axiosInstance } from "@/services/axios";

export const getUserWallets = async () => {
    const res = await axiosInstance("/wallet", {
        method: "GET",
    });

    return res;
}

export const transferEthAPI = async (formData) => {
    const res = await axiosInstance("/transfer", {
        method: "POST",
        data: formData,
    });

    return res;
}
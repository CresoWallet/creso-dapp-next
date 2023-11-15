import { BASE_URL } from "@/constants";
import { axiosInstance } from "@/services/axios";

export const getUserWallets = async () => {
    const res = await axiosInstance("/wallet", {
        method: "GET",
    });

    return res;
}
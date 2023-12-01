import { RPC_URL } from "@/constants";
import { ethers } from "ethers";
import tokenAbi from "../../data/contract/ERC20.json";

export const provider = new ethers.JsonRpcProvider(RPC_URL);

export const getTokenBalance = async (tokenAddress, address) => {
  const tokenContract = getTokenContract(tokenAddress);
  const balance = await tokenContract.balanceOf(address);
  return ethers.formatEther(balance);
};

export const getTokenContract = (tokenAddress) => {
  return new ethers.Contract(tokenAddress, tokenAbi, provider);
};

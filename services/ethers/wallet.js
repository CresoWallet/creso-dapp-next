import {
  RPC_URL_GOERLI,
  RPC_URL_ETHEREUM,
  RPC_URL_POLYGON,
  RPC_URL_BNB,
} from "@/constants";
import { ethers } from "ethers";
import tokenAbi from "../../data/contract/ERC20.json";

// export const provider = new ethers.JsonRpcProvider(RPC_URL_GOERLI);

export const getTokenBalance = async (tokenAddress, address, network) => {
  console.log("tokenAddress : ", tokenAddress);
  console.log("network : ", network);
  const tokenContract = getTokenContract(tokenAddress, network);
  const balance = await tokenContract.balanceOf(address);

  return ethers.formatEther(balance);
};

export const getTokenContract = (tokenAddress, network) => {
  const provider = getProvider(network);
  return new ethers.Contract(tokenAddress, tokenAbi, provider);
};

const getProvider = (network) => {
  switch (network) {
    case "ethereum":
      return new ethers.JsonRpcProvider(RPC_URL_ETHEREUM);

    case "goerli":
      return new ethers.JsonRpcProvider(RPC_URL_GOERLI);

    case "bnb":
      return new ethers.JsonRpcProvider(RPC_URL_BNB);

    case "polygon":
      return new ethers.JsonRpcProvider(RPC_URL_POLYGON);

    default:
      return new ethers.JsonRpcProvider(RPC_URL_ETHEREUM);
  }
};

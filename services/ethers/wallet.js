import {
  RPC_URL_GOERLI,
  RPC_URL_ETHEREUM,
  RPC_URL_POLYGON,
  RPC_URL_BNB,
} from "@/constants";
import { ethers } from "ethers";
import tokenAbi from "../../data/contract/ERC20.json";
import clWalletJson from "../../data/contract/CLWalletFactory.json";
import clWallet from "../../data/contract/CLWallet.json";

// export const provider = new ethers.JsonRpcProvider(RPC_URL_GOERLI);

export const getTokenBalance = async (tokenAddress, address, network) => {
  const tokenContract = getTokenContract(tokenAddress, network);
  const balance = await tokenContract.balanceOf(address);

  return ethers.formatEther(balance);
};

export const getTokenContract = (tokenAddress, network) => {
  const provider = getProvider(network);
  return new ethers.Contract(tokenAddress, tokenAbi, provider);
};

export const getWalletBalance = async (walletAddress, network) => {
  const provider = getProvider(network);
  const balanceInWei = await provider.getBalance(walletAddress);
  const balance = ethers.formatEther(balanceInWei);

  return balance;
};

export const getRecoveryStatus = async (walletAddress, network, guardian) => {
  try {
    const smartWalletContract = getWalletContract(walletAddress, network);

    const isRecoveryActive = await smartWalletContract.recoveryActive.call();
    const recoveryTimeLock = await smartWalletContract.recoveryTimeLock.call();
    const recoveryInitiatedTime =
      await smartWalletContract.recoveryInitiatedTime.call();
    const requiredConfirmations =
      await smartWalletContract.requiredConfirmations.call();
    const recoveryConfirmation =
      guardian && (await smartWalletContract.recoveryConfirmation(guardian));

    const data = {
      isRecoveryActive,
      recoveryTimeLock: recoveryTimeLock.toString(),
      recoveryInitiatedTime: recoveryInitiatedTime.toString(),
      requiredConfirmations: requiredConfirmations.toString(),
      recoveryConfirmation,
    };

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWalletContract = (address, network) => {
  const provider = getProvider(network);
  return new ethers.Contract(address, clWallet.abi, provider);
};

export const getRecoveryConfirmation = async (
  walletAddress,
  network,
  addresses
) => {
  try {
    const smartWalletContract = getWalletContract(walletAddress, network);

    var confirmedArray = [];
    for (var i = 0; i < addresses.length; i++) {
      const recoveryConfirmation =
        await smartWalletContract.recoveryConfirmation(
          addresses[i]?.guardianAddress
        );

      if (recoveryConfirmation)
        confirmedArray.push(addresses[i]?.guardianAddress);
    }

    return confirmedArray;
  } catch (error) {
    console.log(error);
  }
};

export const getProvider = (network) => {
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

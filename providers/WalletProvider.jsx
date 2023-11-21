"use client";
import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";

import { getUserWallets } from "@/clientApi/wallet";
import { AUTH_TOKEN } from "@/constants";

export const WalletContext = createContext();

const WalletContextProvider = ({ children }) => {
  const [secureWalletAddress, setSecureWalletAddress] = useState("");
  const [eoaWalletAddress, setEoaWalletAddress] = useState("");
  const [secureWalletBalance, setSecureWalletBalance] = useState(0);
  const [eoaWalletBalance, setEoaWalletBalance] = useState(0);
  const [wallets, setWallets] = useState([]);

  const fetchWallet = async () => {
    let sWalletBalance = 0;
    let eWalletBalance = 0;
    try {
      const res = await getUserWallets();

      if (res?.data) {
        let walletsEOA = await Promise.all(
          res.data.wallets.map(async (wallet, index) => {
            const provider = new ethers.JsonRpcProvider(
              "https://ethereum-goerli.publicnode.com"
            );

            const balanceInWei = await provider.getBalance(wallet.address);
            const balance = ethers.formatEther(balanceInWei);
            eWalletBalance += parseFloat(balance);

            if (index === 0) {
              setEoaWalletAddress(wallet.address);
            }

            return {
              walletName: wallet.walletName,
              address: wallet.address,
              type: "EOA",
              balance: balance,
            };
          })
        );

        let smartWallet = await Promise.all(
          res.data.smartWallets.map(async (sWallet, index) => {
            const provider = new ethers.JsonRpcProvider(
              "https://ethereum-goerli.publicnode.com"
            );

            const balanceInWei = await provider.getBalance(sWallet.address);
            const balance = ethers.formatEther(balanceInWei);
            sWalletBalance += parseFloat(balance);

            if (index === 0) {
              setSecureWalletAddress(sWallet.address);
            }

            return {
              walletName: sWallet.walletName,
              address: sWallet.address,
              type: "AA",
              balance: balance,
            };
          })
        );

        let wallets = [...walletsEOA, ...smartWallet];

        setSecureWalletBalance(sWalletBalance);
        setEoaWalletBalance(eWalletBalance);
        setWallets(wallets);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWallet();
  }, []);

  return (
    <WalletContext.Provider
      value={{
        secureWalletBalance,
        eoaWalletBalance,
        wallets,
        secureWalletAddress,
        eoaWalletAddress,
        fetchWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
export default WalletContextProvider;

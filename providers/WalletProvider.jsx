"use client";
import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";

import { getHistory, getUserTokens, getUserWallets } from "@/clientApi/wallet";
import { useUser } from "./UserProvider";

export const WalletContext = createContext();

const WalletContextProvider = ({ children }) => {
  const [secureWalletAddress, setSecureWalletAddress] = useState("");
  const [eoaWalletAddress, setEoaWalletAddress] = useState("");
  const [secureWalletBalance, setSecureWalletBalance] = useState(0);
  const [eoaWalletBalance, setEoaWalletBalance] = useState(0);
  const [wallets, setWallets] = useState([]);
  const [smartWallets, setSmartWallets] = useState([]);
  const [eoaWallets, setEoaWallets] = useState([]);
  const [history, setHistory] = useState([]);
  const { user, isAuthenticated, status } = useUser();

  // useEffect(() => {
  //   (async () => {
  //     if (isAuthenticated) {
  //       console.log("tokesss");
  //       const tokens = await getUserTokens({
  //         network: "goerlii", //goerli tokens not getting.
  //       });
  //       console.log(tokens);
  //     }
  //   })();
  // }, [user]);

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
        setSmartWallets(smartWallet);
        setEoaWallets(walletsEOA);
        setWallets(wallets);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchHistory = async () => {
    try {
      const res = await Promise.all([
        await getHistory({
          address: eoaWalletAddress,
          network: "goerli",
        }),
        await getHistory({
          address: secureWalletAddress,
          network: "goerli",
        }),
      ]);

      if (res) {
        const history = [...res[0].data, ...res[1].data];

        let sortedArray = history.sort((a, b) => {
          return new Date(b.timestamp) - new Date(a.timestamp);
        });

        let result = sortedArray.filter((e, i) => {
          return (
            sortedArray.findIndex((x) => {
              return x.hash == e.hash;
            }) == i
          );
        });

        setHistory(result);
      }
    } catch (error) {
      console.log("error : ", error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchWallet();
    }
  }, [user]);

  useEffect(() => {
    secureWalletAddress && eoaWalletAddress && fetchHistory();
  }, [secureWalletAddress, eoaWalletAddress]);

  return (
    <WalletContext.Provider
      value={{
        secureWalletBalance,
        eoaWalletBalance,
        wallets,
        secureWalletAddress,
        eoaWalletAddress,
        fetchWallet,
        history,
        smartWallets,
        eoaWallets,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
export default WalletContextProvider;

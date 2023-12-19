"use client";
import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";

import {
  getHistory,
  getUSDValue,
  getUserTokens,
  getUserWallets,
} from "@/clientApi/wallet";
import { useUser } from "./UserProvider";
import { network } from "@/utils/data/coinlist";
import { getBalance } from "@/utils";
import { getTokenBalance, getWalletBalance } from "@/services/ethers/wallet";
import SideNav from "@/components/SideNav";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";

export const WalletContext = createContext();

const WalletContextProvider = ({ children }) => {
  const [secureWalletAddress, setSecureWalletAddress] = useState("");
  const [eoaWalletAddress, setEoaWalletAddress] = useState("");
  const [secureWalletBalance, setSecureWalletBalance] = useState(0);
  const [eoaWalletBalance, setEoaWalletBalance] = useState(0);
  const [wallets, setWallets] = useState([]);
  const [smartWallets, setSmartWallets] = useState([]);
  const [eoaWallets, setEoaWallets] = useState([]);
  const [history, setHistory] = useState();
  const { user, isAuthenticated, status } = useUser();
  const [usdRate, setUsdRate] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [navbarTrigger, setNavbarTrigger] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
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
  const getBlnce = async (address) => {
    let balance = {};
    let totalUsd = 0;

    for (let i = 0; i < network.length; i++) {
      const walletBlnce = await getWalletBalance(address, network[i]?.value);
      const usdValue = usdRate
        ? parseFloat(walletBlnce * usdRate[network[i]?.symbol])
        : 0;
      balance[network[i].value] = walletBlnce;
      totalUsd += parseFloat(usdValue);
    }

    balance["totalUsd"] = totalUsd;

    return balance;
  };
  {
    /* For remove SideNav fetch path */
  }
  const pathName = usePathname();
  const isLoginOrRegister =
    pathName.includes("/login") || pathName.includes("/register");
  // console.log(pathName);

  useEffect(() => {
    if (isLoginOrRegister) {
      setNavbarTrigger(false); // Hide the navbar for login & register pages
    } else {
      setNavbarTrigger(true); // Show the navbar for other pages
    }
  }, [isLoginOrRegister]);

  const fetchWallet = async () => {
    let sWalletBalance = 0;
    let eWalletBalance = 0;

    try {
      const res = await getUserWallets();

      if (res?.data) {
        setEoaWalletAddress(res?.data?.wallets[0].address);
        setSecureWalletAddress(res?.data?.smartWallets[0].address);
        let walletsEOA = await Promise.all(
          res.data.wallets.map(async (wallet, index) => {
            const balance = await getBlnce(wallet.address);
            eWalletBalance += parseFloat(balance?.totalUsd);

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
            const balance = await getBlnce(sWallet.address);
            sWalletBalance += parseFloat(balance?.totalUsd);

            return {
              walletName: sWallet.walletName,
              address: sWallet.address,
              network: sWallet.network,
              type: "AA",
              balance: balance,
            };
          })
        );

        let wallets = [...walletsEOA, ...smartWallet];

        // console.log("wallets : ", wallets);

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
    } finally {
      setIsLoaded(true);
    }
  };

  const fetchUsdValue = async () => {
    try {
      const res = await getUSDValue();
      if (res) {
        setUsdRate({
          ETH: res?.data?.ethereum.usd,
          BNB: res?.data?.binancecoin.usd,
          MATIC: res?.data["matic-network"].usd,
        });
      }
    } catch (error) {
      console.log("error : ", error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchUsdValue();
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
        isLoaded,
        navbarTrigger,
        setNavbarTrigger,
        isMobile,
      }}
    >
      {navbarTrigger && (
        <div
          className="navbackdrop"
          onClick={() => setNavbarTrigger(!navbarTrigger)}
        ></div>
      )}
      <div className='flex my-2 mx-2 divide-x'>
        {/* ------------Sidebar---------- */}

        <div className='w-[15%]'>
          {isMobile && navbarTrigger && (
            <div className={`col-span-1 h-full responsivemb-nav `}>
              {/* Conditionally render SideNav based on the path name */}
              {!isLoginOrRegister && <SideNav />}
            </div>
          )}
          {/* {!isMobile && ( */}
          <div className={`col-span-1 h-full`}>
            {/* Conditionally render SideNav based on the path name */}
            {!isLoginOrRegister && <SideNav />}
          </div>
          {/* )} */}
        </div>
        <div className="w-[85%]">
          {children}
        </div>
      </div>
    </WalletContext.Provider>
  );
};
export default WalletContextProvider;

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
import SideNav from "@/components/navbar/SideNav";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";
import MobileMenubar from "@/components/navbar/mobileMenubar";
import TokenComponent from "@/components/Tokens/TokensComponent";

export const WalletContext = createContext();

const WalletContextProvider = ({ children }) => {
  const [secureWalletAddress, setSecureWalletAddress] = useState("");
  const [eoaWalletAddress, setEoaWalletAddress] = useState("");
  const [secureWalletBalance, setSecureWalletBalance] = useState(0);
  const [eoaWalletBalance, setEoaWalletBalance] = useState(0);
  const [wallets, setWallets] = useState([]);
  const [smartWallets, setSmartWallets] = useState([]);
  // console.log("🚀 ~ WalletContextProvider ~ smartWallets:", smartWallets)
  const [eoaWallets, setEoaWallets] = useState([]);
  // console.log("🚀 ~ WalletContextProvider ~ eoaWallets:", eoaWallets)
  const [history, setHistory] = useState();
  const { user, isAuthenticated, status } = useUser();
  const [usdRate, setUsdRate] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [navbarTrigger, setNavbarTrigger] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  const [allToken, setAllToken] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);
  const [activeButton, setActiveButton] = useState("AA");
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [send, setSend] = useState(false);

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
      const res = await getHistory({
        network: "goerli",
      });

      if (res) {
        setHistory(res?.data);
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
        allToken,
        setAllToken,
        totalBalance,
        setTotalBalance,
        activeButton,
        setActiveButton,
        filteredData,
        setFilteredData,
        originalData,
        setOriginalData,
        send,
        setSend,
      }}
    >
      {/* {navbarTrigger && (
        <div
          className="navbackdrop"
          onClick={() => setNavbarTrigger(!navbarTrigger)}
        ></div>
      )} */}

      {!isLoginOrRegister && (
        <div className="flex my-2 mx-2">
          {/* ------------Sidebar---------- */}
          <div className="sidebar">
            {/* {!isMobile && ( */}
            <div className={`sidebarDesktop h-full w-full`}>
              {/* Conditionally render SideNav based on the path name */}
              {!isLoginOrRegister && <SideNav />}
            </div>
            {/* )} */}
          </div>
          {!isMobile && <div className="childrens">{children}</div>}
        </div>
      )}
      {(isMobile || isLoginOrRegister) && <div className="">{children}</div>}

      {/* ------------Mobile Menubar---------- */}
      <div className="fixed bottom-0 w-full z-10 lg:block">
        {isMobile && navbarTrigger && (
          <>
            {/* Conditionally render SideNav based on the path name */}
            {!isLoginOrRegister && <MobileMenubar />}
            {/* {!isLoginOrRegister && <SideNav />} */}
          </>
        )}
      </div>

      <TokenComponent />
    </WalletContext.Provider>
  );
};
export default WalletContextProvider;

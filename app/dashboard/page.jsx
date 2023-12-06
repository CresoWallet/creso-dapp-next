"use client";

import React, { Suspense, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";
import { ethers } from "ethers";

import { AUTH_TOKEN } from "@/constants";
import SecureWallet from "@/components/SecureWallet";
import Modal from "@/components/modal/Modal";
import { useUser } from "@/providers/UserProvider";
import Backup from "@/components/Backup";
import CoinList from "@/components/CoinList";
import Mainnet from "@/components/Mainnet";
import Header from "@/components/Header";
import CapCard from "@/components/CapCard";
import CustomButton2 from "@/components/CustomButton2";
import User from "@/components/User";
import Sure from "../../assets/Dashboard/gainers/sure.png";
import CresoCard from "@/components/CresoCard";
import SideNav from "@/components/SideNav";
import Search from "../../assets/Dashboard/search.png";
import PinkPlus from "../../assets/Dashboard/PinkPlus.png";
import Ham from "../../assets/Dashboard/ham.png";
import CreateWallet from "@/components/CreateWallet";
import CoinWallet from "@/components/CoinWallet";
import CFX from "../../assets/gainers/cfx.png";
import MINA from "../../assets/AboutUs/gainers/mina.png";
import Add from "../../assets/Dashboard/add.png";
import AddCoinButton from "@/components/AddCoinButton";
import CoinCard from "@/components/cards/Coin";
import { WalletContext } from "@/providers/WalletProvider";
import { ethToDollar } from "@/utils";
import HistoryCard from "@/components/cards/HistoryCard";
import { getHistory, getUSDValue } from "@/clientApi/wallet";
import History from "@/components/dashboard/History";

const Dashboard = () => {
  const router = useRouter();
  const [showCreateWallet, setShowCreateWallet] = useState(false);
  const [showCoinWallet, setShowCoinWallet] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [navbarTrigger, setNavbarTrigger] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [usd, setUsd] = useState(0);
  // const [wallets, setWallets] = useState([]);
  const [walletType, setWalletType] = useState("");
  const [coinData, setCoinData] = useState("");
  const { user, isAuthenticated, status } = useUser();

  const {
    secureWalletBalance,
    eoaWalletBalance,
    wallets,
    secureWalletAddress,
    eoaWalletAddress,
    fetchWallet,
  } = useContext(WalletContext);

  useEffect(() => {
    if (status === "failed") {
      router.push("/login");
    }
  }, [status]);

  useEffect(() => {
    fetchWallet();
  }, []);

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const handleCreateWallet = () => {
    setShowCreateWallet(!showCreateWallet);
    // close other models
    setShowCoinWallet(false);
    setShowWallet(false);
  };

  const handleClose = () => {
    setShowCreateWallet(false);
  };

  const handleCoinWallet = (data) => {
    setCoinData(data?.item);
    setShowCoinWallet(true);
    // close other models
    setShowCreateWallet(false);
    setShowWallet(false);
  };

  const handleShowModel = () => {
    setShowModal(true);
    // close other models
    setShowCoinWallet(false);
    setShowWallet(false);
    setShowCreateWallet(false);
  };

  const handleCloseCoinWallet = () => {
    setShowCoinWallet(false);
  };

  const handleShowWallet = (data) => {
    setWalletType(data?.walletName);
    setShowWallet(true);
    // close other models
    setShowCoinWallet(false);
    setShowCreateWallet(false);
  };

  const handleCloseShowWallet = () => {
    setShowWallet(false);
  };

  useEffect(() => {
    if (navbarTrigger) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [navbarTrigger]);

  if (status !== "authenticated") {
    return <div>{/* {<Loader/>} */}</div>;
  }

  return (
    <div id="modal-root">
      {navbarTrigger && (
        <div
          className="navbackdrop"
          onClick={() => setNavbarTrigger(!navbarTrigger)}
        ></div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 px-2 xl:pt-2 md:pt-2 mb-2">
        <div className="col-span-2">
          <div className="grid h-full responsivemb-cols">
            {isMobile && navbarTrigger && (
              <div className={`col-span-1 h-full responsivemb-nav `}>
                <SideNav />
              </div>
            )}

            {!isMobile && (
              <div className={`col-span-1 h-full`}>
                <SideNav />
              </div>
            )}

            <div className="col-span-3 xl:space-y-6 md:space-y-6 space-y-2 xl:mx-10 md:mx-4 xl:py-8 md:py-8">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col space-y-1">
                  <p className="text-black text-3xl font-bold">Dashboard</p>
                  <p className="text-[#6F6E7A] text-xs">
                    Last Backup:
                    <span className="uppercase text-[#2100EC]">
                      28 OCT 2023
                    </span>
                  </p>
                </div>
              </div>
              {!user?.isEmailVerified && (
                <Backup onClick={() => handleShowModel()} />
              )}
              <div className="flex flex-row justify-start gap-9">
                <AddCoinButton />
                <CoinCard handleCoinWallet={handleCoinWallet} />
              </div>
              <Mainnet
                handleOpenWallet={handleShowWallet}
                handleCreateWallet={handleCreateWallet}
                secureWalletAddress={secureWalletAddress}
                eoaWalletAddress={eoaWalletAddress}
                showWallet={showWallet}
              />{" "}
              <History />
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="cols-span-1 relative -m-2">
          {/* models */}
          <div className="hidden xl:flex md:flex ">
            {showCreateWallet && <CreateWallet handleClose={handleClose} />}
          </div>
          <div className="hidden xl:flex md:flex">
            {showCoinWallet && (
              <CoinWallet
                handleClose={handleCloseCoinWallet}
                wallets={wallets}
                coinData={coinData}
              />
            )}
          </div>

          <div className="hidden xl:flex md:flex">
            {showWallet && (
              <SecureWallet
                handleClose={handleCloseShowWallet}
                wallets={wallets}
                walletType={walletType}
                secureWalletBalance={secureWalletBalance}
                eoaWalletBalance={eoaWalletBalance}
              />
            )}
          </div>
          {showModal && (
            <Modal onClose={() => setShowModal(false)} user={user} />
          )}

          {/* right side component */}
          <div className="col-span-1 xl:px-7 md:px-2 px-2 xl:pt-8 md:pt-8">
            <div className="hidden xl:block md:block">
              <Header />
            </div>

            <CresoCard balance={secureWalletBalance + eoaWalletBalance} />
            <div className="grid grid-cols-2 gap-2">
              <CapCard
                name="Market Cap"
                amount="$1,312.6B"
                icon="up"
                iconColor="[#FF4085]"
                percentageColor="[#FF4085]"
                percentage="9.39%"
              />
              <CapCard
                name="NFT Cap"
                amount="$2.16B"
                icon="down"
                iconColor="[#14B195]"
                percentageColor="[#14B195]"
                percentage="2.91%"
              />
              <CapCard
                name="24H Volume"
                amount="$125.6B"
                icon="up"
                iconColor="[#FF4085]"
                percentageColor="[#FF4085]"
                percentage="9.39%"
              />
              <CapCard
                name="Gas Burn Leaderboard"
                amount="$2.16B"
                icon="up"
                // iconColor="[#FF4085]"
                // percentageColor="[#FF4085]"
                percentage="386.58 ETH"
              />
            </div>
            <div className="flex flex-row items-center gap-2 mt-8">
              <CustomButton2
                name="Top Gainers"
                bgColor="[#D0F500]"
                borderColor="black"
                textColor="black"
              />
              <CustomButton2
                name="Top Losers"
                bgColor="white"
                borderColor="[#E5E5F0]"
                textColor="black"
              />
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex flex-col gap-1">
                <User
                  name="SURE"
                  description="240 inSure DeFi"
                  image={Sure}
                  amount="$0,0041.66"
                  icon="down"
                  iconColor="[#FF4085]"
                  percentageColor="[#FF4085]"
                  percentage="0.23%"
                />
                <hr />
              </div>
              <div className="flex flex-col gap-1">
                <User
                  name="CFX"
                  description="76 Conflux"
                  image={CFX}
                  amount="$0.159046"
                  icon="up"
                  iconColor="[#14B195]"
                  percentageColor="[#14B195]"
                  percentage="44.91%"
                />
                <hr />
              </div>
              <div className="flex flex-col gap-1">
                <User
                  name="MINA"
                  description="51 Mina Protocol"
                  image={MINA}
                  amount="$0,8366.21"
                  icon="up"
                  iconColor="[#14B195]"
                  percentageColor="[#14B195]"
                  percentage="101.91%"
                />
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

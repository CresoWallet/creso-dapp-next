"use client";

import React, { useContext, useState } from "react";
import SecureWallet from "@/components/SecureWallet";
import Modal from "@/components/modal/Modal";
import CapCard from "@/components/CapCard";
import CustomButton2 from "@/components/CustomButton2";
import User from "@/components/User";
import Sure from "../../assets/Dashboard/gainers/sure.png";
import CresoCard from "@/components/CresoCard";
import CreateWallet from "@/components/CreateWallet";
import CoinWallet from "@/components/CoinWallet";
import CFX from "../../assets/gainers/cfx.png";
import MINA from "../../assets/AboutUs/gainers/mina.png";
import { WalletContext } from "@/providers/WalletProvider";
import { usePathname } from "next/navigation";

const RightSide = (props) => {
  const {
    showCoinWallet,
    showModal,
    setShowModal,
    walletType,
    coinData,
    secureWalletBalance,
    eoaWalletBalance,
    wallets,
    showWallet,
    showCreateWallet,
    handleCloseShowWallet,
    handleCloseCoinWallet,
    handleClose,
    user,
  } = props;
  // const [showCreateWallet, setShowCreateWallet] = useState(false);
  // const [showCoinWallet, setShowCoinWallet] = useState(false);
  // const [showWallet, setShowWallet] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const {
  //     secureWalletBalance,
  //     eoaWalletBalance,
  //     wallets,
  // } = useContext(WalletContext);

  // const handleCloseShowWallet = () => {
  //     setShowWallet(false);
  // };
  const path = usePathname();
  const matchPath = path !== "/discover";
  const isSwapPage = path === "/swap";
  const isAboutPage = path === "/about";
  return (
    <>
      {/* right side */}
      <div className="grid relative -m-5 pb-32 lg:pb-0">
        {/* models */}
        {/* <div className="hidden md:flex ">
          {showCreateWallet && <CreateWallet handleClose={handleClose} />}
        </div> */}

        {showModal && <Modal onClose={() => setShowModal(false)} user={user} />}

        {/* right side component */}
        <div className="col-span-1 xl:px-7 md:px-2 px-2 xl:pt-8 md:pt-8 mt-6">
          {matchPath && (
            <CresoCard balance={secureWalletBalance + eoaWalletBalance} />
          )}
          <div className="grid grid-cols-2 gap-2 my-8">
            <CapCard
              name="Market Cap"
              amount="$1,312.6 B"
              icon="down"
              iconColor="[#FF4085]"
              percentageColor="[#FF4085]"
              percentage="9.39%"
            />
            <CapCard
              name="NFT Cap"
              amount="$2.16 B"
              icon="up"
              iconColor="[#14B195]"
              percentageColor="[#14B195]"
              percentage="2.91%"
            />
            <CapCard
              name="24H Volume"
              amount="$125.6 B"
              icon="down"
              iconColor="[#FF4085]"
              percentageColor="[#FF4085]"
              percentage="9.39%"
            />
            <CapCard
              name="Gas Burn Leaderboard"
              amount="$2.16 B"
              // icon=""
              // iconColor="[#FF4085]"
              // percentageColor="[#FF4085]"
              percentage="386.58 ETH"
            />
          </div>
          {isSwapPage || isAboutPage ? (
            <div className="flex flex-row items-center gap-2 mt-8">
              <p className="text-black text-2xl font-bold">Top Gainers</p>
            </div>
          ) : (
            <div className="flex flex-row items-center gap-2 mt-8">
              <CustomButton2
                name="Top Gainers "
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
          )}
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
    </>
  );
};

export default RightSide;

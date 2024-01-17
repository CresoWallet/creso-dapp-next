/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useContext, useEffect, useState } from "react";
import Modal from "@/components/modal/Modal";
import CustomButton2 from "@/components/CustomButton2";
import User from "@/components/User";
import Sure from "../../assets/Dashboard/gainers/sure.png";
import CresoCard from "@/components/CresoCard";
import CFX from "../../assets/gainers/cfx.png";
import MINA from "../../assets/AboutUs/gainers/mina.png";
import { usePathname } from "next/navigation";
import { VscFeedback } from "react-icons/vsc";
import { getTopGainersLosers } from "@/components/TopGainer_Losers/GainersLosersList";
import Image from "next/image";

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

  const [hover, setHover] = useState(false);

  const [activeButton, setActiveButton] = useState("TopGainers");
  const [data, setData] = useState({ topGainers: [], topLosers: [] });
  console.log("🚀 ~ RightSide ~ data:", data)
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    // Handle other button-specific logic here
  };

  const path = usePathname();
  const matchPath = path !== "/discover";
  const isSwapPage = path === "/swap";
  const isAboutPage = path === "/about";
  const style = { color: "white" };
  const hoverStyle = { color: "black" };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getTopGainersLosers();
      setData(result);
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="grid relative  -mx-4 pb-32 lg:pb-0">
        {showModal && <Modal onClose={() => setShowModal(false)} user={user} />}

        <div className="col-span-1 xl:px-7 md:px-2 px-2 xl:pt-8 md:pt-8 mt-6">
          {matchPath && (
            <CresoCard balance={secureWalletBalance + eoaWalletBalance} />
          )}

          {isSwapPage || isAboutPage ? (
            <div className="flex flex-row items-center gap-2 mt-8">
              <p className="text-black text-2xl font-bold">Top Gainers</p>
            </div>
          ) : (
            <div className="flex flex-row items-center gap-2 mt-8">
              <CustomButton2
                name="Top Gainers"
                active={activeButton === "TopGainers"}
                bgColor="#D0F500"
                textColor="black"
                handleClick={() => handleButtonClick("TopGainers")}
                isDisabled={false}
              />
              <CustomButton2
                name="Top Losers"
                active={activeButton === "TopLosers"}
                bgColor="#D0F500"
                textColor="black"
                handleClick={() => handleButtonClick("TopLosers")}
                isDisabled={false}
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


        {/* <div className="flex flex-col gap-4 mt-6">
          <div className="flex flex-col gap-1">


          </div>
          <h3 className="font-semibold">Top Gainers</h3>
          {data.topGainers?.length !== 0 ?
            data.topGainers.map((coin) => (
              <div className="flex flex-row justify-between items-center" key={coin.id}>
                <div className="flex flex-row gap-2 items-center">
                  <div>
                    <Image src={coin?.image} alt={coin.name} />
                  </div>
                  <div className="flex flex-col">
                    <p className="uppercase text-sm font-semibold">{coin?.name}</p>

                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-semibold">{coin?.current_price}</p>
                  <div className="flex flex-row items-center">
                    {renderIcon()}
                    <p className={`text-[#14B195] text-xs justify-end`}>{coin?.price_change_percentage_24h}</p>
                  </div>
                </div>
                <hr />
              </div>)) : <div className="text-[#FF4085] ">Loading...</div>}

          <h3 className="font-semibold">Top Losers</h3>
          
          {data.topLosers?.length !== 0 ?
            data.topLosers.map((coin) => (
              <div className="flex flex-row justify-between items-center" key={coin.id}>
                <div className="flex flex-row gap-2 items-center">
                  <div>
                    <Image src={coin?.image} alt={coin.name} />
                  </div>
                  <div className="flex flex-col">
                    <p className="uppercase text-sm font-semibold">{coin?.name}</p>

                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-semibold">{coin?.current_price}</p>
                  <div className="flex flex-row items-center">
                    {renderIcon()}
                    <p className={`text-[#FF4085] text-xs justify-end`}>{coin?.price_change_percentage_24h}</p>
                  </div>
                </div>
                <hr />
              </div>)) : <div className="text-[#FF4085] ">Loading...</div>}
        </div> */}
      </div>
      <div className="relative">
        <a
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          href="https://forms.gle/GBEKLjSH7hxQiuPv8"
          target="_blank"
          className={`${hover ? "bg-white border border-[#2100EC] " : "bg-[#2100EC]"} fixed bottom-24 lg:bottom-12 right-12 cursor-pointer shadow-2xl z-50 h-20 w-20 grid place-items-center rounded-full `}
        >
          <div className="absolute grid place-items-center">
            <VscFeedback style={hover ? hoverStyle : style} size={30} />
          </div>
          {hover && (
            <p className="absolute p-2 rounded-lg font-semibold  -top-12 bg-black text-white ">
              {" "}
              Feedback
            </p>
          )}
        </a>
      </div>
    </>
  );
};

export default RightSide;

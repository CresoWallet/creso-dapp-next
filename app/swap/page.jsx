"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import SideNav from "@/components/navbar/SideNav";
import Settings from "../../assets/Swap/settings.png";
import Note from "../../assets/Swap/note.png";
import BNB from "../../assets/Swap/bnb.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Etherum from "../../assets/Swap/etherum.png";
import SwapButton from "../../assets/Swap/swap.png";
import ETHBNB from "../../assets/Swap/ethBnb.png";
import BNBUSDT from "../../assets/Swap/bnbUsdt.png";
import CustomButton3 from "@/components/CustomButton3";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Gas from "../../assets/Swap/gas.png";
import Clock from "../../assets/Swap/clock.png";
import Dollar from "../../assets/Swap/dollar.png";
import Layers from "../../assets/Swap/layers.png";
import CustomButton from "@/components/CustomButton";
import Swap2 from "../../assets/Swap/swap2.png";
import SwapFrom from "@/components/SwapFrom";
import User from "@/components/User";
import CapCard from "@/components/CapCard";
import CresoCard from "@/components/CresoCard";
import Header from "@/components/Header";
import CFX from "../../assets/gainers/cfx.png";
import MINA from "../../assets/gainers/mina.png";
import Sure from "../../assets/gainers/sure.png";
import Pepe from "../../assets/gainers/pepe.png";
import { useMediaQuery } from "react-responsive";
import Ham from "../../assets/Dashboard/ham.png";

const SwapPage = () => {
  const [showSwapForm, setShowSwapForm] = useState(false);

  const handleShowSwap = () => {
    setShowSwapForm(!showSwapForm);
  };

  const handleClose = () => {
    setShowSwapForm(false);
  };

  const [navbarTrigger, setNavbarTrigger] = useState(false);

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  useEffect(() => {
    if (navbarTrigger) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [navbarTrigger]);

  return (
    <>
      {navbarTrigger && (
        <div
          className="navbackdrop"
          onClick={() => setNavbarTrigger(!navbarTrigger)}
        ></div>
      )}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 px-2 my-2 divide-x">
          <div className="block xl:hidden md:hidden">
            <Header />
          </div>
          <div className="col-span-2">
            <div className="grid responsivemb-cols h-full">
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
              <div className="col-span-3 space-y-6 xl:mx-4 md:mx-4 mx-2 md:py-10 xl:py-10">
                <div className="flex xl:hidden md:hidden">
                  {showSwapForm && <SwapFrom handleClose={handleClose} />}
                </div>
                {/* right side component */}
                <div className="block xl:hidden md:hidden">
                  <Header />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-black xl:text-3xl md:text-2xl text-xl font-bold">
                    Swap & Bridge
                  </p>
                  <div className="flex flex-row gap-2 items-center">
                    <Image alt="" src={Settings} />
                    <Image alt="" src={Note} />
                    {isMobile && (
                      <Image
                        alt=""
                        className="navico"
                        src={Ham}
                        onClick={() => setNavbarTrigger(!navbarTrigger)}
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col space-y-1">
                    <p className="px-4 text-xs xl:text-sm md:text-sm">From</p>
                    <div className="rounded-full xl:pl-4 pl-2 xl:pr-8 pr-2 xl:py-2 py-1 flex flex-row justify-between border border-solid">
                      <div className="flex flex-row gap-2 items-center">
                        <Image alt="" src={BNB} />
                        <div className="flex flex-col">
                          <div className="flex flex-row gap-1 items-center">
                            <p className="font-semibold xl:text-lg text-sm">
                              BNB
                            </p>
                            <MdOutlineKeyboardArrowDown size={20} />
                          </div>
                          <p className="text-xs text-[#6F6E7A]">Binance Coin</p>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-center">
                        <p className="font-semibold text-sm">0x53A...e4af</p>
                        <MdOutlineKeyboardArrowDown size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center xl:-mt-6 xl:-mb-12 -mt-2 -mb-8">
                    <Image
                      alt=""
                      src={SwapButton}
                      className="w-12 h-12 xl:w-24 xl:h-24"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="px-4 text-xs xl:text-sm md:text-sm">To</p>
                    <div className="rounded-full xl:pl-4 pl-2 xl:pr-8 pr-2 xl:py-2 py-1 flex flex-row justify-between border border-solid">
                      <div className="flex flex-row gap-2 items-center">
                        <Image alt="" src={Etherum} />
                        <div className="flex flex-col">
                          <div className="flex flex-row gap-1 items-center">
                            <p className="font-semibold xl:text-lg text-sm">
                              ETH
                            </p>
                            <MdOutlineKeyboardArrowDown size={20} />
                          </div>
                          <p className="text-xs text-[#6F6E7A]">Ethereum</p>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-center">
                        <p className="font-semibold text-sm">0x53A...e4af</p>
                        <MdOutlineKeyboardArrowDown size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1 mt-2">
                    <div className="flex flex-row justify-between items-center">
                      <p className="px-4 text-xs xl:text-sm md:text-sm">
                        You Pay
                      </p>
                      <p className="text-xs text-[#6F6E7A]">
                        Balance: 7,432 USD
                      </p>
                    </div>
                    <div className="rounded-full xl:pl-4 pl-2 xl:pr-8 pr-2 xl:py-2 py-1 flex flex-row justify-between border border-solid">
                      <div className="flex flex-row gap-2 items-center">
                        <Image alt="" src={ETHBNB} />
                        <div className="flex flex-col">
                          <p className="font-semibold xl:text-lg text-sm">
                            800.23
                          </p>
                          <p className="text-xs text-[#6F6E7A]">$23.02</p>
                        </div>
                      </div>
                      <CustomButton3 title="Max" buttonColor="[#EEEEF1]" />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1 mt-2 mb-8">
                    <div className="flex flex-row justify-between items-center">
                      <p className="px-4 text-xs xl:text-sm md:text-sm">
                        You Get
                      </p>
                      <p className="text-[#FF4085] text-xs xl:text-sm md:text-sm">
                        Show all
                      </p>
                    </div>
                    <div className="rounded-3xl xl:pl-4 pl-2 xl:pr-8 pr-2 xl:py-2 py-1 flex flex-col  border border-solid ">
                      <div className="flex flex-row justify-between">
                        <div className="flex flex-row xl:gap-2 gap-1 items-center">
                          <Image alt="" src={BNBUSDT} />
                          <div className="flex flex-col">
                            <p className="font-semibold xl:text-lg text-sm">
                              270.6598
                            </p>
                            <div className="flex flex-row justify-center gap-2">
                              <p className="text-xs text-[#6F6E7A]">$23.02</p>
                              <p className="text-xs text-[#6F6E7A]">Across</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                          <CustomButton3
                            title="Recommended"
                            buttonColor="[#EEEEF1]"
                          />
                          <div className="flex rounded-full bg-[#EEEEF1] h-10 w-10 items-center justify-center">
                            <MdOutlineKeyboardArrowUp className="text-black h-5 w-5" />
                          </div>
                        </div>
                      </div>
                      <hr className="my-4" />
                      <div className="flex flex-row justify-between">
                        <div className="flex flex-col space-y-1 items-center">
                          <Image alt="" src={Gas} />
                          <p className="font-semibold text-sm xl:text-base">
                            $0.37
                          </p>
                        </div>
                        <div className="flex flex-col space-y-1 items-center">
                          <Image alt="" src={Dollar} />
                          <p className="font-semibold xl:text-base">$0.00</p>
                        </div>
                        <div className="flex flex-col space-y-1 items-center">
                          <Image alt="" src={Clock} />
                          <p className="font-semibold xl:text-base">3 min</p>
                        </div>
                        <div className="flex flex-col space-y-1 items-center">
                          <Image alt="" src={Layers} />
                          <p className="font-semibold xl:text-base">1</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CustomButton
                    name="Swap"
                    img={Swap2}
                    onClick={handleShowSwap}
                    bgColor="black"
                    nameColor="white"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="cols-span-1 relative">
            <div className="hidden xl:flex md:flex">
              {showSwapForm && <SwapFrom handleClose={handleClose} />}
            </div>

            <div className="col-span-1 xl:px-7 md:px-2 px-2 xl:pt-8 md:pt-8">
              <div className="hidden xl:block md:block">
                <Header />
              </div>
              <CresoCard />
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
              <p className="text-2xl font-bold">Top Gainers</p>
              <div className="flex flex-col gap-4">
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
                <div className="flex flex-col gap-1">
                  <User
                    name="PEPE"
                    description="51 PEPE"
                    image={Pepe}
                    amount="$1,794.28"
                    icon="down"
                    iconColor="[#FF4085]"
                    percentageColor="[#FF4085]"
                    percentage="0.23%"
                  />
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwapPage;

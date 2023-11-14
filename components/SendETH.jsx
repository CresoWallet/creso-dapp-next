"use client";
import React, { useState } from "react";
import Image from "next/image";
import CustomButton3 from "./CustomButton3";
import Ethereum from "../assets/Dashboard/etherum.png";
import Creso from "../assets/Dashboard/creso2.png";
import Send from "../assets/Dashboard/send.png";
import CustomButton from "./CustomButton";
import WalletAddress from "./WalletAddress";

const SendETH = ({ handleBackButton }) => {
  const [openCoinList, setOpenCoinList] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState({});
  const coinHandleClick = () => {
    setOpenCoinList(true);
  };

  const handleSelectCoin = (coin) => {
    setOpenCoinList(false);
    setSelectedCoin(coin);
  };

  const coins = [
    {
      coinsName: "ETH-1",
      coinImage: "",
      address: "0x53A...e4af",
      type: "EAQ",
    },
    {
      coinsName: "ETH-2",
      coinImage: { Creso },
      address: "0x54A...e4ac",
      type: "AWD",
    },
    {
      coinsName: "ETH-3",
      coinImage: { Creso },
      address: "0x61A...e4af",
      type: "ABC",
    },
  ];

  return (
    <div className="absolute bg-white flex flex-col xl:mx-8 md:mx-4 mx-0 px-2 xl:px-0 md:px-2 mt-10 w-full xl:pr-10 pr-2 space-y-4 h-screen z-20">
      <div className="flex flex-row items-center justify-between">
        <p className="text-black font-bold text-xl">Send ETH</p>

        <CustomButton3
          title="Back"
          buttonColor="[#FFC8DC]"
          titleColor="[#FF4085]"
          onClick={handleBackButton}
        />
      </div>

      <div className="flex flex-col space-y-1">
        <p className="text-sm mx-4">Network</p>
        <div className="flex flex-row items-center gap-2 border border-solid rounded-full px-4 py-2">
          <Image alt="" src={Ethereum} />
          <p className="text-sm">Ethereum Mainnet</p>
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <p className="text-sm mx-4">From</p>
        <div className="flex flex-row justify-between items-center gap-2 border border-solid rounded-full px-4 py-2">
          <button
            className="flex flex-row items-center gap-2"
            onClick={coinHandleClick}
          >
            {selectedCoin ? (
              <>
                <Image alt="" src={selectedCoin.coinImage || Creso} />
                <p className="text-sm md:text-xs font-semibold">
                  {selectedCoin.coinsName || (
                    <p className="hover:font-bold">Select Coin</p>
                  )}
                </p>
              </>
            ) : (
              <p className="text-sm md:text-xs cursor-pointer hover:font-bold">
                Select Coin
              </p>
            )}
          </button>
          {openCoinList && (
            <div className="bg-white shadow-xl absolute mt-40 px-4 py-2 flex flex-col space-y-4">
              {coins.map((coin, key) => (
                <div
                  key={key}
                  className="flex flex-col cursor-pointer gap-4"
                  onClick={() => handleSelectCoin(coin)}
                >
                  <div className="flex flex-row items-center gap-2">
                  <Image alt="" src={Creso} />
                  <p className="text-sm md:text-xs font-semibold">
                    {coin ? coin.coinsName : "Select Coin"}
                  </p>
                  </div>
                 
                </div>
              ))}
            </div>
          )}
          <div className="flex flex-row gap-1 items-center">
            {/* <CustomButton3
              title="EQA"
              buttonColor="[#EEEEF1]"
              titleColor="black"
            /> */}
            <div>
              {selectedCoin && (
                <button className="bg-[#EEEEF1] py-2 px-2 rounded-full border border-solid">
                  <p className="text-xs">
                    {selectedCoin.type || "Select Coin"}
                  </p>
                </button>
              )}
            </div>
            <p className="font-semibold text-sm md:text-xs">
              {selectedCoin ? selectedCoin.address : "Select Coin"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <p className="text-sm mx-4">To</p>
        <div className="flex flex-row justify-between items-center gap-2 border border-solid rounded-full px-4 py-2">
          <input
            className="text-sm placeholder:text-[#A09FAA] placeholder:text-xs focus:outline-none"
            placeholder="Enter wallet address or ENS,NNS"
          ></input>
          <CustomButton3
            title="Paste"
            buttonColor="[#2100EC]"
            titleColor="white"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <div className="flex flex-row justify-between items-center">
          <p className="text-sm mx-4">Amount</p>
          <p className="text-sm">Balance : 0 ETH</p>
        </div>

        <div className="flex flex-row items-center gap-2 border border-solid rounded-full px-4 py-4">
          <input
            className="text-sm placeholder:text-[#A09FAA] placeholder:text-xs focus:outline-none"
            placeholder="Input amount"
          ></input>
        </div>
      </div>
      <CustomButton img={Send} name="Send" bgColor="black" />
    </div>
  );
};

export default SendETH;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { minifyEthereumAddress } from "@/utils";
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
      walletName: "WalletName-1",
      address: "0x53A...e4af",
      type: "EOA",
    },
    {
      walletName: "WalletName-2",
      address: "0x54A...e4ac",
      type: "AA",
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
        <div className="flex flex-row justify-between items-center gap-2 border border-solid rounded-full px-4 py-2 relative">
          <button
            className="flex flex-row items-center gap-2 w-full justify-between"
            onClick={coinHandleClick}
          >
            <div className="flex items-center gap-2">
              <>
                {selectedCoin ? (
                  <Image alt="" src={selectedCoin.coinImage || Creso} />
                ) : (
                  <p className="text-sm md:text-xs cursor-pointer hover:font-bold">
                    Select Wallet
                  </p>
                )}
              </>
              {selectedCoin && (
                <p className="font-semibold text-sm md:text-xs">
                  {selectedCoin.address || (
                    <p className="opacity-50">wallet address</p>
                  )}
                </p>
              )}
            </div>
            <div className="flex w-full max-w-[150px]">
              <div className="flex flex-row gap-1">
                {/* <CustomButton3
              title="EQA"
              buttonColor="[#EEEEF1]"
              titleColor="black"
            /> */}
                <div>
                  {selectedCoin && (
                    <button className="bg-[#EEEEF1] py-2 px-2 rounded-full border border-solid">
                      <p className="text-xs font-medium">
                        {selectedCoin.type || "Type"}
                      </p>
                    </button>
                  )}
                </div>
              </div>
              {selectedCoin ? (
                <>
                  {/* <Image alt="" src={selectedCoin.coinImage || Creso} /> */}
                  <p className="text-sm md:text-xs font-semibold whitespace-nowrap align-middle w-full flex items-center justify-center">
                    {selectedCoin.walletName || (
                      <p className="hover:font-bold">Select Wallet</p>
                    )}
                  </p>
                </>
              ) : (
                <p className="text-sm md:text-xs cursor-pointer hover:font-bold">
                  Select Wallet
                </p>
              )}
            </div>
          </button>
          {openCoinList && (
            <div className="bg-white shadow-xl absolute mt-[240px] px-4 py-4 flex flex-col space-y-4 gap-4 min-w-[300px] rounded-md">
              {coins.map((coin, key) => (
                <div
                  key={key}
                  className="flex flex-col cursor-pointer gap-4"
                  onClick={() => handleSelectCoin(coin)}
                >
                  <div className="flex flex-row items-center justify-between  h-10">
                    <div className="flex flex-row gap-4">
                      <div>
                        <Image alt="" src={Creso} className="w-8 h-8" />
                      </div>
                      <div className="flex flex-col items-start gap-2">
                        <p className="text-base md:text-sm font-semibold">
                          {coin ? coin.walletName : ""}
                        </p>
                        <p className="text-xs">{coin ? coin.address : ""}</p>
                      </div>
                    </div>
                    <div>
                      <button className="bg-[#EEEEF1] py-2 px-2 rounded-full border border-solid">
                        <p className="text-xs font-medium">
                          {coin ? coin.type : "Type"}
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* <div className="flex flex-row justify-between items-center gap-2 border border-solid rounded-full px-4 py-2 min-h-[66px] text-[13px] text-[#a09faa]">
          <input
            className="text-sm placeholder:text-[#A09FAA] placeholder:text-xs focus:outline-none"
            placeholder="Enter wallet address or ENS,NNS"
          ></input>
          0x7Cb6cAfa1fB1eAf283C1857897296866b3b6829B
        </div> */}
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

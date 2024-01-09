"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import ETH from "../assets/Dashboard/ethSelect.png";
import BnB from "../assets/Dashboard/bnb.png";
import USDT from "../assets/Dashboard/usdt.png";
import { IoIosClose } from "react-icons/io";
import Transaction from "../assets/Dashboard/transaction.png";
import CustomButton from "./CustomButton";
import Send from "../assets/Dashboard/send.png";
import Receive from "../assets/Dashboard/receive.png";
import SendETH from "./SendETH";
import WalletAddress from "./WalletAddress";
import { network } from "@/utils/data/coinlist";

const CoinWallet = ({ handleClose, wallets, coinData, coinDataprice }) => {
  const [send, setSend] = useState(false);
  const [walletAddress, setWalletAddress] = useState(false);
  const [mainContentVisible, setMainContentVisible] = useState(true);

  const handleWalletClick = () => {
    setWalletAddress(true);
    setSend(false);
    setMainContentVisible(false);
  };

  const handleClick = () => {
    setSend(true);
    setMainContentVisible(false);
  };

  const handleBackButtonClick = () => {
    setMainContentVisible(true);
    setWalletAddress(false);
    setSend(false);
  };
  //console.log(wallets);

  return (
    <div
      className={`min-w-max bg-white md:border-l-2 md:shadow-xl w-full h-screen z-10 `}
    >
      <div className="flex rounded-full bg-black h-8 w-8 items-center justify-center md:-ml-4 ml-2 mt-10 absolute z-[99]">
        <IoIosClose
          className="text-white h-4 w-4 cursor-pointer"
          onClick={handleClose}
        />
      </div>
      {send && (
        <SendETH
          handleBackButton={handleBackButtonClick}
          walletArr={wallets}
          networks={network}
        />
      )}
      {walletAddress && (
        <WalletAddress
          //  wallet= pass relevant wallet data here
          handleBackButton={handleBackButtonClick}
        />
      )}
      <div className="flex flex-col md:mx-8 mx-6 xl:mx-8 mt-10 xl:space-y-10 md:space-y-10 space-y-4">
        <p className="text-black font-bold text-xl ml-6 xl:ml-0 md:ml-0">
          {coinData.name}
        </p>
        <div className="flex flex-row items-center gap-2">
          <Image
            alt=""
            //src={
            //  coinData.coinName === "ETH"
            //    ? ETH
            //    : coinData.coinName === "BNB"
            //    ? BnB
            //    : coinData.coinName === "USDT"
            //    ? USDT
            //    : ETH
            //}
            src={coinData.image}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <p className="font-bold">
              {coinData.name}
              {/*{coinData.coinName === "ETH"
                ? "Ethereum"
                : coinData.coinName === "BNB"
                ? "Bitcoin"
                : coinData.coinName === "USDT"
                ? "Tether"
                : ""}*/}
            </p>
            <div className="flex flex-row xl:gap-2 gap-2 md:gap-2 items-center">
              <p className="font-semibold md:text-xs text-base">{`0.00 ${coinData.symbol.toUpperCase()}`}</p>
              <div className="">
                <p className="text-xs text-[#A09FAA]">
                  $ {coinData?.current_price}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center justify-between">
            <p className="text-[#A09FAA] text-sm">Network</p>
            <p className="font-semibold text-sm">
              {coinData?.network === "ethereum"
                ? "Ethereum Mainnet"
                : "Ethereum Mainnet"}
            </p>
          </div>
          <hr className="text-[#A09FAA] my-4" />
          <div className="flex flex-row items-center justify-between">
            <p className="text-[#A09FAA] text-sm">Standard</p>
            <p className="font-semibold text-sm">
              {coinData?.standard === "native" ? "Native Token" : "ERC-20"}
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Image alt="" src={Transaction} />
        </div>
        <div className="flex flex-row items-center xl:gap-2 md:gap-0 gap-2 md:flex-col md:space-y-2 xl:space-y-0 space-y-0">
          <CustomButton
            name="Send"
            img={Send}
            onClick={handleClick}
            bgColor="black"
          />
          <CustomButton
            name="Receive"
            img={Receive}
            onClick={handleWalletClick}
            bgColor="black"
          />
        </div>
      </div>
    </div>
  );
};

export default CoinWallet;

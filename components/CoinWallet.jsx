"use client";
import React, { useState } from "react";
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

const CoinWallet = ({ handleClose, wallets, coinData }) => {
  const [send, setSend] = useState(false);
  const [walletAddress, setWalletAddress] = useState(false);

  const handleWalletClick = () => {
    setWalletAddress(true);
  };

  const handleClick = () => {
    setSend(true);
  };
  //console.log(wallets);

  return (
    <div
      className={`absolute bg-white md:border-l-2 xl:border-l-2 md:shadow-xl xl:shadow-xl w-full h-full z-10 `}
    >
      <div className="flex rounded-full bg-black h-8 w-8 items-center justify-center xl:-ml-4 md:-ml-4 ml-2 mt-10 absolute">
        <IoIosClose
          className="text-white h-4 w-4 cursor-pointer"
          onClick={handleClose}
        />
      </div>
      {send && (
        <SendETH handleBackButton={() => setSend(false)} walletArr={wallets} />
      )}
      {walletAddress && (
        <WalletAddress handleBackButton={() => setWalletAddress(false)} />
      )}
      <div className="flex flex-col md:mx-8 mx-6 xl:mx-8 mt-10 xl:space-y-10 md:space-y-10 space-y-4">
        <p className="text-black font-bold text-xl ml-6 xl:ml-0 md:ml-0">
          {coinData.coinName}
        </p>
        <div className="flex flex-row items-center gap-2">
          <Image
            alt=""
            src={
              coinData.coinName === "ETH"
                ? ETH
                : coinData.coinName === "BNB"
                ? BnB
                : coinData.coinName === "USDT"
                ? USDT
                : ETH
            }
            className="w-14 h-14"
          />
          <div className="flex flex-col">
            <p className="">
              {coinData.coinName === "ETH"
                ? "Ethereum"
                : coinData.coinName === "BNB"
                ? "Bitcoin"
                : coinData.coinName === "USDT"
                ? "Tether"
                : ""}
            </p>
            <div className="flex flex-row xl:gap-2 gap-2 md:gap-2 items-center">
              <p className="font-bold md:text-xs text-base">{`3,187.99 ${coinData.coinName}`}</p>
              <p className="text-xs text-[#A09FAA]">{coinData.value}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center justify-between">
            <p className="text-[#A09FAA] text-sm">Network</p>
            <p className="font-semibold text-sm">{coinData?.network}</p>
          </div>
          <hr className="text-[#A09FAA] my-4" />
          <div className="flex flex-row items-center justify-between">
            <p className="text-[#A09FAA] text-sm">Standard</p>
            <p className="font-semibold text-sm">{coinData?.standard}</p>
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

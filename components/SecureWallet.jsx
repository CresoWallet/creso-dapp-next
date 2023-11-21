"use client";

import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import Image from "next/image";
import Menu from "../assets/Dashboard/list2.png";
import CresoCard from "./CresoCard";
import CustomButton from "./CustomButton";
import Send from "../assets/Dashboard/send.png";
import Receive from "../assets/Dashboard/receive.png";
import CustomButton2 from "./CustomButton2";
import ETH from "../assets/Dashboard/eth.png";
import DAI from "../assets/Dashboard/dai.png";
import USDT from "../assets/Dashboard/usdt3.png";
import SendETH from "./SendETH";
import WalletAddress from "./WalletAddress";

const SecureWallet = ({
  handleClose,
  wallets,
  walletType,
  secureWalletBalance,
  eoaWalletBalance,
}) => {
  const [send, setSend] = useState(false);
  const [walletAddress, setWalletAddress] = useState(false);

  const handleWalletClick = () => {
    setWalletAddress(true);
  };

  const handleClick = () => {
    setSend(true);
  };

  return (
    <div
      className={`absolute bg-white border-l-2 shadow-xl w-full h-full z-10 `}
    >
      <div className="flex rounded-full bg-black h-8 w-8 items-center justify-center xl:-ml-4 md:-ml-4 ml-2 mt-10 absolute cursor-pointer">
        <IoIosClose className="text-white h-4 w-4" onClick={handleClose} />
      </div>

      {send && (
        <SendETH
          handleBackButton={() => setSend(false)}
          walletArr={wallets.filter((e) => e.type === walletType)}
        />
      )}
      {walletAddress && (
        <WalletAddress handleBackButton={() => setWalletAddress(false)} />
      )}
      <div className="flex flex-col mx-8 mt-10 gap-8">
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold ml-4 xl:ml-0 md:ml-0">
            {walletType === "secure" ? "Keyless Secure Wallet" : "EOA Wallet"}
          </p>
          <Image src={Menu} alt="" className="cursor-pointer" />
        </div>

        <CresoCard
          balance={walletType === "AA" ? secureWalletBalance : eoaWalletBalance}
        />

        <div className="flex xl:flex-row flex-row items-center md:flex-col xl:gap-2 gap-2 md:gap-0 space-y-0 xl:space-y-0 md:space-y-2">
          <CustomButton
            name="Send"
            img={Send}
            bgColor="black"
            onClick={handleClick}
          />
          <CustomButton
            name="Receive"
            img={Receive}
            bgColor="black"
            onClick={handleWalletClick}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold">Balance</p>
          <div className="flex flex-row items-center gap-2">
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
        </div>

        <div className="flex flex-col gap-4">
          <div className="cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex justify-center items-center gap-2">
                <Image src={ETH} alt="" />
                <p className="font-semibold uppercase">ETH</p>
              </div>
              <div className="flex items-center justify-start gap-1">
                <p className="text-sm text-gray-600">$1,794.28</p>
                <p className="font-semibold">0.54</p>
              </div>
            </div>
            <hr className="mt-2" />
          </div>

          <div className="cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex justify-center items-center gap-2">
                <Image src={DAI} alt="" />
                <p className="font-semibold uppercase">DAI</p>
              </div>
              <div className="flex items-center justify-start gap-1">
                <p className="font-semibold">****</p>
              </div>
            </div>
            <hr className="mt-2" />
          </div>

          <div className="cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex justify-center items-center gap-2">
                <Image src={USDT} alt="" />
                <p className="font-semibold uppercase">USDT</p>
              </div>
              <div className="flex items-center justify-start gap-1">
                <p className="text-sm text-gray-600">$25.83</p>
                <p className="font-semibold">25.83</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureWallet;

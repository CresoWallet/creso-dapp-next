"use clinet";

import React, { useState } from "react";
import Image from "next/image";
import CustomButton3 from "./CustomButton3";
import Ethereum from "../assets/Dashboard/etherum.png";
import CustomButton2 from "./CustomButton2";
import CreateWallet from "./CreateWallet";

const LegacyWallet = ({ handleBackButton }) => {
  const [wallet, setWallet] = useState(false);

  return (
    <div className="absolute bg-white flex flex-col xl:mx-8 md:mx-4 mx-0 mt-10 xl:px-0 px-2 md:px-2 space-y-8 h-full">
      {wallet && <CreateWallet handleBackButton={() => setWallet(false)} />}
      <div className="flex flex-row items-center justify-between">
        <p className="text-black font-bold text-xl">Legacy Wallet</p>
        <div>
          <CustomButton3
            title="Back"
            buttonColor="[#FFC8DC]"
            titleColor="[#FF4085]"
            onClick={handleBackButton}
          />
        </div>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Image alt="" src={Ethereum} className="w-10 h-10" />
        <p className="font-semibold">Ethereum Mainnet</p>
      </div>
      <div className="flex flex-row">
        <p className="text-xs text-[#A09FAA]">
          Compatible with all Dapps; lower Gas fees; only supports paying gas
          with native token; does not support advanced features. Learn More
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between">
          <p className="px-4">Name Wallet</p>
          <p className="px-4">0/20</p>
        </div>
        <div className="border border-solid border-[#E5E5F0] rounded-full px-4 py-4">
          <div className="flex flex-row items-center justify-between">
            <input type="text" placeholder="E.g. My Wallet" className="placeholder:text-sm focus:outline-none" />
            <div>
              <CustomButton3
                title="EQA"
                buttonColor="[#EEEEF1]"
                titleColor="black"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-2">
        <p className="text-sm">
          Same address on other EVM compatible chains will be created
          automatically. Networks Supported
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <CustomButton2 name="Cancle" borderColor="black" bgColor="white" />
        <CustomButton2 name="Confirm" bgColor="black" textColor="white" />
      </div>
    </div>
  );
};

export default LegacyWallet;

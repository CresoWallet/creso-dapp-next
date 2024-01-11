"use client";
import React, { useState } from "react";
import Image from "next/image";
import Ethereum from "../assets/Dashboard/etherum.png";
import Wallet from "../assets/Dashboard/walletPink.png";
import WalletPurple from "../assets/Dashboard/walletPurple.png";
import CustomButton3 from "./CustomButton3";
import { BiChevronRight } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import LegacyWallet from "./LegacyWallet";
// import NetworkSelection from "./SelectNetwork";

// import SecureWallet from "./SecureWallet";

// const CreateWallet = ({ handleClose }) => {
//   const [legacyWallet, setLegacyWallet] = useState(false);
//   //const [smartWallet, setSmartWallet] = useState(false);
//   const [type, setType] = useState("");

// const handleClick = () => {
//   setType("EOA");
//   setLegacyWallet(true);
// };

// const handleAAClick = () => {
//   setType("AAA");
//   // setSmartWallet(true);
//   setLegacyWallet(true);
// };

// const handleBackButtonClick = () => {
//   setLegacyWallet(false);
//   setSmartWallet(false);
// };
const CreateWallet = ({ handleClose }) => {
  const [wallet, setWallet] = useState(false);
  const [type, setType] = useState("");

  const handleClick = () => {
    setType("EOA");
    setWallet(true);
  };

  const handleAAClick = () => {
    setType("AAA");
    setWallet(true);
  };
  const handleContainerClick = (clickedType) => {
    // Open the appropriate wallet based on the clickedType
    setType(clickedType);
    setWallet(true);
  };

  return (
    <div className=" bg-white lg:border-l-2 md:shadow-xl w-full h-[100vh] z-10">
      <div className="flex rounded-full bg-black h-9 w-9 items-center justify-center xl:-ml-4 md:-ml-4 ml-2 mt-11 absolute z-[99]">
        <IoIosClose
          className="text-white h-6 w-6 cursor-pointer"
          onClick={handleClose}
        />
      </div>

      {wallet && (
        <LegacyWallet
          handleClose={handleClose}
          handleBackButton={() => setWallet(false)}
          type={type}
        />
      )}

      {/* {legacyWallet && (
          <LegacyWallet
          handleClose={handleClose}
          handleBackButton={handleBackButtonClick}
          type={type}
        />
      )} */}
      {!wallet && (
        <div className="flex flex-col xl:mx-8 md:mx-4 mt-10 space-y-8">
          <p className="text-black font-bold text-xl ml-12 xl:ml-0 md:ml-2">
            Create Wallet
          </p>
          <div className="flex flex-row items-center gap-2">
            <Image alt="" src={Ethereum} className="w-10 h-10" />
            <p className="font-semibold">Goerli Testnet</p>
            {/* <NetworkSelection /> */}
          </div>
          <div className="flex flex-col space-y-2">
            <div className="border border-solid rounded-3xl border-[#E5E5F0] xl:py-4 md:py-2 xl:px-6 md:px-1 px-4 py-2">
              <div
                className="flex flex-row items-start xl:gap-2 gap-2 md:gap-1 cursor-pointer"
                onClick={() => handleContainerClick("EOA")}
              >
                <Image
                  alt=""
                  src={Wallet}
                  className="xl:w-12 xl:h-12 md:w-8 md:h-8"
                />
                <div className="flex flex-col xl:space-y-2 md:space-y-1  ">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                      <p className="font-semibold md:text-xs">Legacy Wallet</p>
                      <p className="text-[#A09FAA] text-sm md:text-xs">EOA</p>
                    </div>
                    <CustomButton3
                      title="Popular"
                      buttonColor="[#EEEEF1]"
                      titleColor="black"
                    />
                    <div className="flex rounded-full bg-black xl:h-8 xl:w-8 h-6 w-6 items-center justify-center cursor-pointer">
                      <BiChevronRight
                        className="text-white h-4 w-4 hover:translate-x-1 duration-500"
                        onClick={handleClick}
                      />
                    </div>
                  </div>
                  <p className="text-xs text-[#A09FAA]">
                    Compatible with all Daaps; lower Gas fees; only supports
                    paying gas with native token; does not support advanced
                    features.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-solid rounded-3xl border-[#E5E5F0] xl:py-4 md:py-2 xl:px-6 md:px-1 px-4 py-2">
              <div
                className="flex flex-row items-start xl:gap-2 gap-2 md:gap-1 cursor-pointer"
                onClick={() => handleContainerClick("AAA")}
              >
                <Image
                  alt=""
                  src={WalletPurple}
                  className="xl:w-12 xl:h-12 md:w-8 md:h-8"
                />
                <div className="flex flex-col xl:space-y-2 md:space-y-1  cursor-pointer">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                      <p className="font-semibold md:text-xs">Smart Wallet</p>
                      <p className="text-[#A09FAA] text-sm md:text-xs">AAA</p>
                    </div>
                    <CustomButton3
                      title="Recommend"
                      buttonColor="[#EEEEF1]"
                      titleColor="black"
                    />
                    <div className="flex rounded-full bg-black xl:h-8 xl:w-8 h-6 w-6 items-center justify-center group cursor-pointer">
                      <BiChevronRight
                        className="text-white h-4 w-4 hover:translate-x-1 duration-500"
                        onClick={handleAAClick}
                      />
                    </div>
                  </div>
                  <p className="text-xs text-[#A09FAA]">
                    Compatible with all Daaps; lower Gas fees; only supports
                    paying gas with native token; does not support advanced
                    features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateWallet;

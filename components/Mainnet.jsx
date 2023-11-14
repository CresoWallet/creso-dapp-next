import React from "react";
import Image from "next/image";
import PinkPlus from "../assets/Dashboard/PinkPlus.png";
import Wallet from "../assets/Dashboard/walletIcon.png";
import Copy from "../assets/Dashboard/Copy.png";
import Copy2 from "../assets/Dashboard/Copy2.png";
import Next2 from "../assets/Dashboard/next2.png";
import Wallet2 from "../assets/Dashboard/WalletIcon2.png";
import ETH from "../assets/Dashboard/eth.png";
import RedArrow from "../assets/Dashboard/redArrow.png";
import GreenArrow from "../assets/Dashboard/greenArrow.png";
import Usdt2 from "../assets/Dashboard/usdt2.png";
import Dai2 from "../assets/Dashboard/Dai2.png";

const Mainnet = ({ handleCreateSecureWallet }) => {
  return (
    <div className="flex flex-col xl:space-y-8 md:space-y-8 space-y-2">
      <div>
        <div className="flex flex-row items-center justify-between">
          <p className="font-semibold text-xl">Ethereum Mainnet</p>
          <div className="flex flex-row gap-2 items-center cursor-pointer group">
            <Image src={PinkPlus} alt="" />
            <p className="text-[#FF4085] group-hover:font-bold duration-500">Create</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex xl:flex-row flex-col items-center xl:gap-4 md:gap-4 gap-2">
          <div
            className="bg-black rounded-full px-4 py-4 w-full hover:bg-gray-800 duration-500 cursor-pointer"
            onClick={handleCreateSecureWallet}
          >
            <div className="flex flex-row justify-between items-center gap-3 group">
              <Image src={Wallet} alt="" className="md:w-14 md:h-14 xl:w-12 xl:h-12" />
              <div className="flex flex-col space-y-1">
                <p className="text-white font-semibold text-sm md:text-lg xl:text-sm">
                  Keyless Secure Wallet
                </p>
                <div className="flex flex-row items-center gap-4">
                  <p className="text-[#A09FAA] xl:text-xs text-xs md:text-sm">0xc213 ... 34dr</p>
                  <Image src={Copy} alt="" />
                </div>
              </div>
              <div>
                <Image alt="" src={Next2} className="md:w-10 md:h-10 xl:w-8 xl:h-8 group-hover:translate-x-1 duration-500" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-full px-4 py-4 w-full border-2 border-black hover:bg-gray-200 duration-500 cursor-pointer group" onClick={handleCreateSecureWallet}>
            <div className="flex flex-row justify-between items-center gap-3">
              <Image src={Wallet2} alt="" className="md:w-14 md:h-14 xl:w-12 xl:h-12"/>
              <div className="flex flex-col space-y-1">
                <p className="text-black font-semibold text-sm md:text-lg xl:text-sm">
                  Keyless Secure Wallet
                </p>
                <div className="flex flex-row items-center gap-4">
                  <p className="text-[#A09FAA] xl:text-xs text-xs md:text-sm">0xc213 ... 34dr</p>
                  <Image src={Copy2} alt="" />
                </div>
              </div>
              <div>
                <Image alt="" src={Next2} className="md:w-10 md:h-10 xl:w-8 xl:h-8 group-hover:translate-x-1 duration-500" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 space-y-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-2">
              <Image alt="" src={ETH} />

              <p className="uppercase">ETH</p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="flex flex-row gap-4 items-center">
                <p className="text-[#A09FAA] text-xs">$1,794.28</p>
                <p className="font-semibold">0.54</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-be space-x-4 gap-4">
              <div className="flex flex-row">
                <div className="flex flex-row">
                  <Image src={RedArrow} alt="" className="w-5 h-5" />
                  <p className="text-xs">Send</p>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="flex flex-row">
                  <Image src={GreenArrow} alt="" className="w-5 h-5" />
                  <p className="text-xs">Receive</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-2">
              <Image alt="" src={Dai2} />

              <p className="uppercase">ETH</p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="flex flex-row gap-4 items-center">
                <p className="text-[#A09FAA] text-xs">$1,794.28</p>
                <p className="font-semibold">0.54</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-be space-x-4 gap-4">
              <div className="flex flex-row">
                <div className="flex flex-row">
                  <Image src={RedArrow} alt="" className="w-5 h-5" />
                  <p className="text-xs">Send</p>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="flex flex-row">
                  <Image src={GreenArrow} alt="" className="w-5 h-5" />
                  <p className="text-xs">Receive</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-2">
              <Image alt="" src={Usdt2} />

              <p className="uppercase">ETH</p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="flex flex-row gap-4 items-center">
                <p className="text-[#A09FAA] text-xs">$1,794.28</p>
                <p className="font-semibold">0.54</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-be space-x-4 gap-4">
              <div className="flex flex-row">
                <div className="flex flex-row">
                  <Image src={RedArrow} alt="" className="w-5 h-5" />
                  <p className="text-xs">Send</p>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="flex flex-row">
                  <Image src={GreenArrow} alt="" className="w-5 h-5" />
                  <p className="text-xs">Receive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainnet;

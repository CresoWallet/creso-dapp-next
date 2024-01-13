import React from "react";
import { IoIosClose } from "react-icons/io";
import Image from "next/image";
import ETH from "../assets/Dashboard/ethSelect.png";
import BnB from "../assets/Dashboard/bnb.png";
import USDT from "../assets/Dashboard/usdt.png";
import { CiSearch } from "react-icons/ci";
import User from "./User";
import Sure from "../assets/Dashboard/gainers/sure.png";
import Eth from "../assets/gainers/Eth.png";
import EWeth from "../assets/gainers/mina.png";
import Pepe from "../assets/gainers/pepe.png";

const SwapFrom = ({ handleClose }) => {
  return (
    <div className="bg-white shadow-xl min-w-max lg:w-auto h-[123vh] lg:h-[100vh] lg:block ">
      {/* <div className="flex rounded-full bg-black h-8 w-8 items-center justify-center xl:-ml-4 md:-ml-4 mt-10 absolute">
        <IoIosClose className="text-white h-4 w-4" onClick={handleClose} /> */}
      <div className="grid place-items-center rounded-full bg-black h-8 w-8 absolute cursor-pointer md:-ml-4 ml-2 lg:mt-0 z-[99]">
        <IoIosClose
          className="text-white h-7 w-7 cursor-pointer"
          onClick={handleClose}
        />
      </div>
      <div className="flex flex-col mt-10 md:mx-2 mx-2 space-y-8">
        <p className="text-black font-bold text-xl px-10 ">Swap From</p>
        <div className="flex flex-row items-center justify-between px-10">
          <div className="flex flex-col space-y-1 items-center">
            <Image alt="" src={ETH} className="h-14 w-14" />
            <div className="flex flex-col">
              <p className="text-center text-sm">ETH</p>
              <p className="text-[#A09FAA] text-sm">$2,321.79</p>
            </div>
          </div>
          <div className="flex flex-col space-y-1 items-center">
            <Image alt="" src={BnB} className="h-14 w-14" />
            <div className="flex flex-col">
              <p className="text-center text-sm">BNB</p>
              <p className="text-[#A09FAA] text-sm">$16.32</p>
            </div>
          </div>
          <div className="flex flex-col space-y-1 items-center">
            <Image alt="" src={USDT} className="h-14 w-14" />
            <div className="flex flex-col">
              <p className="text-center text-sm">USDT</p>
              <p className="text-[#A09FAA] text-sm">$804.94</p>
            </div>
          </div>
          <div className="flex flex-col space-y-1 items-center">
            <Image alt="" src={BnB} className="h-14 w-14" />
            <div className="flex flex-col">
              <p className="text-center text-sm">BNB</p>
              <p className="text-[#A09FAA] text-sm">$16.32</p>
            </div>
          </div>
        </div>
        <div className="rounded-full border border-solid flex px-4 py-1 flex-row items-center justify-between ">
          <input
            required={true}
            type="text"
            placeholder="Search by token name or address"
            className="placeholder:text-xs placeholder:text-[#6F6E7A] focus:outline-none"
          />
          <div className="bg-black rounded-full xl:h-12 xl:w-12 md:w-6 md:h-6 w-12 h-12 flex justify-center items-center">
            <CiSearch className="text-white w-4 h-4" />
          </div>
        </div>
        <div className="flex flex-col px-3">
          <User
            name="BV3A"
            description="Buccaneer V3"
            image={Sure}
            amount="$0,0041.66"
          />
          <hr className="my-4" />
          <User
            name="ETH"
            description="Ethereum"
            image={Eth}
            amount="$0.159046"
          />
          <hr className="my-4" />
          <User name="WETH" description="WETH" image={EWeth} />
          <hr className="my-4" />
          <User name="USDC" description="USD Coin" image={Pepe} />
        </div>
      </div>
    </div>
  );
};

export default SwapFrom;

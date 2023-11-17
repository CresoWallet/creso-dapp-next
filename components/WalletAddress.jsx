import React from "react";
import Image from "next/image";
import QRCode from "react-qr-code";

import CustomButton3 from "./CustomButton3";
import Ethereum from "../assets/Dashboard/etherum.png";
import QR from "../assets/Dashboard/qr.png";
// import Breaker from "../assets/Dashboard/Line.png";

const WalletAddress = ({ handleBackButton }) => {
  return (
    <div className="absolute bg-white flex flex-col xl:mx-8 md:mx-4 mx-0 px-2 xl:px-0 md:px-2 mt-10 w-full xl:pr-10 pr-2 space-y-4 h-screen z-20">
      <div className="flex flex-row items-center justify-between">
        <p className="text-black font-bold text-xl">Wallet Address</p>

        <CustomButton3
          title="Back"
          buttonColor="[#FFC8DC]"
          titleColor="[#FF4085]"
          onClick={handleBackButton}
        />
      </div>
      <div className=" rounded-3xl bg-[#A66CFF] flex flex-col items-center self-center pt-2">
        <div className="flex flex-row gap-2 items-center self-start pl-2">
          <Image alt="" src={Ethereum} />
          <p className="text-white font-semibold">Ethereum Mainnet</p>
        </div>
        <div className="border-8 -ml-4 -mr-4 py-10 rounded-3xl border-[#D4DADA] bg-white mt-4 relative z-10">
          <div className="flex justify-center">
            {/* <Image alt="" src={QR} /> */}
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "90%", width: "90%" }}
              value={"0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"}
              viewBox={`0 0 256 256`}
            />
          </div>
          <div className="flex justify-center py-8">
            {/* <Image alt="" src={Breaker} /> */}
          </div>
          <div className="flex flex-col space-y-1 items-center">
            <p className="text-[#A09FAA]">Wallet Address:</p>
            <p>0xDa3ad22D6604836B...f877</p>
          </div>
        </div>
        <div className="bg-[#D0F500] -mt-5 rounded-full border border-solid flex w-24 justify-center border-black items-center px-4 py-2 relative z-10 cursor-pointer">
          <div className="flex flex-row gap-2 items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 11.117V19.286C16.9997 19.7405 16.8191 20.1763 16.4977 20.4977C16.1763 20.8191 15.7405 20.9997 15.286 21H5.714C5.2595 20.9997 4.82369 20.8191 4.50231 20.4977C4.18093 20.1763 4.00026 19.7405 4 19.286V7.714C4.00026 7.2595 4.18093 6.82369 4.50231 6.50231C4.82369 6.18093 5.2595 6.00026 5.714 6H11.988C12.2176 6.00001 12.4449 6.04613 12.6563 6.13563C12.8678 6.22513 13.0591 6.35617 13.219 6.521L16.519 9.921C16.8291 10.2417 17.0017 10.6709 17 11.117V11.117Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 3H14.988C15.2176 3.00001 15.4449 3.04613 15.6563 3.13563C15.8678 3.22513 16.0591 3.35617 16.219 3.521L19.519 6.921C19.8291 7.24171 20.0017 7.67087 20 8.117V16"
                stroke="black"
                stroke-opacity="0.3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>Copy</p>
          </div>
        </div>
        <div className="bg-black rounded-b-3xl absolute top-[540px] xl:w-[50%] text-white text-center text-xs pt-8 pb-4 xl:px-5 px-5 md:px-2">
          Please do not desposit any assets that are not from Ethereum or EVM
          compatibli chain, otherwise the assets will be lost
        </div>
      </div>
    </div>
  );
};

export default WalletAddress;

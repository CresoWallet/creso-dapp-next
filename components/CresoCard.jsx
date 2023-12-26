import React, { useState } from "react";
import Image from "next/image";
import Coin from "../assets/Dashboard/Coin.png";
import Creso from "../assets/Dashboard/creso2.png";
import TotalAsserts from "../assets/Dashboard/totalAsserts.png";
import View from "../assets/Dashboard/eye.png";
// import PurpleRectangle from "../assets/Dashboard/purpleRectangle.png";
import SimIcon from "../assets/Dashboard/SimIcon.png";
import { GoEye, GoEyeClosed } from "react-icons/go";

const CresoCard = ({ balance }) => {
  const [eye, setEye] = useState(true)
  return (
    <div className="flex flex-col relative mb-8">
      <div className="flex justify-center">
        <Image alt="" src={Coin} className="h-12 w-12" />
      </div>
      <div className="rounded-3xl border-2 -mt-6 w-full bg-opacity-50 backdrop-filter backdrop-blur-sm border-black relative">
        <div className="h-1/3 px-6 py-6 flex">
          <div className="flex flex-row">
            <div className="flex flex-row items-center gap-1">
              <Image alt="" src={Creso} className="h-5 w-5" />
              <p className="font-bold">creso</p>
            </div>
          </div>
          <div className="w-2/5 bg-[#A66CFF] absolute right-0 top-0 bottom-[60%] rounded-tr-3xl border-l-2 border-black"></div>
        </div>
        <div className="h-2/3 bg-[#D0F500] px-6 pt-10 pb-6 rounded-b-3xl relative">
          <div className="flex flex-row gap-2 items-center">
            <div>
              <Image alt="" src={TotalAsserts} className="w-8 h-12" />
            </div>
            <div className="flex flex-col">
              <p className="text-xs text-black">Total Assets:</p>
              <div className="flex flex-row gap-2 items-center">
                <p className="font-semibold text-xl mr-3">
                  {`${eye ? parseFloat(balance) : "XXXX"} ETH`}
                </p>
                <div onClick={() => setEye(!eye)}>
                  {eye ? <GoEyeClosed size={22} /> :
                    <GoEye size={22} />}
                </div>
                {/* <Image alt="" src={View} onClick={() => setEye(!eye)} /> */}
              </div>
            </div>
          </div>

          <div className="w-2/5 bg-black absolute right-0 bottom-0 top-0 rounded-br-3xl border-l-2 border-black"></div>
          <Image
            src={SimIcon}
            alt="sim"
            className="absolute bottom-16 lg:bottom-10 right-[31%] lg:right-[20%]"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CresoCard;

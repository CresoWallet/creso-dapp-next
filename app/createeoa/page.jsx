"use client";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import greenblub from "../../assets/eoa/greenblub.png";
import pinkblub from "../../assets/eoa/pinkblub.png";
import creso from "../../assets/eoa/cresoblack.svg";

export default function CreateEoaWalletPage() {
  const [buttonNo, buttonNo1] = useState(false);
  const [buttonI, buttonI1] = useState(false);

  return (
    <div className="border-black border-2 mx-2 ">
      <div className="flex flex-col">
        <h1 className=" grid grid-cols-3 text-3xl font-bold w-full text-center rounded-t-xl py-8 ">
          <Image alt="" src={creso} className=" mx-4" />
          Create EOA Wallet
        </h1>

        <div className="my-10 mx-4 px-4">
          <h2 className="text-xl text-center font-bold mb-4">
            Let&lsquo;s Get Started
          </h2>
          <p className="my-8 p-2 mx-24 text-gray-500">
            Creso would like to gather usage data to better understand how our
            users interact with Creso. This data will be used to provide the
            service, which includes improving the service based on your use.
          </p>

          <ul className="justify-items-start my-8 font-bold mx-24">
            <li className="flex border border-solid hover:border-black cursor-pointer rounded-full p-5 my-2">
              <Image alt="" src={greenblub} className="mx-2" />
              Always allow you to opt-out via Settings
            </li>
            <li className="flex border border-solid cursor-pointer hover:border-black rounded-full p-5 my-2">
              <Image alt="" src={greenblub} className="mx-2 " />
              Send anonymized click and pageview events
            </li>
            <li className=" flex border border-solid cursor-pointer hover:border-black rounded-full p-5 my-2">
              <Image alt="" src={pinkblub} className="mx-2" />
              Never collect your full IP address
            </li>
            <li className=" flex border border-solid cursor-pointer hover:border-black rounded-full p-5 my-2">
              <Image alt="" src={pinkblub} className="mx-2" />
              Never sell data. Ever!
            </li>
          </ul>

          <div className=" mx-24 ">
            <p className="text-gray-500 mt-8">
              This data is aggregated and is therefore anonymous for the
              purposes of General Data Protection Regulation (EU) 2016/679.
            </p>
            <p className="flex flex-row text-gray-500">
              When you use Infura as your default RPC provider in Creso, Infura
              will collect your IP address and your Ethereum wallet address when
              you send a transaction. We don&lsquo;t store this information in a
              way that allows our systems to associate those two pieces of
              data.For more information on our privacy practices in general, see
              our Privacy
            </p>
            <p className="text-[#FF4085] ">Policy here.</p>
          </div>

          {/* button*/}
          <div className=" m-4 py-4  mx-20 place-self-center">
            <buttonNo
              className={`${
                buttonNo ? "bg-black text-white" : "bg-transparent text-black"
              } rounded-full py-4 mx-2 px-10 border-black ${
                buttonNo ? "" : "border"
              }`}
              onMouseEnter={() => buttonNo1(true)}
              onMouseLeave={() => buttonNo1(false)}
              onClick={() => {
                buttonNo1(true);
                buttonI1(false);
              }}
            >
              No Thanks
            </buttonNo>
            <buttonNo
              className={`${
                buttonI ? "bg-black text-white" : "bg-transparent text-black"
              } rounded-full py-4 px-14 mx-2 border-black ${
                buttonI ? "" : "border"
              }`}
              onMouseEnter={() => buttonI1(true)}
              onMouseLeave={() => buttonI1(false)}
              onClick={() => {
                buttonI1(true);
                buttonNo1(false);
              }}
            >
              I Agree
            </buttonNo>
          </div>
        </div>
      </div>
    </div>
  );
}

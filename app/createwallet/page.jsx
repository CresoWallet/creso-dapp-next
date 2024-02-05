"use client";
import { useState } from "react";
import Image from "next/image";
import create from "../../assets/eoa/createeoa.svg";
import check from "../../assets/eoa/checkmark.png";
import creso from "../../assets/eoa/cresoblack.svg";

export default function Eoawallet() {
  const [importWalletHovered, setImportWalletHovered] = useState(false);
  const [createWalletHovered, setCreateWalletHovered] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="border-black border-2 items-center justify-center h-full  p-4 px-4 mx-4 py-4 flex flex-col ">
      <h1 className=" grid grid-cols-3 text-3xl font-bold w-full text-center rounded-t-xl py-8 ">
        <Image alt="" src={creso} className=" mx-4" />
        Create EOA Wallet
      </h1>
      <div className="text-center mb-8">
        <h2 className="font-bold text-2xl mb-4">Let&lsquo;s Get Started</h2>
        <p className="text-gray-500">
          Trusted by millions, creso is a secure wallet making the world of
          <span className="text-[#FF4085] ml-1"> web 3 </span>
          <p>accessible to all.</p>
        </p>
      </div>

      <Image alt="" src={create} className="mb-8" />

      {/* Terms of Use */}
      <div className="flex items-center mb-8">
        <button
          className="rounded-full p-2 border-black focus:outline-none"
          onClick={() => setIsChecked(!isChecked)}
        >
          {isChecked ? (
            <Image alt="" src={check} className="w-8 h-8 " />
          ) : (
            <div className="w-6 h-6 rounded-full border border-black"></div>
          )}
        </button>
        <span className="ml-2">
          I agree to creso
          <span className="text-[#FF4085] ml-1">Terms of Use</span>
        </span>
      </div>

      {/* buttons */}
      <div className="flex my-4">
        <button
          className={`${
            importWalletHovered
              ? "bg-black text-white"
              : "bg-transparent text-black"
          } rounded-full py-5 m-4 px-20 border-black ${
            importWalletHovered ? "" : "border"
          }`}
          onMouseEnter={() => setImportWalletHovered(true)}
          onMouseLeave={() => setImportWalletHovered(false)}
          onClick={() => {
            setImportWalletHovered(true);
            setCreateWalletHovered(false);
          }}
        >
          Import an existing wallet
        </button>
        <button
          className={`${
            createWalletHovered
              ? "bg-black text-white"
              : "bg-transparent text-black"
          } rounded-full py-5 m-4 px-20 border-black ${
            createWalletHovered ? "" : "border"
          }`}
          onMouseEnter={() => setCreateWalletHovered(true)}
          onMouseLeave={() => setCreateWalletHovered(false)}
          onClick={() => {
            setCreateWalletHovered(true);
            setImportWalletHovered(false);
          }}
        >
          Create New Wallet
        </button>
      </div>
    </div>
  );
}

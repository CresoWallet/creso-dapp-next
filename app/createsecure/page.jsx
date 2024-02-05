"use client";
import React, { useState } from "react";
import Image from "next/image";
import creso from "../../assets/eoa/cresoblack.svg";
import secure from "../../assets/eoa/securepassword.svg";

function CreateWallet() {
  const [buttonNo, buttonNo1] = useState(false);
  const [buttonI, buttonI1] = useState(false);
  // Handle form submission (implementation omitted for brevity)

  return (
    <div className="border-black border-2 mx-2 px-3 items-center justify-center py-2  flex-1">
      <div className="flex flex-col ">
        <h1 className="grid grid-cols-3 text-3xl font-bold w-full    items-center justify-center rounded-t-xl py-8 ">
          <Image alt="" src={creso} className=" " />
          Create EOA Wallet
        </h1>

        <div className=" justify-center content-center  place-content-center items-center m-4 px-10 ">
          <Image alt="" src={secure} className="justify-center" />
        </div>
        <hr className="mt-10" />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold my-6 mt-20">Secure Your Wallet</h2>
        <p className="mb-4">
          Before getting started, watch this short video to learn about your
          Secret Recovery Phrase and how to keep your wallet safe.
        </p>
        <div className="h-80 w-auto bg-slate-200 rounded-xl p-2 m-4 my-6">
          {" "}
          video
        </div>
        {/* button*/}
        <div className=" m-4 py-4">
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
            Remind Me later
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
            Secure My Wallet
          </buttonNo>
        </div>
      </div>
    </div>
  );
}

export default CreateWallet;

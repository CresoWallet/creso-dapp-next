import React from "react";
import Image from "next/image";
import Account from "../assets/Dashboard/account.png";

const Backup = (props) => {
  return (
    <div className="rounded-3xl bg-[#FFC8DC] px-4 gap-4 xl:py-8 py-2 md:py-4 grid grid-cols-3 border-2 border-black">
      <div
        className="col-span-1 flex items-center justify-center"
        style={{ userSelect: "none" }}
      >
        <Image
          src={Account}
          alt=""
          className="w-32 h-24 user-select-none pointer-events-none"
          draggable="false"
        />
      </div>
      <div className="col-span-2 space-y-4">
        <div className="flex flex-col space-y-2">
          <p
            className="text-black xl:text-xl md:text-lg font-semibold user-select-none pointer-events-none"
            draggable="false"
          >
            Account Not Backed Up
          </p>
          <p
            className="xl:text-sm md:text-xs text-xs user-select-none pointer-events-none"
            draggable="false"
          >
            We recommend you to backup your account to make it secure.
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={props.onClick}
            className="text-white bg-[#FF4085] hover:font-bold xl:py-3 md:py-3 py-1 rounded-full w-full text-center"
          >
            Backup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Backup;

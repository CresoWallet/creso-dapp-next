import React from "react";
import Image from "next/image";
import Account from "../assets/Dashboard/account.png";

const Backup = (props) => {
  return (
    <div className="rounded-3xl bg-[#FFC8DC] px-4 gap-4 xl:py-8 py-2 md:py-4 grid grid-cols-3 border-2 border-black">
      <div className="col-span-1 flex items-center justify-center">
        <Image src={Account} alt="" className="w-32 h-24" />
      </div>
      <div className="col-span-2 space-y-4">
        <div className="flex flex-col space-y-2">
          <p className="text-black xl:text-xl md:text-lg font-semibold">
            Account Not Backed Up
          </p>
          <p className="xl:text-sm md:text-xs text-xs">
            Soory, you are unable to proceed until you complete the backup.
            Backup now to secure your account.
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={props.onClick}
            className="text-white bg-[#FF4085] xl:py-3 md:py-3 py-1 rounded-full w-full text-center"
          >
            Backup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Backup;

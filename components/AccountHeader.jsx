import React from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import Account from "@/components/Account";
import Language from "../assets/security/language.png";
import Currency from "../assets/security/dollor2.png";

const AccountHeader = ({ isMobile, navbarTrigger, setShowModal, user }) => {
  return (
    <div className="col-span-4 pb-32 lg:pb-0 ">
      <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"}`}>
        <div className="flex xl:hidden md:hidden justify-center gap-4">
          <div className="flex flex-row items-center gap-2">
            <Image alt="" src={Language} className="w-6 h-6" />
            <div className="flex flex-row gap-1">
              <p className="text-sm text-black hover:font-bold">ENG</p>
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image alt="" src={Currency} className="w-6 h-6" />
            <div className="flex flex-row gap-1">
              <p className="text-sm text-black hover:font-bold">USD</p>
              <MdKeyboardArrowDown />
            </div>
          </div>
        </div>
        <div
          className={`col-span-4 ${
            isMobile ? "mt-2" : "mt-16"
          } xl:mx-8 md:mx-4 mx-2`}
        >
          <Account user={user} setShowModal={setShowModal} />
        </div>
      </div>
    </div>
  );
};

export default AccountHeader;

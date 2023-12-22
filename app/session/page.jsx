"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Account from "@/components/Account";
import { MdKeyboardArrowDown } from "react-icons/md";
import Currency from "../../assets/security/dollor2.png";
import Language from "../../assets/security/language.png";
import SessionImage from "../../assets/security/image.png";

import { useMediaQuery } from "react-responsive";
import Ham from "../../assets/Dashboard/ham.png";

const SessionPage = () => {
  const [navbarTrigger, setNavbarTrigger] = useState(false);

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  useEffect(() => {
    if (navbarTrigger) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [navbarTrigger]);

  return (
    <>
      {navbarTrigger && (
        <div
          className="navbackdrop"
          onClick={() => setNavbarTrigger(!navbarTrigger)}
        ></div>
      )}
      <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1">
        <div className="col-span-1">
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
              className={`col-span-2 md:col-span-3 ${
                isMobile ? "mt-2" : "mt-16"
              } xl:mx-8 md:mx-4 mx-2 md:border-r border-black`}
            >
              <Account />
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:mx-8 md:mx-4 mx-2 xl:mt-10 mt-4">
          <div className="flex flex-row justify-between items-center mx-8 mt-8 ">
            <p className="xl:text-xl md:text-xl text-lg  font-semibold">
              V1 Sessions
            </p>
            <div className="xl:flex xl:flex-row md:flex md:flex-row hidden items-center xl:gap-0 md:gap-0 gap-2">
              <div className="flex flex-row items-center gap-2">
                <Image alt="" src={Language} className="w-6 h-6" />
                <div className="flex flex-row gap-1">
                  <p className="text-sm text-black">ENG</p>
                  <MdKeyboardArrowDown />
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Image alt="" src={Currency} className="w-6 h-6" />
                <div className="flex flex-row gap-1">
                  <p className="text-sm text-black">USD</p>
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center xl:py-24 py-16">
            <Image alt="" src={SessionImage} className="w-48 h-64" />
          </div>
          <div className="text-center">
            <p className="text-[#A09FAA]">
              No Active Wallet Connect
              <br /> Sessions
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionPage;

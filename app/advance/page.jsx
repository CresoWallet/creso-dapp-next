"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Account from "@/components/Account";
import Currency from "../../assets/security/dollor2.png";
import Language from "../../assets/security/language.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgTrash } from "react-icons/cg";
import { useMediaQuery } from "react-responsive";
import Ham from "../../assets/Dashboard/ham.png";

const AdvancePage = () => {
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
      <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 min-h-screen">
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
              className={`col-span-2 ${
                isMobile ? "mt-2" : "mt-16"
              } xl:mx-8 md:mx-4 mx-2`}
            >
              <Account />
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:mx-8 md:mx-4 mx-2 xl:mt-10 mt-4">
          <div className="flex flex-row justify-between items-center">
            <p className="text-xl font-semibold">Advanced</p>
            <div className="xl:flex xl:flex-row md:flex md:flex-row hidden items-center xl:gap-0 md:gap-0 gap-4">
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
          <div className="flex flex-col space-y-4 mt-8">
            <div className="flex flex-row justify-between items-center">
              <p className="font-semibold">Balance Auto Hide</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-black after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#D0F500]"></div>
              </label>
            </div>
            <hr className="text-[#A09FAA]" />
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col space-y-1">
                <p className="font-semibold">RPC Fallback</p>
                <div className="flex flex-row items-center gap-1">
                  <p className="text-xs text-[#A09FAA]">
                    Automatically Switch PRC nodes when the current RPC is
                    unavailable
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-black after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#D0F500]"></div>
              </label>
            </div>
          </div>
          <div className="flex justify-center items-end mt-96 bottom-0">
            <button className="flex flex-row gap-2 items-center cursor-pointer hover:scale-105 justify-center py-4 border rounded-full w-full border-solid border-[#FF4085] bg-[#FFF5F9]">
              <CgTrash className="text-[#FF4085] w-6 h-6" />
              <p className="text-[#FF4085] text-sm hover:font-bold">
                Clear Cache
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvancePage;

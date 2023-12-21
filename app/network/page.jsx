"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Account from "@/components/Account";
import { MdKeyboardArrowDown } from "react-icons/md";
import Language from "../../assets/security/language.png";
import Currency from "../../assets/security/dollor2.png";
import Plus from "../../assets/security/plus.png";
import CustomButton from "@/components/CustomButton";
import Bitcoin from "../../assets/network/bitcoin.png";
import Eth from "../../assets/network/eth.png";
import BSC from "../../assets/network/bsc.png";
import Polygon from "../../assets/network/polygon.png";
import Avalanche from "../../assets/network/avalanche.png";
import Optimism from "../../assets/network/optimism.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import Ham from "../../assets/Dashboard/ham.png";

const NetworkPage = () => {
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
            <p className="text-xl font-semibold">Network Settings</p>
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
          <div className="flex justify-end">
            <div className="flex w-64 mt-10">
              <CustomButton name="Add Network" img={Plus} bgColor="black" />
            </div>
          </div>

          <div className="flex flex-col xl:space-y-4 space-y-2 mt-10">
            <Link href="/networkPage">
              <div className="flex flex-row items-center justify-between hover:animate-bounce cursor-pointer">
                <div className="flex flex-row items-center gap-2">
                  <Image alt="" src={Bitcoin} />
                  <p>Bitcoin</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <p className="text-xs text-[#A09FAA]">Bitcoin Mainnet</p>
                  <MdKeyboardArrowRight />
                </div>
              </div>
            </Link>

            <hr className="text-[#A09FAA] py-2 ml-12" />
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-2">
                <Image alt="" src={Eth} />
                <p>Etherum</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <p className="text-xs text-[#A09FAA]">Etherum Mainnet</p>
                <MdKeyboardArrowRight />
              </div>
            </div>
            <hr className="text-[#A09FAA] py-2 ml-12" />
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-2">
                <Image alt="" src={BSC} />
                <p>BSC</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <p className="text-xs text-[#A09FAA]">
                  BNB Smart Chain Mainnet
                </p>
                <MdKeyboardArrowRight />
              </div>
            </div>
            <hr className="text-[#A09FAA] py-2 ml-12" />
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-2">
                <Image alt="" src={Polygon} />
                <p>Polygon</p>
                <div className="border border-solid px-4 py-1 text-xs border-black rounded-full bg-[#D0F500]">
                  <p>TEST</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <p className="text-xs text-[#A09FAA]">Polygon Mainnet</p>
                <MdKeyboardArrowRight />
              </div>
            </div>
            <hr className="text-[#A09FAA] py-2 ml-12" />
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-2">
                <Image alt="" src={Avalanche} />
                <p>Avalanche C</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <p className="text-xs text-[#A09FAA]">Avalanche C0Chain</p>
                <MdKeyboardArrowRight />
              </div>
            </div>
            <hr className="text-[#A09FAA] py-2 ml-12" />
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-2">
                <Image alt="" src={Optimism} />
                <p>Optimism</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <p className="text-xs text-[#A09FAA]">OP Mainnet</p>
                <MdKeyboardArrowRight />
              </div>
            </div>
            <hr className="text-[#A09FAA] py-2 ml-12" />
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-2">
                <Image alt="" src={Eth} />
                <p>Etherum</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <p className="text-xs text-[#A09FAA]">Etherum Mainnet</p>
                <MdKeyboardArrowRight />
              </div>
            </div>
            <hr className="text-[#A09FAA] py-2 ml-12" />
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-2">
                <Image alt="" src={BSC} />
                <p>BSC</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <p className="text-xs text-[#A09FAA]">
                  BNB Smart Chain Mainnet
                </p>
                <MdKeyboardArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NetworkPage;

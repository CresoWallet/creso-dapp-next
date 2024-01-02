"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SideNav from "@/components/navbar/SideNav";
import Account from "@/components/Account";
import { MdKeyboardArrowDown } from "react-icons/md";
import Language from "../../assets/security/language.png";
import Currency from "../../assets/security/dollor2.png";
import { RiArrowRightSLine } from "react-icons/ri";
import Bitcoin from "../../assets/network/bitcoin.png";
import { BsArrowLeft } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import Ham from "../../assets/Dashboard/ham.png";
import Modal from "@/components/modal/Modal";
import { useUser } from "@/providers/UserProvider";

const NetworkPage2 = () => {
  const [navbarTrigger, setNavbarTrigger] = useState(false);
  const { user, isAuthenticated, status } = useUser();
  const [showModal, setShowModal] = useState(false);

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  useEffect(() => {
    if (navbarTrigger) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [navbarTrigger]);

  return (
    <div id="modal-root">
      {navbarTrigger && (
        <div
          className="navbackdrop"
          onClick={() => setNavbarTrigger(!navbarTrigger)}
        ></div>
      )}
      {showModal && <Modal onClose={() => setShowModal(false)} user={user} />}
      <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 pb-32 lg:pb-0">
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
            {/*{isMobile && navbarTrigger && (
              <div className={`col-span-1 h-full responsivemb-nav `}>
                <SideNav />
              </div>
            )}*/}

            {/*{!isMobile && (
              <div className={`col-span-1 h-full`}>
                <SideNav />
              </div>
            )}*/}
            {isMobile && (
              <div className="account-navs">
                <Image
                  alt=""
                  className="navico"
                  src={Ham}
                  onClick={() => setNavbarTrigger(!navbarTrigger)}
                />{" "}
              </div>
            )}

            <div
              className={`col-span-4 ${
                isMobile ? "mt-2" : "mt-16"
              } xl:mx-8 md:mx-4 mx-2`}
            >
              <Account user={user} setShowModal={setShowModal} />
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:mx-8 md:mx-4 mx-2 xl:mt-10 mt-4">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-2">
              <BsArrowLeft />
              <div className="flex flex-row items-center gap-1">
                <Image alt="" src={Bitcoin} className="w-8 h-8" />
                <p className="text-xl font-semibold">Bitcoin</p>
              </div>
            </div>

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
          <div className="mt-8 flex flex-col space-y-4">
            <Link href="networkRPC">
              <div className="flex flex-row items-center justify-between hover:animate-bounce cursor-pointer">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-semibold">RPC URL</p>
                  <p className="text-xs text-[#A09FAA]">Blockstream.info</p>
                </div>
                <RiArrowRightSLine />
              </div>
            </Link>

            <hr className="text-[#A09FAA]" />
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-semibold">Network Name</p>
              <p className="text-xs text-[#A09FAA]">Bitcoin Mainnet</p>
            </div>
            <hr className="text-[#A09FAA]" />
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-semibold">Symbol</p>
              <p className="text-xs text-[#A09FAA]">BTC</p>
            </div>
            <hr className="text-[#A09FAA]" />
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-semibold">Block Explorer URL</p>
              <p className="text-xs text-[#A09FAA]">Blockstream.info</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkPage2;

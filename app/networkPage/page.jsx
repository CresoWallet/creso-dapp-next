"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import Language from "../../assets/security/language.png";
import Currency from "../../assets/security/dollor2.png";
import { RiArrowRightSLine } from "react-icons/ri";
import Bitcoin from "../../assets/network/bitcoin.png";
import Eth from "../../assets/network/eth.png";
import BSC from "../../assets/network/bsc.png";
import Polygon from "../../assets/network/polygon.png";
import Avalanche from "../../assets/network/avalanche.png";
import Optimism from "../../assets/network/optimism.png";
import { BsArrowLeft } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import Modal from "@/components/modal/Modal";
import { useUser } from "@/providers/UserProvider";
import AccountHeader from "@/components/AccountHeader";

const NetworkPage2 = () => {
  const [navbarTrigger, setNavbarTrigger] = useState(false);
  const { user } = useUser();
  const [showModal, setShowModal] = useState(false);

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div id="modal-root">
      {navbarTrigger && (
        <div
          className="navbackdrop"
          onClick={() => setNavbarTrigger(!navbarTrigger)}
        ></div>
      )}
      {showModal && <Modal onClose={() => setShowModal(false)} user={user} />}
      <div className="grid xl:grid-cols-10 md:grid-cols-2 grid-cols-1 pb-32 lg:pb-0">
        <AccountHeader
          isMobile={isMobile}
          navbarTrigger={navbarTrigger}
          setShowModal={setShowModal}
          user={user}
        />

        <div className="col-span-6 xl:mx-8 md:mx-4 mx-2 xl:mt-10 mt-4">
          <div className="flex flex-row justify-between items-center">
            <Link href="network">
              <div className="flex flex-row items-center gap-2">
                <BsArrowLeft />
                <div className="flex flex-row items-center gap-1">
                  <Image alt="" src={Bitcoin} className="w-8 h-8" />
                  <p className="text-xl font-semibold">Bitcoin</p>
                </div>
              </div>
            </Link>

            <div className="xl:flex xl:flex-row md:flex md:flex-row hidden items-center xl:gap-6 md:gap-4 gap-4">
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
              <div className="flex flex-row items-center justify-between hover:-translate-y-1 cursor-pointer">
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

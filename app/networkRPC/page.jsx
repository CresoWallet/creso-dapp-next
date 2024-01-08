"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Account from "@/components/Account";
import { BsArrowLeft } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import Language from "../../assets/security/language.png";
import Currency from "../../assets/security/dollor2.png";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import Ham from "../../assets/Dashboard/ham.png";
import Modal from "@/components/modal/Modal";
import { useUser } from "@/providers/UserProvider";
import AccountHeader from "@/components/AccountHeader";

const NetworkRPCPage = () => {
  const [navbarTrigger, setNavbarTrigger] = useState(false);
  const { user, isAuthenticated, status } = useUser();
  const [showModal, setShowModal] = useState(false);

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  // useEffect(() => {
  //   if (navbarTrigger) {
  //     document.body.classList.add("no-scroll");
  //   } else {
  //     document.body.classList.remove("no-scroll");
  //   }
  // }, [navbarTrigger]);

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
            <Link href="networkPage">
              <div className="flex flex-row items-center gap-2">
                <BsArrowLeft />
                <p className="xl:text-xl md:text-lg font-semibold">
                  RPC Nodes Setting
                </p>
              </div>
            </Link>
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
          <div className="flex flex-col mt-8 space-y-4">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-1">
                <RiCheckboxCircleLine className="text-[#D0F500] h-6 w-6" />
                <p className="text-sm font-semibold">Bit.Blockstream.info</p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <div className="flex flex-col text-end">
                  <p className="text-sm text-[#14B195]">1020 ms</p>
                  <p className="text-xs text-[#A09FAA]">
                    Block Height : 18449348
                  </p>
                </div>
                <RiArrowRightSLine />
              </div>
            </div>
            <hr className="text-[#A09FAA]" />
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-1">
                <RiCheckboxCircleLine className="text-[#D0F500] h-6 w-6" />
                <p className="text-sm font-semibold">Bit.Blockstream.io</p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <div className="flex flex-col text-end">
                  <p className="text-sm text-[#FF4085]">Fail</p>
                </div>
                <RiArrowRightSLine />
              </div>
            </div>
            <hr className="text-[#A09FAA]" />
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-1">
                <RiCheckboxCircleLine className="text-[#D0F500] h-6 w-6" />
                <p className="text-sm font-semibold">Bit.Blockstream.info</p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <div className="flex flex-col text-end">
                  <p className="text-sm text-[#14B195]">654 ms</p>
                  <p className="text-xs text-[#A09FAA]">
                    Block Height : 18449348
                  </p>
                </div>
                <RiArrowRightSLine />
              </div>
            </div>
            <hr className="text-[#A09FAA]" />
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-1">
                <RiCheckboxCircleLine className="text-[#D0F500] h-6 w-6" />
                <p className="text-sm font-semibold">Bit.Blockstream.io</p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <div className="flex flex-col text-end">
                  <p className="text-sm text-[#FF4085]">Fail</p>
                </div>
                <RiArrowRightSLine />
              </div>
            </div>
            <hr className="text-[#A09FAA]" />
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-1">
                <RiCheckboxCircleLine className="text-[#D0F500] h-6 w-6" />
                <p className="text-sm font-semibold">Bit.Blockstream.info</p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <div className="flex flex-col text-end">
                  <p className="text-sm text-[#2100EC]">...</p>
                </div>
                <RiArrowRightSLine />
              </div>
            </div>
            <hr className="text-[#A09FAA]" />
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-1">
                <RiCheckboxCircleLine className="text-[#D0F500] h-6 w-6" />
                <p className="text-sm font-semibold">Bit.Blockstream.info</p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <div className="flex flex-col text-end">
                  <p className="text-sm text-[#14B195]">820 ms</p>
                  <p className="text-xs text-[#A09FAA]">
                    Block Height : 18449348
                  </p>
                </div>
                <RiArrowRightSLine />
              </div>
            </div>
            <hr className="text-[#A09FAA]" />
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-1">
                <RiCheckboxCircleLine className="text-[#D0F500] h-6 w-6" />
                <p className="text-sm font-semibold">Bit.Blockstream.info</p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <div className="flex flex-col text-end">
                  <p className="text-sm text-[#14B195]">1000 ms</p>
                  <p className="text-xs text-[#A09FAA]">
                    Block Height : 18449348
                  </p>
                </div>
                <RiArrowRightSLine />
              </div>
            </div>
            <hr className="text-[#A09FAA]" />
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-1">
                <RiCheckboxCircleLine className="text-[#D0F500] h-6 w-6" />
                <p className="text-sm font-semibold">Bit.Blockstream.io</p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <div className="flex flex-col text-end">
                  <p className="text-sm text-[#FF4085]">Fail</p>
                </div>
                <RiArrowRightSLine />
              </div>
            </div>
            <hr className="text-[#A09FAA]" />
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-1">
                <RiCheckboxCircleLine className="text-[#D0F500] h-6 w-6" />
                <p className="text-sm font-semibold">Bit.Blockstream.info</p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <div className="flex flex-col text-end">
                  <p className="text-sm text-[#2100EC]">...</p>
                </div>
                <RiArrowRightSLine />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkRPCPage;

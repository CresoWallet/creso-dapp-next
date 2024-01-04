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
import Modal from "@/components/modal/Modal";
import { useUser } from "@/providers/UserProvider";
import AccountHeader from "@/components/AccountHeader";

const AdvancePage = () => {
  const [navbarTrigger, setNavbarTrigger] = useState(false);
  const { user, isAuthenticated, status } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [balanceAutoHide, setBalanceAutoHide] = useState(true);
  const [rpcFallback, setRpcFallback] = useState(true);

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
      <div className="grid lg:grid-cols-10 md:grid-cols-2 grid-cols-1 pb-32 lg:pb-0">
        <AccountHeader
          isMobile={isMobile}
          navbarTrigger={navbarTrigger}
          setShowModal={setShowModal}
          user={user}
        />

        {/* <div className="col-span-4 pb-32 lg:pb-0">
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
        </div> */}
        <div className="col-span-6 xl:mx-8 md:mx-4 mx-2 xl:mt-10 mt-4">
          <div className="flex flex-row justify-between items-center">
            <p className="text-xl font-semibold">Advanced</p>
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
          <div className="flex flex-col space-y-4 mt-8">
            <div className="flex flex-row justify-between items-center">
              <p className="font-semibold">Balance Auto Hide</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value={balanceAutoHide}
                  className="sr-only peer"
                  checked={balanceAutoHide}
                  onChange={() => setBalanceAutoHide(!balanceAutoHide)}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-black after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#D0F500]"></div>
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
                  value={rpcFallback}
                  className="sr-only peer"
                  checked={rpcFallback}
                  onChange={() => setRpcFallback(!rpcFallback)}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-black after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#D0F500]"></div>
              </label>
            </div>
          </div>
          <div className="flex justify-center items-end mt-96 bottom-0">
            <button className="flex flex-row gap-2 items-center cursor-pointer hover:scale-105 justify-center py-4 border rounded-full w-full border-solid border-[#FF4085] bg-[#FFF5F9]">
              <CgTrash className="text-[#FF4085] w-6 h-6" />
              <p className="text-[#FF4085] text-sm hover:font-bold ">
                Clear Cache
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancePage;

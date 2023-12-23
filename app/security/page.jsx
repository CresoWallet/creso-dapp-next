"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Currency from "../../assets/security/dollor2.png";
import Language from "../../assets/security/language.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import SecurityImage from "../../assets/security/securityImage.png";
import Account from "@/components/Account";
import Lock from "../../assets/security/Lock.png";

import { useMediaQuery } from "react-responsive";
import Ham from "../../assets/Dashboard/ham.png";
import Modal from "@/components/modal/Modal";
import { useUser } from "@/providers/UserProvider";

const SecurityPage = () => {
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
      <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 px-2 xl:pt-2 md:pt-2 mb-2 pb-32 lg:pb-0 ">
        <div className="col-span-1">
          <div
            className={`grid h-full ${
              isMobile ? "grid-cols-1" : "grid-cols-3"
            }`}
          >
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
              <Account user={user} setShowModal={setShowModal} />
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:mx-8 md:mx-4 mx-2 xl:mt-10 mt-4">
          <div className="flex flex-row justify-between items-center">
            <p className="text-xl font-semibold">Security</p>
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
          <div className="flex justify-center items-center xl:py-16 py-8">
            <Image alt="" src={SecurityImage} className="w-72" />
          </div>
          <div className="flex flex-col space-y-2 items-center">
            <Image alt="" src={Lock} />
            <p className="text-xl font-semibold">Auto-Lock</p>
          </div>
          <div className="text-center">
            <p className="text-[#A09FAA] text-sm">
              Choose the amount of time before
              <br /> the application automatically locks
            </p>
          </div>
          <div className="flex items-center justify-center xl:mt-12 mt-8">
            <button className="text-white px-6 py-4 bg-black flex flex-row items-center justify-between gap-24 rounded-full">
              <p>Never</p>
              <MdKeyboardArrowDown />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;

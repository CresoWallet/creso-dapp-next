"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Account from "@/components/Account";
import { MdKeyboardArrowDown } from "react-icons/md";
import Currency from "../../assets/security/dollor2.png";
import Language from "../../assets/security/language.png";
import CustomButton from "@/components/CustomButton";
import Plus from "../../assets/security/plus.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import Disconnect from "../../assets/network/disconnect.png";
import Info from "../../assets/informations.png";
import { useMediaQuery } from "react-responsive";
import Ham from "../../assets/Dashboard/ham.png";
import { useRouter } from "next/navigation";
import { AUTH_TOKEN } from "@/constants";
import { useUser } from "@/providers/UserProvider";
import Modal from "@/components/modal/Modal";
import { logOut } from "@/clientApi/auth";
import { enqueueSnackbar } from "notistack";
import AccountHeader from "@/components/AccountHeader";
import { BsArrowLeft } from "react-icons/bs";
import { WalletContext } from "@/providers/WalletProvider";

const AccountPage = () => {
  const router = useRouter();
  const [navbarTrigger, setNavbarTrigger] = useState(false);
  const { user, isAuthenticated, status } = useUser();
  const [showModal, setShowModal] = useState(false);
  
  const { showAccount, setShowAccount } = useContext(WalletContext);

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  useEffect(() => {
    if (navbarTrigger) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [navbarTrigger]);

  const handleShowBackup = () => {
    if (user?.registrationMethod !== "email" && !user?.isEmailVerified) {
      enqueueSnackbar(
        `Before taking a backup, make sure to verify your email.`,
        {
          variant: "warning",
        }
      );
    } else {
      setShowModal(true);
    }
  };

  const handleLogout = async () => {
    // localStorage.removeItem(AUTH_TOKEN);
    // router.push("/");

    try {
      const res = await logOut();
      if (res) {
        window.location.href = "/";
      }
    } catch (err) {
      console.log(err);
    } finally {
    }
  };
  return (
    <div id="modal-root">
      {navbarTrigger && (
        <div
          className="navbackdrop"
          onClick={() => setNavbarTrigger(!navbarTrigger)}
        ></div>
      )}
      {showModal && <Modal onClose={() => setShowModal(false)} user={user}/>}
      <div className="grid lg:grid-cols-10 md:grid-cols-2 grid-cols-1 pb-32 lg:pb-0+">
        <AccountHeader
          isMobile={isMobile}
          navbarTrigger={navbarTrigger}
          setShowModal={setShowModal}
          user={user}
        />

        <div className={`col-span-6 xl:mx-8 md:mx-4 mx-2 xl:mt-10 mt-4 hidden lg:block ${showAccount ? "!block" : ""} `}>
          {/* <Link href="dashboard"> */}
          <div className="flex flex-row justify-between items-center">
            {/* <div className="flex flex-row items-center gap-1">
                {!isMobile && <BsArrowLeft />} */}

            <div className={`${
                  showAccount ? "lg:hidden block" : "lg:block hidden"
                } flex flex-col space-y-3`}>
              <button
                class=" w-20 px-4 py-2 bg-neutral-700 hover:bg-neutral-800 text-white font-semibold rounded-md focus:outline-none focus:ring focus:border-blue-300"
                onClick={() => setShowAccount(false)}
              >
                Back
              </button>
              
            </div>

            <p className="text-xl font-semibold">Account</p>
            {/* </div> */}
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
          {/* </Link> */}

          <div className="flex flex-col xl:mt-16 md:mt-10 mt-8 xl:space-y-4 space-y-2">
            <div className="flex flex-col space-y-2">
              <p className="text-sm mx-4 ">Email / Phone</p>
              {user && (
                <div className="flex flex-row items-center rounded-full border border-solid border-[#E5E5F0] justify-between xl:py-4 xl:px-4 py-2 px-2 w-full">
                  <p className="text-sm mx-4 text-gray-400">{user?.email}</p>
                  <button
                    onClick={() => setShowModal(true)}
                    disabled={user?.isEmailVerified}
                    className="bg-[#D0F500] hover:font-bold cursor-pointer xl:py-2 xl:px-2 md:py-2 px-1 py-1 md:px-2 border border-solid rounded-full border-black text-xs items-center justify-center "
                  >
                    {user?.isEmailVerified ? "Verified" : "Verify"}
                  </button>
                </div>
              )}

              {/* <div className="flex flex-row gap-2 mx-4">
                <div className="flex items-start">
                  <Image alt="" src={Info} className="w-12 h-6 md:w-6 xl:w-6 xl:h-5" />
                </div>

                <p className="text-xs text-[#A09FAA]">
                  Either email or phone can be used to access your wallet. It is
                  recommended to add both in case either of them is lost. 
                </p>
              </div> */}

              <div className="flex flex-row items-center mx-4">
                <Image
                  alt=""
                  src={Info}
                  className="w-12 h-6 md:w-6 xl:w-6 xl:h-6"
                />
                <p className="text-xs text-[#A09FAA]">
                  Either email or phone can be used to access your wallet. It is
                  recommended to add both in case either of them is lost.
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="mt-10">
                <CustomButton name="Add Network" img={Plus} bgColor="black" />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="text-sm mx-4">FaceMap</p>
              <div className="flex flex-row items-center rounded-full border border-solid border-[#E5E5F0] justify-between xl:py-4 xl:px-4 py-2 px-2">
                <input
                  type="text"
                  placeholder="My Own FaceMap"
                  className="placeholder:text-black focus:outline-none xl:placeholder:text-lg placeholder:text-base ml-2  text-sm "
                />
                <button className="bg-[#D0F500] xl:py-2 hover:font-bold cursor-pointer xl:px-2 md:py-2 px-1 py-1 md:px-2 border border-solid rounded-full border-black text-sm items-center justify-center sm:-ml-20 ">
                  Connected
                </button>
              </div>
              <div className="flex flex-row items-center mx-4">
                <Image
                  alt=""
                  src={Info}
                  className="w-12 h-6 md:w-6 xl:w-6 xl:h-6"
                />
                <p className="text-xs text-[#A09FAA]">
                  Either email or phone can be used to access your wallet. It is
                  recommended to add both in case either of them is lost.
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="mt-10">
                <CustomButton
                  name="Add Another Trusted FaceMap"
                  img={Plus}
                  bgColor="black"
                />
              </div>
            </div>

            <div className="flex flex-row items-center rounded-full border border-solid border-[#E5E5F0] justify-between xl:py-4 xl:px-4 py-2 px-2">
              <p className="text-base font-medium">Advanced</p>
              <MdKeyboardArrowRight />
            </div>

            <div className="">
              <div className="flex justify-center">
                <button
                  className="flex flex-row gap-2 mt-32 items-center justify-center py-4 border cursor-pointer rounded-full hover:scale-105 w-full border-solid border-[#FF4085] bg-[#FFF5F9]"
                  onClick={handleLogout}
                >
                  <Image alt="" src={Disconnect} className="" />
                  <p className="text-[#FF4085] text-sm hover:font-bold">
                    Disconnect
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;

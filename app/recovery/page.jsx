// "use client";

// import React, { useEffect, useState, useRef, useContext } from "react";
// import Image from "next/image";
// import Account from "@/components/Account";
// import { useMediaQuery } from "react-responsive";
// import Ham from "../../assets/Dashboard/ham.png";
// import { useRouter } from "next/navigation";
// import { AUTH_TOKEN } from "@/constants";
// import { useUser } from "@/providers/UserProvider";
// import Modal from "@/components/modal/Modal";
// import Creso from "../../assets/Dashboard/creso2.png";
// import { getRecoveryStatus } from "@/clientApi/wallet";
// import BackUp from "./backUp";
// import SocialRecovery from "./socialRecovery";
// import StartRecovery from "./startRecovery";
// import WalletStatus from "./walletStatus";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import Language from "../../assets/security/language.png";
// import Currency from "../../assets/security/dollor2.png";
// import AccountHeader from "@/components/AccountHeader";
// import { WalletContext } from "@/providers/WalletProvider";

// const RecoveryPage = () => {
//   const [navbarTrigger, setNavbarTrigger] = useState(false);
//   const { user, isAuthenticated, status } = useUser();
//   const [showModal, setShowModal] = useState(false);
//   const { showAccount, setShowAccount } = useContext(WalletContext);

//   const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
//   // useEffect(() => {
//   //   if (navbarTrigger) {
//   //     document.body.classList.add("no-scroll");
//   //   } else {
//   //     document.body.classList.remove("no-scroll");
//   //   }
//   // }, [navbarTrigger]);

//   const fetchRecoveryStatus = async (data) => {
//     // console.log("data : ", data);
//     try {
//       const payload = {
//         walletAddress: data.wallet,
//         network: "goerli",
//       };
//       const res = await getRecoveryStatus(payload);
//       // console.log("res : ", res);
//     } catch (error) {}
//   };

//   // const handleConfirmGuardian = async () => {
//   //   if (!selectedWallet || guardian === "") {
//   //     enqueueSnackbar(`Missed Fields`, {
//   //       variant: "error",
//   //     });
//   //   } else {
//   //     const payload = {
//   //       walletAddress: selectedWallet.address,
//   //       guardian: guardian,
//   //       network: selectedNetwork
//   //         ? selectedNetwork?.value
//   //         : networkFirstValue?.value,
//   //     };
//   //     setCGuardianLoader(true);
//   //     try {
//   //       const res = await confirmRecovery(payload);
//   //       if (res) {
//   //         enqueueSnackbar(`Recovery confirmed`, {
//   //           variant: "success",
//   //         });
//   //       }
//   //     } catch (error) {
//   //       console.log("error : ", error);
//   //       if (error?.response?.data?.message === "no wallet") {
//   //         enqueueSnackbar(`${error?.response?.data?.message}`, {
//   //           variant: "error",
//   //         });
//   //       } else {
//   //         enqueueSnackbar(`Couldn't confirm recovery`, {
//   //           variant: "error",
//   //         });
//   //       }
//   //     }

//   //     setCGuardianLoader(false);
//   //   }
//   // };

//   return (
//     <div id="modal-root">
//       {navbarTrigger && (
//         <div
//           className="navbackdrop"
//           onClick={() => setNavbarTrigger(!navbarTrigger)}
//         ></div>
//       )}
//       {showModal && <Modal onClose={() => setShowModal(false)} user={user} />}
//       <div className="grid lg:grid-cols-10 md:grid-cols-2 grid-cols-1 pb-32 lg:pb-0">
//         <AccountHeader
//           isMobile={isMobile}
//           navbarTrigger={navbarTrigger}
//           setShowModal={setShowModal}
//           user={user}
//         />
//         {/* <div className="col-span-4">
//           <div
//             className={`grid h-full ${
//               isMobile ? "grid-cols-1" : "grid-cols-3"
//             }`}
//           >
//             <div className="flex xl:hidden md:hidden justify-center gap-4">
//               <div className="flex flex-row items-center gap-2">
//                 <Image alt="" src={Language} className="w-6 h-6" />
//                 <div className="flex flex-row gap-1">
//                   <p className="text-sm text-black hover:font-bold">ENG</p>
//                   <MdKeyboardArrowDown />
//                 </div>
//               </div>
//               <div className="flex flex-row items-center gap-2">
//                 <Image alt="" src={Currency} className="w-6 h-6" />
//                 <div className="flex flex-row gap-1">
//                   <p className="text-sm text-black hover:font-bold">USD</p>
//                   <MdKeyboardArrowDown />
//                 </div>
//               </div>
//             </div>

//             <div
//               className={`col-span-4 ${
//                 isMobile ? "mt-2" : "mt-16"
//               } xl:mx-8 md:mx-4 mx-2`}
//             >
//               <Account user={user} setShowModal={setShowModal} />
//             </div>
//           </div>
//         </div> */}

//         <div
//         className={`col-span-6 xl:mx-8 md:mx-4 mx-2 xl:mt-10 mt-4 ${
//           showAccount ? "block lg:hidden" : "hidden lg:block"
//         }`}
//       >
//         <div
//           className={`${
//             showAccount ? "lg:hidden block" : "lg:block hidden"
//           } flex flex-col space-y-3`}
//         >
//           <button
//             class="w-20 px-4 py-2 bg-neutral-700 hover:bg-neutral-800 text-white font-semibold rounded-md focus:outline-none focus:ring focus:border-blue-300"
//             onClick={() => setShowAccount(false)}
//           >
//             Back
//           </button>
//         </div>

//           <div className="flex flex-row justify-between items-center ">
//             <p className="text-xl font-semibold">Recovery</p>
//             <div className="xl:flex xl:flex-row md:flex md:flex-row hidden items-center xl:gap-6 md:gap-4 gap-4">
//               <div className="flex flex-row items-center gap-2">
//                 <Image alt="" src={Language} className="w-6 h-6" />
//                 <div className="flex flex-row gap-1">
//                   <p className="text-sm text-black">ENG</p>
//                   <MdKeyboardArrowDown />
//                 </div>
//               </div>
//               <div className="flex flex-row items-center gap-2">
//                 <Image alt="" src={Currency} className="w-6 h-6" />
//                 <div className="flex flex-row gap-1">
//                   <p className="text-sm text-black">USD</p>
//                   <MdKeyboardArrowDown />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="divide-y">
//             <BackUp />
//             <SocialRecovery />
//             <StartRecovery />
//             <WalletStatus />
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default RecoveryPage;

"use client";

import React, { useEffect, useState, useRef, useContext } from "react";
import Image from "next/image";
import Account from "@/components/Account";
import { useMediaQuery } from "react-responsive";
import Ham from "../../assets/Dashboard/ham.png";
import { useRouter } from "next/navigation";
import { AUTH_TOKEN } from "@/constants";
import { useUser } from "@/providers/UserProvider";
import Modal from "@/components/modal/Modal";
import Creso from "../../assets/Dashboard/creso2.png";
import { getRecoveryStatus } from "@/clientApi/wallet";
import BackUp from "./backUp";
import SocialRecovery from "./socialRecovery";
import StartRecovery from "./startRecovery";
import WalletStatus from "./walletStatus";
import { MdKeyboardArrowDown } from "react-icons/md";
import Language from "../../assets/security/language.png";
import Currency from "../../assets/security/dollor2.png";
import AccountHeader from "@/components/AccountHeader";
import { WalletContext } from "@/providers/WalletProvider";
import { IoArrowBackCircle } from "react-icons/io5";

const RecoveryPage = () => {
  const [navbarTrigger, setNavbarTrigger] = useState(false);
  const { user, isAuthenticated, status } = useUser();
  const [showModal, setShowModal] = useState(false);
  const { showAccount, setShowAccount } = useContext(WalletContext);

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const fetchRecoveryStatus = async (data) => {
    // console.log("data : ", data);
    try {
      const payload = {
        walletAddress: data.wallet,
        network: "goerli",
      };
      const res = await getRecoveryStatus(payload);
      // console.log("res : ", res);
    } catch (error) {}
  };

  // const handleConfirmGuardian = async () => {
  //   if (!selectedWallet || guardian === "") {
  //     enqueueSnackbar(Missed Fields, {
  //       variant: "error",
  //     });
  //   } else {
  //     const payload = {
  //       walletAddress: selectedWallet.address,
  //       guardian: guardian,
  //       network: selectedNetwork
  //         ? selectedNetwork?.value
  //         : networkFirstValue?.value,
  //     };
  //     setCGuardianLoader(true);
  //     try {
  //       const res = await confirmRecovery(payload);
  //       if (res) {
  //         enqueueSnackbar(Recovery confirmed, {
  //           variant: "success",
  //         });
  //       }
  //     } catch (error) {
  //       console.log("error : ", error);
  //       if (error?.response?.data?.message === "no wallet") {
  //         enqueueSnackbar(${error?.response?.data?.message}, {
  //           variant: "error",
  //         });
  //       } else {
  //         enqueueSnackbar(Couldn't confirm recovery, {
  //           variant: "error",
  //         });
  //       }
  //     }

  //     setCGuardianLoader(false);
  //   }
  // };

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

        <div
          // className={`col-span-6 xl:mx-8 md:mx-4 mx-2 xl:mt-10 mt-4 ${
          //   showAccount ? "block lg:hidden" : "hidden lg:block"
          // }`}
          // className="col-span-6 xl:mx-8 md:mx-4 mx-2 xl:mt-10 mt-4 "

          className={`col-span-6 xl:mx-8 md:mx-4 mx-2 xl:mt-10 mt-4  hidden lg:block ${
            showAccount ? "!block" : ""
          } `}
        >
          <div
            className={`${
              showAccount ? "lg:hidden block" : "lg:block hidden"
            } flex flex-col space-y-3`}
          ></div>

          <div className="flex flex-row justify-between items-center ">
            <div className="flex flex-row items-center">
              <IoArrowBackCircle
                className="h-8 w-8 lg:hidden"
                onClick={() => setShowAccount(false)}
              />
              <p className="text-xl font-semibold ml-2">Recovery </p>
            </div>
            {/* <p className="text-xl font-semibold">Recovery </p> */}
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

          <div className="divide-y">
            <BackUp />
            <SocialRecovery />
            <StartRecovery />
            <WalletStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoveryPage;

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import Creso3 from "../../assets/Dashboard/creso3.png";
import Wallet from "../../assets/Dashboard/Wallet.png";
import Wallet1 from "../../assets/Dashboard/Wallet1.png";
import Discover from "../../assets/Dashboard/Discover.png";
import Discover1 from "../../assets/Dashboard/Discover1.png";
import Swap from "../../assets/Dashboard/Swap.png";
import Swap1 from "../../assets/Dashboard/Swap1.png";
import Info from "../../assets/Dashboard/info.png";
import Info1 from "../../assets/Dashboard/info1.png";
import Support from "../../assets/Dashboard/Support.png";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import NavItem from "./NavItem";
import Twitter from "../../assets/Dashboard/twitter.png";
import Telegram from "../../assets/Dashboard/telegram.png";
import Etherscan from "../../assets/Dashboard/etherscan.png";
import Github from "../../assets/Dashboard/github.png";
import Discord from "../../assets/Dashboard/discord.png";
import cresow from "../../assets/Dashboard/creso_logo_white.svg";
// import cresob from "../../assets/Dashboard/creso logo black.svg";

const SideNav = () => {
  const pathName = usePathname();
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <div className="bg-[#2100EC] rounded-3xl  min-h-full">
      <div className="flex flex-col pt-12 lg:h-full items-center lg:items-start  ">
        <div className="flex flex-row items-center gap-1 px-8 relative Mainlogo text-white">
          <Image alt="creso-logo" src={cresow} className="h-10 my-8 mb-14" />

          {/* 
        <p className=" text-4xl hidden lg:block items-center">creso</p>
        <p className="text-sm mt-4 text-[#D0F500]">Beta</p>

         */}
        </div>
        <div className={`flex flex-col ${isMobile ? "mr-5" : "mr-10"}`}>
          {/*  <NavItem
            pathName={pathName}
            href="/dashboard"
            icon={pathName === "/dashboard" ? Wallet1 : Wallet}
            label="Dashboard"
            active={activeIcon === "dashboard"}
            onClick={() => handleIconClick("dashboard")}
          />
          <NavItem
            pathName={pathName}
            href="/discover"
            icon={pathName === "/discover" ? Discover1 : Discover}
            label="Discover"
        /> 
           <NavItem
             pathName={pathName}
            href="/swap"
            icon={pathName === "/swap" ? Swap1 : Swap}
            label="Swap"
          />
      */}

          <NavItem
            pathName={pathName}
            href="/dashboard"
            icon={Wallet}
            hoverIcon={Wallet1}
            label="Dashboard"
            active={activeIcon === "dashboard"}
            onClick={() => handleIconClick("dashboard")}
          />
          <NavItem
            pathName={pathName}
            href="/discover"
            icon={Discover}
            hoverIcon={Discover1}
            label="Discover"
            active={activeIcon === "discover"}
            onClick={() => handleIconClick("discover")}
          />
          <NavItem
            pathName={pathName}
            href="/swap"
            icon={Swap}
            hoverIcon={Swap1}
            label="Swap"
            active={activeIcon === "swap"}
            onClick={() => handleIconClick("swap")}
          />

          <div className=" ">
            <hr className="text-[#B1A6F8]" />
          </div>

          <NavItem
            pathName={pathName}
            href="/about"
            icon={Info}
            hoverIcon={Info1}
            label="About us"
            active={activeIcon === "about"}
            onClick={() => handleIconClick("about")}
          />
          <NavItem
            pathName={pathName}
            href="/support"
            icon={Support}
            hoverIcon={Support}
            label="Support"
            active={activeIcon === "support"}
            onClick={() => handleIconClick("support")}
          />
        </div>
      </div>
      {/* Add social media icons */}
      <div className="flex justify-between item-center gap-2 border-white rounded-full bg-white border border-solid p-2 my-8 mx-5">
        <a
          href="https://twitter.com/cresowallet"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transform hover:-translate-y-1"
        >
          <Image
            alt="Twitter"
            src={Twitter}
            className="  w-7 h-7  overflow-hidden"
          />
        </a>
        <a
          href="https://t.me/cresowallet"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transform hover:-translate-y-1"
        >
          <Image alt="Telegram" src={Telegram} className=" flex w-7 h-7" />
        </a>
        <a
          href="https://etherscan.io/token/0x41ea5d41eeacc2d5c4072260945118a13bb7ebce"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transform hover:-translate-y-1"
        >
          <Image alt="Etherscan" src={Etherscan} className="w-7 h-7" />
        </a>
        <a
          href="https://discord.com/invite/creso"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transform hover:-translate-y-1"
        >
          <Image alt="Discord" src={Discord} className="w-7 h-7" />
        </a>
        <a
          href="https://github.com/CresoWallet"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transform hover:-translate-y-1"
        >
          <Image alt="Github" src={Github} className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
};

export default SideNav;

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Creso3 from "../assets/Dashboard/creso3.png";
// import Wallet from "../assets/Dashboard/Wallet.png";
// import Discover from "../assets/Dashboard/Discover.png";
// import Swap from "../assets/Dashboard/Swap.png";
// import Info from "../assets/Dashboard/info.png";
// import Support from "../assets/Dashboard/Support.png";
// import { usePathname, useRouter } from "next/navigation";
// import { root } from "postcss";
// import { useMediaQuery } from "react-responsive";

// const SideNav = () => {
//   const pathName = usePathname();

//   const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

//   return (
//     <div className="bg-[#2100EC] rounded-3xl flex flex-col pt-12 min-h-screen lg:h-full items-center lg:items-start relative">
//       <div className="flex flex-row items-center gap-1 px-8">
//         <Image alt="" src={Creso3} className="w-11 h-w-11" />
//         <p className="text-white text-4xl hidden lg:block">creso</p>
//       </div>
//       <div className={`flex flex-col mt-14 ${isMobile ? "mr-5" : "mr-10"}`}>
//         {/*<p className="text-xs text-[#B1A6F8] px-8">Menu</p>*/}
//         <Link href="/" className="group relative">
//           <div
//             className={`w-8 h-10 group-hover:bg-white absolute top-5 ${
//               pathName === "/dashboard" ? "bg-white" : ""
//             } `}
//           ></div>
//           <div
//             className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${
//               pathName === "/dashboard" ? "bg-[#2100EC]" : ""
//             }`}
//           ></div>
//           <div
//             className={`flex flex-row gap-4 items-center group-hover:bg-white rounded-r-full py-4 px-8 ${
//               pathName === "/dashboard" ? "bg-white" : ""
//             }`}
//           >
//             <Image alt="" src={Wallet} className="w-6 h-6 text-[#B1A6F8]" />
//             <p
//               className={`text-[#B1A6F8] text-sm group-hover:text-black font-medium hidden lg:block ${
//                 pathName === "/dashboard" ? "text-black" : ""
//               }`}
//             >
//               Dashboard
//             </p>
//           </div>
//           <div
//             className={`w-8 h-10 group-hover:bg-white absolute bottom-5 ${
//               pathName === "/dashboard" ? "bg-white" : ""
//             }`}
//           ></div>
//           <div
//             className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${
//               pathName === "/dashboard" ? "bg-[#2100EC]" : ""
//             }`}
//           ></div>
//         </Link>

//         <Link href="/discover" className="group relative -mt-8">
//           <div
//             className={`w-8 h-10 group-hover:bg-white absolute top-5 ${
//               pathName === "/discover" ? "bg-white" : ""
//             } `}
//           ></div>
//           <div
//             className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${
//               pathName === "/discover" ? "bg-[#2100EC]" : ""
//             }`}
//           ></div>
//           <div
//             className={`flex flex-row gap-4 items-center group-hover:bg-white rounded-r-full py-4 px-8 ${
//               pathName === "/discover" ? "bg-white" : ""
//             }`}
//           >
//             <Image alt="" src={Discover} className="w-6 h-6 text-[#B1A6F8]" />
//             <p
//               className={`text-[#B1A6F8] text-sm group-hover:text-black hidden font-medium lg:block ${
//                 pathName === "/discover" ? "text-black" : ""
//               }`}
//             >
//               Discover
//             </p>
//           </div>
//           <div
//             className={`w-8 h-10 group-hover:bg-white absolute bottom-5 ${
//               pathName === "/discover" ? "bg-white" : ""
//             }`}
//           ></div>
//           <div
//             className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${
//               pathName === "/discover" ? "bg-[#2100EC]" : ""
//             }`}
//           ></div>
//         </Link>

//         <Link href="/swap" className="group relative -mt-8">
//           <div
//             className={`w-8 h-10 group-hover:bg-white absolute top-5 ${
//               pathName === "/swap" ? "bg-white" : ""
//             } `}
//           ></div>
//           <div
//             className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${
//               pathName === "/swap" ? "bg-[#2100EC]" : ""
//             }`}
//           ></div>
//           <div
//             className={`flex flex-row gap-4 items-center group-hover:bg-white rounded-r-full py-4 px-8 ${
//               pathName === "/swap" ? "bg-white" : ""
//             }`}
//           >
//             <Image alt="" src={Swap} className="w-6 h-6 text-[#B1A6F8]" />
//             <p
//               className={`text-[#B1A6F8] text-sm group-hover:text-black hidden font-medium lg:block ${
//                 pathName === "/swap" ? "text-black" : ""
//               }`}
//             >
//               Swap
//             </p>
//           </div>
//           <div
//             className={`w-8 h-10 group-hover:bg-white absolute bottom-5 ${
//               pathName === "/swap" ? "bg-white" : ""
//             }`}
//           ></div>
//           <div
//             className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${
//               pathName === "/swap" ? "bg-[#2100EC]" : ""
//             }`}
//           ></div>
//         </Link>

//         <div className="py-4">
//           <hr className="text-[#B1A6F8]" />
//         </div>

//         <Link href="/about" className="group relative">
//           <div
//             className={`w-8 h-10 group-hover:bg-white absolute top-5 ${
//               pathName === "/about" ? "bg-white" : ""
//             } `}
//           ></div>
//           <div
//             className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${
//               pathName === "/about" ? "bg-[#2100EC]" : ""
//             }`}
//           ></div>
//           <div
//             className={`flex flex-row gap-4 items-center group-hover:bg-white rounded-r-full py-4 px-8 ${
//               pathName === "/about" ? "bg-white" : ""
//             }`}
//           >
//             <Image alt="" src={Info} className="w-6 h-6 text-[#B1A6F8]" />
//             <p
//               className={`text-[#B1A6F8] text-sm group-hover:text-black font-medium hidden lg:block ${
//                 pathName === "/about" ? "text-black" : ""
//               }`}
//             >
//               About us
//             </p>
//           </div>
//           <div
//             className={`w-8 h-10 group-hover:bg-white absolute bottom-5 ${
//               pathName === "/about" ? "bg-white" : ""
//             }`}
//           ></div>
//           <div
//             className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${
//               pathName === "/about" ? "bg-[#2100EC]" : ""
//             }`}
//           ></div>
//         </Link>

//         <div className="group relative -mt-8">
//           <div
//             className={`w-8 h-10 group-hover:bg-white absolute top-5 ${
//               pathName === "/support" ? "bg-white" : ""
//             } `}
//           ></div>
//           <div
//             className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${
//               pathName === "/support" ? "bg-[#2100EC]" : ""
//             }`}
//           ></div>
//           <div
//             className={`flex flex-row gap-4 items-center group-hover:bg-white rounded-r-full py-4 px-8 ${
//               pathName === "/support" ? "bg-white" : ""
//             }`}
//           >
//             <Image alt="" src={Support} className="w-6 h-6 text-[#B1A6F8]" />
//             <p
//               className={`text-[#B1A6F8] text-sm font-medium group-hover:text-black hidden lg:block`}
//             >
//               Support
//             </p>
//           </div>
//           <div
//             className={`w-8 h-10 group-hover:bg-white absolute bottom-5 ${
//               pathName === "/support" ? "bg-white" : ""
//             }`}
//           ></div>
//           <div
//             className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${
//               pathName === "/support" ? "bg-[#2100EC]" : ""
//             }`}
//           ></div>
//         </div>
//       </div>

//       {/* <p className="text-xs text-[#B1A6F8] text-center absolute bottom-20 w-full">© Copyright 2023</p> */}
//     </div>
//   );
// };

// export default SideNav;

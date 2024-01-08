"use client";
import React, { useState, useContext } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Wallet from "../../assets/Dashboard/Wallet.png";
import Wallet1 from "../../assets/Dashboard/Wallet1.png";
import Discover from "../../assets/Dashboard/Discover.png";
import Discover1 from "../../assets/Dashboard/Discover1.png";
import Swap from "../../assets/Dashboard/Swap.png";
import Swap1 from "../../assets/Dashboard/Swap1.png";
import Profile from "../../assets/Profile.png";
import Profile1 from "../../assets/Profile.png";
import Link from "next/link";
import { WalletContext } from "@/providers/WalletProvider";
import { useRouter } from "next/router";

// const MobileMenubar = () => {
//   return (
//     <div className="bg-[#2100EC] rounded-full grid grid-cols-4 my-5 place-items-center mobileMenu">
//       <Link href="/dashboard">
//         <Image alt="" src={Wallet} className="w-6 h-6 text-[#B1A6F8]" />
//       </Link>
//       <Link href="/discover">
//         <Image alt="" src={Discover} className="w-6 h-6 text-[#B1A6F8]" />
//       </Link>
//       <Link href="/swap">
//         <Image alt="" src={Swap} className="w-6 h-6 text-[#B1A6F8]" />
//       </Link>
//       <Link href="/account">
//         <Image alt="" src={Profile} className="w-6 h-6 text-[#B1A6F8]" />
//       </Link>
//     </div>
//   );
// };

// export default MobileMenubar;

const MobileMenubar = () => {
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <div className="bg-[#2100EC] min-h-[10%] rounded-full grid grid-cols-4 my-5 place-items-center mobileMenu">
      <Link href="/dashboard">
        <div
          onMouseEnter={() => handleMouseEnter("/dashboard")}
          onMouseLeave={() => handleMouseLeave()}
          className={`${pathname === "/dashboard" ? "bg-white" : ""
            } rounded-full p-1`}
        >
          <Image
            alt=""
            src={pathname === "/dashboard" ? Wallet1 : Wallet}
            className="w-6 h-6 text-[#B1A6F8]"
          />
        </div>
      </Link>

      <Link href="/discover">
        <div
          onMouseEnter={() => handleMouseEnter("/discover")}
          onMouseLeave={() => handleMouseLeave()}
          className={`${pathname === "/discover" ? "bg-white" : ""
            } rounded-full p-1`}
        >
          <Image
            alt=""
            src={pathname === "/discover" ? Discover1 : Discover}
            className="w-6 h-6 text-[#B1A6F8]"
          />
        </div>
      </Link>

      <Link href="/swap">
        <div
          onMouseEnter={() => handleMouseEnter("/swap")}
          onMouseLeave={() => handleMouseLeave()}
          className={`${pathname === "/swap" ? "bg-white" : ""
            } rounded-full p-1`}
        >
          <Image
            alt=""
            src={pathname === "/swap" ? Swap1 : Swap}
            className="w-6 h-6 text-[#B1A6F8]"
          />
        </div>
      </Link>

      <Link href="/account">
        <div
          onMouseEnter={() => handleMouseEnter("/account")}
          onMouseLeave={() => handleMouseLeave()}
          className={`${pathname === "/account" ? "bg-white" : ""
            } rounded-full p-1`}
        >
          <Image
            alt=""
            src={pathname === "/account" ? Profile1 : Profile}
            className="w-6 h-6 text-[#B1A6F8]"
          />
        </div>
      </Link>
    </div>
  );
};

export default MobileMenubar;

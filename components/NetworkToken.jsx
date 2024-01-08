// components/TokenPage.js
import React from "react";
import Image from "next/image";
import Language from "../assets/security/language.png";
import Currency from "../assets/security/dollor2.png";
import { BsArrowLeft } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import PropTypes from "prop-types";

const TokenPage = ({ tokenData }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div className="grid xl:grid-cols-10 md:grid-cols-2 grid-cols-1 pb-32 lg:pb-0">
      {/* Header Section */}
      {/* ... (same as your existing header) */}

      {/* Main Content Section */}
      <div className="col-span-6 xl:mx-8 md:mx-4 mx-2 xl:mt-10 mt-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-2">
            <BsArrowLeft />
            <div className="flex flex-row items-center gap-1">
              <Image alt="" src={tokenData.icon} className="w-8 h-8" />
              <p className="text-xl font-semibold">{tokenData.name}</p>
            </div>
          </div>

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

        {/* Token-specific Details */}
        <div className="mt-8 flex flex-col space-y-4">
          <Link href={tokenData.linkToRPC}>
            <div className="flex flex-row items-center justify-between hover:-translate-y-1 cursor-pointer">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-semibold">RPC URL</p>
                <p className="text-xs text-[#A09FAA]">{tokenData.rpcInfo}</p>
              </div>
              <RiArrowRightSLine />
            </div>
          </Link>

          {/* ... (similar structure for other token details) */}
        </div>
      </div>
    </div>
  );
};

TokenPage.propTypes = {
  tokenData: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    linkToRPC: PropTypes.string.isRequired,
    rpcInfo: PropTypes.string.isRequired,
    // Add other token-specific data
  }).isRequired,
};

export default TokenPage;

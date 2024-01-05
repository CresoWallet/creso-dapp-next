import React, { useState } from "react";
import Link from "next/link";
import UserDetails from "./UserDetails";
import CustomButton3 from "./CustomButton3";
import { FiUser } from "react-icons/fi";
import { GoKey } from "react-icons/go";
import { RiComputerLine } from "react-icons/ri";
import { BiWifi2 } from "react-icons/bi";
import { GiAerialSignal } from "react-icons/gi";
import { LuSettings2 } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";

const links = [
  { id: "account", label: "Account", icon: FiUser },
  { id: "recovery", label: "Recovery Key", icon: GoKey },
  { id: "security", label: "Security", icon: RiComputerLine },
  { id: "session", label: "V1 Sessions", icon: BiWifi2 },
  { id: "session2", label: "V2 Sessions", icon: BiWifi2 },
  { id: "network", label: "Network Settings ", icon: GiAerialSignal },
  { id: "advance", label: "Advanced", icon: LuSettings2 },
];

const Account = ({ setShowModal }) => {
  const [hover, setHover] = useState(null);
  const [clicked, setClicked] = useState(true);

  const handleMouseEnter = (link) => {
    setHover(link);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  const handleClick = (link) => {
    setClicked(link);
    setHover(link);
  };

  return (
    <>
      <div className="flex flex-col space-y-3">
        <UserDetails />

        <CustomButton3
          title="Backup"
          titleColor="[#FF4085]"
          buttonColor="[#FFC8DC]"
          onClick={() => setShowModal(true)}
        />

        <div className="flex flex-col xl:space-y-4  space-y-4 xl:pt-6 md:pt-3  pt-2 ">
          {links.map(({ id, label, icon: Icon }) => (
            <Link
              href={`/${id}`}
              key={id}
              className="hover:bg-violet-100  py-5 border-b-2  "
            >
              <div
                className={`flex  flex-row justify-between items-center cursor-pointer mx-4  ${
                  hover === id ? "text-purple-800  font-bold" : ""
                } ${clicked === id ? "text-purple-800 font-bold" : ""}`}
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(id)}
              >
                <div className="flex flex-row gap-2 items-center ">
                  <Icon />
                  <p className="text-sm">{label}</p>
                </div>
                <MdKeyboardArrowRight />
              </div>
              {/* <hr className="my-4" /> */}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Account;

import React, { useContext, useState } from "react";
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
import { usePathname } from "next/navigation";
import { VscFeedback } from "react-icons/vsc";
import { WalletContext } from "@/providers/WalletProvider";

<VscFeedback />;

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
  const path = usePathname();
  const handleMouseEnter = (link) => {
    setHover(link);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  const handleClick = (link) => {
    setClicked(link);
    setHover(link);
    link && setShowAccount(true);

  };
  const getLinkStyle = (link) => {
    const isHovered = hover === link;
    const isClicked = path === "/" + link;

    return {
      background:
        isHovered || isClicked
          ? "linear-gradient(-270deg, rgba(33, 0, 236, 0.1056) 5.3%, rgba(33, 0, 236, 0) 98.01%)"
          : "transparent",
      // Add other styles based on your requirements
      // fontWeight: isHovered || isClicked ? "bold" : "normal",
    };
  };
  const [hovere, setHovere] = useState(false);
  const style = { color: "white" };
  const hoverStyle = { color: "black" };
  const { showAccount, setShowAccount } = useContext(WalletContext);
  return (
    <>
      <div className={`${showAccount ? "hidden lg:block" : "" } flex flex-col space-y-3`}>
        <UserDetails />

        <CustomButton3
          title="Backup"
          titleColor="[#FF4085]"
          buttonColor="[#FFC8DC]"
          onClick={() => setShowModal(true)}
        />

        <div className="flex flex-col xl:space-y-4  space-y-4 xl:pt-6 md:pt-3  pt-2 ">
          {links.map(({ id, label, icon: Icon }) => (
            <div
              key={id}
              className="hover:bg-violet-100 py-5 border-b-2"
              style={getLinkStyle(id)}
            >
              {id === "session2" ? (
                <div
                  className={`flex flex-row justify-between items-center mx-4 text-black cursor-not-allowed ${
                    hover === id || clicked === "/" + id
                      ? "text-purple-800 font-bold"
                      : ""
                  } `}
                  onMouseEnter={() => handleMouseEnter(id)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => {
                    handleClick(id);
                  }}
                >
                  <div className="flex flex-row gap-2 items-center ">
                    <Icon />
                    <p className="text-sm">{label}</p>
                  </div>
                  <MdKeyboardArrowRight />
                </div>
              ) : (
                <Link
                  href={`/${id}`}
                  className="flex flex-row justify-between items-center cursor-pointer mx-4"
                >
                  <a
                    className={`flex flex-row gap-2 items-center ${
                      hover === id || path === "/" + id
                        ? "text-purple-800 font-bold"
                        : ""
                    } ${clicked === id ? "text-purple-800 font-bold" : ""}`}
                    onMouseEnter={() => handleMouseEnter(id)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(id)}
                  >
                    <Icon />
                    <p className="text-sm">{label}</p>
                  </a>
                  <MdKeyboardArrowRight />
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="relative">
          <a
            onMouseEnter={() => setHovere(true)}
            onMouseLeave={() => setHovere(false)}
            href="https://forms.gle/GBEKLjSH7hxQiuPv8"
            target="_blank"
            className={`${
              hovere ? "bg-white border border-[#2100EC] " : "bg-[#2100EC]"
            } fixed bottom-24 lg:bottom-12 right-12 cursor-pointer shadow-2xl z-50 h-20 w-20 grid place-items-center rounded-full `}
          >
            <div className="absolute grid place-items-center">
              <VscFeedback style={hovere ? hoverStyle : style} size={30} />
            </div>
            {hovere && (
              <p className="absolute p-2 rounded-lg font-semibold  -top-12 bg-black text-white ">
                {" "}
                Feedback
              </p>
            )}
          </a>
        </div>
      </div>
    </>
  );
};

export default Account;

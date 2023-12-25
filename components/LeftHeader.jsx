import Image from "next/image";
import React from "react";
import Settings from "../assets/Swap/settings.png";
import Note from "../assets/Swap/note.png";
const LeftHeader = (props) => {
  const {
    title,
    descriptionColor,
    icon1,
    icon2,
    mobileImg,
    navbarTrigger,
    setNavbarTrigger,
    isMobile,
    iconImg1,
    iconImg2,
  } = props;
  return (
    <div className="flex flex-row items-center justify-between w-full">
      {/* Leftside Title */}
      <div>
        {title && (
          <>
            <p className="xl:text-4xl md:text-md text-black font-bold text-xl space-y-1 relative ">
              {title}
              <span className="mx-1 text-xl  upcomming">Upcoming</span>
            </p>
          </>
        )}
        {descriptionColor && (
          <p className="text-[#6F6E7A] text-xs">
            Last Backup:
            <span className="uppercase text-[#2100EC]">{descriptionColor}</span>
          </p>
        )}
      </div>
      {/* Right Icon List */}
      <div className="flex flex-row items-center justify-between text-3xl gap-4">
        {icon1 && <div className="icon-set-1">{icon1}</div>}
        {icon2 && <div className="icon-set-2">{icon2}</div>}
        {iconImg1 && <Image alt="" src={Settings} />}
        {iconImg2 && <Image alt="" src={Note} />}
        {isMobile && (
          <Image
            alt=""
            className="navico"
            src={mobileImg}
            onClick={() => setNavbarTrigger(!navbarTrigger)}
          />
        )}
      </div>
    </div>
  );
};

export default LeftHeader;

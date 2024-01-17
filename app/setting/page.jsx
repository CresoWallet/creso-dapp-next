"use client";
import Header from "@/components/Header";
import LeftHeader from "@/components/LeftHeader";
import React, { useState } from "react";
import Ham from "../../assets/Dashboard/ham.png";
import Settings from "../../assets/Swap/settings.png";
import Note from "../../assets/Swap/note.png";
import { VscFeedback } from "react-icons/vsc";
<VscFeedback />;

const SupportPage = () => {
  const [hover, setHover] = useState(false);
  const style = { color: "white" };
  const hoverStyle = { color: "black" };
  return (
    <>
      {/* <div>page</div> */}

      <div className="lg:grid lg:grid-cols-10  ">
        {/* ------------ Leftside Main ---------- */}
        {/* <div className="grid responsivemb-cols h-full"> */}
        <div className="lg:col-span-6 pt-16 px-12">
          {/* <div className="block xl:hidden md:hidden">
              <Header />
            </div> */}
          <div className="">
            <LeftHeader
              title={"Settings "}
              mobileImg={Ham}
              // navbarTrigger={navbarTrigger}
              // setNavbarTrigger={setNavbarTrigger}
              // isMobile={isMobile}
              // iconImg1={Settings}
              // iconImg2={Note}
            />
          </div>
        </div>

        <hr className="lg:hidden mt-10 lg:mt-0" />
        {/* ------------ Rightside Main ---------- */}
        <div className="pt-14 col-span-4 px-10">
          <Header />
          <div className="relative">
            <a
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              href="https://forms.gle/GBEKLjSH7hxQiuPv8"
              target="_blank"
              className={`${
                hover ? "bg-white border border-[#2100EC] " : "bg-[#2100EC]"
              } fixed bottom-24 lg:bottom-12 right-12 cursor-pointer shadow-2xl z-50 h-20 w-20 grid place-items-center rounded-full `}
            >
              <div className="absolute grid place-items-center">
                <VscFeedback style={hover ? hoverStyle : style} size={30} />
              </div>
              {hover && (
                <p className="absolute p-2 rounded-lg font-semibold  -top-12 bg-black text-white ">
                  {" "}
                  Feedback
                </p>
              )}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;

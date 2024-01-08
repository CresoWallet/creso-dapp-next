"use client";
import Header from "@/components/Header";
import LeftHeader from "@/components/LeftHeader";
import React from "react";
import Ham from "../../assets/Dashboard/ham.png";
import Settings from "../../assets/Swap/settings.png";
import Note from "../../assets/Swap/note.png";
import { VscFeedback } from "react-icons/vsc";
<VscFeedback />;

const SupportPage = () => {
  return (
    <>
      {/* <div>page</div> */}

      <div className="lg:grid lg:grid-cols-10  ">
        {/* ------------ Leftside Main ---------- */}
        {/* <div className="grid responsivemb-cols h-full"> */}
        <div className="lg:col-span-6 pt-16 px-12">
          {/* <div className="flex md:hidden">
              {showSwapForm && <SwapFrom handleClose={handleClose} />}
            </div> */}
          {/* <div className="block xl:hidden md:hidden">
              <Header />
            </div> */}
          <div className="">
            <LeftHeader
              title={"Setting "}
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
        </div>
      </div>
    </>
  );
};

export default SupportPage;

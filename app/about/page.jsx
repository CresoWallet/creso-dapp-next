"use client";
import CapCard from "@/components/CapCard";
import CresoCard from "@/components/CresoCard";
import CustomButton from "@/components/CustomButton";
import CustomButton2 from "@/components/CustomButton2";
import Header from "@/components/Header";
import SideNav from "@/components/navbar/SideNav";
import User from "@/components/User";
import React, { useEffect, useState } from "react";
import Sure from "../../assets/Dashboard/gainers/sure.png";
import Vector from "../../assets/AboutUs/Vector.png";
import Image from "next/image";
import Info from "../../assets/AboutUs/info.png";
import Arrow from "../../assets/AboutUs/Arrow.2.png";
import CFX from "../../assets/AboutUs/gainers/cfx.png";
import MINA from "../../assets/AboutUs/gainers/mina.png";
import { useMediaQuery } from "react-responsive";
import Ham from "../../assets/Dashboard/ham.png";
import LeftHeader from "@/components/LeftHeader";
import RightMain from "../MainLayout/RightMain";

const AboutPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const toggleAccordion = (accordionId) => {
    setActiveAccordion(accordionId === activeAccordion ? null : accordionId);
  };

  const isAccordionActive = (accordionId) => {
    return (
      accordionId === activeAccordion ||
      (activeAccordion === 1 && accordionId === 1)
    );
  };

  const [navbarTrigger, setNavbarTrigger] = useState(false);

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  useEffect(() => {
    if (navbarTrigger) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [navbarTrigger]);

  return (
    <>
      <div className="grid grid-cols-10 divide-x">
        <div className="col-span-6 pt-16 px-6">
          <div className="">
            <LeftHeader
              title={"About us"}
              navbarTrigger={navbarTrigger}
              setNavbarTrigger={setNavbarTrigger}
              isMobile={isMobile}
            />
          </div>

          <div className="col-span-6 space-y-6 ">
            <div className="flex flex-col gap-10 ">
              <div className="flex items-center justify-start gap-5">
                <Image src={Vector} alt="" className="cursor-pointer" />
                <div>
                  <p className="text-black text-3xl font-semibold ">creso</p>
                  <p className="text-gray-600 text-sm">Version 1.1.0</p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-2">
                <Image src={Info} alt="" />
                <p className="text-gray-600 text-sm">
                  Automatically Switch PRC nodes when the current RPC is
                  unavailable
                </p>
              </div>
            </div>

            {/* accordion */}
            <div className="flex flex-col gap-10">
              <div
                className="hover:translate-y-1"
                onClick={() => toggleAccordion(1)}
                aria-expanded={isAccordionActive(1)}
              >
                <div className="flex items-center justify-between mb-2 cursor-pointer">
                  <p className="text-xl font-semibold ">User Agreement</p>
                  <Image src={Arrow} alt="" />
                </div>
                <hr />
              </div>
              <div
                id="accordion-collapse-body-1"
                className={`p-5   bg-stale-200 rounded-3xl mb-2 shadow-2xl ${
                  isAccordionActive(1) ? "" : "hidden"
                }`}
                aria-labelledby="accordion-collapse-heading-1"
              >
                <p className="mb-2 text-black">
                  The Biggest, and Best Rewards Club in Australia is LMCT. To
                  offer our clients special discounts and great prizes, we have
                  partnered with hundreds of (and rising) Australian companies.
                  Since we began in 2022, we ve given away over $ 20 million in
                  prizes, had more than two hundred winners, and are still in
                  the early stages. Prizes have included cars, bikes, boats, and
                  houses. The Biggest, and Best Rewards Club in Australia is
                  LMCT. To offer our clients special discounts and great prizes,
                  we have partnered with hundreds of(and rising) Australian
                  companies. Since we began in 2022, we ve given away over $ 20
                  million in prizes,
                </p>
              </div>

              <div
                className="hover:translate-y-1"
                onClick={() => toggleAccordion(2)}
                aria-expanded={isAccordionActive(2)}
              >
                <div className="flex items-center justify-between mb-2 cursor-pointer ">
                  <p className="text-xl font-semibold ">Privacy Policy</p>
                  <Image src={Arrow} alt="" />
                </div>
                <hr />
              </div>

              <div
                id="accordion-collapse-body-1"
                className={`p-5   bg-stale-200 rounded-3xl mb-2 shadow-2xl ${
                  isAccordionActive(2) ? "" : "hidden"
                }`}
                aria-labelledby="accordion-collapse-heading-1"
              >
                <p className="mb-2 text-black ">
                  The Biggest, and Best Rewards Club in Australia is LMCT. To
                  offer our clients special discounts and great prizes, we have
                  partnered with hundreds of (and rising) Australian companies.
                  Since we began in 2022, we ve given away over $ 20 million in
                  prizes, had more than two hundred winners, and are still in
                  the early stages. Prizes have included cars, bikes, boats, and
                  houses. The Biggest, and Best Rewards Club in Australia is
                  LMCT. To offer our clients special discounts and great prizes,
                  we have partnered with hundreds of(and rising) Australian
                  companies. Since we began in 2022, we ve given away over $ 20
                  million in prizes,
                </p>
              </div>
              <div className="hover:translate-y-1">
                <div
                  className="flex items-center justify-between mb-2 cursor-pointer"
                  onClick={() => toggleAccordion(3)}
                  aria-expanded={isAccordionActive(3)}
                >
                  <p className="text-xl font-semibold ">Official Website</p>
                  <Image src={Arrow} alt="" />
                </div>
                <hr />
              </div>
              <div
                id="accordion-collapse-body-1"
                className={`p-5   bg-stale-200 rounded-3xl mb-2 shadow-2xl ${
                  isAccordionActive(3) ? "" : "hidden"
                }`}
                aria-labelledby="accordion-collapse-heading-1"
              >
                <p className="mb-2 text-black ">
                  The Biggest, and Best Rewards Club in Australia is LMCT. To
                  offer our clients special discounts and great prizes, we have
                  partnered with hundreds of (and rising) Australian companies.
                  Since we began in 2022, we ve given away over $ 20 million in
                  prizes, had more than two hundred winners, and are still in
                  the early stages. Prizes have included cars, bikes, boats, and
                  houses. The Biggest, and Best Rewards Club in Australia is
                  LMCT. To offer our clients special discounts and great prizes,
                  we have partnered with hundreds of(and rising) Australian
                  companies. Since we began in 2022, we ve given away over $ 20
                  million in prizes,
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="hidden xl:block md:block pt-14 col-span-4 px-4">
          <Header />
          <RightMain />
        </div>
      </div>
    </>
  );
};

export default AboutPage;

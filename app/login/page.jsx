import React from "react";
import Image from "next/image";
import BgImage from "../../assets/auth/bgImage.png";
import CustomButton from "@/components/CustomButton";
import Apple from "../../assets/auth/Apple.png";
import X from "../../assets/auth/x.png";
import Link from "next/link";
import MobileImage from "../../assets/auth/Group.png";

const LoginPage = () => {
  return (
    <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 h-screen mx-2 my-2 gap-2 xl:gap-0 md:gap-0">
      <div className="col-span-1 flex justify-center xl:items-center md:items-start bg-[#2100EC] xl:py-8 md:py-8 rounded-2xl">
        <Image alt="" src={BgImage} className="hidden xl:flex md:flex" />
        <div className="flex xl:hidden md:hidden flex-col space-y-4 items-center justify-center px-4 py-4">
          <Image alt="" src={MobileImage} />
          <p className="font-bold text-3xl text-center text-white">Keyless No risk of leakage</p>
        </div>
      </div>

      <div className="col-span-1 space-y-8 xl:px-24 md:px-8 px-4 flex flex-col xl:py-16 md:py-8">
        <p className="font-bold md:text-2xl xl:text-4xl xl:mb-8 md:mb-4  text-xl">
          Login
        </p>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-1 w-full">
            <p className="text-sm">Email</p>
            <input
              type="text"
              placeholder="E.g. name@example.com"
              className="placeholder:text-[#A09FAA] text-xs xl:px-4 xl:py-4 md:px-4 md:py-4 py-3 px-3 rounded-full border border-solid"
            />
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <p className="text-sm">Password</p>
            <input
              type="password"
              placeholder="E.g Shahel"
              className="placeholder:text-[#A09FAA] text-xs xl:px-4 xl:py-4 md:px-4 md:py-4 py-3 px-3 rounded-full border border-solid"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <CustomButton name="Login" bgColor="black" />
            <CustomButton
              bgColor="white"
              name="Continue With X"
              nameColor="black"
              img={Apple}
            />
            <CustomButton
              bgColor="white"
              name="Continue With X"
              nameColor="black"
              img={X}
            />
          </div>
          <div className="flex justify-center">
            <p className="text-sm text-[#A09FAA]">
              Do you have an account?{" "}
              <Link href="/register">
                <span className="text-[#FF4085] cursor-pointer hover:font-bold">
                  Register Now
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

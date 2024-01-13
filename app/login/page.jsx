"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import BgImage from "../../assets/auth/bgImage.png";
import CustomButton from "@/components/CustomButton";
import Apple from "../../assets/auth/Apple.png";
import X from "../../assets/auth/x.png";
import MobileImage from "../../assets/auth/Group.png";
import { loginApi } from "@/clientApi/auth";
import { AUTH_TOKEN, BASE_URL } from "@/constants";
import { useUser } from "@/providers/UserProvider";
import { axiosInstance } from "@/services/axios";
import { CustomTextField } from "@/components/fields/CustomTextField";
import { enqueueSnackbar } from "notistack";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Creso3 from "../../assets/Dashboard/creso3.png";
import cresow from "../../assets/Dashboard/creso_logo_white.svg";
import Capcha from "@/components/Capcha";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { WalletContext } from "@/providers/WalletProvider";

const LoginPage = () => {
  const router = useRouter();

  const { user, isAuthenticated, handleAuthentication } = useUser();
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, watch, formState } = useForm();

  useEffect(() => {
    if (isAuthenticated) {
      router.push(`/dashboard`);
    }
  }, [user]);
  const { validCaptcha } =
    useContext(WalletContext);
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     router.push(`/dashboard`);
  //   }
  // }, [isAuthenticated, user]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await loginApi(data);
      console.log(res);
      const tk = res.data.token;
      //console.log(tk);
      if (tk) {
        // localStorage.setItem(AUTH_TOKEN, tk);
        // authenticate();
        // setLoading(false);
        handleAuthentication();
      }
    } catch (err) {
      enqueueSnackbar(`${err?.response?.data?.message}`, {
        variant: "error",
      });
    } finally {
      // setLoading(false);
    }

    setLoading(false);
  };

  const handleTwitterLogin = async () => {
    window.open(BASE_URL + "/api/auth/twitter");

    // const data = await axiosInstance("/twitter");
    // console.log(data);
    // const data2 = await axiosInstance("/twitter/callback");
    // console.log(data2);
  };

  const handleGoogleLogin = async () => {
    window.open(BASE_URL + "/api/auth/google");
  };

  return (
    <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 h-screen px-2 py-2 gap-2 xl:gap-0 md:gap-0">
      <div className="col-span-1 flex flex-col justify-center items-center bg-[#2100EC] md:py-8 rounded-2xl">
        <div className="flex flex-row items-center justify-center my-16 gap-1 relative Mainlogo text-white mt-4 ">
          <Image alt="creso-logo" src={cresow} className="h-16" />
          {/* <p className="lg:text-5xl text-4xl lg:block items-center">creso</p>
          <p className="text-sm lg:mt-6 mt-4 text-[#D0F500]">Beta</p> */}
        </div>

        <Image
          alt=""
          src={BgImage}
          height={650}
          className="hidden xl:flex md:flex "
        />

        <div className="flex xl:hidden md:hidden flex-col space-y-4 items-center justify-center px-4 py-4">
          <Image alt="" src={MobileImage} className="" />
          <p className="font-bold text-3xl text-center text-white">
            Keyless No risk of leakage
          </p>
        </div>
      </div>

      <div className="col-span-1 space-y-8 xl:px-24 md:px-8 px-4 flex flex-col xl:py-16 md:py-8">
        <p className="font-bold md:text-2xl xl:text-4xl xl:mb-8 md:mb-4 text-xl">
          Login
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          <CustomTextField
            label={"Email"}
            placeholder={"email"}
            validation={{ ...register("email", { required: true }) }}
          />
          <CustomTextField
            label={"Password"}
            placeholder={"password"}
            type={"password"}
            validation={{ ...register("password", { required: true }) }}
          />
          <Capcha onSubmit={onSubmit} />
          <div className="flex flex-col space-y-2 pt-5">
            {/* <CustomButton
              isLoading={loading}
              name="Login"
              bgColor="black"
              hoverColor={"zinc-800"}
              type={"submit"}
            /> */}
            <button
              disabled={!validCaptcha}
              type={"button"}
              className={`transition duration-500 ease-in-out bg-black disabled:opacity-40 xl:py-4 py-2 text-white px-12 flex justify-center rounded-full w-full enabled:hover:bg-zinc-800 enabled:hover:font-semibold cursor-pointer border border-solid border-black tracking-wider transform hover:-translate-y-1`}
            >
              <div className="flex flex-row gap-2 items-center">
                {loading ? (
                  <>
                    {" "}
                    <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin text-sky-500" />
                  </>
                ) : (
                  <>
                    {" "}
                    {/* {img && <Image alt="" src={img} />} */}
                    <p className={`text-sm xl:text-base text-white`}>Login</p>
                  </>
                )}
              </div>
            </button>

            {/* <CustomButton
              isDisabled={true}
              bgColor="white"
              name="Continue With Apple "
              nameColor="black"
              img={Apple}
              onClick={handleTwitterLogin}
            />
            <CustomButton
              bgColor="white"
              name="Continue With X"
              nameColor="black"
              img={X}
              onClick={handleTwitterLogin}
            />
            <CustomButton
              bgColor="white"
              name="Continue With Google"
              nameColor="black"
              img={X}
              onClick={handleGoogleLogin}
            /> */}
          </div>
          <div className="my-4 pt-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center text-gray-400 dark:text-white">
              or
            </p>
          </div>
          <div className="flex justify-center pt-5">
            {" "}
            <div className="flex flex-col items-center max-w-sm w-full gap-3">
              <div
                onClick={handleTwitterLogin}
                className=" gap-2  items-center  hover:border-black hover:text-bold  text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   transition duration-500 ease-in-out  disabled:opacity-40
              xl:py-4 py-2 text-black px-12 flex justify-center rounded-full w-full
              enabled:hover:bg-zinc-800 enabled:hover:font-semibold cursor-pointer
              border border-solid border-undefined tracking-wider transform
              hover:-translate-y-1"
              >
                <FaSquareXTwitter className="w-5 h-5" />
                Sign in with Twitter
              </div>

              <div
                onClick={handleGoogleLogin}
                className=" gap-2  items-center  hover:border-black hover:text-bold  text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   transition duration-500 ease-in-out  disabled:opacity-40
              xl:py-4 py-2 text-black px-12 flex justify-center rounded-full w-full
              enabled:hover:bg-zinc-800 enabled:hover:font-semibold cursor-pointer
              border border-solid border-undefined tracking-wider transform
              hover:-translate-y-1"
              >
                <FaGoogle />
                Sign in with Google
              </div>

              <div
                className=" gap-2  items-center  hover:border-black hover:text-bold  text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   transition duration-500 ease-in-out bg-black disabled:opacity-40
              xl:py-4 py-2 text-white px-12 flex justify-center rounded-full w-full
              enabled:hover:bg-zinc-800 enabled:hover:font-semibold 
              border border-solid border-undefined tracking-wider transform
              hover:-translate-y-1"
              >
                <FaApple className="w-5 h-5" />
                Sign in with Apple
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-5">
            <p className="text-sm text-[#A09FAA]">
              Don&rsquo;t have an account?{" "}
              <Link href="/register">
                <span className="text-[#FF4085] cursor-pointer hover:font-bold">
                  Register Now
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

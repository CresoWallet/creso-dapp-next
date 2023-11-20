"use client";

import React, { useEffect, useState } from "react";
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
import { AUTH_TOKEN } from "@/constants";
import { useUser } from "@/providers/UserProvider";
import { axiosInstance } from "@/services/axios";
import { CustomTextField } from "@/components/fields/CustomTextField";

const LoginPage = () => {
  const router = useRouter();

  const { user, isAuthenticated, authenticate } = useUser();
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, watch, formState } = useForm();

  useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      router.push(`/`);
    }
  }, [user]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await loginApi(data);
      console.log(res);
      const tk = res.data.token;
      if (tk) {
        localStorage.setItem(AUTH_TOKEN, tk);
        authenticate();
        // setLoading(false);
      }
    } catch (err) {
      console.log(err);
    } finally {
      // setLoading(false);
    }

    setLoading(false);
  };

  const handleTwitterLogin = async () => {
    window.open("http://localhost:8080/api/auth/twitter");

    // const data = await axiosInstance("/twitter");
    // console.log(data);
    // const data2 = await axiosInstance("/twitter/callback");
    // console.log(data2);
  };

  return (
    <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 h-screen mx-2 my-2 gap-2 xl:gap-0 md:gap-0">
      <div className="col-span-1 flex justify-center xl:items-center md:items-start bg-[#2100EC] xl:py-8 md:py-8 rounded-2xl">
        <Image alt="" src={BgImage} className="hidden xl:flex md:flex" />
        <div className="flex xl:hidden md:hidden flex-col space-y-4 items-center justify-center px-4 py-4">
          <Image alt="" src={MobileImage} />
          <p className="font-bold text-3xl text-center text-white">
            Keyless No risk of leakage
          </p>
        </div>
      </div>

      <div className="col-span-1 space-y-8 xl:px-24 md:px-8 px-4 flex flex-col xl:py-16 md:py-8">
        <p className="font-bold md:text-2xl xl:text-4xl xl:mb-8 md:mb-4  text-xl">
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
            validation={{ ...register("password", { required: true }) }}
          />
          <div className="flex flex-col space-y-2">
            <CustomButton
              isLoading={loading}
              name="Login"
              bgColor="black"
              type={"submit"}
            />
            <CustomButton
              bgColor="white"
              name="Continue With X"
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
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

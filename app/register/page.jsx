"use client";
import React, { useState } from "react";
import Image from "next/image";
import BgImage from "../../assets/auth/bgImage.png";
import CustomButton from "@/components/CustomButton";
import Apple from "../../assets/auth/Apple.png";
import X from "../../assets/auth/x.png";
import Link from "next/link";
import MobileImage from "../../assets/auth/Group.png";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signUpAPI } from "@/clientApi/auth";
import { CustomTextField } from "@/components/fields/CustomTextField";
import { enqueueSnackbar } from "notistack";
import cresow from "../../assets/Dashboard/creso_logo_white.svg";
import Capcha from "@/components/Capcha";

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isLoading },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const validatePassword = (value) => {
    return value === password || "Passwords do not match";
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const username = generateUsername(data.firstName, data.lastName);
    const signUpData = {
      email: data.email.toLowerCase(),
      username: username,
      password: data.password,
    };
    try {
      const res = await signUpAPI(signUpData);
      if (res) {
        // console.log(res);
        router.push("/");
        enqueueSnackbar(`User successfully registered`, {
          variant: "success",
        });
      }

      setLoading(false);
    } catch (error) {
      enqueueSnackbar(`${error?.response?.data?.message}`, {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const generateUsername = (firstName, lastName) => {
    const username = `${firstName.toLowerCase()}${lastName.toLowerCase()}`;
    return username;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 h-screen px-2 py-2 gap-2 xl:gap-0 md:gap-0">
      <div className="col-span-1 flex flex-col justify-center xl:items-center md:items-center  bg-[#2100EC] xl:py-8 md:py-8 rounded-2xl">
        {/* Logo and background images */}
        <div className="flex flex-row items-center justify-center my-16 gap-1 relative Mainlogo text-white mt-4 ">
          <Image alt="creso-logo" src={cresow} className="h-16" />
        </div>
        <Image
          alt=""
          src={BgImage}
          height={650}
          className="hidden xl:flex md:flex"
        />

        {/* Centering the text at around 1024px (laptop size) */}
        <div
          className="flex xl:hidden md:hidden flex-col space-y-4 items-center justify-center px-4 py-4 Account Not Backed Up.
        "
        >
          <Image alt="" src={MobileImage} />
          <p className="font-bold text-3xl lg:text-center md:text-center text-center text-white lg:text-4xl xl:text-5xl ">
            Keyless No risk of leakage
          </p>
        </div>
      </div>

      <div className="col-span-1 space-y-8 xl:px-8 md:px-8 lg:px-24 px-4 flex flex-col xl:py-8 md:py-8">
        {/* Registration form */}
        <p className="font-bold md:text-2xl xl:text-4xl xl:mb-4 md:mb-4 text-xl">
          Register
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          <div className="flex flex-col gap-2">
            {/* First Name and Last Name */}
            <CustomTextField
              label={"First Name "}
              placeholder={"first name"}
              validation={{ ...register("firstName", { required: true }) }}
            />
            <CustomTextField
              label={"Last Name"}
              placeholder={"last name"}
              validation={{ ...register("lastName", { required: true }) }}
            />
          </div>

          {/* Email */}
          <CustomTextField
            label={"Email"}
            placeholder={"email"}
            validation={{ ...register("email", { required: true }) }}
          />

          <div className="flex flex-col gap-2">
            {/* Password and Confirm Password */}
            <CustomTextField
              label={"Password"}
              placeholder={"password"}
              type={"password"}
              validation={{ ...register("password", { required: true }) }}
            />
            <CustomTextField
              label={"Confirm Password"}
              placeholder={"confirm password"}
              validation={{
                ...register("confirmPassword", {
                  required: true,
                  validate: validatePassword,
                }),
              }}
              type="password"
              error={errors.confirmPassword && errors.confirmPassword.message}
            />
          </div>
          <Capcha onSubmit={onSubmit} />

          <div className="flex flex-col space-y-2">
            {/* Sign-up button */}
            <CustomButton
              isLoading={loading}
              hoverColor={"zinc-800"}
              name="Sign up"
              bgColor="black"
              type={"submit"}
            />
            {/* Social buttons (Apple, X) */}
            {/* Uncomment and customize as needed */}
            {/* <CustomButton
            isDisabled={true}
            bgColor="white"
            name="Continue With Apple "
            nameColor="black"
            img={Apple}
          />
          <CustomButton
            bgColor="white"
            name="Continue With X"
            nameColor="black"
            img={X}
          /> */}
          </div>

          {/* Login link */}
          <div className="flex justify-center">
            <p className="text-sm text-[#A09FAA]">
              Already have an account?{" "}
              <Link href="/">
                <span className="text-[#FF4085] cursor-pointer hover:font-bold">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

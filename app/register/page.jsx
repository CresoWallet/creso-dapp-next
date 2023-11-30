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
      email: data.email,
      username: username,
      password: data.password,
    };
    try {
      const res = await signUpAPI(signUpData);
      if (res) {
        console.log(res);
        router.push("/login");
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
    <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 h-screen px-2 py-2 gap-2 xl:gap-0 md:gap-0">
      <div className="col-span-1 flex justify-center xl:items-center md:items-start bg-[#2100EC] xl:py-8 md:py-8 rounded-2xl">
        <Image alt="" src={BgImage} className="hidden xl:flex md:flex" />
        <div className="flex xl:hidden md:hidden flex-col space-y-4 items-center justify-center px-4 py-4">
          <Image alt="" src={MobileImage} />
          <p className="font-bold text-3xl text-center text-white">
            Keyless No risk of leakage
          </p>
        </div>
      </div>
      <div className="col-span-1 space-y-8 xl:px-24 px-4 flex flex-col xl:py-8 md:py-8">
        <p className="font-bold md:text-2xl xl:text-4xl xl:mb-4 md:mb-4 text-xl">
          Register
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          <div className="flex flex-row gap-2 justify-between">
            <CustomTextField
              label={"First Name"}
              placeholder={"first name"}
              validation={{ ...register("firstName", { required: true }) }}
            />
            <CustomTextField
              label={"Last Name"}
              placeholder={"last name"}
              validation={{ ...register("lastName", { required: true }) }}
            />
          </div>
          <CustomTextField
            label={"Email"}
            placeholder={"email"}
            validation={{ ...register("email", { required: true }) }}
          />
          <div className="flex flex-row gap-2 justify-between">
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
          <div className="flex flex-col space-y-2">
            <CustomButton
              isLoading={loading}
              hoverColor={"zinc-800"}
              name="Sign up"
              bgColor="black"
              type={"submit"}
            />
            <CustomButton
              isDisabled={true}
              bgColor="white"
              name="Continue With Apple"
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
              <Link href="/login">
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

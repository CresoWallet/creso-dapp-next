"use client";
import { useState } from "react";

import Image from "next/image";
import creso from "../../assets/eoa/cresoblack.svg";
import create from "../../assets/eoa/createwallet.svg";
import check from "../../assets/eoa/checkmark.png";

function CreateEOAWallet() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleCreatePassword = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else if (password.toLowerCase() === confirmPassword.toLowerCase()) {
      setPasswordError("Passwords must not be case-insensitive");
    } else {
      setPasswordError("");
      // Handle password creation logic here
    }
  };

  const toggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="border-black border-2 mx-2 ">
      <div className="flex flex-col">
        <h1 className="grid grid-cols-3 text-3xl font-bold w-full text-center rounded-t-xl py-8 ">
          <Image alt="" src={creso} className="mx-4" />
          Create EOA Wallet
        </h1>
        <div className="m-4 px-10 text-xl text-center font-bold mb-4">
          <Image alt="" src={create} className="text-center " />
        </div>
        <hr />

        <div className="my-10 mx-4 px-4">
          <h2 className="text-xl text-center font-bold mb-4">
            Create Password
          </h2>
          <p className="my-6">
            This password will unlock your creso wallet only this on this
            device. Creso can not recover this password.
          </p>
        </div>

        <form onSubmit={handleCreatePassword}>
          <div className="my-4">
            <label
              htmlFor="newPassword"
              className="block text-gray-700 font-bold mb-2"
            >
              New Password
              <button
                type="button"
                className="text-[#FF4085] m-2 justify-end items-end"
                onClick={toggleShowNewPassword}
              >
                Show
              </button>
            </label>
            <input
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              value={password}
              onChange={handlePasswordChange}
              className="shadow appearance-none border rounded-full w-full py-5 px-4 text-gray-700 leading-tight "
            />
          </div>

          <div className="mb-4 mt-8">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-bold mb-2"
            >
              Confirm Password
              <button
                type="button"
                className="text-[#FF4085] m-2 justify-end items-end"
                onClick={toggleShowConfirmPassword}
              >
                Show
              </button>
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="shadow appearance-none border rounded-full w-full py-5 px-4 text-gray-700 leading-tight "
            />
          </div>
          {passwordError && <p className="text-red-500">{passwordError}</p>}
          {/* Terms of Use */}
          <div className="flex items-center mb-8">
            <button
              className="rounded-full p-2 border-black focus:outline-none"
              onClick={() => setIsChecked(!isChecked)}
            >
              {isChecked ? (
                <Image alt="" src={check} className="w-8 h-8 " />
              ) : (
                <div className="w-6 h-6 rounded-full border border-black"></div>
              )}
            </button>
            <span className="ml-2">
              I understand that Creso cannot recover this password for me.
              <span className="text-[#FF4085] ml-1">Learn more</span>
            </span>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="px-14 py-4 rounded-full border border-black bg-white text-black hover:bg-black hover:text-white focus:outline-none"
            >
              Create New Password
            </button>
          </div>
        </form>
      </div>

      {/* Centered content */}
      <div className="flex justify-center mt-4">
        {/* Your centered content goes here */}
      </div>
    </div>
  );
}

export default CreateEOAWallet;

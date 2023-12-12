import { removeGuardian } from "@/clientApi/wallet";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Guardian = ({ guardian }) => {
  const [isLoading, setIsLoading] = useState(false);
  const deleteGuardian = async () => {
    setIsLoading(true);
    try {
      const payload = {
        walletAddress: guardian.wallet,
        guardian: guardian.guardianAddress,
        network: "goerli",
      };
      const res = await removeGuardian(payload);
      if (res) {
        enqueueSnackbar(`Guardian deleted`, {
          variant: "success",
        });
      }
    } catch (error) {
      console.log("error : ", error);
      if (error?.response?.data?.message.startsWith("cannot estimate gas")) {
        enqueueSnackbar(`Insufficient gas for the transaction`, {
          variant: "error",
        });
      } else {
        enqueueSnackbar(`Couldn't add guardian`, {
          variant: "error",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-row items-center rounded-full border border-solid border-[#E5E5F0] justify-between xl:py-4 xl:px-4 py-2 px-2">
      <p className="text-sm mx-4 text-gray-400">{guardian.guardianAddress}</p>
      {isLoading ? (
        <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin text-sky-500" />
      ) : (
        <button
          onClick={deleteGuardian}
          // disabled={user?.isEmailVerified}
          className="bg-[#D0F500] hover:font-bold cursor-pointer xl:py-2 xl:px-2 md:py-2 px-1 py-1 md:px-2 border border-solid rounded-full border-black text-sm items-center justify-center"
        >
          {/* {user?.isEmailVerified ? "Verified" : "Verify"} */}
          Delete
        </button>
      )}
    </div>
  );
};

export default Guardian;

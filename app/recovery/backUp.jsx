import { backupWallet } from "@/clientApi/wallet";
import CustomButton3 from "@/components/CustomButton3";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";

function BackUp() {
  const [secretKey, setSecretKey] = useState("");

  const handleBackupWallet = async () => {
    if (!secretKey) {
      enqueueSnackbar(`Please enter secret key`, {
        variant: "error",
      });
    } else {
      try {
        const res = await backupWallet({
          passkey: secretKey,
        });
        if (res) {
          // var blob = new Blob([btoa(JSON.stringify(res?.data))], {
          //   type: "text/plain;charset=utf-8",
          // }); //application/json
          const blob = new Blob([JSON.stringify(res.data)], {
            type: "application/json",
          });
          FileSaver.saveAs(blob, `${user?.email}_credential.creso.json`, {
            type: "application/json",
          });
          // setEncryptedKey(res?.data?.data);
          setStep((step % 7) + 1);
        } else {
          enqueueSnackbar(`Couldn't backup`, {
            variant: "error",
          });
        }
      } catch (error) {}
    }
  };
  return (
    <div>
      <div className="flex flex-row justify-between items-center xl:mt-8 md:mt-10 mt-8">
        <p className="text-sm font-semibold">Smart Recovery</p>
      </div>

      <div className="flex flex-col xl:mt-5 md:mt-7 mt-5 xl:space-y-4 space-y-2">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col space-y-1 w-full">
            <p className="text-sm">Enter Backup key</p>
            <input
              onChange={(e) => {
                setSecretKey(e.target.value);
              }}
              type={"text"}
              placeholder="secret key"
              className="placeholder:text-[#A09FAA] text-sm xl:px-4 xl:py-4 md:px-4 md:py-4 py-3 px-3 rounded-full border border-solid"
            />
          </div>
        </div>

        <div className="pt-3">
          <CustomButton3
            title=" BackUp"
            titleColor="black"
            buttonColor="[#D0F500]"
            onClick={handleBackupWallet}
          />
        </div>
      </div>
    </div>
  );
}

export default BackUp;

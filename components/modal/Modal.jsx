import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./modal.css";
import Image from "next/image";
import Delete from "../../assets/Dashboard/delete.png";
import Set1 from "../../assets/backup/set1.png";
import Set1M from "../../assets/backup/set1mobile.png";
import Set2 from "../../assets/backup/set2.png";
import Set2M from "../../assets/backup/set2mobile.png";
import Set3 from "../../assets/backup/set3.png";
import Set3M from "../../assets/backup/set3mobile.png";
import Set4 from "../../assets/backup/set4.png";
import Set4M from "../../assets/backup/set4mobile.png";
import Bulb from "../../assets/backup/bulb.png";
import Trash from "../../assets/backup/trash.png";
import Mob from "../../assets/backup/mobile.png";
import Device from "../../assets/backup/device.png";
import Device2 from "../../assets/backup/device2.png";
import Cloud from "../../assets/backup/cloud.png";
import Google from "../../assets/backup/google.png";
import Baidu from "../../assets/backup/baidu.png";

const Modal = ({ onClose, title }) => {
  const [step, setStep] = useState(1);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleNextClick = () => {
    if (step === 7) {
      onClose(); // Close the modal
    } else {
      setStep((step % 7) + 1);
    }
  };

  const getContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col gap-5">
            {/* Content for step 1 */}
            <div className="flex items-center justify-center w-full flex-col ">
              <Image
                src={Set1}
                alt=""
                className="cursor-pointer hidden sm:block"
              />
              <Image
                src={Set1M}
                alt=""
                className="cursor-pointer block sm:hidden"
              />
              <hr className="w-full mt-3" />
            </div>

            <div className="flex items-start justify-center w-full flex-col">
              <p className="text-sm font-bold ml-3 mb-3">Email</p>
              <input
                type="email"
                placeholder="E.g. name@example.com"
                className="w-full rounded-full sm:py-5 py-3 border sm:px-4 px-3"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col gap-5">
            {/* Content for step 2 */}
            <div className="flex items-center justify-center w-full flex-col ">
              <Image
                src={Set1}
                alt=""
                className="cursor-pointer hidden sm:block"
              />
              <Image
                src={Set1M}
                alt=""
                className="cursor-pointer block sm:hidden"
              />
              <hr className="w-full mt-3" />
            </div>

            <div className="flex items-center justify-center w-full flex-col">
              <p className="text-sm font-bold mb-3 ">
                An email with a verication code was just sent to
              </p>
              <p className="px-3 py-1 bg-blue-700 text-sm text-white rounded-full mb-5">
                Samuel.hawking@gmail.com
              </p>

              <div className="flex items-center justify-center gap-1">
                <button className="border font-bold  sm:h-[55px] sm:w-[55px] h-10 w-10 flex items-center justify-center cursor-pointer rounded-full hover:scale-105">
                  2
                </button>
                <button className="border font-bold    sm:h-[55px] sm:w-[55px] h-10 w-10  flex items-center justify-center cursor-pointer rounded-full hover:scale-105">
                  3
                </button>
                <button className="border font-bold    sm:h-[55px] sm:w-[55px] h-10 w-10  flex items-center justify-center cursor-pointer rounded-full hover:scale-105">
                  7
                </button>
                <button className="border font-bold    sm:h-[55px] sm:w-[55px] h-10 w-10  flex items-center justify-center cursor-pointer rounded-full hover:scale-105">
                  9
                </button>
                <button className="border font-bold    sm:h-[55px] sm:w-[55px] h-10 w-10  flex items-center justify-center cursor-pointer rounded-full hover:scale-105">
                  1
                </button>
                <button className="border font-bold    sm:h-[55px] sm:w-[55px] h-10 w-10  flex items-center justify-center cursor-pointer rounded-full hover:scale-105">
                  5
                </button>
              </div>
              <div className="flex justify-start text-sm text-black mt-2 ">
                <p>Not received?</p>
                <p className="text-[#FF4085]">Resend code 46s</p>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col gap-5">
            {/* Content for step 1 */}
            <div className="flex items-center justify-center w-full flex-col ">
              <Image
                src={Set2}
                alt=""
                className="cursor-pointer hidden sm:block"
              />
              <Image
                src={Set2M}
                alt=""
                className="cursor-pointer block sm:hidden"
              />
              <hr className="w-full mt-3" />
            </div>

            <div className="flex items-center justify-center w-full flex-col">
              <p className="text-lg font-bold ml-3 mb-3">Privacy Policy</p>

              <div className="sm:text-sm text-xs mx-3 text-justify text-gray-600 ">
                We would like to use your front camera to collect some data of
                your facial features and store it in an encrypted anonymous
                format to ensure that only you can access and restore your
                assets in the future. Please note that this is{" "}
                <span className="text-[#FF4085]">NOT KYC</span>, and it is{" "}
                <span className="text-[#FF4085]">absolutely privacy-safe.</span>{" "}
                <br />
                <br />
                You are not required to provide your real name or any other
                personal information. Do not worry about your privacy, as none
                of your photos or videos will be uploaded or saved. We only
                encrypt and store some anonymous facial features data, which is
                unreadable and meaningless to any third party. Even if this data
                is stolen or leaked to the public, your privacy and assets are
                still safe. <br /> Learn more about technology, privacy and
                security details:{" "}
                <span className="text-[#FF4085]">htttps://www.facetec.com</span>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col gap-5">
            {/* Content for step 1 */}
            <div className="flex items-center justify-center w-full flex-col ">
              <Image
                src={Set2}
                alt=""
                className="cursor-pointer hidden sm:block"
              />
              <Image
                src={Set2M}
                alt=""
                className="cursor-pointer block sm:hidden"
              />
              <hr className="w-full mt-3" />
            </div>

            <div className="flex items-center justify-center w-full flex-col">
              <p className="text-lg font-bold ml-3 mb-3">
                Biometric Enrollment
              </p>
              <p className="text-gray-600 sm:text-sm text-xs text-justify mx-3">
                None of your photos or videos but only a minimum data of your
                facial features will be uploaded and stored in an encrypted and
                anonymous format, unreadable and meaningless to Creso or any
                third party.
              </p>
            </div>

            <div className="flex items-center justify-center flex-col gap-2">
              <button className="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white sm:py-4 sm:px-4 py-3 px-3 border  hover:border-transparent rounded-full flex items-center justify-start gap-3 text-sm w-full">
                <Image src={Bulb} alt="" />
                <span>Make sure your face is evenly lit</span>
              </button>

              <button className="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white sm:py-4 sm:px-4 py-3 px-3 border  hover:border-transparent rounded-full flex items-center justify-start gap-3 text-sm w-full">
                <Image src={Trash} alt="" />
                <span>Remove hats and glasses</span>
              </button>

              <button className="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white sm:py-4 sm:px-4 py-3 px-3 border  hover:border-transparent rounded-full flex items-center justify-start gap-3 text-sm w-full">
                <Image src={Mob} alt="" />
                <span>Hold up your photos at eye level</span>
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="flex flex-col gap-5">
            {/* Content for step 1 */}
            <div className="flex items-center justify-center w-full flex-col ">
              <Image
                src={Set3}
                alt=""
                className="cursor-pointer hidden sm:block"
              />
              <Image
                src={Set3M}
                alt=""
                className="cursor-pointer block sm:hidden"
              />
              <hr className="w-full mt-3" />
            </div>

            <div className="flex items-center justify-center w-full flex-col">
              <p className="text-lg font-bold ml-3 mb-3">Enable Device Lock</p>
              <p className="text-gray-600 sm:text-sm text-xs text-center mx-3">
                Enable device lock to ensure that only you can access your
                account.
              </p>
            </div>

            <div className="flex justify-center items-center">
              <Image src={Device} alt="" className="sm:w-[230px] w-[175px]" />
            </div>
          </div>
        );
      case 6:
        return (
          <div className="flex flex-col gap-5">
            {/* Content for step 1 */}
            <div className="flex items-center justify-center w-full flex-col ">
              <Image
                src={Set4}
                alt=""
                className="cursor-pointer hidden sm:block"
              />
              <Image
                src={Set4M}
                alt=""
                className="cursor-pointer block sm:hidden"
              />
              <hr className="w-full mt-3" />
            </div>

            <div className="flex items-center justify-center w-full flex-col">
              <p className="text-lg font-bold ml-3 mb-3">Save Recovery Key</p>
              <p className="text-gray-600 sm:text-sm  text-xs text-center mx-3">
                Sync the Recovery Key to your personal cloud storage
              </p>
            </div>

            <div>
              <p className="text-gray-600 sm:text-sm text-xs ml-3 mb-2">
                Personal Cloud Storage
              </p>
              <div className="flex items-center justify-center flex-col gap-2">
                <div className="border rounded-full sm:px-3 px-2 sm:py-4 py-2 flex items-center justify-between w-full hover:cursor-pointer hover:border-gray-700">
                  <div className="flex justify-center items-center gap-2">
                    <Image src={Cloud} alt="" />
                    <span className="text-sm font-bold">iCloud Drive</span>
                  </div>

                  <div>
                    <label className="container-checkbox">
                      <input type="checkbox" defaultChecked={true} />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>

                <div className="border rounded-full sm:px-3 px-2 sm:py-4 py-2 flex items-center justify-between w-full hover:cursor-pointer hover:border-gray-700">
                  <div className="flex justify-center items-center gap-2">
                    <Image src={Google} alt="" />
                    <span className="text-sm font-bold">Google Drive</span>
                  </div>
                  <div>
                    <label className="container-checkbox">
                      <input type="checkbox" defaultChecked={false} />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>

                <div className="border rounded-full sm:px-3 px-2 sm:py-4 py-2 flex items-center justify-between w-full hover:cursor-pointer hover:border-gray-700">
                  <div className="flex justify-center items-center gap-2">
                    <Image src={Baidu} alt="" />
                    <span className="text-sm font-bold">Baidu Netdisk</span>
                  </div>
                  <div>
                    <label className="container-checkbox">
                      <input type="checkbox" defaultChecked={false} />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="flex flex-col gap-5">
            {/* Content for step 1 */}
            <div className="flex items-center justify-center w-full flex-col ">
              <Image
                src={Set4}
                alt=""
                className="cursor-pointer hidden sm:block"
              />
              <Image
                src={Set4M}
                alt=""
                className="cursor-pointer block sm:hidden"
              />
              <hr className="w-full mt-3" />
            </div>

            <div className="flex items-center justify-center w-full flex-col">
              <p className="text-lg font-bold ml-3 mb-3">
                Back Up Personal Key Share
              </p>
              <p className="text-gray-600 sm:text-sm text-xs text-center mx-3">
                Encrypted your key share with Recovery Key and store the
                encrypted data in Creso Server.
              </p>
            </div>

            <div className="flex justify-center items-center">
              <Image src={Device2} alt="" className="sm:w-[230px] w-[175px]" />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const modalContent = (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="modal">
          <div className="flex px-5 items-center justify-between w-full bg-blue-700 h-[75px] modal-header ">
            <p className="text-lg text-white font-semibold">Backup</p>
            <Image
              src={Delete}
              alt=""
              onClick={handleCloseClick}
              className="cursor-pointer"
            />
          </div>
          <div className="modal-body w-4/5 mx-auto">{getContent()}</div>

          <div className="px-3  absolute bottom-5 right-0 ">
            <button
              className="bg-gray-900 hover:bg-black text-white py-2 px-5 rounded-full text-sm"
              onClick={handleNextClick}
            >
              {step === 7 ? "submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
};

export default Modal;

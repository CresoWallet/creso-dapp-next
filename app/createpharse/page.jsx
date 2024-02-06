// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import creso from "../../assets/eoa/cresoblack.svg";
// import secure from "../../assets/eoa/securepassword.svg";

// function CreateEOAWallet() {
//   return (
//     <div className="border-black border-2 mx-2 px-3 items-center justify-center py-2  flex-1">
//       <div className="flex flex-col ">
//         <h1 className="grid grid-cols-3 text-3xl font-bold w-full    items-center justify-center rounded-t-xl py-8 ">
//           <Image alt="" src={creso} className=" " />
//           Create EOA Wallet
//         </h1>

//         <div className=" justify-center content-center  place-content-center items-center m-4 px-10 ">
//           <Image alt="" src={secure} className="justify-center" />
//         </div>
//         <hr className="mt-10" />
//       </div>

//       <div className="my-6 ">
//         <p className="text-xl font-semibold my-8">
//           Write down your Secret Recovery Phrase
//         </p>
//         <p className="font-light text-base my-8">
//           Write down this 12-world secret recovery pharse and save it in a place
//           that you trust and only you can access.
//         </p>
//       </div>

//       <div className="h-80 w-auto bg-slate-200 rounded-xl p-2 m-4 my-6">
//         recovery phrse{" "}
//       </div>

//       <div className="flex items-center justify-center">
//         <button
//           type="button"
//           className="px-14 py-4 rounded-full border border-black bg-white text-black hover:bg-black hover:text-white "
//         >
//           Reveal Secret Recovery Pharse
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CreateEOAWallet;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import creso from "../../assets/eoa/cresoblack.svg";
import secure from "../../assets/eoa/securepassword.svg";

function CreateEOAWallet() {
  return (
    <div className="border-black border-2 mx-2 px-3 items-center justify-center py-2  flex-1">
      <div className="flex flex-col ">
        <h1 className="grid grid-cols-3 text-3xl font-bold w-full    items-center justify-center rounded-t-xl py-8 ">
          <Image alt="" src={creso} className=" " />
          Create EOA Wallet
        </h1>

        <div className=" justify-center content-center  place-content-center items-center m-4 px-10 ">
          <Image alt="" src={secure} className="justify-center" />
        </div>
        <hr className="mt-10" />
      </div>

      <div className="my-6 ">
        <p className="text-xl font-semibold my-8">
          Write down your Secret Recovery Phrase
        </p>
        <p className="font-light text-base my-8">
          Write down this 12-world secret recovery pharse and save it in a place
          that you trust and only you can access.
        </p>
      </div>

      <div className="h-80 w-auto bg-slate-200 rounded-xl p-2 m-4 my-6">
        recovery phrse{" "}
      </div>

      <div className="flex items-center justify-center">
        <button
          type="button"
          className="px-14 py-4 rounded-full border border-black bg-white text-black hover:bg-black hover:text-white "
        >
          Reveal Secret Recovery Pharse
        </button>
      </div>
    </div>
  );
}

export default CreateEOAWallet;

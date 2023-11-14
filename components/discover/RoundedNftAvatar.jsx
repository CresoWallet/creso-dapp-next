import Image from "next/image";
import React from "react";

function RoundedNftAvatar({coinType, value, image}) {
  return (
    <div className="flex flex-col space-y-1 items-center">
      <Image alt="" src={image} className="h-20 w-20" />
      <div className="flex flex-col items-center">
        <p className="text-center text-sm">{coinType}</p>
        <p className="text-[#A09FAA] text-sm">{value}</p>
      </div>
    </div>
  );
}

export default RoundedNftAvatar;

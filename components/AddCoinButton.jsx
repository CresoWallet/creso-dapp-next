import React from "react";
import Image from "next/image";

import Add from "../assets/Dashboard/add.png";

const AddCoinButton = () => {
  return (
    <div className="flex flex-col space-y-1 cursor-pointer hover:scale-105 ">
      <Image
        src={Add}
        alt=""
        className="xl:h-14 xl:w-14 lg:h-12 lg:w-12 md:h-12 md:w-12 w-12 h-12"
      />
      <p className="text-center xl:text-sm text-xs md:text-xs">Add</p>
    </div>
  );
};

export default AddCoinButton;

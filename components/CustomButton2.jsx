import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CustomButton2 = ({
  bgColor,
  textColor,
  borderColor,
  name,
  handleClick,
  isDisabled,
  isLoading,
}) => {
  return (
    <div
      className={`bg-${bgColor} rounded-full py-4 border border-solid border-${borderColor} flex justify-center w-full hover:bg-opacity-70 duration-500 cursor-pointer group`}
    >
      {isLoading ? (
        <>
          {" "}
          <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin text-sky-500" />
        </>
      ) : (
        <button
          className={`text-${textColor} font-semibold group-hover:font-bold duration-500`}
          onClick={handleClick}
          disabled={isDisabled}
        >
          {name}
        </button>
      )}
    </div>
  );
};

export default CustomButton2;

// import React, { useState } from "react";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";

// const CustomButton2 = ({ active, onClick, isDisabled, isLoading, name }) => {
//   const [hover, setHover] = useState(false);

//   const handleMouseEnter = () => {
//     setHover(true);
//   };

//   const handleMouseLeave = () => {
//     setHover(false);
//   };

//   return (
//     <div
//       className={`bg-${
//         active ? "D0F500" : hover ? "D0F500" : "white"
//       } rounded-full py-4 border border-solid border-black flex justify-center w-full hover:bg-opacity-70 duration-500 cursor-pointer group`}
//       onClick={onClick}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       disabled={isDisabled}
//     >
//       {isLoading ? (
//         <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin text-sky-500" />
//       ) : (
//         <button
//           className={`text-black font-semibold group-hover:font-bold duration-500`}
//         >
//           {name}
//         </button>
//       )}
//     </div>
//   );
// };

// export default CustomButton2;

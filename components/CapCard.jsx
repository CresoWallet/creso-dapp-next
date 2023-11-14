import React from 'react';
import Image from 'next/image';
import WhiteIcon from '../assets/Dashboard/whiteIcon.png';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const CapCard = ({ name, amount, icon, iconColor, percentage, percentageColor }) => {
  const renderIcon = () => {
    if (icon === 'down') {
      return <AiOutlineDown className={`text-${iconColor} h-3 w-4`} />;
    } else if (icon === 'up') {
      return <AiOutlineUp className={`text-${iconColor} h-3 w-4`} />;
    } else {
      return <p>Invalid icon</p>;
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='h-1/4 bg-black text-white xl:pb-12 md:pb-8 px-1.5 xl:py-1 md:py-1 py-2 rounded-t-3xl text-sm'>
        <div className='flex flex-row justify-between'>
          <p className='text-xs xl:pt-4 md:pt-2 xl:px-4 md:px-1'>{name}</p>
          <Image alt='' src={WhiteIcon} className='xl:h-8 xl:w-8 md:h-6 md:w-6' />
        </div>
      </div>
      <div className='h-3/4 bg-white rounded-b-3xl border-2 pt-2 pb-0 xl:px-4 md:px-2 px-2'>
        <div className='flex flex-col space-y-1'>
          <p className='font-semibold xl:text-2xl md:text-xl'>{amount}</p>
          <div className='flex flex-row items-center gap-1'>
            {renderIcon()}
            <p className={`text-xs text-${percentageColor}`}>{percentage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapCard;

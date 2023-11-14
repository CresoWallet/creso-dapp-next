import React from 'react'
import Image from 'next/image'
import User from "../assets/security/User.png"

const UserDetails = () => {
  return (
    <div className='flex flex-row gap-2 items-center'>
        <Image alt="" src={User} />
        <div className='flex flex-col space-y-1'>
            <p className='font-bold text-xl'>Samuel Hawking</p>
            <p className='text-sm text-[#A09FAA]'>Samhawking@gmail.com</p>
            <p className='text-xs text-[#A09FAA]'>Last Backup:<span className='text-sm text-black'>28 OCT 2023</span> </p>
        </div>
    </div>
  )
}

export default UserDetails
import React from 'react';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="absolute z-10 tracking-tight text-[20px] pt-[45px] px-[120px] flex justify-between w-full">
        <div className="flex items-center gap-1 text-[#FFB000]">
            <Image 
                src="/logo.png"
                alt="logo"
                width={25}
                height={25}
                className=""
            />
            <p className="">Nutritionist</p>
        </div>
        <div className="flex gap-16 text-[#F5F5DC] items-center">
            <p className="">Recipes</p>
            <p className="">My Profile</p>
            <Link href='/Login'>
              <Button text={"Log In"} color={"bg-[#FFB000]"} width={"w-[140px]"} height={"h-[50px]"} textColor={"text-[#F5F5DC]"}/>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
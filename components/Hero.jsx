import React from 'react'
import Image from 'next/image'
import Button from './Button';

const Hero = () => {
  return (
    <div className="relative">
        <Image 
        src="/hero_image.jpg"
        alt="hero"
        width={1920}
        height={1080}
        className=" brightness-[.6]"
        />

        <div className="flex justify-center text-center">
            <h1 className="text-[#F5F5DC] text-[55px] z-10 font-medium top-[280px] absolute">Have your personal nutritionist.<br/>For free.</h1>
            <h2 className="text-[#FFB000] text-[20px] font-normal top-[460px] absolute">Low-carb diet? Low-budget? Running out of time? No worries.<br/>We’ve got recipes just right for you.</h2>
            <div className="flex absolute top-[600px] gap-16">
                <Button text={"Sign up"} color={"bg-[#FFB000]"} width={"w-[160px]"} height={"h-[60px]"} textColor={"text-[#F5F5DC]"}/>
                <Button text={"Learn more"} color={"bg-[#F5F5DC]"} width={"w-[160px]"} height={"h-[60px]"} textColor={"text-black"}/>
            </div>
        </div>
    </div>
  )
}

export default Hero
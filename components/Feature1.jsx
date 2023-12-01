import React from 'react'
import Image from 'next/image'
import Button from './Button';

const Feature1 = () => {
  return (
    <div className={"bg-[#004225] w-full h-max p-40 flex flex-col items-center text-center"}>
        <Image 
            src="Feature-1_leaf-1.svg"
            alt="Leaf 1"
            width={378.5}
            height={530}
            className="absolute w-full h-full left-24"
        />
        {/* <Image 
            src="Feature-1_leaf-2.svg"
            alt="Leaf 2"
            width={426.5}
            height={438.5}
            className="absolute"
        /> */}

        <h1 className={"text-[#F5F5DC] text-5xl mb-4"}>Choose any diet. We will set you the recipe.</h1>
        <h2 className={"text-[#F5F5DC] text-xl opacity-70"}>You can choose your recipe by amounts of protein, carbs, and fat.<br/>Let us know if you have allergy as well.</h2>
        <div className="flex justify-between w-full mt-12 mb-12">
            <div className="flex-col">
                <Image
                    src="Box-1.svg"
                    alt="Box 1"
                    width={200}
                    height={200}
                    className="mb-4" />
                <p className="text-[#FFB000] text-xl">High-protein</p>
            </div>
            <div className="flex flex-col">
                <Image
                    src="Box-2.svg"
                    alt="Box 2"
                    width={200}
                    height={200}
                    className="mb-4" />
                <p className="text-[#FFB000] text-xl">Vegetarianism</p>
            </div>
            <div className="flex flex-col">
                <Image
                    src="Box-3.svg"
                    alt="Box 3"
                    width={200}
                    height={200}
                    className="mb-4" />
                <p className="text-[#FFB000] text-xl">Diet for weight loss</p>
            </div>
            <div className="flex flex-col">
                <Image
                    src="Box-4.svg"
                    alt="Box 4"
                    width={200}
                    height={200}
                    className="mb-4" />
                <p className="text-[#FFB000] text-xl">Diet with no peanut</p>
            </div>
        </div>

        <Button text={"Choose Your Diet   →"} color={"bg-[#F5F5DC]"} width={"w-[210px]"} height={"h-[60px]"} textColor={"text-black"} />
    </div>
    
  )
}

export default Feature1
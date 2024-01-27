import React from 'react'
import Button from '../components/Button.jsx';
import Image from 'next/image';
import Link from 'next/link';

import { useState, useEffect } from 'react';

export default function LoginPage() {

    const [testingMessage, setTestingMessage] = useState('');

    async function testingApi() {
        const res = await fetch('/api/test');
        const data = await res.json();
        setTestingMessage(data.message);
    };

    useEffect(() => {
        testingApi();
    }, []);

    return (
        <div style={{ backgroundColor: '#004225', minHeight: '100vh' }}>
            {/* Nav Bar */}
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
                    <Link href='/'>
                        <Button text={"Home"} color={"bg-[#FFB000]"} width={"w-[140px]"} height={"h-[50px]"} textColor={"text-[#F5F5DC]"} />
                    </Link>
                </div>
            </div>
            {/* end of nav bar */}

            {/* Login Container */}
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="p-8 rounded-lg text-center w-96">
                    <h1 className="text-4xl font-bold mb-6">Login</h1>
                    <form>
                        <div className="mb-4">
                            <input type="email" placeholder="Email" className="px-4 py-2 w-full h-14 border rounded-md text-black" style={{ backgroundColor: '#F5F5DC' }} />
                        </div>
                        <div className="mb-4">
                            <input type="password" placeholder="Password" className="px-4 py-2 w-full h-14 border rounded-md text-black" style={{ backgroundColor: '#F5F5DC' }} />
                        </div>
                        <Button text={"Log In"} color={"bg-[#FFB000]"} width={"w-full"} height={"h-[50px]"} textColor={"text-white"} />
                    </form>
                    {/* Google Sign-in */}
                    <div className="mt-4">

                        <div className={`bg-white w-full h-[50px] flex items-center justify-center p-4 rounded-[50px]`}>
                            <Image
                                src="/googleLogo.png"
                                alt="Google logo"
                                width={25}
                                height={25}
                                className=""
                            />
                            <p className={"text-[#000000] p-5"}>Sign In with Google</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-between mt-4">
                        <button type="button" className='underline'>Don't have account? Join now for free!</button>
                        <button type="button" className='underline'>Forgot password?</button>
                    </div>
                </div>
            </div>

            <div>{testingMessage}</div>
        </div>
    )
}
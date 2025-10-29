import React, { useState } from "react"
import {FiMenu ,FiX} from 'react-icons/fi'
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoLockClosed } from "react-icons/io5";

// Relationship of components
// (Header.js , NextHead.js) -> Account.js
export default function Account(){
    const [action , setAction] = useState("Sign Up");
    return(
        <>
        <div className="bg-gray-400 relative h-screen">
            <div className="w-3/5 h-140 md:w-2/5 mx-auto py-5 px-5 overflow-hidden absolute left-[30%] top-[7%]
            bg-white rounded-xl hover:shadow-2xl hover:shadow-black hover:scale-105 duration-300">

                {/* Title div */}
                <div className="flex justify-center flex-col gap-2 items-center  container">
                    <div className="text-3xl text-orange-400  rounded-xl font-medium">{action}</div>
                    <div className="w-18 h-1.5 bg-orange-400 rounded-2xl"></div>
                </div>

                {/* Input fields div */}
                <div className="grid place-content-center container ">

                {/* User section */}
                    {
                        (action === 'LogIn') ? <div></div> : <div className="mt-10 mb-2 flex pl-4 gap-3 items-center max-w-100  h-20 bg-gray-300 rounded-lg">
                        <div className=""><FaUser size={24} className="text-gray-500"/></div>
                        <input placeholder="Name" type="text"className="w-80 h-12 border-none outline-none text-lg container "></input>
                    </div>
                    }
                    
                    
                {/* Email div */}
                    <div className="mt-2 mb-2 flex gap-3 items-center w-100 h-20 bg-gray-300 pl-4 rounded-lg">
                        <div className=""><MdEmail size={24} className="text-gray-500"/></div>
                        <input placeholder="Email Id" type="email"className="w-80 h-12 border-none outline-none text-lg"></input>
                    </div>

                {/* Password div */}
                    <div className="mt-2 mb-2 flex gap-3 items-center w-100 h-20 bg-gray-300 pl-4 rounded-lg">
                        <div className=" "><IoLockClosed size={24} className="text-gray-500"/></div>
                        <input placeholder="Password" type="password"className="w-80 h-12 border-none outline-none text-lg"></input>
                    </div>

                {/* Forget password section */}
                    {
                        (action === 'Sign Up') ? <div></div> : <div>
                        <div className="text-gray-800">Forget Password ? <span className="text-blue-600
                        cursor-pointer">Click Here</span></div>
                        </div>
                    }
                    

                {/* Login / SignUp div */}
                    <div className=" flex justify-center gap-10 mt-12 mb-5 ">
                        <button type="submit" className={`w-24 md:w-30 h-12 md:h-14 text-center pt-2 md:pt-1
                        md:pb-1 font-semibold text-xl rounded-2xl hover:scale-110 duration-300 cursor-pointer
                            ${(action === 'LogIn') ? ' bg-gray-300 text-gray-500' : 'bg-orange-400 text-white'}`} onClick={()=> setAction('Sign Up')} >Sign Up </button>

                        <button type="submit" className={`w-24 h-12 md:w-30 md:h-14   text-center pt-2 md:pt-1
                        md:pb-1 font-semibold text-xl rounded-2xl hover:scale-110 duration-300 cursor-pointer
                            ${(action === 'Sign Up') ? 'bg-gray-300 text-gray-500' : 'bg-orange-400 text-white'}`}
                            onClick={()=> setAction('LogIn')}>LogIn </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
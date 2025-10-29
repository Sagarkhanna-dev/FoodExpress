import React from "react";
import { useState } from "react"
import { Link } from "react-router"
import { FiMenu, FiX } from "react-icons/fi";
import { HiMiniUser } from "react-icons/hi2";

// Relationship of components
// Home.js -> Header.js
export default function Header(){
    const scrollToImage = () => {
        const element = document.getElementById('app-image-section');
        element?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
        });
    }  

    const navItems = [
        {id:0, label:"Swiggy Corporate"},
        {id:1, label:"Partner With Us"},
        {id:2, label:"Get The App"},
        {id:3, label:"Login/Sign Up"}
    ]
    
    const [isOpen, setIsOpen] = useState(false);
    
    return(
        <header className="bg-[#ff5200]">
            
            <nav className="relative mb-2 container mx-auto py-4 px-2 flex items-center justify-between">
                {/* Image div */}
                <div>
                    <img className="w-40 h-12 hover:scale-110 hover:duration-300" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="Swiggy Logo" />
                </div>
                
                {/* Buttons div + Social Links */}
                <div className="flex items-center gap-8">
                    {/* navigation */}
                    <div className="md:flex md:gap-15 md:items-center text-lg font-serif font-semibold text-white hidden">
                        <a target="_blank" className="hover:scale-110 duration-300" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                        <a target="_blank" className="hover:scale-110 duration-300" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                        <button className="border border-white py-3 px-4 rounded-2xl hover:scale-110 duration-300" onClick={scrollToImage}>Get the App</button>
                        <Link to="/account">
                            <button className="hover:scale-120 duration-300"> <HiMiniUser size={36}></HiMiniUser> </button>
                        </Link>
                    </div>

                    {/*  ADD SOCIAL LINKS HERE - Subtle & Professional */}
                    <div className="hidden md:flex items-center gap-4 border-l border-white/30 pl-6 ml-4">
                        <span className="text-white/80 text-sm font-medium">Built by Sagar Khanna</span>
                        <div className="flex gap-3">
                            <a href="https://github.com/Sagarkhanna-dev" target="_blank" rel="noopener noreferrer" 
                            className="text-white/80 hover:text-white transition-colors hover:scale-110 duration-300 text-sm font-medium">
                                GitHub
                            </a>
                            <a href="http://www.linkedin.com/in/sagar-khanna-19a739376" target="_blank" rel="noopener noreferrer" 
                            className="text-white/80 hover:text-white transition-colors hover:scale-110 duration-300 text-sm font-medium">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="text-white md:hidden">
                    {isOpen ? (
                        <FiX size={28} onClick={()=> setIsOpen(false)}/>
                    ) : (
                        <FiMenu size={28} onClick={()=> setIsOpen(true)}/>
                    )}
                </div>

                {/* Mobile menu icons with Social Links */}
                {isOpen && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-[#F9B487]/95 w-4/5 z-50 rounded-b-xl backdrop-blur-md md:hidden">
                        <div className="flex flex-col items-center py-4 gap-4 text-lg font-serif text-white font-semibold">
                            <a target="_blank" className="hover:scale-110 duration-300" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                            <a target="_blank" className="hover:scale-110 duration-300" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                            <button className="border border-white py-3 px-4 rounded-2xl hover:scale-110 duration-300" onClick={scrollToImage}>Get the App</button>
                            <Link to="/account" onClick={() => setIsOpen(false)}>
                                <button className="hover:scale-120 duration-300"><HiMiniUser size={36} /></button>
                            </Link>
                            
                            {/* Mobile Menu Items With Social Links */}
                            <div className="border-t border-white/30 pt-4 mt-2 w-full text-center">
                                <p className="text-white/80 text-sm mb-3">Developed by Sagar Khanna</p>
                                <div className="flex justify-center gap-6">
                                    <a href="https://github.com/Sagarkhanna-dev" target="_blank" rel="noopener noreferrer" 
                                    className="text-white hover:text-orange-200 transition-colors text-sm">
                                        GitHub
                                    </a>
                                    <a href="http://www.linkedin.com/in/sagar-khanna-19a739376" target="_blank" rel="noopener noreferrer" 
                                    className="text-white hover:text-orange-200 transition-colors text-sm">
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            <div className="pt-16 pb-8 relative">
                <img className=" h-60 w-30 md:h-110 md:w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="Veggies" />
                <img className=" h-60 w-30 md:h-110 md:w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="Sushi" />
                <div className="text-white font-semibold text-3xl md:text-5xl max-w-[60%] container mx-auto text-center">
                    Order food & groceries. Discover best restaurants. Swiggy it!
                </div>
                <div className="max-w-[70%] container mx-auto flex gap-4 md:gap-10 mt-10">
                    <input className="bg-white text-xs md:text-2xl px-3 py-2 md:px-6 md:py-4 w-[50%] md:w-[40%] md:rounded-2xl rounded-xl" placeholder="Enter your delivery location" />
                    <input className="bg-white text-sm md:text-2xl px-3 py-2 md:px-6 md:py-4 w-[70%] md:w-[55%] md:rounded-2xl rounded-xl" placeholder="Search for restaurants, items or more" />
                </div>
            </div>
            
            <div className="max-w-[80%] flex justify-between container mx-auto">
                <nav>
                    <Link to="/restaurant">
                        <img  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="Food" />
                    </Link>
                </nav>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="Instamart" />
                </a>
                <a href="https://www.swiggy.com/dineout">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="Dineout" />
                </a>
            </div>
        </header>
    )
}
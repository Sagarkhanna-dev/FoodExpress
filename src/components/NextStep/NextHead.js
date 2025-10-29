import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router"
import {FiMenu ,FiX} from 'react-icons/fi'
import Restaurant from "../Restaurant"
import Account from "../Account"

// Relationship of components
// Restaurant.js -> NextHead.js -> (CorporatePage.js , SearchPage.js , Offers.js , Help.js , Account.js , Checkout.js)

export default function RestaurantHeader(){
    const counter = useSelector(state => state.Slice1.count)
    const [isopen , setIsOpen] = useState(false)
    
    return(
        <div className="w-full bg-white">
        <div className="container max-w-full  px-5 py-5 mb-5 bg-white shadow-md flex justify-between items-center sticky top-0 z-40">
            
            <Link to="/" className="text-orange-400 font-semibold text-3xl transform transition duration-100 hover:scale-105">
                Swiggy
            </Link>
                
            {/* Desktop header */}
            <div className="md:flex md:gap-10 font-semibold text-lg hidden">
                <Link to="/corporate">
                    <button className="hover:text-orange-400 px-2 py-2 hover:scale-110 duration-300">Swiggy Corporate</button>
                </Link>
                <Link to="/search">
                    <button className="hover:text-orange-400 px-2 py-2 hover:scale-110 duration-300">Search</button>
                </Link>
                <Link to="/offers">
                    <button className="hover:text-orange-400 px-2 py-2 hover:scale-110 duration-300">Offer</button>
                </Link>
                <Link to="/help">
                    <button className="hover:text-orange-400 px-2 py-2 hover:scale-110 duration-300">Help</button>
                </Link>
                <Link to="/account">
                    <button className="hover:text-orange-400 px-2 py-2 hover:scale-110 duration-300">Sign in</button>
                </Link>
                <Link to="/checkout">
                    <button className="hover:text-orange-400 px-2 py-2 hover:scale-110 duration-300">Cart {`(${counter})`}</button>
                </Link>
            </div>

            {/* Mobile icon */}
            <div className="md:hidden ">
                {isopen ? (
                    <FiX size={24} onClick={() => setIsOpen(false)} className="cursor-pointer"/>
                ) : (
                    <FiMenu size={24} onClick={() => setIsOpen(true)} className="cursor-pointer"/>
                )}
            </div>

            {/* Mobile menu */}
            {isopen && (
                <div className="absolute top-21 left-1/2 transform -translate-x-1/2 bg-[#F9B487]/95 w-4/5 z-50 rounded-b-xl backdrop-blur-md md:hidden">
                    <div className="flex flex-col items-center py-4 gap-4 text-lg font-semibold">
                        <Link to="/corporate" onClick={() => setIsOpen(false)}>
                            <button className="text-white hover:text-orange-400 px-2 py-2 hover:scale-110 duration-300">Swiggy Corporate</button>
                        </Link>
                        <Link to="/search" onClick={() => setIsOpen(false)}>
                            <button className="text-white hover:text-orange-400 px-2 py-2 hover:scale-110 duration-300">Search</button>
                        </Link>
                        <Link to="/offers" onClick={() => setIsOpen(false)}>
                            <button className="text-white hover:text-orange-400 px-2 py-2 hover:scale-110 duration-300">Offer</button>
                        </Link>
                        <Link to="/help" onClick={() => setIsOpen(false)}>
                            <button className="text-white hover:text-orange-400 px-2 py-2 hover:scale-110 duration-300">Help</button>
                        </Link>
                        <Link to="/account" onClick={() => setIsOpen(false)}>
                            <button className="text-white hover:text-orange-400 px-2 py-2 hover:scale-110 duration-300">Sign in</button>
                        </Link>
                        <Link to="/checkout" onClick={() => setIsOpen(false)}>
                            <button className="text-white hover:text-orange-400 px-2 py-2 hover:scale-110 duration-300">Cart {`(${counter})`}</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
        </div>
    )
}
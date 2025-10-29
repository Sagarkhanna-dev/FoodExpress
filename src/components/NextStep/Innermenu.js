import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItem , incrementItem , decrementItem } from "../GlobalObj/slice1";

// Relationship of components.
// RestaurantMenu.js -> MenuCard.js -> Innermenu.js

//  API (coming from RestaurantMenu.js)
// https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4148245&lng=80.23213129999999&restaurantId=676398&submitAction=ENTER
// and its path is 
// const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
// const filterData = tempData.filter((itmes) => 'title' in itmes?.card?.card)

export default function Innermenu({restData}){
    const items = useSelector((state) => state.Slice1.item);
    const element = items.find(item => item.id == restData.id)
    const count = element ? element.quantity : 0
    const dispatch = useDispatch();
    
    function handleAdd(){
        dispatch(addItem(restData))
    }
    
    function handleIncrement(){
        dispatch(incrementItem(restData))
    }

    function handleDecrement(){
        dispatch(decrementItem(restData))
    }

    return(
        <>
        <div className="flex justify-between container w-full mb-10">
            <div className="w-[70%]">
                <p className="text-lg font-bold text-gray-800">{restData.name}</p>
                <p className=" font-semibold mb-3 mt-1">{"₹"+ ('defaultPrice' in restData ? restData.defaultPrice/100 : restData?.price/100)}</p>
                <div className="mb-3 text-sm">
                <span className="text-green-700 font-semibold"> { ( restData?.ratings?.aggregatedRating && Object.keys(restData?.ratings?.aggregatedRating).length !=0  ?  restData?.ratings?.aggregatedRating?.rating : "")} </span>
                <span className="text-gray-600"> {(restData?.ratings?.aggregatedRating &&  Object.keys(restData?.ratings?.aggregatedRating).length !=0  ?   "("+restData?.ratings?.aggregatedRating?.ratingCountV2+")" : "")} </span>
                </div>
                <p className="text-gray-500 overflow-hidden h-13">{restData?.description}</p>
            </div>
            <div className="md:w-[20%] w-full relative h-42 ">
                <img className="w-full h-36 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData?.imageId}></img>

                {
                    (count == 0) ? (<button className="text-green-500 bg-white border-none bottom-1 left-6 md:left-12 px-10 py-2  absolute rounded-xl shadow-md font-semibold text-lg" onClick={()=> handleAdd()}>ADD</button>) 
                    : (
                        <div className="flex absolute text-green-500 bg-white border-none bottom-1 left-6 md:left-12 rounded-xl shadow-md font-semibold text-xl px-7 py-2 gap-4">
                            <button onClick={()=> handleDecrement()}>-</button>
                            <span>{count}</span>
                            <button onClick={()=> handleIncrement()}>+</button>
                        </div>
                    )
                }
                
            </div>
            
        </div>
        <div className="mb-10 ">
            <hr className="text-gray-300"></hr>
        </div>
        </>
    )
}
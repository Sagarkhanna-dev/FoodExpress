import { useState } from "react"
import Innermenu from "./Innermenu"

// This component contains the designing of cuisins coming from the selected restaurant 
// API 
// https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4148245&lng=80.23213129999999&restaurantId=676398&submitAction=ENTER

// Relationship of components.
// RestaurantMenu.js -> MenuCard.js -> Innermenu.js

export default function MenuCard({menuitems , foodSelected}){
    const [isOpen , setIsOpen] = useState(true);

    if("categories" in menuitems)
    {
        return(
            <div className="w-full">
                <p className="text-xl font-bold mb-5 w-[80%] mx-auto">{menuitems.title}</p>
                <div className="text-lg font-semibold text-gray-800 w-[80%] mx-auto">
                    {
                        menuitems?.categories?.map((items) => <MenuCard key={items?.title} menuitems={items} foodSelected={foodSelected} />)
                    }
                </div>
            </div>
        )
    }

    
    if(!isOpen)
    {
        return(
            <div className="w-[80%] mx-auto">
                <div className="flex justify-between w-full ">
                    <p className="text-xl font-bold mb-5">{menuitems?.title}</p>
                    <button className="text-2xl mr-11 " onClick={()=>setIsOpen(!isOpen)}>{isOpen ? "^" : "v"}</button>
                </div>
                <div className="h-4 bg-gray-200 mt-2 mb-2"></div>
            </div>
        )
    }

    if(foodSelected === 'Veg')
    {
        return(
            <div className="w-[80%] mx-auto">
            <div className="flex justify-between w-full">
            <p className="text-xl font-bold mb-5">{menuitems?.title}</p>
            <button className="text-2xl mr-10" onClick={()=>setIsOpen(!isOpen)}>{isOpen ? "^" : "v"}</button>
            </div>
            <div>
                {
                    menuitems?.itemCards?.filter((food)=> 'isVeg' in food?.card?.info).map((items) => <Innermenu key={items?.card?.info?.id} restData={items?.card?.info}/>)
                }
            </div>
            <div className="h-4 bg-gray-200 mt-2 mb-2"></div>
        </div>
        )
    }
    else if(foodSelected === 'Non-Veg')
    {
        return(
            <div className="w-[80%] mx-auto">
            <div className="flex justify-between w-full">
            <p className="text-xl font-bold mb-5">{menuitems?.title}</p>
            <button className="text-2xl mr-10" onClick={()=>setIsOpen(!isOpen)}>{isOpen ? "^" : "v"}</button>
            </div>
            <div>
                {
                    menuitems?.itemCards?.filter((food)=> !('isVeg' in food?.card?.info)).map((items) => <Innermenu key={items?.card?.info?.id} restData={items?.card?.info}/>)
                }
            </div>
            <div className="h-4 bg-gray-200 mt-2 mb-2"></div>
        </div>
        )
    }
    else{
        return(
            <div className="w-[80%] mx-auto">
                <div className="flex justify-between w-full">
                <p className="text-xl font-bold mb-5">{menuitems?.title}</p>
                <button className="text-2xl mr-10" onClick={()=>setIsOpen(!isOpen)}>{isOpen ? "^" : "v"}</button>
                </div>
                <div>
                    {
                        menuitems?.itemCards?.map((items) => <Innermenu key={items?.card?.info?.id} restData={items?.card?.info}/>)
                    }
                </div>
                <div className="h-4 bg-gray-200 mt-2 mb-2"></div>
            </div>
        )
    }
}
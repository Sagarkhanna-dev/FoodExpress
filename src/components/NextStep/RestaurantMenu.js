import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";

// Relationship of components
// Restaurant.js -> RestaurantMenu.js -> MenuCard.js -> Innermenu.js

export default function RestaurantMenu(){
    const {id} = useParams();
    const [restData , setrestData] = useState([]); // null , veg , non-veg
    const [selected , setIsSelected] = useState(null)

    useEffect(()=>{
        async function fetchData() {
            //API
            // https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4148245&lng=80.     23213129999999&restaurantId=676398&submitAction=ENTER
            const proxyServer = "https://cors-anywhere.herokuapp.com/"
            const swiggyApi = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4148245&lng=80.23213129999999&restaurantId=${id}`
            const response = await fetch(proxyServer + swiggyApi)
            const data = await response.json()
            const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterData = tempData.filter((itmes) => 'title' in itmes?.card?.card)
            setrestData(filterData);
        }
        fetchData();
    },[])
    console.log(restData)
    return(
        <>
        <div className="w-[80%] mx-auto mt-10 mb-10">
                <button className={`mr-5 text-xl bg-gray-300 border px-6 py-2 rounded-xl ${selected === 'Veg' ? " bg-green-400 text-white" : "bg-gray-300 text-black"}`} onClick={()=> setIsSelected(selected === 'Veg' ? null : 'Veg')}>Veg {console.log(" by veg : "  +selected)}</button>

                <button className={`text-xl bg-gray-300 border text-black px-4 py-2 rounded-xl ${selected === 'Non-Veg' ? "bg-red-400 text-white" : "bg-gray-300 text-black"}`} onClick={()=> setIsSelected(selected === 'Non-Veg' ? null : 'Non-Veg')}>Non-Veg {console.log( "value by non-veg : " +selected)}</button>
        </div>
        {
            restData.map((menuitems)=> <MenuCard key={menuitems?.card?.card?.title} menuitems={menuitems?.card?.card} foodSelected={selected}/>)
        }
        </>
    )
}

import { Link } from "react-router"

// This component contains designing of menu items of restaurant component.

// Relationship of components
// Restaurant.js -> RestCard.js
export default function RestCard({restInfo}){
    return(
        <Link to={"/city/kanpur/" + restInfo?.info?.id}>
            
        <div className="md:max-w-[240px] max-w-[130px]  mb-2 relative transform transition duration-200 hover:scale-95 ">
            <div className="flex flex-col">
            <img className=" w-35 h-25  md:w-60 md:h-40 object-cover rounded-xl " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo.info?.cloudinaryImageId}></img>

            <div className="w-[95%] mx-auto">
            <div className="font-bold md:text-xl text-base h-6 overflow-hidden">{restInfo?.info?.name}</div>
            <div className="flex gap-2 md:text-lg text-base items-center mt-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-green-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.56 5.8 22 7 14.14 2 9.27l7.1-1.01L12 2z" />
                </svg>
                <span>{restInfo?.info?.avgRating}</span>
                <span className="font-semibold">{restInfo?.info?.sla?.slaString}</span>
            </div>
            <div className="text-gray-500 md:text-lg text-base mt-1 h-6 overflow-hidden">{restInfo?.info?.cuisines.join(" ")}</div>
            <div className="text-gray-500 md:text-lg text-base">{restInfo?.info?.areaName}</div>
            </div>
            </div>
        </div>
        </Link>
    )
}
import { dineoutRestaurants } from "../../util/DineData";
import DineCard from "./DineCard";

// Relationship of components
// Home.js -> DineOptions.js -> DineCard.js
export default function DineOptions() {
    return(
        <>
            {/* Main Content */}
            <div className="w-[80%] mx-auto mt-20 mb-15 md:mb-20">
                <p className="text-3xl font-bold">Discover best restaurants on Dineout</p>
                <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4">
                    {dineoutRestaurants.map((RestData) => 
                        <DineCard key={RestData.info.id} RestData={RestData} />
                    )}
                </div>
            </div>
            
            {/* Get The App Section */}
            <div className="max-w-[120%] h-full object-contain container mb-15 md:mb-20" id="app-image-section">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" alt="Get the App Png" />
            </div>

        </>
    )
}
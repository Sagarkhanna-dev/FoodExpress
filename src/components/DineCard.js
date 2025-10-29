// This component contains the desigining of restaurants cards like pebbles which is displayed on home page.(For Project Structure)

export default function DineCard({RestData}){
    return(
        <div className="max-w-sm  flex-none h-96 border border-white rounded-2xl bg-white shadow-md mb-4">
            <a target="_blank" href={RestData.cta.link}>
            <div className="relative  ">
                <img className=" w-81 h-45 object-cover rounded-tl-xl rounded-tr-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + RestData?.info?.mediaFiles[0]?.url}></img>
                <p className="absolute bottom-44 left-2 text-2xl text-white font-bold z-20">{RestData.info.name}</p>
                <p className="absolute bottom-44 right-2 text-2xl text-white z-20">{RestData.info.rating.value}</p>
                <div className=" absolute bg-gradient-to-t from-black to-transparent bottom-42 left-0 right-0 h-16 z-10 "></div>

                <div>
                    <div className="text-gray-700 flex mt-3 justify-between mx-4">
                        <div>{RestData.info.cuisines}</div>
                        <div>{RestData.info.costForTwo}</div>
                    </div>
                    <div className="text-gray-700 flex justify-between mx-4">
                        <div>{RestData.info.locality}</div>
                        <div>{RestData.info.locationInfo.distanceString}</div>
                    </div>
                    <div>
                        <div className="mt-4 mx-4 bg-[#1ba672] p-2 text-base text-white rounded-lg font-semibold flex items-center gap-2" ><img className="w-6 h-5" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png"></img>{RestData.info?.offerInfoV3?.vendorOffer?.title  + " " + RestData.info?.offerInfoV3?.vendorOffer?.subtitle}</div>

                        <div className="mt-3 mb-4 mx-2 bg-[#c8f9e5] p-2 text-[#1ba672] text-lg font-semibold rounded-lg">{RestData?.info.customerOffer.infos[0].description}</div>
                    </div>
                </div>
            </div>
            </a>
        </div>
    )
}
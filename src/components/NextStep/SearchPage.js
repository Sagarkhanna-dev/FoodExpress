import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function SearchPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const restaurants = useSelector((state) => state.Slice1.data);

    useEffect(() => {
        if (searchQuery.trim() === "") {
            setFilteredRestaurants([]);
            return;
        }

        const filtered = restaurants.filter(restaurant =>
            restaurant.info.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            restaurant.info.cuisines.some(cuisine => 
                cuisine.toLowerCase().includes(searchQuery.toLowerCase())
            ) ||
            restaurant.info.areaName.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredRestaurants(filtered);
    }, [searchQuery, restaurants]);

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto max-w-4xl px-4">
                {/* Search Header */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Search Restaurants</h1>
                    
                    {/* Search Input */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for restaurants, cuisines, or locations..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-lg"
                        />
                        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            🔍
                        </span>
                    </div>
                </div>

                {/* Search Results */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    {searchQuery.trim() === "" ? (
                        <div className="p-8 text-center">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">What are you craving for?</h3>
                            <p className="text-gray-500">Search for restaurants, cuisines, or your favorite dishes</p>
                        </div>
                    ) : filteredRestaurants.length === 0 ? (
                        <div className="p-8 text-center">
                            <div className="text-6xl mb-4">😔</div>
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">No restaurants found</h3>
                            <p className="text-gray-500">Try searching with different keywords</p>
                        </div>
                    ) : (
                        <div>
                            <div className="border-b border-gray-200 p-6 bg-gray-50">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    Found {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''} for "{searchQuery}"
                                </h2>
                            </div>
                            
                            <div className="divide-y divide-gray-200">
                                {filteredRestaurants.map(restaurant => (
                                    <Link 
                                        key={restaurant.info.id}
                                        to={`/restaurant/${restaurant.info.id}`}
                                        className="block hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="p-6 flex items-center space-x-4">
                                            <img 
                                                src={`https://media-assets.swiggy.com/swiggy/image/upload/${restaurant.info.cloudinaryImageId}`}
                                                alt={restaurant.info.name}
                                                className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                                            />
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-lg text-gray-800">{restaurant.info.name}</h3>
                                                <p className="text-gray-600 text-sm mt-1">
                                                    {restaurant.info.cuisines.join(", ")}
                                                </p>
                                                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                                                    <span className="flex items-center space-x-1">
                                                        <span className="text-green-600 font-semibold">⭐ {restaurant.info.avgRating}</span>
                                                        <span>({restaurant.info.totalRatingsString})</span>
                                                    </span>
                                                    <span>•</span>
                                                    <span>{restaurant.info.sla.slaString}</span>
                                                    <span>•</span>
                                                    <span>{restaurant.info.costForTwo}</span>
                                                </div>
                                            </div>
                                            <div className="text-orange-500 font-semibold">
                                                →
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Popular Searches */}
                {searchQuery.trim() === "" && (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-6">
                        <h3 className="font-semibold text-gray-800 mb-4">Popular Searches</h3>
                        <div className="flex flex-wrap gap-3">
                            {["Pizza", "Biryani", "Burger", "Chinese", "North Indian", "South Indian", "Desserts", "Ice Cream"].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setSearchQuery(item)}
                                    className="px-4 py-2 bg-gray-100 hover:bg-orange-100 text-gray-700 hover:text-orange-600 rounded-full transition-colors border border-gray-200 hover:border-orange-300"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
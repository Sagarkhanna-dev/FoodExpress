import { useEffect , useState} from "react";
import { useDispatch , useSelector } from "react-redux";
import { setRestaurants } from "./GlobalObj/slice1";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import { imageGridCards } from "../../util/FoodData"
import Foodcart from "./Foodcart"
import Footer from "./Footer";
import { API_BASE_URL } from "../config";

// Relationship of components
// Restaurant.js -> (Shimmer.js , Foodcart.js , Footer.js)

// Relationship of components
// Restaurant.js -> RestCard.js
export default function Restaurant() {
    const dispatch = useDispatch();
    const restData = useSelector((state) => state.Slice1.data);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                setLoading(true);
                setError(null);
                
                // For development - use local backend
                // http://localhost:3001/api/restaurants
                const backendUrl = (`${API_BASE_URL}/api/restaurants`);
                
                console.log('🔄 Fetching from backend...');
                const response = await fetch(backendUrl);
                const result = await response.json();

                console.log('📦 Backend response:', result);

                if (result.success) {
                    dispatch(setRestaurants(result.data));
                    console.log(`✅ Loaded ${result.data.length} restaurants`);
                } else {
                    throw new Error(result.message || 'Failed to fetch data');
                }

            } catch (err) {
                console.error('❌ Error:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        // Only fetch if no data exists
        if (restData.length === 0) {
            fetchRestaurants();
        } else {
            setLoading(false);
        }
    }, [dispatch, restData.length]);

    if (loading && restData.length === 0) {
        return <Shimmer/>;
    }

    if (error) {
        return (
            <div className="text-center mt-10">
                <div className="text-red-500 text-xl">Error: {error}</div>
                <button 
                    onClick={() => window.location.reload()} 
                    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
                >
                    Try Again
                </button>
            </div>
        );
    }

    if (restData.length === 0) {
        return <div className="text-center mt-10">No restaurants found</div>;
    }

    return(
        <div className="w-full md:w-full">
            {/* FooOptions div - which contains food options grid */}
            <div className="w-[90%] mx-auto md:w-[80%] md:ml-30  mt-20 overflow-x-auto">
                <div className="grid grid-rows-1 grid-flow-col gap-6">
                    {
                        imageGridCards.map((foodVal) => <Foodcart key={foodVal.id} foodVal={foodVal}/>)
                    }
                </div>
            </div>
            
            {/* Horizontal line div */}
            <div className=" w-[80%] mx-auto px-0 mt-10 mb-1 h-0.5 bg-gray-200">
            </div>

            <div className="w-[80%] mx-auto mt-4 mb-4 text-3xl font-bold font-sans ">Restaurants with online food delivery</div>

                {/* menu div */}
            <div className=" grid grid-cols-2 gap-5 place-content-center ml-15 md:flex md:flex-wrap md:ml-40 container mb-20 md:mb-30 mt-10 w-[80%] ">
                {
                    restData.map((restInfo)=> <RestCard key={restInfo.info.id} restInfo={restInfo}/>)
                }
            </div>
            <Footer />
        </div>
    )
}
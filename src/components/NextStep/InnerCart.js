import { useDispatch } from "react-redux";
import { incrementItem, decrementItem, removeItem } from "../GlobalObj/slice1";

// Relationship of components
// Checkout.js -> InnerCart.js

export default function InnerCart({ val }) {
    const dispatch = useDispatch();

    const itemPrice = (val.price || val.defaultPrice) / 100;
    const itemTotal = itemPrice * val.quantity;

    return (
        <div className="bg-white border-b border-gray-200 py-6 px-6 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
                {/* Food Item Info */}
                <div className="flex items-center space-x-4 flex-1">
                    {val.imageId && (
                        <img 
                            className="w-16 h-16 object-cover rounded-lg border border-gray-200" 
                            src={"https://media-assets.swiggy.com/swiggy/image/upload/" + val.imageId}
                            alt={val.name}
                        />
                    )}
                    <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 text-lg">{val.name}</h3>
                        <p className="text-green-600 font-medium mt-1">₹{itemPrice.toFixed(2)}</p>
                        {val.isVeg !== undefined && (
                            <div className={`w-5 h-5 border-2 mt-1 ${val.isVeg ? 'border-green-500' : 'border-red-500'}`}>
                                <div className={`w-2 h-2 rounded-full mx-auto mt-0.5 ${val.isVeg ? 'bg-green-500' : 'bg-red-500'}`}></div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3 bg-green-50 rounded-lg px-4 py-2 border border-green-200">
                        <button 
                            onClick={() => {
                                if (val.quantity === 1) {
                                    dispatch(removeItem(val));
                                } else {
                                    dispatch(decrementItem(val));
                                }
                            }}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-green-500 text-green-600 font-bold hover:bg-green-100 transition-colors text-lg"
                        >
                            -
                        </button>
                        <span className="font-semibold text-gray-800 min-w-8 text-center text-lg">
                            {val.quantity}
                        </span>
                        <button 
                            onClick={() => dispatch(incrementItem(val))}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-green-500 text-green-600 font-bold hover:bg-green-100 transition-colors text-lg"
                        >
                            +
                        </button>
                    </div>
                    
                    <div className="text-right">
                        <p className="font-bold text-gray-800 text-lg">₹{itemTotal.toFixed(2)}</p>
                        <button 
                            onClick={() => dispatch(removeItem(val))}
                            className="text-red-500 hover:text-red-700 text-sm font-medium mt-1 hover:underline"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
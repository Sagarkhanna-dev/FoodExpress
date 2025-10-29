import { useSelector } from "react-redux";
import InnerCart from "./InnerCart";
import { useDispatch } from "react-redux";
import { clearCart } from "../GlobalObj/slice1";

// Relationship of components
// Checkout.js -> InnerCart.js

export default function Checkout() {
    const items = useSelector((state) => state.Slice1.item);
    const dispatch = useDispatch();

    // Calculate all totals
    const calculateSubtotal = () => {
        return items.reduce((total, item) => {
            return total + ((item.price || item.defaultPrice) / 100) * item.quantity;
        }, 0);
    };

    const calculateGST = (subtotal) => {
        return subtotal * 0.05; // 5% GST
    };

    const calculateDeliveryFee = (subtotal) => {
        return subtotal > 300 ? 0 : 40;
    };

    const calculatePlatformFee = () => {
        return 5; // Fixed platform fee
    };

    const subtotal = calculateSubtotal();
    const gst = calculateGST(subtotal);
    const deliveryFee = calculateDeliveryFee(subtotal);
    const platformFee = calculatePlatformFee();
    const grandTotal = subtotal + gst + deliveryFee + platformFee;
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-md mx-4">
                    <div className="text-8xl mb-6">🛒</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Your cart is empty</h2>
                    <p className="text-gray-600 mb-6">Add some delicious food items from restaurants to get started!</p>
                    <button 
                        onClick={() => window.history.back()}
                        className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                    >
                        Browse Restaurants
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto max-w-4xl px-4">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
                            <p className="text-gray-600 mt-1">{totalItems} items from {new Set(items.map(item => item.restaurantName)).size} restaurant(s)</p>
                        </div>
                        <button 
                            onClick={() => dispatch(clearCart())}
                            className="text-red-500 hover:text-red-700 font-semibold px-4 py-2 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="border-b border-gray-200 p-6 bg-gray-50">
                                <h2 className="text-xl font-semibold text-gray-800">Order Items</h2>
                            </div>
                            <div>
                                {items.map((item) => (
                                    <InnerCart key={`${item.id}-${item.quantity}`} val={item} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bill Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">Bill Details</h2>
                            
                            <div className="space-y-3 mb-4">
                                <div className="flex justify-between text-gray-600">
                                    <span>Item Total ({totalItems} items)</span>
                                    <span>₹{subtotal.toFixed(2)}</span>
                                </div>
                                
                                <div className="flex justify-between text-gray-600">
                                    <span>Delivery Fee</span>
                                    <span className={deliveryFee === 0 ? "text-green-600 font-semibold" : ""}>
                                        {deliveryFee === 0 ? "FREE" : `₹${deliveryFee.toFixed(2)}`}
                                    </span>
                                </div>
                                
                                <div className="flex justify-between text-gray-600">
                                    <span>GST and Restaurant Charges</span>
                                    <span>₹{gst.toFixed(2)}</span>
                                </div>

                                <div className="flex justify-between text-gray-600">
                                    <span>Platform Fee</span>
                                    <span>₹{platformFee.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Free Delivery Progress */}
                            {subtotal < 300 && (
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                                    <div className="flex items-center space-x-2 text-yellow-700">
                                        <span className="text-lg">🎉</span>
                                        <p className="text-sm font-medium">
                                            Add ₹{(300 - subtotal).toFixed(2)} more for FREE delivery!
                                        </p>
                                    </div>
                                    <div className="w-full bg-yellow-200 rounded-full h-2 mt-2">
                                        <div 
                                            className="bg-green-500 h-2 rounded-full transition-all duration-300"
                                            style={{ width: `${(subtotal / 300) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                            )}

                            <div className="border-t border-gray-200 pt-4 mt-4">
                                <div className="flex justify-between text-lg font-bold text-gray-800">
                                    <span>Grand Total</span>
                                    <span>₹{grandTotal.toFixed(2)}</span>
                                </div>
                                <p className="text-green-600 text-sm mt-2 text-center">
                                    ✅ You won't be charged until you place your order
                                </p>
                            </div>

                            <button className="w-full bg-green-500 text-white py-4 rounded-xl font-semibold text-lg mt-6 hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl">
                                Proceed to Checkout
                            </button>

                            <div className="flex items-center justify-center space-x-2 mt-4 text-gray-500 text-sm">
                                <span>🔒</span>
                                <span>100% Secure Payment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
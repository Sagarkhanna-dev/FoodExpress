import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoLockClosed } from "react-icons/io5";

// Relationship of components
// (Header.js , NextHead.js) -> Account.js

export default function Account() {
    const [action, setAction] = useState("Sign Up");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center p-4">
            {/* Main Container */}
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
                
                {/* Header with Tabs */}
                <div className="flex border-b border-gray-200">
                    <button
                        className={`flex-1 py-4 font-semibold text-lg transition-all duration-300 ${
                            action === 'Sign Up' 
                            ? 'bg-orange-500 text-white' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                        onClick={() => setAction('Sign Up')}
                    >
                        Sign Up
                    </button>
                    <button
                        className={`flex-1 py-4 font-semibold text-lg transition-all duration-300 ${
                            action === 'LogIn' 
                            ? 'bg-orange-500 text-white' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                        onClick={() => setAction('LogIn')}
                    >
                        Login
                    </button>
                </div>

                {/* Form Container */}
                <div className="p-6 md:p-8">
                    {/* Title */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">
                            {action === 'Sign Up' ? 'Create Account' : 'Welcome Back'}
                        </h2>
                        <p className="text-gray-600 mt-2">
                            {action === 'Sign Up' 
                                ? 'Join us today!' 
                                : 'Sign in to your account'
                            }
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field - Only for Sign Up */}
                        {action === 'Sign Up' && (
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaUser className="text-gray-400 text-lg" />
                                </div>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300"
                                    required
                                />
                            </div>
                        )}

                        {/* Email Field */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <MdEmail className="text-gray-400 text-lg" />
                            </div>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <IoLockClosed className="text-gray-400 text-lg" />
                            </div>
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300"
                                required
                            />
                        </div>

                        {/* Forgot Password - Only for Login */}
                        {action === 'LogIn' && (
                            <div className="text-right">
                                <button 
                                    type="button"
                                    className="text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors duration-300"
                                >
                                    Forgot Password?
                                </button>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                            {action === 'Sign Up' ? 'Create Account' : 'Sign In'}
                        </button>
                    </form>

                    {/* Alternative Sign In */}
                    <div className="mt-8 text-center">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>
                        
                        <div className="mt-4 grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-300"
                            >
                                Google
                            </button>
                            <button
                                type="button"
                                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-300"
                            >
                                Facebook
                            </button>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600 text-sm">
                            {action === 'Sign Up' 
                                ? 'Already have an account? ' 
                                : "Don't have an account? "
                            }
                            <button
                                type="button"
                                onClick={() => setAction(action === 'Sign Up' ? 'LogIn' : 'Sign Up')}
                                className="text-orange-500 hover:text-orange-600 font-medium transition-colors duration-300"
                            >
                                {action === 'Sign Up' ? 'Sign In' : 'Sign Up'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
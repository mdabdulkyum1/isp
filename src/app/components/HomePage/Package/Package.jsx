import React from "react";
import { FaWifi, FaRocket, FaGlobe, FaBolt } from "react-icons/fa"; // Importing icons

const Package = () => {
    const ispPackages = [
        {
            _id: "pkg-001",
            name: "Basic Plan",
            price: 500,
            speed: "10 Mbps",
            icon: <FaWifi className="text-blue-400 text-6xl" />,
            description: "Affordable high-speed internet for browsing and streaming.",
        },
        {
            _id: "pkg-002",
            name: "Standard Plan",
            price: 700,
            speed: "20 Mbps",
            icon: <FaRocket className="text-green-400 text-6xl" />,
            description: "Smooth HD streaming and gaming with stable speed.",
        },
        {
            _id: "pkg-003",
            name: "Premium Plan",
            price: 1000,
            speed: "50 Mbps",
            icon: <FaGlobe className="text-indigo-400 text-6xl" />,
            description: "Ultra-low latency connection, great for gaming and work.",
        },
        {
            _id: "pkg-004",
            name: "Ultra Plan",
            price: 1500,
            speed: "100 Mbps",
            icon: <FaBolt className="text-yellow-400 text-6xl" />,
            description: "Blazing-fast internet for seamless 4K streaming and work.",
        },
    ];

    return (
        <div className="py-20 bg-[#F7F6FB]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Choose Your Internet Plan
                    </h2>
                    <p className="text-lg text-gray-500 mt-3">
                        Reliable, fast, and secure internet plans tailored to your needs.
                    </p>
                </div>

                {/* Grid Layout for Packages */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {ispPackages.map((pkg) => (
                        <div
                            key={pkg._id}
                            className="bg-white rounded-3xl shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl flex flex-col"
                        >
                            {/* Gradient Header */}
                            <div className="w-full py-4 bg-gradient-to-r from-[#323A82] to-[#923D9C]">
                                <h3 className="uppercase text-center text-white text-xl font-semibold">
                                    {pkg.name}
                                </h3>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex flex-col flex-grow justify-between">
                                {/* Icon */}
                                <div className="flex justify-center mb-6">{pkg.icon}</div>

                                {/* Speed */}
                                <p className="text-gray-700 text-lg font-medium mb-4">
                                    {pkg.speed} Speed
                                </p>

                                {/* Description */}
                                <p className="text-gray-500 text-sm mb-6">{pkg.description}</p>

                                {/* Price */}
                                <p className="text-4xl font-bold text-blue-500 mb-6">
                                    ৳{pkg.price} / month
                                </p>
                            </div>

                            {/* CTA Button */}
                            <div className="px-6 pb-6">
                                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition transform hover:scale-110">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Package;

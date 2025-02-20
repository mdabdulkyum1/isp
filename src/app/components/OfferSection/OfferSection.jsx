"use client";

import React from "react";
import Lottie from "lottie-react";
import animationData from "./animation/wifi.json";

const OfferSection = () => {
    return (
        <section className="p-2 md:px-6 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                {/* Left Side: Phone Mockup */}
                {/* Lottie Animation */}
                <div className="flex h-[600px] justify-center mb-12">
                    <Lottie animationData={animationData} loop={true} />
                </div>

                {/* Right Side: Offer Details */}
                <div className="text-center lg:text-left">
                    <h2 className="text-4xl font-extrabold mb-6">
                        Want To <span className="text-blue-600">Go Faster?</span>
                    </h2>
                    <p className="text-gray-600 mb-6">
                        The speed of data, as it travels from the Internet to your computer,
                        is measured in megabits per second (Mbps). Different activities
                        require different speeds.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-3 mb-8">
                        <li>50% off on professional installation</li>
                        <li>10 hours of cloud DVR service</li>
                        <li>HD included</li>
                        <li>Speed good for 6-8 devices at the same time</li>
                    </ul>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-500 transition">
                        Request A Quote
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;

"use client";
import React, { useState, useEffect } from "react";

const Banner = () => {
    const images = [
        "https://img.freepik.com/free-vector/global-networking-technology-background-digital-communication_53876-119502.jpg?t=st=1740038642~exp=1740042242~hmac=5304d608ec3372941f481de735f354701cb0bdd1cac317314530d8eadf49881f&w=1060",
        "https://img.freepik.com/free-photo/blue-optic-fiber-with-ethernet-cables_23-2148779311.jpg?t=st=1740036692~exp=1740040292~hmac=523e3c5de806e99c8ddf7fcfad24c4cc5fb53da3a71cbf2a48f1d214563cc6f6&w=1060",
        "https://img.freepik.com/free-photo/light-trails-buildings_1359-714.jpg?t=st=1740038686~exp=1740042286~hmac=740f7f8f5dc0cc131693a416763e90c4f105c5e83e07149b5a8c823f5170b6a7&w=1060",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000); // Change every 6 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative overflow-hidden h-[350px] md:h-[500px]">
            {/* Background Image with Keyframe Animation */}
            <div className="absolute inset-0 w-full h-full">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                            }`}
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                    ></div>
                ))}
            </div>

            {/* Overlay for Text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center justify-center">
                <div className="r text-white px-6 space-y-3">
                    <h1 className="text-2xl md:text-4xl">Our Plans Give You More Than Ever</h1>
                    <p className="text-gray-300">Surf, stream, chat and game with fast speeds. <br />Equipment included and no extra monthly fees.</p>
                    <h2 className="text-xl md:text-4xl">$700/ <sup className="text-base">month</sup></h2>
                    <div className="flex gap-4">
                        <button type="button" className="rounded-full border-none btn bg-[#42B7E2]">Request A Quote</button>
                        <p className="text-xs md:text-base"><span className="hidden md:block">Or</span><sup className="text-xs md:text-xl">Call Now +8801999-556688</sup></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
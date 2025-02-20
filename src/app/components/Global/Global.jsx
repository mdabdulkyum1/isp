"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import earth from "./Earth/animation-earth.json"; // Importing the Lottie JSON animation

const Global = () => {
    const features = [
        {
            id: 1,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h6"
                    />
                </svg>
            ),
            title: "High Speed",
            description: "Experience blazing-fast internet speeds for seamless browsing.",
        },
        {
            id: 2,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                </svg>
            ),
            title: "Reliable Connection",
            description: "Stay connected with our stable and secure network.",
        },
        {
            id: 3,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            title: "24/7 Support",
            description: "Our support team is available around the clock to assist you.",
        },
        {
            id: 4,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0V12a2 2 0 012-2h2a2 2 0 012 2v4m-4 0h4m-4 0H7m6 0H7m6 0H7"
                    />
                </svg>
            ),
            title: "Affordable Plans",
            description: "Choose from a variety of affordable plans tailored to your needs.",
        },
    ];

    return (
        <section className="md:py-32 bg-gray-900 relative overflow-hidden ">
            {/* Lottie Animation Background */}
            <div className="absolute inset-0 z-0 ">
                <Player
                    autoplay
                    loop
                    src={earth}
                    style={{ width: "100%", height: "100%" }}
                    speed={0.4}
                />
            </div>

            <div className=" container mx-auto relative z-10 ">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Why Choose Us?
                    </h2>
                    <p className="text-lg text-gray-300 mt-3">
                        We provide high-quality internet services that meet all your needs.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-white/5 backdrop-blur-lg border border-none border-white/5 rounded-2xl shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl"
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-6">{feature.icon}</div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-white mb-4">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-300">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Global;

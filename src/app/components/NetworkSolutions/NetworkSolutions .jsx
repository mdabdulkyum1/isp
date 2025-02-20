import React from "react";
import { FaCloud, FaNetworkWired, FaMobileAlt, FaShieldAlt } from "react-icons/fa";

const NetworkSolutions = () => {
    const services = [
        {
            id: 1,
            icon: <FaCloud className="text-blue-500 text-5xl" />,
            title: "Cloud",
            description: "Lorem Ipsum Dolor Sit Amet Consectetur.",
        },
        {
            id: 2,
            icon: <FaNetworkWired className="text-blue-500 text-5xl" />,
            title: "Networking",
            description: "Adipisicing elit, sed do eiusmod tempor.",
        },
        {
            id: 3,
            icon: <FaMobileAlt className="text-blue-500 text-5xl" />,
            title: "Mobility",
            description: "Incididunt ut labore et dolore aliqua.",
        },
        {
            id: 4,
            icon: <FaShieldAlt className="text-blue-500 text-5xl" />,
            title: "Cybersecurity",
            description: "Utenim animin veniam quis nostrud.",
        },
    ];

    return (
        <div>
            <div className=" lg:py-10 md:px-6 text-center container mx-auto">
                {/* Title Section */}
                <h3 className="text-sm font-semibold text-gray-600 tracking-wide uppercase">
                    Jellynet Broadband Internet
                </h3>
                <h2 className="text-4xl font-light text-gray-900 mt-2">
                    Network Solutions From Jellynet
                </h2>

                {/* Services Section */}
                <div className="mt-8 grid grid-cols-1 justify-center items-center sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white justify-center rounded-lg feature-card w-[300px] p-4 md:p-8 flex flex-col items-center transition transform hover:scale-105"
                        >
                            {service.icon}
                            <h4 className="text-xl font-semibold text-gray-900 mt-4">
                                {service.title}
                            </h4>
                            <p className="text-gray-500 mt-2">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NetworkSolutions;

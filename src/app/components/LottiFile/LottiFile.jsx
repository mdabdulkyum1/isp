"use client";
import React from 'react';
import animationData from './Animation - 1740048525187 (1).json'
import Lottie from 'lottie-react';

const LottiFile = () => {
    return (
        <div>
            <div className="flex h-[600px] justify-center w-[100vw]">
                <Lottie animationData={animationData} loop={true} />
            </div>

        </div>
    );
};

export default LottiFile;
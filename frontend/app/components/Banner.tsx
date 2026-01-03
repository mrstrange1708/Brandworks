import React from 'react';
import Image from 'next/image';

export const Banner: React.FC = () => {
    return (
        <div className="relative w-full h-48 bg-blue-600 overflow-hidden text-white flex flex-col justify-end p-4">
            <div className="absolute top-0 right-0 w-full h-full opacity-40">
                <Image
                    src="/banner-car.png"
                    alt="Banner Car"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="relative z-10">
                <h1 className="text-xl font-bold">Smart Parking</h1>
                <p className="text-sm opacity-90">Welcome back!</p>
                <div className="mt-4 bg-white/20 backdrop-blur-md rounded-lg p-2 inline-flex items-center gap-2">
                    <span className="text-[10px] font-bold bg-yellow-400 text-blue-900 px-1 rounded">#1 IN INDIA</span>
                    <span className="text-xs font-semibold">Premium Parking Solution</span>
                </div>
            </div>
        </div>
    );
};

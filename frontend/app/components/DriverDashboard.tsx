"use client"
import React from 'react';

export const DriverDashboard: React.FC = () => {
    return (
        <div className="flex flex-col h-full bg-gray-50">
            {/* Header */}
            <div className="bg-[#4F46E5] p-6 pb-12 rounded-b-[2rem] text-white relative">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-sm font-medium opacity-90">Driver Console</h1>
                    <button className="relative">
                        <span className="text-xl">🔔</span>
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-[#4F46E5]"></span>
                    </button>
                </div>
                <div>
                    <p className="text-xs opacity-80 mb-1">Welcome back,</p>
                    <h2 className="text-xl font-bold">Rajesh Kumar</h2>
                </div>
            </div>

            {/* Content Container */}
            <div className="px-5 -mt-6 flex-1 overflow-y-auto no-scrollbar pb-6">
                <h3 className="text-sm font-bold text-gray-800 mb-4">Current Assignment</h3>

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6">
                    {/* Car Header */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl">
                            🚗
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-gray-900">Maruti Swift</h4>
                            <p className="text-sm text-gray-400 font-medium">MH12CD5678</p>
                            <span className="inline-block mt-2 px-3 py-1 bg-orange-50 text-orange-500 text-[10px] font-bold rounded-full">
                                Retrieve Vehicle
                            </span>
                        </div>
                    </div>

                    {/* Details List */}
                    <div className="space-y-5">
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 text-xs italic">
                                👤
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-0.5">Customer</p>
                                <p className="text-sm font-bold text-gray-800">Priya Verma</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 text-xs italic">
                                📍
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-0.5">Location</p>
                                <p className="text-sm font-bold text-gray-800">Phoenix Mall</p>
                                <p className="text-[10px] text-gray-400">Lower Parel, Mumbai</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 text-xs italic">
                                🔑
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-0.5">Retrieve from</p>
                                <p className="text-sm font-bold text-gray-800">Level 3 - A12</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 text-xs italic">
                                🕒
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-0.5">Assigned at</p>
                                <p className="text-sm font-bold text-gray-800">06:24 pm</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full mt-8 bg-[#4F46E5] text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 active:scale-95 transition-transform">
                        Start Retrieval
                    </button>
                </div>
            </div>
        </div>
    );
};

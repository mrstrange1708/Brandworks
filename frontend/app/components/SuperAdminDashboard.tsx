"use client"
import React, { useState } from 'react';

export const SuperAdminDashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Overview');
    const [selectedSite, setSelectedSite] = useState('Phoenix Mall - Lower Parel');

    const sites = [
        'Phoenix Mall - Lower Parel',
        'Inorbit Mall - Malad',
        'Infiniti Mall - Andheri'
    ];

    return (
        <div className="flex flex-col h-full bg-gray-50">
            {/* Header */}
            <div className="bg-[#7C3AED] p-5 pb-8 rounded-b-[2rem] text-white">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl">←</span>
                    <h1 className="text-lg font-bold lowercase first-letter:uppercase">Super Admin</h1>
                </div>
                <p className="text-xs opacity-80">System overview and approvals</p>
            </div>

            {/* Content Container */}
            <div className="px-5 -mt-4 flex-1 overflow-y-auto no-scrollbar pb-6">
                {/* Tabs */}
                <div className="bg-white p-1 rounded-xl flex gap-1 mb-6 shadow-sm">
                    {['Overview', 'Approvals'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${activeTab === tab ? 'bg-[#7C3AED] text-white' : 'text-gray-400'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Site Selector */}
                <div className="mb-6">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 block">Select Site</label>
                    <div className="relative">
                        <select
                            value={selectedSite}
                            onChange={(e) => setSelectedSite(e.target.value)}
                            className="w-full bg-white border border-gray-100 h-12 rounded-xl px-10 text-xs font-bold text-gray-700 appearance-none shadow-sm focus:outline-none"
                        >
                            {sites.map(site => (
                                <option key={site} value={site}>{site}</option>
                            ))}
                        </select>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">📍</div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300">▼</div>
                    </div>
                </div>

                {/* Performance Stats */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs">📅</span>
                        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Today's Performance</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-2xl border border-purple-50 shadow-sm">
                            <p className="text-[10px] text-gray-400 font-bold mb-1">Tickets Issued</p>
                            <p className="text-2xl font-black text-[#7C3AED]">87</p>
                        </div>
                        <div className="bg-white p-4 rounded-2xl border border-purple-50 shadow-sm">
                            <p className="text-[10px] text-gray-400 font-bold mb-1">Collection</p>
                            <p className="text-xl font-black text-[#7C3AED]">₹13,050</p>
                        </div>
                    </div>
                </div>

                {/* Overall Statistics */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs">📈</span>
                        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Overall Statistics</h3>
                    </div>
                    <div className="space-y-3">
                        <div className="bg-white p-4 rounded-2xl border border-gray-50 shadow-sm flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600">🎫</span>
                                <p className="text-xs font-bold text-gray-600">Total Tickets</p>
                            </div>
                            <p className="text-lg font-black text-gray-800 tracking-tight">1247</p>
                        </div>
                        <div className="bg-white p-4 rounded-2xl border border-gray-50 shadow-sm flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center text-green-600">💰</span>
                                <p className="text-xs font-bold text-gray-600">Total Collection</p>
                            </div>
                            <p className="text-lg font-black text-gray-800 tracking-tight">₹186,450</p>
                        </div>
                        <div className="bg-white p-4 rounded-2xl border border-gray-50 shadow-sm flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">🚗</span>
                                <p className="text-xs font-bold text-gray-600">Active Parking</p>
                            </div>
                            <p className="text-lg font-black text-gray-800 tracking-tight">45</p>
                        </div>
                    </div>
                </div>

                {/* Location Card */}
                <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100">
                    <h4 className="text-xs font-bold text-purple-900 mb-1">{selectedSite}</h4>
                    <p className="text-[10px] text-purple-500 font-medium">Lower Parel, Mumbai</p>
                </div>
            </div>
        </div>
    );
};

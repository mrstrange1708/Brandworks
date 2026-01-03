"use client"
import React, { useEffect, useState } from 'react';

interface Location {
    locationId: number;
    address: string;
}

export const HistoryScreen: React.FC = () => {
    const [locations, setLocations] = useState<Location[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/location`)
            .then(res => res.json())
            .then(data => {
                setLocations(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            <div className="bg-blue-600 p-6 pt-12 text-white flex flex-col items-center">
                <div className="w-full flex items-center justify-between mb-2">
                    <button className="text-xl">←</button>
                    <h1 className="text-lg font-bold">Parking History</h1>
                    <div className="w-6"></div>
                </div>
            </div>

            <div className="bg-blue-600/10 px-4 py-2">
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{locations.length} total bookings</p>
            </div>

            <div className="flex-1 p-4 flex flex-col gap-4">
                {loading ? (
                    <p className="text-center text-gray-400 py-10">Loading history...</p>
                ) : (
                    locations.map((loc) => (
                        <div key={loc.locationId} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="font-bold text-gray-800 text-sm">{loc.address}</h3>
                                <span className="text-blue-600 font-bold text-sm">₹{100 + loc.locationId * 20}</span>
                            </div>
                            <p className="text-[10px] text-gray-400 mb-2">Lower Parel, Mumbai</p>
                            <div className="flex items-center gap-2">
                                <span className="bg-green-100 text-green-600 text-[8px] px-2 py-0.5 rounded-full font-bold uppercase">completed</span>
                            </div>
                            <div className="mt-3 pt-3 border-t border-gray-50 flex justify-between items-center text-[10px] text-gray-500">
                                <span className="flex items-center gap-1">📅 8 Dec 2025</span>
                                <span className="flex items-center gap-1">🚗 MH 12 AB {1234 + loc.locationId}</span>
                                <span className="text-gray-300">▼</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

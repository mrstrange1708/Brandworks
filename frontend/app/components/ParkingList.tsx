"use client"
import React, { useEffect, useState } from 'react';

interface Location {
    locationId: number;
    address: string;
}

export const ParkingList: React.FC = () => {
    const [locations, setLocations] = useState<Location[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:7777/api/location')
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

    if (loading) return <div className="p-4 text-center">Loading parking spots...</div>;

    return (
        <div className="p-4">
            <h2 className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider">Recent Parking</h2>
            <div className="flex flex-col gap-4">
                {locations.map((loc) => (
                    <div key={loc.locationId} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-gray-800">{loc.address}</h3>
                            <span className="text-blue-600 font-bold">₹{100 + loc.locationId * 20}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-gray-400">
                            <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-bold uppercase ml-auto">completed</span>
                        </div>
                        <div className="mt-3 flex gap-4 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                                <span>📅 8 Dec 2025</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span>🚗 MH 12 AB {1234 + loc.locationId}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

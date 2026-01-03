"use client"
import React, { useEffect, useState } from 'react';

interface Car {
    carId: string;
    name: string; // Car model
    valet: string;
    customers: string;
    parkingStatus: string;
    paymentStatus: string;
    payments: number;
    entryPoint: string;
}

export const ManagerDashboard: React.FC = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const res = await fetch('http://localhost:7777/api/cars');
                const data = await res.json();
                setCars(data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchCars();
    }, []);

    const filteredCars = cars.filter(car => {
        const matchesSearch =
            car.carId.toLowerCase().includes(searchQuery.toLowerCase()) ||
            car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            car.customers.toLowerCase().includes(searchQuery.toLowerCase()) ||
            car.valet.toLowerCase().includes(searchQuery.toLowerCase());

        const statusMap: Record<string, string> = {
            'Parked': 'Parked',
            'Retrieving': 'Retrieving',
            'Retirved': 'Retirved'
        };

        const matchesFilter = activeFilter === 'All' || car.parkingStatus === activeFilter;

        return matchesSearch && matchesFilter;
    });

    const stats = {
        active: cars.filter(c => c.parkingStatus === 'Parked').length,
        retrieving: cars.filter(c => c.parkingStatus === 'Retrieving').length,
        total: cars.length,
        revenue: cars.reduce((acc, c) => acc + (c.paymentStatus === 'PAID' ? c.payments : 0), 0)
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-[#1a2332] p-6 pt-12 text-white">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h1 className="text-lg font-bold">Manager Dashboard</h1>
                        <p className="text-[10px] opacity-60">Manage valet assignments and parking operations</p>
                    </div>
                    <button className="bg-blue-600/20 text-blue-400 border border-blue-600/30 px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1">
                        👤+ Add Driver
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="px-4 -mt-4 mb-6">
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                        <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Active Cars</p>
                        <p className="text-xl font-bold">{stats.active}</p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                        <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Retrieving</p>
                        <p className="text-xl font-bold">{stats.retrieving}</p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                        <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Total Today</p>
                        <p className="text-xl font-bold">{stats.total}</p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                        <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Revenue</p>
                        <p className="text-xl font-bold">₹{stats.revenue}</p>
                    </div>
                </div>
            </div>

            {/* Search & Filter */}
            <div className="px-4 flex flex-col gap-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search by plate, customer or valet..."
                        className="w-full bg-white border border-gray-100 rounded-xl px-10 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <span className="absolute left-4 top-3.5 text-gray-400">🔍</span>
                </div>

                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                    {['All', 'Parked', 'Retrieving', 'Retirved'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`px-4 py-2 rounded-full text-[10px] font-bold whitespace-nowrap transition-all ${activeFilter === f
                                    ? 'bg-[#1a2332] text-white shadow-lg'
                                    : 'bg-white text-gray-400 border border-gray-100'
                                }`}
                        >
                            {f === 'All' ? `All (${cars.length})` : `${f} (${cars.filter(c => c.parkingStatus === f).length})`}
                        </button>
                    ))}
                </div>
            </div>

            {/* Operation List */}
            <div className="p-4 flex flex-col gap-4 pb-20">
                {loading ? (
                    <p className="text-center text-gray-400 py-10">Loading operations...</p>
                ) : filteredCars.length === 0 ? (
                    <p className="text-center text-gray-400 py-10">No matches found</p>
                ) : (
                    filteredCars.map((car) => (
                        <div key={car.carId} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                            <div className="p-4 flex flex-col gap-4">
                                {/* Header */}
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-xl">
                                            🚗
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">{car.name}</h4>
                                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">{car.carId}</p>
                                        </div>
                                    </div>
                                    <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full uppercase ${car.parkingStatus === 'Parked' ? 'bg-green-100 text-green-600' :
                                            car.parkingStatus === 'Retrieving' ? 'bg-orange-100 text-orange-600' :
                                                'bg-gray-100 text-gray-600'
                                        }`}>
                                        {car.parkingStatus}
                                    </span>
                                </div>

                                {/* Details Grid */}
                                <div className="grid grid-cols-2 gap-y-4 text-[10px]">
                                    <div>
                                        <p className="text-gray-400 mb-0.5 uppercase tracking-tighter">Customer</p>
                                        <p className="font-bold text-gray-800 tracking-tight">{car.customers}</p>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-50/50 p-2 rounded-lg border border-gray-50">
                                        <div>
                                            <p className="text-gray-400 mb-0.5 uppercase tracking-tighter">Valet Assigned</p>
                                            <p className="font-bold text-gray-800 tracking-tight">{car.valet}</p>
                                            <p className="text-[8px] text-gray-400">ID: V00{car.carId.length}</p>
                                        </div>
                                        <button className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px]">
                                            📞
                                        </button>
                                    </div>
                                </div>

                                <button className="w-full py-2 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-xl border border-blue-100 flex items-center justify-center gap-2">
                                    📝 Reassign Valet
                                </button>

                                {/* Footer Info */}
                                <div className="pt-3 border-t border-gray-50 flex flex-col gap-2 text-[10px]">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-400">📍</span>
                                        <div>
                                            <p className="font-bold text-gray-700">Phoenix Mall</p>
                                            <p className="text-gray-400 text-[8px]">Lower Parel, Mumbai</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-400">🕒</span>
                                            <p className="text-gray-500">3 Jan, 12:06 pm <span className="text-gray-300 ml-1">Duration: 2h 0m</span></p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center py-2 px-3 bg-gray-50/50 rounded-lg">
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-400 text-xs">💰</span>
                                            <div>
                                                <p className="text-gray-400 text-[8px] uppercase">Payment</p>
                                                <p className="font-bold">₹{car.payments}</p>
                                            </div>
                                        </div>
                                        <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full ${car.paymentStatus === 'PAID' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                                            }`}>
                                            {car.paymentStatus}
                                        </span>
                                    </div>
                                    <p className="text-center text-[8px] text-gray-300 uppercase tracking-widest mt-1">Ticket: PKG-{car.carId.slice(-4)}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

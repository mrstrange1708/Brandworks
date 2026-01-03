import React from 'react';

export const SettingsScreen: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            <div className="bg-blue-600 p-6 pt-12 text-white">
                <div className="w-full flex items-center gap-4 mb-2">
                    <button className="text-xl">←</button>
                    <h1 className="text-lg font-bold">Settings</h1>
                </div>
                <p className="text-xs opacity-80">Manage your account and preferences</p>
            </div>

            <div className="p-4 flex flex-col gap-4">
                {/* User Card */}
                <div className="bg-blue-50 rounded-2xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            J
                        </div>
                        <div>
                            <h3 className="font-bold text-sm">John Doe</h3>
                            <p className="text-[10px] text-gray-500">+91 98765 43210</p>
                        </div>
                    </div>
                    <button className="text-blue-600">✏️</button>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col gap-2 mt-2">
                    {[
                        { icon: '🚗', label: 'Manage Vehicles', sub: '2 vehicles saved' },
                        { icon: '📜', label: 'Transaction History', sub: 'View all payments' },
                        { icon: '🎧', label: 'Help & Support', sub: 'Get assistance' },
                        { icon: '❓', label: 'FAQ', sub: 'Frequently Asked Questions' },
                    ].map((item, idx) => (
                        <button key={idx} className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="text-xl">{item.icon}</div>
                                <div className="text-left">
                                    <h4 className="font-bold text-sm">{item.label}</h4>
                                    <p className="text-[10px] text-gray-400">{item.sub}</p>
                                </div>
                            </div>
                            <span className="text-gray-300">→</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

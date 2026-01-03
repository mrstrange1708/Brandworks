import React from 'react';

interface BottomNavProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
    return (
        <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100 p-2 flex justify-around items-center z-30">
            <button
                onClick={() => setActiveTab('home')}
                className={`flex flex-col items-center gap-0.5 transition-colors ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-400'}`}
            >
                <span className="text-xl">🏠</span>
                <span className="text-[10px] font-bold">Home</span>
            </button>
            <button
                onClick={() => setActiveTab('ticket')}
                className={`flex flex-col items-center gap-0.5 transition-colors ${activeTab === 'ticket' ? 'text-blue-600' : 'text-gray-400'}`}
            >
                <span className="text-xl">🎫</span>
                <span className="text-[10px] font-bold">Ticket</span>
            </button>
            <button
                onClick={() => setActiveTab('history')}
                className={`flex flex-col items-center gap-0.5 transition-colors ${activeTab === 'history' ? 'text-blue-600' : 'text-gray-400'}`}
            >
                <span className="text-xl">🕒</span>
                <span className="text-[10px] font-bold">History</span>
            </button>
            <button
                onClick={() => setActiveTab('settings')}
                className={`flex flex-col items-center gap-0.5 transition-colors ${activeTab === 'settings' ? 'text-blue-600' : 'text-gray-400'}`}
            >
                <span className="text-xl">⚙️</span>
                <span className="text-[10px] font-bold">Settings</span>
            </button>
        </div>
    );
};

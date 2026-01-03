"use client"
import React, { useState } from 'react';

const users = [
    { id: 'user', name: 'User', icon: '👤' },
    { id: 'manager', name: 'Manager', icon: '🛡️' },
    { id: 'driver', name: 'Driver', icon: '🚗' },
    { id: 'admin', name: 'Super Admin', icon: '👑' },
];

interface LoginSelectionProps {
    selectedRole: string;
    onRoleChange: (role: string) => void;
}

export const LoginSelection: React.FC<LoginSelectionProps> = ({ selectedRole, onRoleChange }) => {

    return (
        <div className="mt-8 bg-white backdrop-blur-md border border-gray-100 rounded-3xl p-6 shadow-xl w-full max-w-lg">
            <h3 className="text-center text-sm font-bold text-gray-400 mb-6 uppercase tracking-widest">Login As</h3>
            <div className="grid grid-cols-4 gap-4">
                {users.map((user) => (
                    <button
                        key={user.id}
                        onClick={() => onRoleChange(user.id)}
                        className={`flex flex-col items-center gap-2 p-3 rounded-2xl transition-all ${selectedRole === user.id
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                            : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                            }`}
                    >
                        <span className="text-xl">{user.icon}</span>
                        <span className="text-[10px] font-bold whitespace-nowrap">{user.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

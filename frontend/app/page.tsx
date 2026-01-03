"use client"
import React, { useState } from 'react';
import { PhoneFrame } from './components/PhoneFrame';
import { Banner } from './components/Banner';
import { ParkingList } from './components/ParkingList';
import { BottomNav } from './components/BottomNav';
import { LoginSelection } from './components/LoginSelection';
import { HistoryScreen } from './components/HistoryScreen';
import { SettingsScreen } from './components/SettingsScreen';
import { ManagerDashboard } from './components/ManagerDashboard';
import { DriverDashboard } from './components/DriverDashboard';
import { SuperAdminDashboard } from './components/SuperAdminDashboard';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedRole, setSelectedRole] = useState('user');

  const renderContent = () => {
    switch (selectedRole) {
      case 'manager':
        return <ManagerDashboard />;
      case 'driver':
        return <DriverDashboard />;
      case 'admin':
        return <SuperAdminDashboard />;
      default:
        // User view
        return (
          <>
            {activeTab === 'home' && (
              <>
                <Banner />
                <div className="px-4 mt-6">
                  <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-xl">
                        🎫
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">Scan to Park</h4>
                        <p className="text-[10px] text-gray-400">Scan QR code at parking entrance</p>
                      </div>
                    </div>
                    <span className="text-gray-300">→</span>
                  </div>
                </div>
                <ParkingList />
              </>
            )}

            {activeTab === 'history' && <HistoryScreen />}
            {activeTab === 'settings' && <SettingsScreen />}

            {(activeTab === 'ticket') && (
              <div className="p-8 text-center text-gray-400">
                <p>Ticket Screen coming soon...</p>
              </div>
            )}
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 py-12">
      <PhoneFrame>
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto no-scrollbar">
            <div className="min-h-full">
              {renderContent()}
            </div>
          </div>

          {selectedRole === 'user' && (
            <div className="flex-shrink-0 h-16 relative">
              <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
          )}
        </div>
      </PhoneFrame>

      <LoginSelection selectedRole={selectedRole} onRoleChange={setSelectedRole} />
    </div>
  );
}

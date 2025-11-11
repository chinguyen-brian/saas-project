'use client';
import { useAuth } from '../../context/useAuth';
import Header from '../../components/header/Header';
import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        email={user?.email || ''}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        logout={logout}
      />

      {/* Main content area */}
      <div className="flex-1 flex flex-col md:pl-64">
        {/* Header */}
        <Header
          email={user?.email || ''}
          logout={logout}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Main content */}
        <main className="pt-16 p-4">{children}</main>
      </div>
    </div>
  );
}

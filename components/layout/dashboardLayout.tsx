'use client';
import { useAuth } from '../../context/useAuth';
import DashboardHeader from '../header/DashboardHeader';
import { useState } from 'react';
import DashboardSidebar from '../sidebar/DashboardSidebar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, logout, loading } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  if (loading) return null;
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <DashboardSidebar
        email={user?.email || ''}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        logout={logout}
      />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <DashboardHeader
          email={user?.email || ''}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Main content */}
        <main className="pt-16 p-4">{children}</main>
      </div>
    </div>
  );
}

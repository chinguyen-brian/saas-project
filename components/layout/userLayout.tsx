'use client';
import { useAuth } from '../../context/useAuth';
import Header from '../header/Header';
import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';

export default function UserLayout({
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
      <Sidebar
        email={user?.email || ''}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        logout={logout}
      />

      {/* Main content area */}
      <div className="flex-1 flex flex-col md:px-16">
        {/* Header */}
        <Header
          email={user?.email || ''}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Main content */}
        <main className="pt-16 p-4 w-full max-w-7xl mx-auto">{children}</main>
      </div>
    </div>
  );
}

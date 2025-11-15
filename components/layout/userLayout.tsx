'use client';
import { useAuth } from '../../context/useAuth';
import Header from '../header/Header';
import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, logout, loading } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (loading) return null;
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          email={user?.email || ''}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          logout={logout}
        />

        <div className="flex-1 flex flex-col md:px-16 overflow-auto">
          <Header
            email={user?.email || ''}
            onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          />

          <main className="py-16 p-4 w-full max-w-7xl mx-auto flex-1">
            {children}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

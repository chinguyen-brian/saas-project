'use client'
import { ReactNode, useEffect } from 'react';
import { useAuth } from '../context/useAuth';
import { useRouter } from 'next/navigation';

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500" />
      </div>
    );
  }
  if (!user) return null;

  return <>{children}</>;
};

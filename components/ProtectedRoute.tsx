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

  if (loading || !user) return null;
  return <>{children}</>;
};

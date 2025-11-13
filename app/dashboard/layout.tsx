import type { Metadata } from 'next';
import { AuthProvider } from '../../context/useAuth';
import DashboardLayout from '../../components/layout/dashboardLayout';
import { ProtectedRoute } from '../../components/ProtectedRoute';

export const metadata: Metadata = {
  title: 'SaaS App - Dashboard',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AuthProvider>
        <ProtectedRoute>
          <DashboardLayout>{children}</DashboardLayout>
        </ProtectedRoute>
      </AuthProvider>
    </>
  );
}

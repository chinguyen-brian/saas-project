import type { Metadata } from 'next';
import { CartProvider } from '../../context/useCart';
import { AuthProvider } from '../../context/useAuth';
import UserLayout from '../../components/layout/userLayout';

export const metadata: Metadata = {
  title: 'SaaS App - Home',
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
        <CartProvider>
          <UserLayout>{children}</UserLayout>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

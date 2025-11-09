import type { Metadata } from 'next';
import { CartProvider } from '../../context/useCart';

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
      <CartProvider>{children}</CartProvider>
    </>
  );
}

import { type Metadata } from 'next';

import { Footer, Header } from '@/components';
import { TRPCProvider } from '@/utils/hooks/trpc';

import '../styles/globals.scss';

export const metadata: Metadata = {
  title: '🔫 Rick and Morty app',
  description: 'Omg morty ?'
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang='en'>
    <TRPCProvider>
      <body className='min-h-screen mx-auto flex flex-col px-4 max-w-[1070px]'>
        <Header />
        <main className='flex-1 mt-9'>{children}</main>
        {/* @ts-ignore */}
        <Footer />
      </body>
    </TRPCProvider>
  </html>
);

export default RootLayout;

import { Header } from '@/components';
import { Footer } from '@/components/layout/Footer';
import { TRPCProvider } from '@/utils/hooks/trpc';

import '../styles/globals.scss';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <TRPCProvider>
        <body className={'min-h-screen flex flex-col'}>
            <Header />
            <main className={'flex-1'}>
              {children}
            </main>
            <Footer />
        </body>
      </TRPCProvider>
    </html>
  );
};

export default RootLayout;

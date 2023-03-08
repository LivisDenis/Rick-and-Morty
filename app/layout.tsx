import { Header } from '@/components';
import Footer from '@/components/layout/Footer';
import { TRPCProvider } from '@/utils/hooks/trpc';

import '../styles/globals.scss';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <TRPCProvider>
        <body className={'min-h-screen mx-auto flex flex-col px-4 max-w-[1070px]'}>
          <Header />
          <main className={'flex-1 mt-9'}>{children}</main>
          {/* @ts-ignore */}
          <Footer />
        </body>
      </TRPCProvider>
    </html>
  );
};

export default RootLayout;

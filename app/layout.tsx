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
      <head>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </head>
      <body>
        <TRPCProvider>
          <Header />
          {children}
          <Footer />
        </TRPCProvider>
      </body>
    </html>
  );
};

export default RootLayout;

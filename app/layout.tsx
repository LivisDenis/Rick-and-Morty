import '../styles/globals.scss';
import { TRPCProvider } from '@/utils/hooks/trpc';
import { Header } from '@/components';

interface RootLayoutProps {
  children: React.ReactNode;
}

const seo = {
  title: '🔫 Rick and Morty app',
  description: 'Omg morty ?'
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <head>
        <title>{seo.title}</title>
        <meta name='description' content={seo.description} />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </head>
      <body>
        <TRPCProvider>
          <Header />
          {children}
        </TRPCProvider>
      </body>
    </html>
  );
};

export default RootLayout;

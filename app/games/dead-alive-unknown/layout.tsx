import {type Metadata} from "next";

export const metadata: Metadata = {
  title: '🔫 DeadAliveUnknown',
  description: 'Omg morty ?'
};

interface DeadAliveUnknownLayoutProps {
  children: React.ReactNode;
}

const DeadAliveUnknownLayout = ({ children }: DeadAliveUnknownLayoutProps) => (
  <section className='max-w-[450px] mx-auto'>{children}</section>
);

export default DeadAliveUnknownLayout;

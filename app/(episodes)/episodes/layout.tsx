import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: '🔫 Episodes',
  description: 'Omg morty ?'
};

interface EpisodesLayoutProps {
  children: React.ReactNode;
}
const EpisodesLayout = ({ children }: EpisodesLayoutProps) => (
  <section>
    <h1 className='text-[30px] text-slate-200 font-bold'>Episodes</h1>
    <div className='mt-10'>{children}</div>
  </section>
);

export default EpisodesLayout;

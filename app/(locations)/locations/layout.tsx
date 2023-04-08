export const metadata = {
  title: '🔫 Locations',
  description: 'Omg morty ?'
};

interface LocationsLayoutProps {
  children: React.ReactNode;
}
const EpisodesLayout = ({ children }: LocationsLayoutProps) => (
  <section>
    <h1 className='text-[30px] text-slate-200 font-bold'>Locations</h1>
    <div className='mt-10'>{children}</div>
  </section>
);

export default EpisodesLayout;

interface DeadAliveUnknownLayoutProps {
  children: React.ReactNode;
}

const DeadAliveUnknownLayout = ({ children }: DeadAliveUnknownLayoutProps) => {
  return <section className='max-w-[450px] mx-auto'>{children}</section>;
};

export default DeadAliveUnknownLayout;

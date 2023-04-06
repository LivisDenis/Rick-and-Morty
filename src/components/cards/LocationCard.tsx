import Link from 'next/link';

interface LocationCardProps {
  location: LocationApi;
}

export const LocationCard = ({ location }: LocationCardProps) => (
  <article className='w-full flex flex-col max-w-[500px] rounded-[10px] bg-gray-600 p-6'>
    <Link href={`location/${location.id}`}>
      <div className='text-[18px] font-bold text-slate-200'>
        {location.name}: {location.type}
      </div>
    </Link>
    <span className='mt-3 text-slate-400'>{location.dimension}</span>
  </article>
);

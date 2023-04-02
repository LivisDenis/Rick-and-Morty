import Image from 'next/image';
import Link from 'next/link';

export const CharacterCard = (props: Character) => {
  const { image, name, status, location, id } = props;

  return (
    <div className='flex w-full max-w-[500px] rounded-[10px] bg-gray-600'>
      <Image
        src={image}
        alt={name}
        width={150}
        height={150}
        className='rounded-tl-[10px] rounded-bl-[10px] object-cover'
      />
      <div className='flex flex-col p-4'>
        <Link href={`/character/${id}`} className='text-[18px] font-bold text-white'>
          {name}
        </Link>
        <span className='mt-2 text-[14px] text-slate-400'>{status}</span>
        <div className='mt-6 flex flex-col'>
          <span className='text-[14px] font-bold text-slate-400'>Last known location:</span>
          <span className='mt-2 text-[16px] text-slate-400'>{location.name}</span>
        </div>
      </div>
    </div>
  );
};

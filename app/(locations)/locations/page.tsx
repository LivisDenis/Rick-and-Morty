'use client';

import { type FormEvent, useState } from 'react';

import { LocationCard } from '@/components/cards/LocationCard';
import SkeletonEpisodeCard from '@/components/skeletons/SkeletonEpisodeCard';
import { trpc } from '@/src/utils';

interface SearchFields {
  page?: number;
  name?: string;
  type?: string;
}

const LocationsPage = () => {
  const [searchFields, setSearchFields] = useState<SearchFields>({
    page: 1
  });

  const locationsMutation = trpc.getLocations.useMutation();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    locationsMutation.mutate({ filters: { ...searchFields } });
  };

  const isLoading = locationsMutation.isLoading;
  const locations = locationsMutation.data?.response.results;

  return (
    <div>
      <form className='flex gap-x-5' onSubmit={onSubmit}>
        <div>
          <label className='text-[16px] text-slate-200' htmlFor='name'>
            Name
            <input
              type='text'
              id='name'
              value={searchFields.name}
              onChange={(e) => setSearchFields({ ...searchFields, name: e.target.value })}
              className='px-4 mt-2 text-black py-3 max-w-[250px] w-full rounded-[5px]'
            />
          </label>
        </div>
        <div>
          <label className='text-[16px] text-slate-200' htmlFor='type'>
            Type
            <input
              type='text'
              id='type'
              value={searchFields.type}
              onChange={(e) => setSearchFields({ ...searchFields, type: e.target.value })}
              className='px-4 mt-2 text-black py-3 max-w-[250px] w-full rounded-[5px]'
            />
          </label>
        </div>
        <button
          className='text-black mt-auto h-[43px] max-w-[100px] w-full px-4 py-3 bg-green-400 hover:bg-fuchsia-300 rounded-[5px]'
          type='submit'
        >
          FILTER
        </button>
      </form>
      <ul className='grid mt-12 grid-cols-2 max-[740px]:grid-cols-1 gap-x-6 gap-y-4'>
        {isLoading && Array.from({ length: 6 }).map((_, i) => <SkeletonEpisodeCard key={i} />)}
        {locations?.map((location) => (
          <li key={location.id}>
            <LocationCard key={location.id} location={location} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationsPage;

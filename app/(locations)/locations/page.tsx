'use client';

import { useState } from 'react';

import Button from '@/components/buttons/Button';
import { LocationCard } from '@/components/cards/LocationCard';
import SkeletonEpisodeCard from '@/components/skeletons/SkeletonEpisodeCard';
import { trpc } from '@/src/utils';

import { Filter } from './Filter/Filter';

interface SearchFields {
  name: string;
  type: string;
}

interface LocationsPageProps {
  searchParams?: {
    name?: string;
    type?: string;
  };
}

const LocationsPage = ({ searchParams }: LocationsPageProps) => {
  const [searchFields, setSearchFields] = useState<SearchFields>({
    name: searchParams?.name || '',
    type: searchParams?.type || ''
  });
  const [page, setPage] = useState(1);

  const locationsMutation = trpc.getLocations.useQuery({ filters: { ...searchFields, page } });
  const { data: locationsInfo } = trpc.getLocationsInfo.useQuery({
    filters: { ...searchFields, page }
  });

  const isLoading = locationsMutation.isLoading;
  const locations = locationsMutation.data?.response.results;
  const totalPages = locationsInfo?.response.pages;

  return (
    <>
      <Filter
        initialValues={searchFields}
        onSubmit={(values) => {
          setPage(1);
          setSearchFields(values);
        }}
        isLoading={isLoading}
      />
      <div className='flex mt-12 justify-center'>
        <Button
          onClick={() => setPage((prev) => prev - 1)}
          bg='cyan'
          disable={page <= 1}
          disabled={isLoading}
        >
          PREV
        </Button>
        <Button
          onClick={() => setPage((prev) => prev + 1)}
          bg='cyan'
          disable={page >= totalPages!}
          disabled={isLoading}
        >
          NEXT
        </Button>
      </div>
      <ul className='grid mt-12 grid-cols-2 max-[740px]:grid-cols-1 gap-x-6 gap-y-4'>
        {isLoading && Array.from({ length: 6 }).map((_, i) => <SkeletonEpisodeCard key={i} />)}
        {locations?.map((location) => (
          <li key={location.id}>
            <LocationCard key={location.id} location={location} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default LocationsPage;

import { Pagination } from '@/app/characters/Pagination/Pagination';
import { CharacterCard } from '@/components';
import { caller } from '@/server/routes';
import { ROUTES } from '@/src/utils';

import Filter from './Filter/Filter';

export const metadata = {
  title: '🔫 Filter',
  description: 'Omg morty ?'
};

interface CharactersSearchParams {
  searchParams?: {
    page?: number;
    name?: Character['name'];
    status?: Character['status'];
    type?: Character['type'];
    species?: Character['species'];
    gender?: Character['gender'];
  };
}
export const revalidate = 0;

export const dynamic = 'force-dynamic';

const CharactersFilter = async ({ searchParams }: CharactersSearchParams) => {
  const filters = {
    ...(searchParams?.status && { status: searchParams.status }),
    ...(searchParams?.gender && { gender: searchParams.gender }),
    ...(searchParams?.name && { name: searchParams.name })
  };

  const page = searchParams?.page ?? 1;

  const { response: info } = await caller.getCharactersInfo({ filter: filters });

  const { response } = await caller.getCharacters({ params: { page: +page }, filter: filters });

  return (
    <section>
      <Filter
        items={[
          {
            type: 'input',
            label: 'name',
            value: searchParams?.name ?? 'all'
          },
          {
            type: 'toggles',
            label: 'status',
            value: searchParams?.status ?? 'all',
            options: [
              {
                label: 'all',
                href: {
                  pathname: ROUTES.CHARACTERS,
                  query: { ...searchParams, status: undefined, page: 1 }
                }
              },
              {
                label: 'alive',
                href: {
                  pathname: ROUTES.CHARACTERS,
                  query: { ...searchParams, status: 'alive', page: 1 }
                }
              },
              {
                label: 'dead',
                href: {
                  pathname: ROUTES.CHARACTERS,
                  query: { ...searchParams, status: 'dead', page: 1 }
                }
              },
              {
                label: 'unknown',
                href: {
                  pathname: ROUTES.CHARACTERS,
                  query: { ...searchParams, status: 'unknown', page: 1 }
                }
              }
            ]
          },
          {
            type: 'toggles',
            label: 'gender',
            value: searchParams?.gender ?? 'all',
            options: [
              {
                label: 'all',
                href: {
                  pathname: ROUTES.CHARACTERS,
                  query: { ...searchParams, gender: undefined, page: 1 }
                }
              },
              {
                label: 'female',
                href: {
                  pathname: ROUTES.CHARACTERS,
                  query: { ...searchParams, gender: 'female', page: 1 }
                }
              },
              {
                label: 'male',
                href: {
                  pathname: ROUTES.CHARACTERS,
                  query: { ...searchParams, gender: 'male', page: 1 }
                }
              },
              {
                label: 'genderless',
                href: {
                  pathname: ROUTES.CHARACTERS,
                  query: { ...searchParams, gender: 'genderless', page: 1 }
                }
              },
              {
                label: 'unknown',
                href: {
                  pathname: ROUTES.CHARACTERS,
                  query: { ...searchParams, gender: 'unknown', page: 1 }
                }
              }
            ]
          }
        ]}
      />
      <div className='mt-10'>
        <div className='text-[26px] text-slate-200 font-bold'>Results</div>
        <Pagination
          page={page}
          totalPages={info.pages}
          nextLink={{ ...searchParams, page: +page + 1 }}
          prevLink={{ ...searchParams, page: +page - 1 }}
        />
        <div className='mt-8 grid grid-cols-2 max-[740px]:grid-cols-1 gap-x-6 gap-y-4'>
          {response.results.map((char) => (
            <CharacterCard key={char.id} {...char} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharactersFilter;

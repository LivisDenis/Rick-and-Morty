import React from 'react';

import Link from 'next/link';

import { ROUTES } from '@/src/utils';

interface PaginationProps {
  page: number;
  totalPages: number;
  nextLink: Record<string, any>;
  prevLink: Record<string, any>;
}

export const Pagination = ({ totalPages, page, prevLink, nextLink }: PaginationProps) => {
  const disabledNext =
    page >= totalPages ? 'pointer-events-none [&_div]:bg-gray-400' : 'pointer-events-auto';
  const disabledPrev =
    page <= 1 ? 'pointer-events-none [&_div]:bg-gray-400' : 'pointer-events-auto';

  return (
    <div className='flex justify-center'>
      {page >= 1 && (
        <Link className={disabledPrev} href={{ pathname: ROUTES.CHARACTERS, query: prevLink }}>
          <div className='text-black px-4 py-3 bg-cyan-500 rounded-[5px] hover:bg-red-600 hover:text-slate-200'>
            PREV
          </div>
        </Link>
      )}
      {page <= totalPages && (
        <Link className={disabledNext} href={{ pathname: ROUTES.CHARACTERS, query: nextLink }}>
          <div className='ml-4 text-black px-4 py-3 bg-cyan-500 rounded-[5px] hover:bg-red-600 hover:text-slate-200'>
            NEXT
          </div>
        </Link>
      )}
    </div>
  );
};

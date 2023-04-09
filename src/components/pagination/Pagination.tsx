import classnames from 'classnames';
import Link from 'next/link';

interface PaginationProps {
  page: number;
  totalPages: number;
  searchParams?: Record<string, any>;
  queryParams?: boolean;
  changePathname?: boolean;
  pathname: string;
}

interface DisableButtonProps {
  off: boolean;
}

const DisableButton = ({ off }: DisableButtonProps) =>
  classnames({ 'pointer-events-none [&_div]:bg-gray-400': off });

export const Pagination = (props: PaginationProps) => {
  const { totalPages, page, searchParams, queryParams, pathname, changePathname } = props;

  const disableNext = DisableButton({ off: page >= totalPages });
  const disablePrev = DisableButton({ off: page <= 1 });

  const onChangeQuery = (countPage: number) =>
    queryParams ? { ...searchParams, page: countPage } : '';

  const onChangePathname = (countPage: number) =>
    changePathname ? `${pathname}/${countPage}` : pathname;

  return (
    <div className='flex gap-x-5 justify-center'>
      <Link
        className={disablePrev}
        href={{ pathname: onChangePathname(+page - 1), query: onChangeQuery(+page - 1) }}
      >
        <div className='text-black px-4 py-3 bg-cyan-500 rounded-[5px] hover:bg-red-600 hover:text-slate-200'>
          PREV
        </div>
      </Link>
      <Link
        className={disableNext}
        href={{ pathname: onChangePathname(+page + 1), query: onChangeQuery(+page + 1) }}
      >
        <div className='ml-4 text-black px-4 py-3 bg-cyan-500 rounded-[5px] hover:bg-red-600 hover:text-slate-200'>
          NEXT
        </div>
      </Link>
    </div>
  );
};

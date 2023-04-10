import classnames from 'classnames';
import Link from 'next/link';

import Button from '@/src/components/ui/Button';

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
        <Button bg='cyan' disable={page <= 1}>
          PREV
        </Button>
      </Link>
      <Link
        className={disableNext}
        href={{ pathname: onChangePathname(+page + 1), query: onChangeQuery(+page + 1) }}
      >
        <Button bg='cyan' disable={page >= totalPages}>
          NEXT
        </Button>
      </Link>
    </div>
  );
};

export default Pagination;

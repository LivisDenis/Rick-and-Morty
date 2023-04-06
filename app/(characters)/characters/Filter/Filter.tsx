import Link from 'next/link';
import type { UrlObject } from 'url';

interface FilterInput {
  type: 'input';
  label: string;
  value: string;
}

interface FilterToggles {
  type: 'toggles';
  label: string;
  value: string;
  options: { label: string; href: Omit<UrlObject, 'query'> & { query?: Record<string, any> } }[];
}
interface FilterProps {
  items: [FilterInput, FilterToggles, FilterToggles];
}

const Filter = ({ items }: FilterProps) => {
  const filters = items.map((item) => {
    if (item.type === 'input') {
      return (
        <div>
          <div className='text-[18px] text-slate-200 font-medium'>{item.label.toUpperCase()}</div>
          <div className='flex flex-row mt-3'>
            <input
              type='text'
              id={item.label}
              name={item.label}
              defaultValue={item.value === 'all' ? '' : item.value}
              placeholder='Search character'
              className='px-4 py-3 w-[300px] rounded-[5px]'
            />
            <button type='submit' className='ml-3 px-4 bg-cyan-500 rounded-[5px]'>
              Find
            </button>
          </div>
        </div>
      );
    }

    if (item.type === 'toggles') {
      return (
        <div>
          <div className='text-[18px] text-slate-200 font-medium'>{item.label.toUpperCase()}</div>
          <ul className='flex flex-wrap flex-row gap-x-4 gap-y-3 mt-3'>
            {item.options.map((toggle) => (
              <Link key={toggle.label} href={toggle.href}>
                <li>
                  <div
                    aria-selected={toggle.label === item.value}
                    className='text-black px-4 py-3 bg-cyan-500 rounded-[5px] aria-selected:bg-fuchsia-600 aria-selected:text-slate-200'
                  >
                    {toggle.label.toUpperCase()}
                  </div>
                </li>
              </Link>
            ))}
          </ul>
          {item.value !== 'all' && (
            <input
              type='text'
              id={item.label}
              name={item.label}
              defaultValue={item.value}
              className='hidden'
            />
          )}
        </div>
      );
    }
  });

  return (
    <form className='flex flex-col gap-y-6'>
      <div className='text-[30px] text-slate-200 font-bold'>Filter</div>
      {filters}
    </form>
  );
};

export default Filter;

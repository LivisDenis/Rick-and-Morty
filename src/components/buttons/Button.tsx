import { type ComponentPropsWithRef } from 'react';

import classnames from 'classnames';

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  bg: 'cyan' | 'green' | 'gray' | 'pink' | 'white';
  selected?: boolean;
  disable?: boolean;
  children: string;
}

export const Button = ({ children, bg, selected, disable, ...props }: ButtonProps) => {
  const style = classnames(
    'ml-4 px-4 py-3 rounded-[5px]',
    { 'bg-cyan-500 hover:bg-red-600 hover:text-slate-200': bg === 'cyan' },
    { 'bg-cyan-50 hover:bg-fuchsia-300 text-black': bg === 'white' },
    { 'bg-green-600 hover:bg-fuchsia-600 text-slate-200': bg === 'green' },
    { 'bg-gray-400 text-black pointer-events-none': disable },
    {
      'bg-cyan-500 aria-selected:bg-fuchsia-600 aria-selected:text-slate-200 text-black':
        bg === 'pink' && selected
    }
  );

  return (
    <button type='button' {...props} className={style}>
      {children}
    </button>
  );
};

export default Button;

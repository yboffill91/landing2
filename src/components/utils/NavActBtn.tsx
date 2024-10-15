import Link from 'next/link';
import { ActBtnProps } from './ActBtn';

export const NavActBtn = ({ kind, act }: ActBtnProps) => {
  return (
    <Link
      href='#'
      className={`
    ${
      kind === 'action'
        ? 'bg-blue-500 text-slate-100 hover:bg-blue-700 hover:shadow-md hover:shadow-slate-600'
        : kind === 'ghost'
        ? 'text-slate-100  '
        : 'bg-white text-blue-500 hover:bg-blue-500'
    }
    px-6 py-1 rounded-md
    text-sm font-semibold
    transition-all duration-300 ease-linear
  

    `}
    >
      {act}
    </Link>
  );
};

import Link from 'next/link';
import { IconType } from 'react-icons';

interface ActBtnProps {
  kind: 'action' | 'ghost' | 'solid';
  act: string;
  // icon?: IconType;
}

export const ActBtn = ({ kind, act }: ActBtnProps) => {
  return (
    <Link
      href='#'
      className={`
    ${
      kind === 'action'
        ? 'bg-blue-700 border border-orange-500 text-slate-100 hover:bg-orange-500 hover:shadow-md hover:shadow-slate-600 flex items-center justify-center space-x-2'
        : kind === 'ghost'
        ? 'text-slate-300 border border-orange-500 bg-transparent hover:bg-orange-500  hover:shadow-md hover:shadow-slate-600 flex items-center justify-center space-x-2 '
        : 'bg-white text-blue-500 hover:bg-blue-500 flex items-center justify-center space-x-2'
    }
    px-6 py-2 rounded-md
    text-lg font-semibold
    transition-all duration-300 ease-linear
  

    `}
    >
      <span className='text-lg'>{act}</span>
    </Link>
  );
};

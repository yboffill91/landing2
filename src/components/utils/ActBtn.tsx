import Link from 'next/link';

export interface ActBtnProps {
  kind: 'action' | 'ghost' | 'solid';
  act: string;
}

export const ActBtn = ({ kind, act }: ActBtnProps) => {
  return (
    <Link
      href='#'
      className={`
    ${
      kind === 'action'
        ? 'bg-blue-500 text-slate-100 hover:bg-blue-700 hover:shadow-md hover:shadow-slate-600'
        : kind === 'ghost'
        ? 'text-slate-100 border border-orange-500 hover:bg-orange-700  hover:shadow-md hover:shadow-slate-600 '
        : 'bg-white text-blue-500 hover:bg-blue-500'
    }
    px-6 py-2 rounded-md
    text-lg font-semibold
    transition-all duration-300 ease-linear
  

    `}
    >
      {act}
    </Link>
  );
};

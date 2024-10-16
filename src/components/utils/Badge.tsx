import Link from 'next/link';
import { RiEyeLine } from 'react-icons/ri';

interface BadgeItem {
  icon: string;
  text: string;
  link: string;
  url: string;
}

export const Badge = ({ icon, text, link, url }: BadgeItem) => {
  return (
    <div className='flex justify-center items-center gap-3 p-2 '>
      <span className='border-r-2 border-gray-400 px-3 text-blue-500'>
        {icon}
      </span>
      <span className='hidden sm:flex border-r-2 border-gray-400 px-3'>
        {text}
      </span>
      <Link
        href={url}
        className='bg-blue-500/20 text-slate-300 px-2 py-1 rounded-md hover:bg-blue-500 hover:text-slate-100 transition-all duration-300 ease-linear flex space-x-2 items-center justify-center '
      >
        <span>
          <RiEyeLine />
        </span>
        <span>{link}</span>
      </Link>
    </div>
  );
};

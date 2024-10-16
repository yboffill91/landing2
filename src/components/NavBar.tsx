import { RiArrowRightDoubleLine } from 'react-icons/ri';
import { NavActBtn } from './utils/NavActBtn';
import { NAV_ITEMS } from '@/constants';
import Link from 'next/link';

export const NavBar = () => {
  return (
    <nav className='flex w-screen justify-evenly items-center py-2 px-6 bg-slate-900/90 backdrop-blur-sm text-slate-100 shadow-sm shadow-slate-500/50 fixed top-0 left-0 z-50'>
      <div className='flex'>
        <Link href='/'>
          <span className='flex items-center border-r-1 border-slate-100/50 pr-6 '>
            <RiArrowRightDoubleLine className='w-6 h-6 text-slate-100' />
            <span className='text-2xl font-semibold'>
              tamer
              <span className='font-bold uppercase text-blue-500'>digital</span>
            </span>
          </span>
        </Link>
        <div className='lg:flex hidden items-center'>
          <ul className='flex gap-2'>
            {NAV_ITEMS.map(({ id, text, url, icon: Icon }) => (
              <li key={id}>
                <Link
                  href={url}
                  className='hover:bg-orange-500 transition-all duration-300 ease-linear px-3 py-1 rounded-md flex items-center justify-center space-x-2'
                >
                  <span className='text-xl text-slate-200'>
                    <Icon />
                  </span>
                  <span className='text-lg'>{text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='lg:flex hidden gap-4 items-center'>
        <NavActBtn kind={'ghost'} act={'Sign In'} />
        <NavActBtn kind={'action'} act={'Sign Up'} />
      </div>
    </nav>
  );
};

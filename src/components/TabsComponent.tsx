import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { titles } from '@/libs/fonts';
import Image from 'next/image';
import { RiCheckboxCircleFill } from 'react-icons/ri';

export const TabsComponent = () => {
  return (
    <div className=''>
      <h2
        className={`text-xl h-auto sm:text-2xl text-center md:text-3xl 2xl:text-4xl ${titles.className}`}
      >
        Why are there Business more succesful than mine?
      </h2>
      <Tabs defaultValue='growth'>
        <TabsContent value='growth'>
          <div className='flex flex-col md:flex-row w-full h-full p-3 bg-slate-900 rounded-lg shadow-sm shadow-slate-500'>
            <div className='w-full md:w-1/2 h-full  rounded-l-lg flex items-center justify-center'>
              <Image
                src='/growth.png'
                alt='Growth'
                width={500}
                height={500}
                className='rounded-lg '
              />
            </div>
            <div className='w-full md:w-1/2 h-full  flex flex-col items-start justify-center'>
              <h3 className='text-lg sm:text-xl md:text-2xl 2xl:text-3xl'>
                Let&apos;s Present to you a company consistent with your dreams
              </h3>
              <h4 className='text-md sm:text-lg md:text-xl text-slate-400 text-pretty'>
                In todays world, the premise: If a business is not the Internet,
                it does not exist, has become an inescapable reality.
              </h4>
              <ul className=''>
                <li className='text-base text-slate-50 text-pretty flex gap-2 '>
                  <div>
                    <RiCheckboxCircleFill className='text-blue-500 mt-1' />
                  </div>{' '}
                  <div>
                    <span className='text-bold bg-blue-500/50 px-1 rounded'>
                      70%
                    </span>{' '}
                    of consumers make purchases of services or products online{' '}
                  </div>
                </li>
                <li className='text-base text-slate-50 text-pretty flex gap-2 '>
                  <div>
                    <RiCheckboxCircleFill className='text-blue-500 mt-1' />
                  </div>{' '}
                  <div>
                    Companies with an Internet presence genetare{' '}
                    <span className='text-bold bg-blue-500/50 px-1 rounded'>
                      30%
                    </span>
                    more
                  </div>
                </li>
                <li className='text-base text-slate-50 text-pretty flex gap-2 '>
                  <div>
                    <RiCheckboxCircleFill className='text-blue-500 mt-1' />
                  </div>{' '}
                  <div>
                    <span className='text-bold bg-blue-500/50 px-1 rounded'>
                      93%
                    </span>{' '}
                    of searches are online{' '}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
        <TabsContent value='revenue'>
          <div className='flex flex-col md:flex-row w-full hful bg-slate-900 rounded-lg shadow-sm shadow-slate-500 p-3'>
            <div className='w-full md:w-1/2 h-full  flex flex-col items-start justify-center'>
              <h3 className='text-lg sm:text-xl md:text-2xl 2xl:text-3xl'>
                This is what a stagnant company withouth growth looks like.
              </h3>
              <h4 className='text-md sm:text-lg md:text-xl text-slate-400 text-pretty'>
                As mentioned before, this is a clear axample of a business that
                does not exist, totally designes to fail over time
              </h4>
              <ul className=''>
                <li className='text-base text-slate-50 text-pretty flex gap-2 '>
                  <div>
                    <RiCheckboxCircleFill className='text-orange-700 mt-1' />
                  </div>{' '}
                  <div>
                    <span className='text-bold bg-orange-700/50 px-1 rounded'>
                      52%
                    </span>{' '}
                    companies withouth a website lose sales gradually{' '}
                  </div>
                </li>
                <li className='text-base text-slate-50 text-pretty flex gap-2 '>
                  <div>
                    <RiCheckboxCircleFill className='text-orange-700 mt-1' />
                  </div>{' '}
                  <div>
                    SEO{' '}
                    <span className='text-bold bg-orange-700/50 px-1 rounded'>
                      {' '}
                      doubles{' '}
                    </span>{' '}
                    traffic in a year{' '}
                  </div>
                </li>
                <li className='text-base text-slate-50 text-pretty flex gap-2 '>
                  <div>
                    <RiCheckboxCircleFill className='text-orange-700 mt-1' />
                  </div>{' '}
                  <div>
                    <span className='text-bold bg-orange-700/50 px-1 rounded'>
                      78%
                    </span>{' '}
                    purchases are made after local searches{' '}
                  </div>
                </li>
              </ul>
            </div>
            <div className='w-full md:w-1/2 h-full  rounded-l-lg flex items-center justify-center'>
              <Image
                src='/fail.png'
                alt='Growth'
                width={500}
                height={500}
                className='rounded-lg '
              />
            </div>
          </div>
        </TabsContent>
        <TabsList className='flex justify-center items-center gap-10 bg-slate-900/10 backdrop-blur-5xl  py-2 px-1 '>
          <TabsTrigger
            value='growth'
            className='rounded-lg border border-slate-300 text-sm md:text-xl py-2 px-6 font-semibold'
          >
            Growth Companies
          </TabsTrigger>
          <TabsTrigger
            value='revenue'
            className='rounded-lg border border-slate-300 text-sm md:text-xl py-2 px-6 font-semibold'
          >
            Failed Companies
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

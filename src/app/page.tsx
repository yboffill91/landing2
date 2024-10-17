import Acordion from '@/components/Acordion';
import BentoGrid from '@/components/BentoGrid';
import { Hero } from '@/components/Hero';
import { TabsComponent } from '@/components/TabsComponent';
import { Timeline } from '@/components/ui/timeline';
import { TabsItems, TimeLineData } from '@/constants';
import { titles } from '@/libs/fonts';

export default function Home() {
  return (
    <div
      style={{
        background:
          'radial-gradient(circle, rgba(96,165,250,1) 0%, rgba(37,99,235,1) 10%, transparent 50%)',
        backgroundPosition: 'top',
        backgroundSize: '100% 250vh',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='container m-auto flex flex-col gap-10'>
        <Hero />
        <div className='md:my-20 my:10 flex flex-col items-center justify-center'>
          <h2
            className={`text-xl sm:text-2xl md:text-3xl 2xl:text-4xl ${titles.className}`}
          >
            What am I going to get?
          </h2>
          <BentoGrid events={TabsItems} />
        </div>
        <div className='md:my-20 my:10 flex flex-col items-center justify-center'>
          <TabsComponent />
        </div>
        <div className='md:my-20 my:10 flex flex-col items-center justify-center'>
          <h2
            className={`text-xl sm:text-2xl md:text-3xl 2xl:text-4xl ${titles.className}`}
          >
            Some Facts you must Know{' '}
          </h2>
          <Acordion />
        </div>
        <div
          style={{
            background:
              'radial-gradient(circle, rgba(96,165,250,1) 0%, rgba(37,99,235,1) 10%, transparent 50%)',
            backgroundPosition: 'top',
            backgroundSize: '100% 200vh',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        >
          <Timeline data={TimeLineData} />
          {/* TODO: Ajustar el timeline para poder incluir React components */}
        </div>
      </div>
      {/* <div className='w-[500px] h-[500px] bg-slate-50  transition-all duration-1000 ease-linear'></div> */}
    </div>
  );
}

import { Hero } from '@/components/Hero';
import { TabsComponent } from '@/components/TabsComponent';
import { titles } from '@/libs/fonts';

export default function Home() {
  return (
    <div
      style={{
        background:
          'radial-gradient(circle, rgba(96,165,250,1) 0%, rgba(37,99,235,1) 10%, transparent 50%)',
        backgroundPosition: 'top',
        backgroundSize: '100% 200vh',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className=' bg-slate-950/50  -z-50'>
        <Hero />
        <div className='md:my-20 my:10 flex flex-col items-center justify-center'>
          <h1
            className={`text-xl sm:text-2xl md:text-3xl 2xl:text-4xl ${titles.className}`}
          >
            What am I going to get?
          </h1>
          <TabsComponent />
        </div>
      </div>
    </div>
  );
}

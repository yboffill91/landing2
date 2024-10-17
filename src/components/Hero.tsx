import WordRotate from './ui/word-rotate';
import { ActBtn } from './utils/ActBtn';
import { Badge } from './utils/Badge';
import FeatureIcon from './utils/FeaturesIcon';
import { titles } from '@/libs/fonts';
import { FEATURES } from '@/constants';
import { RiArrowRightDoubleLine } from 'react-icons/ri';

export const Hero = () => {
  return (
    <section
      className='
    flex flex-col items-center justify-center pt-16 
    
     h-screen

    '
    >
      <Badge
        icon='💻 Free Tools'
        text='New Free Tools Released Today'
        link='Take a look '
        url='/free-tools'
      />
      <header className='flex flex-col items-center justify-center gap-4 text-center'>
        <div className='flex gap-0'>
          <h2 className='text-3xl 2xl:text-6xl lg:text-5xl sm:text-4xl my-3  hidden lg:flex'>
            <RiArrowRightDoubleLine className='hover:text-orange-500' />
            tamer
            <span className='font-bold uppercase  '>digital</span>
          </h2>
        </div>
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl ${titles.className}`}
        >
          Focus on Growing your <br />
          <span className='text-blue-500 stroke-gray-400'>
            Dreaming Business
          </span>
        </h1>

        <div className='text-xl md:text-3xl xl:text-4xl  text-slate-400 my-5 '>
          <WordRotate
            words={[
              'Digital Strategies',
              'SWOT Evaluation',
              'Company Branding',
              'Web Design',
              'SEO Optimization',
              'Digital Marketing',
              'Automate and Work Flow Programing',
              'Continuos Analisis and Adjustment',
              'Expansion and Growth',
            ]}
            className='font-semibold text-slate-100'
          />
          <div className='text-lg md:text-2xl'>
            and more that will
            <span className='text-slate-100 font-semibold'> help you</span> tu
            <span className='font-semibold text-slate-100'>
              {' '}
              success
            </span> your{' '}
            <span className='font-semibold text-slate-100'>goals</span> at every
            step
          </div>
        </div>
      </header>
      <div className='flex gap-5'>
        <ActBtn kind='ghost' act='See Free Tools' />
        <ActBtn kind='action' act='Get Started' />
      </div>
      <p className='mt-10 text-xl py-1 px-4 rounded-lg bg-slate-950/40  -mb-8'>
        Our team <span className='font-bold p-1'>guarantees!</span>
      </p>
      <div className=' flex gap-8 mt-10 w-[min(100%,648px)] overflow-hidden rounded-full'>
        <div className='animate-loop-scroll flex gap-8'>
          {FEATURES.map(({ id, text, icon }) => (
            <FeatureIcon key={id} text={text} icon={icon} />
          ))}
        </div>
        <div className='animate-loop-scroll flex gap-8' aria-hidden='true'>
          {FEATURES.map(({ id, text, icon }) => (
            <FeatureIcon key={id} text={text} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

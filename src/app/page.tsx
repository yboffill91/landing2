import BentoGrid from '@/components/BentoGrid';
import { Hero } from '@/components/Hero';
import { BackGround } from '@/components/utils/BackGround';
import { BENTO_GRID } from '@/constants';

export default function Home() {
  return (
    <div
      style={{
        background:
          'radial-gradient(circle, rgba(96,165,250,1) 0%, rgba(37,99,235,1) 10%, transparent 50%)',
        height: '200vh',
        width: '100%',
      }}
    >
      <Hero />
      <BentoGrid events={BENTO_GRID} />
    </div>
  );
}

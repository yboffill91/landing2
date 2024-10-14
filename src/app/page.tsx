import BentoGrid from '@/components/BentoGrid';
import { Hero } from '@/components/Hero';
import { BackGround } from '@/components/utils/BackGround';
import { BENTO_GRID } from '@/constants';

export default function Home() {
  return (
    <>
      <BackGround />
      <Hero />
      <BentoGrid events={BENTO_GRID} />
    </>
  );
}

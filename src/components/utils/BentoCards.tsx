import { TabsItemsProps } from '@/constants';
import { TextHoverEffect } from '../ui/text-hover-effect';

export const BentoCards = ({
  description,
  id,
  icon: Icon,
  title,
}: TabsItemsProps) => {
  return (
    <div
      className='bg-slate-700/80 backdrop-blur-4xl flex sm:h-full sm:w-full p-3 '
      key={id}
    >
      <div className='flex flex-col items-center justify-center '>
        <h1 className='text-xl md:text-2xl'>{title}</h1>
        <p className='text-sm md:text-base'>{description}</p>
      </div>
      <div className='m-auto text-slate-500 font-light  text-[8rem]'>
        <Icon className='text-slate-200 p-2 rounded-full bg-slate-950/30 ' />
      </div>
    </div>
  );
};

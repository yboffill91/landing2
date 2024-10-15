import { titles } from '@/libs/fonts';
import Image from 'next/image';

export const TabsCard = ({
  id,
  icon: Icon,
  image,
  title,
  description,
}: {
  id: number;
  icon: React.ElementType;
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div
      className='relative w-full md:h-[75vh] lg:h-[50vh]  overflow-hidden rounded-lg shadow-lg group '
      key={id}
    >
      <Image
        layout='cover'
        width={900}
        height={400}
        src={image}
        alt={title}
        className='w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent transition-all duration-300 group-hover:to-black/60'></div>

      <div className='absolute bottom-0 left-0 p-4 text-white'>
        <div className='flex gap-2'>
          <span>
            <Icon
              className='text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl'
              aria-hidden='true'
            />{' '}
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl ${titles.className}`}
          >
            {title}
          </h2>
        </div>
        <p className='text-sm md:text-md lg:text-lg xl:text-xl'>
          {description}
        </p>
      </div>
    </div>
  );
};

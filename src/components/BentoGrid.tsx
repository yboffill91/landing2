import React from 'react';
import Image from 'next/image';
import { BentoGridType } from '@/constants';


interface EventGridProps {
  className?: string;
  events: BentoGridType[];
}

export default function BentoGrid({ events, className }: EventGridProps) {
  return (
    <div
      className={`container mx-auto p-2 ${className} bg-blue-500/10 backdrop-blur-lg rounded-lg`}
    >
      <div className='grid grid-cols-1 lg:grid-cols-10 auto-rows-[25rem] gap-1'>
        {events.map((event) => (
          <div
            key={event.id}
            className={`relative overflow-hidden rounded-lg ${
              event.size === 'medium'
                ? 'lg:col-span-4'
                : event.size === 'large'
                ? 'lg:col-span-6'
                : 'lg:col-span-2'
            } 
             `}
          >
            <Image
              src={event.image}
              alt={event.title}
              layout='fill'
              objectFit='cover'
              className='transition-transform duration-300 hover:scale-110'
            />
            <div className='absolute inset-0 bg-black' />
            <div className='absolute bottom-0 left-0 p-4 text-white'>
              <h2 className='text-xl font-bold mb-2'>{event.title}</h2>
              <p className='text-sm text-gray-300'>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
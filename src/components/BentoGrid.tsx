import React from 'react';
import Image from 'next/image';
import { TabsItemsProps } from '@/constants';
import { TabsCard } from './utils/TabsCard';
import { BentoCards } from './utils/BentoCards';
import { titles } from '@/libs/fonts';

interface EventGridProps {
  className?: string;
  events: TabsItemsProps[];
}

export default function BentoGrid({ events, className }: EventGridProps) {
  return (
    <div
      className={` p-2 ${className} bg-blue-500/10 backdrop-blur-lg rounded-lg`}
    >
      <div className='grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-8 sm:auto-rows-[25rem] gap-1'>
        {events.map((event) => (
          <div
            key={event.id}
            className={`relative overflow-hidden rounded-lg ${
              event.size === 'medium'
                ? 'xl:col-span-4  sm:col-span-2 md:col-span-4'
                : event.size === 'large'
                ? 'xl:col-span-6 sm:col-span-2 md:col-span-4'
                : 'xl:col-span-2 sm:col-span-2 md:col-span-2'
            } 
              `}
          >
            <BentoCards
              description={event.description}
              id={event.id}
              icon={event.icon}
              title={event.title}
              image={event.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

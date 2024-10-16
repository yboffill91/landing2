import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TabsItems } from '@/constants';
import { TabsCard } from './utils/TabsCard';
import { BentoCards } from './utils/BentoCards';

export const TabsComponent = () => {
  return (
    <div className='w-full h-[40vh]'>
      <Tabs
        defaultValue='Monthy Visitors'
        className='w-full h-full bg-slate-700/20 backdrop-blur-5xl rounded-t-lg py-10 px-1'
      >
        {TabsItems.map(({ id, description, icon, image, title }) => (
          <TabsContent key={id} value={title}>
            <BentoCards
              description={description}
              id={id}
              icon={icon}
              title={title}
              image={image}
            />
          </TabsContent>
        ))}
        <TabsList className='flex-grow overflow-hidden'>
          {TabsItems.map(({ id, title }) => (
            <TabsTrigger
              key={id}
              value={title}
              className='bg-orange-500 text-slate-100 hover:bg-blue-500 hover:shadow-md hover:shadow-slate-600 '
            >
              {title}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

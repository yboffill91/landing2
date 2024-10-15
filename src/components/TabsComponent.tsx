import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TabsItems } from '@/constants';
import { TabsCard } from './ui/TabsCard';

export const TabsComponent = () => {
  return (
    <Tabs
      defaultValue='Monthy Visitors'
      className='w-full bg-slate-700/20 backdrop-blur-5xl rounded-t-lg py-10 px-1'
    >
      {TabsItems.map(({ id, description, icon, image, title }) => (
        <TabsContent key={id} value={title}>
          <TabsCard
            id={id}
            icon={icon}
            image={image}
            title={title}
            description={description}
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
  );
};

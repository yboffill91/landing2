import { IconType } from 'react-icons';
import {
  RiInformationLine,
  RiToolsLine,
  RiFileTextLine,
  RiServiceLine,
  RiAwardLine,
  RiLayout2Line,
  RiShieldCheckLine,
  RiBrainLine,
  RiArrowUpLine,
  RiCloudLine,
  RiCodeLine,
  RiStarLine,
  RiGroupLine,
  RiUserStarLine,
  RiArrowUpSLine,
  RiSettings3Line,
} from 'react-icons/ri';

export interface NavItem {
  id: number;
  text: string;
  icon: IconType;
  url: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    id: 2,
    text: 'About us',
    url: '/about-us',
    icon: RiInformationLine,
  },
  {
    id: 3,
    text: 'Free Tools',
    url: '/free-tools',
    icon: RiToolsLine,
  },
  {
    id: 4,
    text: 'Blog',
    url: '/blog',
    icon: RiFileTextLine,
  },
  {
    id: 5,
    text: 'Services',
    url: '/services',
    icon: RiServiceLine,
  },
];

export const HEADING = {
  head: 'Elevate Your Vision: Cultivate the Business of Your Dreams',
};

export const SOCIAL_MEDIA = [
  {
    id: 1,
    social: 'Facebook',
    icon: '',
    url: 'https://www.facebook.com/tobbi-landing-page-109441934106068/',
  },
  {
    id: 2,
    social: 'Twitter',
    icon: '',
    url: 'https://twitter.com/tobbilanding',
  },
  {
    id: 3,
    social: 'Youtube',
    icon: '',
    url: 'https://www.youtube.com/tobbilanding/',
  },
];

export interface IconTextProps {
  id: number;
  text: string;
  icon: React.ElementType;
}

export const FEATURES: IconTextProps[] = [
  {
    id: 1,
    text: 'Certified Team',
    icon: RiAwardLine,
  },
  {
    id: 2,
    text: 'Modern UI-UX',
    icon: RiLayout2Line,
  },
  {
    id: 3,
    text: 'Reliability',
    icon: RiShieldCheckLine,
  },
  {
    id: 4,
    text: 'Expertise',
    icon: RiBrainLine,
  },
  {
    id: 5,
    text: 'Top Quality',
    icon: RiStarLine,
  },
  {
    id: 6,
    text: 'Assured Growth',
    icon: RiArrowUpLine,
  },
  {
    id: 7,
    text: 'Cloud Services',
    icon: RiCloudLine,
  },
  {
    id: 8,
    text: 'Code Support',
    icon: RiCodeLine,
  },
];

export interface TabsItemsProps {
  id: number;
  image: string;
  title: string;
  description: string;
  icon: IconType;
  size?: 'small' | 'medium' | 'large';
}

export const TabsItems: TabsItemsProps[] = [
  {
    id: 1,
    title: 'Monthy Visitors',
    description:
      'We specialize in increasing your website daily traffic through tailored strategies such as search engine optimization (SEO), engaging content creation, and targeted social media marketing.',
    image: '/visitors.webp',
    icon: RiGroupLine,
    size: 'medium',
  },
  {
    id: 2,
    title: 'Daily Clients',
    description:
      'Effective marketing ensures that your buss=iness acquires multiples customers daily. We increase your visibility in the digital world, using marketing strategies that continually attract and retain new customers',
    image: '/customer.webp',
    icon: RiUserStarLine,
    size: 'small',
  },
  {
    id: 3,
    title: 'Profit Increase',
    description:
      'A well-designed website channels all digital traffic, increasing potential customer visit and turning them into loyal consumers of a product or services provided and displayed on the website',
    image: '/profit.webp',
    icon: RiArrowUpSLine,
    size: 'small',
  },
  {
    id: 4,
    title: 'High reputation',
    description:
      'A strong digital presence inproves the reputation and authority of your website. Generating quality content and positions your brand as a leader, improving search engine ranking',
    image: '/reputation.webp',
    icon: RiStarLine,
    size: 'large',
  },
  {
    id: 5,
    title: 'Manage Your software',
    description:
      'Gain unrestricted usage rights. This allows you to implement, modify, and integrate the software to meet your specific needs. Enjoy full control to maximize your business is potential and enhance productivity without licensing concerns.',
    image: '/manage.webp',
    icon: RiSettings3Line,
    size: 'small',
  },
];

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const TimeLineData: TimelineEntry[] = [
  {
    title: '1- Evaluate',
    content:
      ' SWOT (Evaluation and Diagnosis) is a method of analyzing the strengths, weaknesses, opportunities, and threats of a business. It is a structured process that helps identify the internal and external factors that can impact a company’s success. SWOT analysis is used to identify areas of improvement and potential risks, which can then be addressed to enhance a company’s overall performance.',
  },
  {
    title: '2- Brand ',
    content:
      ' Brand Your Company A strong and cohesive brand identity is essential for any business. It helps to create a unique identity that resonates with your target audience and sets you apart from the competition. A strong brand can help you to stand out in a crowded marketplace and attract customers who are looking for a specific product or service.',
  },
  {
    title: '3- Design',
    content:
      'Design Website. Ussability, appaerance, and functionality are the key factors that determine the success of a website. A well-designed website can help you to stand out from the competition and attract more customers. It can also help you to increase your online visibility and generate more leads.',
  },
  {
    title: '4- Optimize',
    content:
      'SEO Optimization. Visibility is the key to success. Search engine optimization (SEO) is the process of optimizing your website to rank higher in search engine results pages (SERPs). By optimizing your website for search engines, you can increase your online visibility and attract more organic traffic to your site.',
  },
  {
    title: '5- Marketing',
    content:
      'Digital Marketinf Strategy. Customers are the lifeblood of any business. By creating a strong digital marketing strategy, you can attract more customers to your website and increase your online visibility. This can help you to generate more leads and increase your sales.',
  },
  {
    title: '6- Automate',
    content:
      'Automation and workflow programming. Automation is the process of using technology to perform repetitive tasks without human intervention. By automating your workflows, you can save time and increase efficiency. This can help you to streamline your business processes and improve your productivity.',
  },
  {
    title: '7- Adjust',
    content:
      'Continuous Analysis and Adjustment. The business world is constantly changing, and it is essential to stay up-to-date with the latest trends and technologies. By continuously analyzing and adjusting your business strategies, you can stay ahead of the competition and remain competitive in the marketplace.',
  },
  {
    title: '8- Expand',
    content:
      'Global Expansion and Growth. The business world is constantly changing, and it is essential to stay up-to-date with the latest trends and technologies. By continuously analyzing and adjusting your business strategies, you can stay ahead of the competition and remain competitive in the marketplace.',
  },
];

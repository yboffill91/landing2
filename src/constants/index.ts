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
}

export const TabsItems: TabsItemsProps[] = [
  {
    id: 1,
    title: 'Monthy Visitors',
    description:
      'We specialize in increasing your website daily traffic through tailored strategies such as search engine optimization (SEO), engaging content creation, and targeted social media marketing.',
    image: '/visitors.webp',
    icon: RiGroupLine,
  },
  {
    id: 2,
    title: 'Daily Clients',
    description:
      'Effective marketing ensures that your buss=iness acquires multiples customers daily. We increase your visibility in the digital world, using marketing strategies that continually attract and retain new customers',
    image: '/customer.webp',
    icon: RiUserStarLine,
  },
  {
    id: 3,
    title: 'Profit Increase',
    description:
      'A well-designed website channels all digital traffic, increasing potential customer visit and turning them into loyal consumers of a product or services provided and displayed on the website',
    image: '/profit.webp',
    icon: RiArrowUpSLine,
  },
  {
    id: 4,
    title: 'High reputation',
    description:
      'A strong digital presence inproves the reputation and authority of your website. Generating quality content and positions your brand as a leader, improving search engine ranking',
    image: '/reputation.webp',
    icon: RiStarLine,
  },
  {
    id: 5,
    title: 'Manage Your software',
    description:
      'Gain unrestricted usage rights. This allows you to implement, modify, and integrate the software to meet your specific needs. Enjoy full control to maximize your business is potential and enhance productivity without licensing concerns.',
    image: '/manage.webp',
    icon: RiSettings3Line,
  },
];

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}


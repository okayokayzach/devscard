import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/zach.jpg'),
  fullName: 'Zachary Prins',
  role: 'Student',
  details: [
    //{ label: 'Phone', value: '605 475 6961', url: 'tel:605 475 6961' },
    { label: 'Email', value: 'zacharyprins00@gmail.com', url: 'mailto:zacharyprins00@gmail.com' },
    { label: 'From', value: 'Kamloops, British Columbia' },
    //{ label: 'Salary range', value: '18 000 - 25 000 PLN' },
  ],
  pdfDetails: [
    //{ label: 'Phone', value: '605 475 6961' },
    { label: 'Email', value: 'zacharyprins00@gmail.com' },
    { label: 'LinkedIn', value: '/in/zachary-prins', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/okayokayzach', url: 'https://github.com' },
    { label: 'Website', value: 'zacharyprinsportfolio.vercel.app', url: '/', fullRow: true },
  ],
  description:
    'needs description and highlights. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  tags: [
    { name: 'Looking for Co-op oppourtonities' },
    { name: 'Currently in University' },
    { name: 'Working on side projects' },
  ],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Zachary_Prins.pdf',
  },
  links: [
    github({ url: 'https://github.com/okayokayzach' }),
    linkedin({ url: 'https://www.linkedin.com/in/zachary-prins/' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;

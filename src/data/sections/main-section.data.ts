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
  image: import('@/assets/my-image.jpeg'),
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
    'Lorem ipsum dolor sit amet, consectetur **adipiscing elit**. In sodales ac dui at *vestibulum*. In condimentum metus id dui tincidunt, in blandit mi [vehicula](/). Nulla lacinia, erat sit amet elementum vulputate, lectus mauris volutpat mi, vitae accumsan metus elit ut nunc. Vestibulum lacinia enim eget eros fermentum scelerisque. Proin augue leo, posuere ut imperdiet vitae, fermentum eu ipsum. Sed sed neque sagittis, posuere urna nec, commodo leo. Pellentesque posuere justo vitae massa volutpat maximus.',
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

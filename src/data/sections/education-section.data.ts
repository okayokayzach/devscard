import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Bachelor of Science',
      institution: 'Thompson Rivers University',
      image: import('@/assets/logos/tru-logo.png'),
      dates: [new Date('2023.09'), new Date('2027.05')],
      description: 'Major in Mathematics and Economics. Minor in Computing Science.',
      links: [website({ url: '#' })],
    },
    // {
    //   title: 'Information Technology',
    //   institution: 'Wrocław University of Science and Technology',
    //   image: import('@/assets/logos/wroclaw-university-of-technology.jpg'),
    //   dates: [new Date('2011.10'), new Date('2014.07')],
    //   description: "Bachelor's degree. Specialization in application development.",
    //   links: [website({ url: '#' })],
    // },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;

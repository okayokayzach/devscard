import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';
import {
  linearAlgebra,
  calc,
  diffQ,
  macroEcon,
  gpa,
  deans,
  microEcon,
  AI,
  obj,
  dataStruct,
  discrete,
  stat,
} from '../helpers/skills';

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
      major: 'Major in Mathematics and Economics, minor in Computing Science',
      institution: 'Thompson Rivers University',
      image: import('@/assets/logos/tru-logo.png'),
      dates: [new Date('2023.09'), new Date('2027.05')],
      keypoints: {
        title: '',
        tags: [gpa(), deans()],
      },
      description: `
        Need to put a better description here.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      `,
      courses: {
        title: 'Courses',
        tags: [
          diffQ(),
          calc(),
          linearAlgebra(),
          discrete(),
          stat(),
          AI(),
          obj(),
          dataStruct(),
          macroEcon(),
          microEcon(),
        ],
      },
      links: [website({ url: 'https://www.tru.ca/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;

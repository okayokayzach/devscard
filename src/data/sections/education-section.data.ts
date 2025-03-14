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
      description: `
         Majoring in Mathematics and Economics. Minoring in Computing Science. Acheived a 4.30 GPA and consistent Dean's list recognition.
        -Acquired analytical, problem-solving skills, and attention to detail from math curriculum.
        -Developing a strong foundation in microeconomics, macroeconomics, and economic modeling through coursework.
      `,
      links: [website({ url: 'https://www.tru.ca/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;

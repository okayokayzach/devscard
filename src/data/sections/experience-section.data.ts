import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  chakraUi,
  eslint,
  firebase,
  nextJs,
  nx,
  pnpm,
  react,
  reactQuery,
  tailwindCss,
  typescript,
  vue,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Retail Team Member',
      company: 'Lyons Landscaping & Garden Centre',
      image: import('@/assets/logos/lyons-logo.png'),
      dates: [new Date('2024-05'), new Date('2024-09')],
      description: `
        - Took initiative in expanding knowledge of plant care and landscaping materials to provide better support to customers.
      `,
      tagsList: {
        title: 'Courses',
        tags: [react(), nextJs(), typescript(), nx(), firebase()],
      },
      links: [facebook({ url: '#' }), linkedin({ url: '#' })],
    },
    {
      role: 'Soft Goods Manager',
      company: 'Ski Cellar Snowboard',
      image: import('@/assets/logos/ski-cellar-logo.jpg'),
      dates: [new Date('2022-08'), new Date('2023-04')],
      description: `
        -Led a team to exceed sales targets, showcasing leadership and teamwork.
        -Demonstrated strong written professional communication skills through emailing within and outside of the company.
        -Oversaw operational functions, including financial security (cash drops, balancing), administrative tasks, and resolving escalated customer issues, in addition to sales responsibilities, highlighting multitasking abilities.
      `,
      tagsList: {
        title: 'Skills',
        tags: [react(), reactQuery(), chakraUi(), eslint()],
      },
      links: [website({ url: '#' }), instagram({ url: '#' })],
    },
    {
      role: 'Sales Associate',
      company: 'Ski Cellar Snowboard',
      image: import('@/assets/logos/ski-cellar-logo.jpg'),
      dates: [new Date('2016-09'), new Date('2019-04')],
      description: `
        -Consistently performed above sales goals in a fast-paced, high-revenue environment.
        - Top salesperson in the company of 50+ employees two consecutive holiday seasons.
      `,
      tagsList: {
        title: 'Skills',
        tags: [vue(), tailwindCss(), pnpm()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;

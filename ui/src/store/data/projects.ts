import { ProjectItem, ExperienceType } from '../../types';

const vel = [0, 0, 4];
const col = '#bb787b';

const data = [
  {
    name: 'Chatbot HomeSpace',
    for: 'Credit Suisse',
    description:
      'Animated and interactive landing page promoting internal IT service.',
    about: [
      'React, Redux, react-transition-groups, Anime.js, bem, scss',
      'UX design, graphic design, preparation of creative concept',
    ],
  },
  {
    name: 'Order Management System',
    for: 'Credit Suisse',
    description:
      'Interface development for the custom-tailored, „Jira like” order placing system.',
    about: [
      'React, React-bootstrap, scss, anime.js, SVG, Subversion, Visual Studio Code',
      'Graphic design and UX design',
      'leading over a 4 person team assigned for interface design, leading over brainstorming, creative concepting and design, shadowing the application tests and tracking of bugs',
    ],
  },
  {
    name: 'Collaboration Hub',
    for: 'Credit Suisse',
    about: [
      'angularjs 1.2.32, SharePoint2010 REST, bootstrap3 grid, desandro-masonry, raphael.js',
      'create a basic search engine capability, that can be connected to various resources',
      'UX and design - masonry-type layout to present multi-level filtered data, that was later introduced as a global „branding best practice„',
    ],
  },
];

export const projects: ProjectItem[] = data.map((el) => {
  return {
    ...el,
    type: ExperienceType.Project,
    sortingVelocity: vel,
    customColor: col,
  };
});

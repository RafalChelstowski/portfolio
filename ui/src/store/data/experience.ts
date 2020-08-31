import { ExperienceItem, ExperienceType } from '../../types';

const vel = [-4, 0, 0];
const col = '#426271';

const data = [
  {
    company: 'TouK',
    fromTo: 'Jul 2020 -> current',
    jobtitle: 'Front-end Developer',
    where: 'Warsaw',
    current: true,
  },
  {
    company: 'Itransition Group',
    fromTo: 'Jan 2020 - Apr 2020',
    jobtitle: 'Front-end Developer',
    where: 'Warsaw',
  },
  {
    company: 'Credit Suisse',
    fromTo: 'May 2016 - Dec 2019',
    jobtitle:
      'Multimedia Designer -> Front-End Developer -> Senior Web Developer',
    where: 'Wroclaw',
  },
  {
    company: 'Getback SA',
    fromTo: 'May 2014 - Dec 2015',
    jobtitle:
      'Marketing Specialist -> Marketing Lead -> Creative Projects Lead',
    where: 'Wroclaw',
  },
  {
    company: 'Marketing/web/print freelancer',
    fromTo: 'Sep 2007 - May 2016',
    jobtitle: 'Freelancer',
    where: 'Wroclaw',
  },
];

export const experience: ExperienceItem[] = data.map((el) => {
  return {
    ...el,
    type: ExperienceType.Experience,
    sortingVelocity: vel,
    customColor: col,
  };
});

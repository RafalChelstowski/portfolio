import { EducationItem, ExperienceType } from '../../types';

const vel = [4, 0, 0];
const col = '#d89ea6';

const data = [
  {
    school: 'University of Wroclaw',
    fromTo: '2004 - 2011',
    title: 'History',
  },
  {
    school: 'University of Wroclaw',
    fromTo: '2007 - 2012',
    title: 'Political Science',
  },
  {
    school: 'Université libre de Bruxelles',
    fromTo: '2011',
    title: 'Political Science',
  },
];

export const education: EducationItem[] = data.map((el) => {
  return {
    ...el,
    type: ExperienceType.Education,
    sortingVelocity: vel,
    customColor: col,
  };
});

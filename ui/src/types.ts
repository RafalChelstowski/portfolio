export enum ExperienceType {
  Experience = 'Experience',
  Education = 'Education',
  Project = 'Project',
}

interface Item3dProps {
  sortingVelocity: number[];
  customColor: string;
}

interface DateLocation {
  fromTo: string;
  where?: string;
}

export interface ExperienceItem extends Item3dProps, Required<DateLocation> {
  type: ExperienceType.Experience;
  company: string;
  jobtitle: string;
  current?: boolean;
}

export interface EducationItem extends Item3dProps, DateLocation {
  type: ExperienceType.Education;
  school: string;
  title: string;
}

export interface ProjectItem extends Item3dProps {
  type: ExperienceType.Project;
  name: string;
  for: string;
  description?: string;
  about: string[];
}

type AllDataItems = ExperienceItem | EducationItem | ProjectItem;

interface ControlProps {
  id: string;
  callback?: (item: AllDataItems) => void;
}

export type Item3d = AllDataItems & ControlProps;

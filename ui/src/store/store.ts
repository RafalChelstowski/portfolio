import create from 'zustand';
import { experience } from './data/experience';
import { education } from './data/education';
import { projects } from './data/projects';

const useStore = create(() => ({
  experience,
  education,
  projects,
}));

export { useStore };

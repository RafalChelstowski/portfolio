import create from 'zustand';
import { experience } from './data/experience';
import { education } from './data/education';
import { projects } from './data/projects';
import { Item3d } from '../types';

const useStore = create((set) => ({
  experience,
  education,
  projects,
  content: null,
  setContent: (item: Item3d) => set(() => ({ content: item })),
}));

export { useStore };

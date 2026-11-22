/**
 * Central Data Export Module for Devansh Portfolio Remake
 * Next.js Type-Safe Imports
 */

import profileData from './profile.json';
import projectsData from './projects.json';
import experienceData from './experience.json';
import publicationsData from './publications.json';
import skillsData from './skills.json';
import activityData from './activity.json';
import navigationData from './navigation.json';
import imagesData from './images.json';
import contactData from './contact.json';

// Type definitions
export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  figure: string;
  name: string;
  subtitle: string;
  tagline: string;
  category: string;
  tech: string[];
  demo: string | null;
  code: string | null;
  color: string;
  poster: string | null;
  video: string | null;
  impact: string;
  pipelineStages?: string[];
  metrics: ProjectMetric[];
  specs: string[];
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  timelineRange: string;
  type: string;
  current: boolean;
  summary: string;
  points: string[];
  achievements?: string[];
  technologies: string[];
}

export interface PublicationItem {
  id: string;
  number: string;
  title: string;
  type: 'research_paper' | 'published_book' | 'certification' | 'specialization';
  badge: string;
  status: string;
  venue: string;
  role: string;
  description: string;
  link: string;
  linkText: string;
  tags: string[];
}

export interface SkillItem {
  name: string;
  logoUrl: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: SkillItem[];
}

export const profile = profileData;
export const projects = projectsData as Project[];
export const featuredProjects = projects.filter((p) => p.featured);
export const experience = experienceData as ExperienceItem[];
export const publications = publicationsData as PublicationItem[];
export const skills = skillsData as SkillCategory[];
export const activity = activityData;
export const navigation = navigationData;
export const images = imagesData;
export const contact = contactData;

export default {
  profile,
  projects,
  featuredProjects,
  experience,
  publications,
  skills,
  activity,
  navigation,
  images,
  contact,
};

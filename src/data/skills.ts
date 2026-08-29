// Skills data
export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  color: string;
  accentColor: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    label: 'Programming',
    color: 'rgba(0, 212, 255, 0.1)',
    accentColor: '#00d4ff',
    skills: [
      { name: 'C++', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Python', level: 88 },
    ],
  },
  {
    id: 'web',
    label: 'Web Development',
    color: 'rgba(124, 58, 237, 0.1)',
    accentColor: '#7c3aed',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Node.js', level: 82 },
      { name: 'Express', level: 80 },
      { name: 'REST APIs', level: 88 },
    ],
  },
  {
    id: 'aiml',
    label: 'AI / ML',
    color: 'rgba(0, 102, 255, 0.1)',
    accentColor: '#0066ff',
    skills: [
      { name: 'Machine Learning', level: 80 },
      { name: 'Linear Regression', level: 85 },
      { name: 'Logistic Regression', level: 82 },
      { name: 'Classification', level: 78 },
      { name: 'AI Systems', level: 75 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    color: 'rgba(16, 185, 129, 0.1)',
    accentColor: '#10b981',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'Docker', level: 70 },
    ],
  },
];

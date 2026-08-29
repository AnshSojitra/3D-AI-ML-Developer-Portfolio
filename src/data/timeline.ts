// Timeline / Experience data
export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  type: 'education' | 'project' | 'learning' | 'achievement';
  icon: string;
}

export const timelineItems: TimelineItem[] = [
  {
    id: 'edu-1',
    year: '2022 — Present',
    title: 'Bachelor of Technology — Computer Science',
    subtitle: 'University / Institute Name',
    description:
      'Pursuing a degree in Computer Science with a focus on software engineering, algorithms, data structures, and machine learning. Maintaining strong academic performance while working on real-world projects.',
    tags: ['Computer Science', 'Data Structures', 'Algorithms', 'OOP'],
    type: 'education',
    icon: '🎓',
  },
  {
    id: 'ml-1',
    year: '2023',
    title: 'Machine Learning Foundations',
    subtitle: 'Self-directed learning & coursework',
    description:
      'Completed comprehensive ML courses covering supervised & unsupervised learning, neural networks, and model evaluation. Implemented algorithms from scratch in Python including linear regression, logistic regression, decision trees, and k-means clustering.',
    tags: ['Python', 'NumPy', 'Scikit-learn', 'Jupyter', 'TensorFlow'],
    type: 'learning',
    icon: '🤖',
  },
  {
    id: 'web-1',
    year: '2023',
    title: 'Full-Stack Web Development',
    subtitle: 'React · Node.js · TypeScript',
    description:
      'Mastered modern web development with React and TypeScript on the frontend, and Node.js with Express on the backend. Built multiple REST APIs, integrated databases, and deployed applications to cloud platforms.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    type: 'learning',
    icon: '💻',
  },
  {
    id: 'proj-1',
    year: '2023',
    title: 'Chess Engine Development',
    subtitle: 'C++ · Game AI',
    description:
      'Designed and implemented a fully functional chess engine from scratch in C++, incorporating advanced game-tree search algorithms including minimax with alpha-beta pruning, iterative deepening, and a custom evaluation function.',
    tags: ['C++', 'Game AI', 'Alpha-Beta Pruning', 'Algorithm Design'],
    type: 'project',
    icon: '♟️',
  },
  {
    id: 'proj-2',
    year: '2024',
    title: 'AI Chess Learning Platform',
    subtitle: 'Full-Stack AI Application',
    description:
      'Built an end-to-end AI-powered chess learning platform combining game analysis, personalized training, and performance tracking. Integrated ML models for position evaluation and game pattern recognition.',
    tags: ['Python', 'React', 'FastAPI', 'TensorFlow', 'PostgreSQL'],
    type: 'project',
    icon: '🧠',
  },
  {
    id: 'cloud-1',
    year: '2024',
    title: 'Cloud & DevOps',
    subtitle: 'Docker · CI/CD · Cloud Platforms',
    description:
      'Explored containerization with Docker, set up CI/CD pipelines, and deployed applications to cloud infrastructure. Gained practical experience with environment configuration, secrets management, and production deployments.',
    tags: ['Docker', 'GitHub Actions', 'Linux', 'Nginx', 'Cloud'],
    type: 'learning',
    icon: '☁️',
  },
];

// Projects data
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  category: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: 'chess-ai',
    title: 'AI-Based Chess Learning Platform',
    description:
      'An intelligent chess learning platform powered by AI that adapts to your skill level, analyzes your games, and provides personalized training paths.',
    longDescription:
      'A full-stack platform that uses machine learning to analyze chess games, identify weaknesses in your play, suggest targeted exercises, and track improvement over time. Features include real-time position analysis, opening explorer, endgame trainer, and AI-generated game reports.',
    tech: ['Python', 'React', 'TypeScript', 'FastAPI', 'TensorFlow', 'PostgreSQL', 'Redis'],
    githubUrl: 'https://github.com/anshsojitra',
    liveUrl: '#',
    featured: true,
    category: 'AI / ML',
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    id: 'chess-engine',
    title: 'Chess Engine',
    description:
      'A high-performance chess engine built in C++ implementing minimax with alpha-beta pruning, transposition tables, and advanced position evaluation.',
    longDescription:
      'A from-scratch chess engine that implements core AI search algorithms. Supports UCI protocol, allowing it to be used with any chess GUI. Features include iterative deepening, quiescence search, killer moves heuristic, and a hand-crafted evaluation function.',
    tech: ['C++', 'CMake', 'UCI Protocol', 'Alpha-Beta Pruning'],
    githubUrl: 'https://github.com/anshsojitra',
    liveUrl: '#',
    featured: false,
    category: 'Software Engineering',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 'restful-api',
    title: 'RESTful API — Node.js & Express',
    description:
      'A production-ready REST API with JWT authentication, role-based access control, rate limiting, and comprehensive API documentation.',
    longDescription:
      'A scalable backend API built with Node.js and Express. Implements secure authentication with JWT & refresh tokens, middleware pipeline for request validation, Mongoose ODM integration, automated testing with Jest, and Swagger UI documentation.',
    tech: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'JWT', 'Jest', 'Swagger'],
    githubUrl: 'https://github.com/anshsojitra',
    liveUrl: '#',
    featured: false,
    category: 'Web Development',
    gradient: 'from-green-500/20 to-cyan-500/20',
  },
  {
    id: 'ml-projects',
    title: 'Machine Learning Projects',
    description:
      'A collection of ML projects implementing core algorithms from scratch — linear regression, logistic regression, classification, and neural networks.',
    longDescription:
      'A comprehensive repository of machine learning implementations including supervised learning algorithms, data preprocessing pipelines, feature engineering experiments, and visualization notebooks. Each project includes detailed mathematical explanations and performance benchmarks.',
    tech: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Jupyter'],
    githubUrl: 'https://github.com/anshsojitra',
    liveUrl: '#',
    featured: false,
    category: 'AI / ML',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
];

export type Project = {
  title: string
  summary: string
  architecture: string
  tags: string[]
  githubUrl: string
  demoUrl: string
}

export type Experience = {
  period: string
  role: string
  details: string
}

export const skills = [
  'Python',
  'PyTorch',
  'TensorFlow',
  'Large Language Models',
  'Prompt Engineering',
  'MLOps',
  'React',
  'Three.js',
  'TypeScript',
  'FastAPI',
]

export const projects: Project[] = [
  {
    title: 'NeuroVision Studio',
    summary: 'Computer-vision platform for defect detection with active learning feedback loops.',
    architecture: 'Edge inference with TensorRT + FastAPI model gateway + React analytics dashboard.',
    tags: ['Computer Vision', 'MLOps', 'FastAPI'],
    githubUrl: 'https://github.com/AnshSojitra/neurovision-studio',
    demoUrl: 'https://neurovision-studio-demo.vercel.app',
  },
  {
    title: 'RAG Copilot',
    summary: 'Enterprise retrieval-augmented assistant for engineering documentation and support.',
    architecture: 'Hybrid vector + BM25 retrieval, reranking, and guardrailed LLM orchestration.',
    tags: ['LLM', 'RAG', 'Vector Search'],
    githubUrl: 'https://github.com/AnshSojitra/rag-copilot',
    demoUrl: 'https://rag-copilot-preview.vercel.app',
  },
  {
    title: 'ForecastMesh',
    summary: 'Multi-model time-series forecasting workbench for experimentation and deployment.',
    architecture: 'Temporal transformers + feature store + experiment tracking with automated reports.',
    tags: ['Time Series', 'Transformers', 'Experimentation'],
    githubUrl: 'https://github.com/AnshSojitra/forecastmesh',
    demoUrl: 'https://forecastmesh.vercel.app',
  },
]

export const experience: Experience[] = [
  {
    period: '2024 — Present',
    role: 'AI/ML Engineer • Independent',
    details: 'Building production AI experiences, from dataset curation and fine-tuning to frontend delivery.',
  },
  {
    period: '2022 — 2024',
    role: 'Full-Stack AI Developer • Applied Research',
    details: 'Shipped NLP and CV systems, improved model observability, and reduced inference latency.',
  },
  {
    period: '2020 — 2022',
    role: 'Research Associate • Deep Learning Lab',
    details: 'Focused on representation learning, weak supervision, and reproducible ML experimentation.',
  },
]

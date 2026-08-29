import { lazy, Suspense } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { CursorEffect } from './components/layout/CursorEffect';
import { Hero } from './sections/Hero';

// Lazy load below-fold sections
const About = lazy(() => import('./sections/About').then((m) => ({ default: m.About })));
const Skills = lazy(() => import('./sections/Skills').then((m) => ({ default: m.Skills })));
const Projects = lazy(() => import('./sections/Projects').then((m) => ({ default: m.Projects })));
const Experience = lazy(() => import('./sections/Experience').then((m) => ({ default: m.Experience })));
const GitHubSection = lazy(() => import('./sections/GitHub').then((m) => ({ default: m.GitHubSection })));
const Contact = lazy(() => import('./sections/Contact').then((m) => ({ default: m.Contact })));

function SectionLoader() {
  return (
    <div className="w-full h-32 flex items-center justify-center">
      <div className="w-6 h-6 border border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#020202] text-white overflow-x-hidden">
      {/* Layout chrome */}
      <CursorEffect />
      <ScrollProgress />
      <Navbar />

      {/* Main content */}
      <main id="main-content">
        <Hero />

        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <GitHubSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

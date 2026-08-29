import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight, Star, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../components/ui/GithubIcon';
import { projects } from '../data/projects';
import { SectionHeading, Badge } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const categoryColors: Record<string, 'cyan' | 'purple' | 'blue' | 'green' | 'orange'> = {
  'AI / ML': 'cyan',
  'Software Engineering': 'purple',
  'Web Development': 'green',
};

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      className="relative group rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Top gradient bar */}
      <div className={`h-px bg-gradient-to-r ${project.gradient.replace('/20', '')} opacity-50`} />

      {/* Project visual */}
      <div className={`relative h-36 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Project icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
            animate={hovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-2xl font-black text-white">
              {project.title.charAt(0)}
            </span>
          </motion.div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <Badge color={categoryColors[project.category] || 'default'}>{project.category}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-base font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-xs text-white/40 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[9px] text-white/40 bg-white/[0.04] border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 rounded text-[9px] text-white/30">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] text-white/50 border border-white/[0.08] hover:text-white hover:border-white/20 transition-all duration-300 uppercase tracking-wider"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GithubIcon size={11} />
            Code
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] text-cyan-400/70 border border-cyan-400/20 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-300 uppercase tracking-wider"
            aria-label={`View ${project.title} live demo`}
          >
            <ExternalLink size={11} />
            Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function FeaturedProject() {
  const featured = projects.find((p) => p.featured)!;

  return (
    <motion.article
      className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Visual side */}
        <div
          className={`relative min-h-64 lg:min-h-auto bg-gradient-to-br ${featured.gradient} p-12 flex items-center justify-center overflow-hidden`}
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
            aria-hidden="true"
          />

          {/* Animated rings */}
          <div className="relative">
            {[80, 120, 160].map((size, i) => (
              <motion.div
                key={size}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"
                style={{ width: size, height: size }}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 8 + i * 4, repeat: Infinity, ease: 'linear' }}
              />
            ))}

            <div className="relative z-10 w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <span className="text-4xl font-black text-white">♟</span>
            </div>
          </div>

          {/* Featured label */}
          <div className="absolute top-4 left-4 flex items-center gap-1.5">
            <Star size={11} className="text-yellow-400 fill-yellow-400" />
            <span className="text-[10px] tracking-widest uppercase text-yellow-400 font-medium">
              Featured
            </span>
          </div>
        </div>

        {/* Content side */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <Badge color={categoryColors[featured.category] || 'default'} className="mb-4 self-start">
            {featured.category}
          </Badge>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            {featured.title}
          </h3>

          <p className="text-sm text-white/50 leading-relaxed mb-6">
            {featured.longDescription}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-8">
            {featured.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-full text-[10px] text-white/50 border border-white/[0.08] bg-white/[0.03]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="md" href={featured.githubUrl} external>
              <GithubIcon size={13} />
              View Code
            </Button>
            <Button variant="outline" size="md" href={featured.liveUrl} external>
              <ArrowUpRight size={13} />
              Live Demo
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 relative overflow-hidden" aria-label="Projects section">
      {/* Background accent */}
      <div
        className="absolute right-0 top-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle at top right, rgba(0,102,255,0.05), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="Projects"
          title="Things I've built."
          subtitle="A collection of projects spanning AI, software engineering, and web development."
        />

        {/* Featured */}
        <div className="mt-16 mb-10">
          <FeaturedProject />
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button
            variant="outline"
            size="lg"
            href="https://github.com/anshsojitra"
            external
          >
            <GithubIcon size={14} />
            View All on GitHub
            <ChevronRight size={14} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

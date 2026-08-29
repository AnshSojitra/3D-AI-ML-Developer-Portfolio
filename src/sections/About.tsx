import { motion } from 'framer-motion';
import { Code2, Brain, Layers, Cpu } from 'lucide-react';
import { SectionHeading, GlowCard } from '../components/ui/Card';

const focusAreas = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description:
      'Passionate about ML algorithms, intelligent systems, and applying data science to solve real-world problems.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/5',
    border: 'border-cyan-400/10',
  },
  {
    icon: Code2,
    title: 'Software Engineering',
    description:
      'Writing clean, maintainable, and efficient code. Strong foundation in data structures, algorithms, and system design.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/5',
    border: 'border-purple-500/10',
  },
  {
    icon: Layers,
    title: 'Full-Stack Web Development',
    description:
      'Building modern web applications with React, TypeScript, and Node.js — from pixel-perfect UIs to scalable APIs.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/5',
    border: 'border-blue-500/10',
  },
  {
    icon: Cpu,
    title: 'Systems & Performance',
    description:
      'Interested in low-level programming, optimization, and building high-performance systems with C++ and Go.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/5',
    border: 'border-emerald-500/10',
  },
];

function HolographicCard() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Glow backdrop */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 to-purple-500/10 blur-2xl scale-110" />

      <motion.div
        className="relative rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-8 overflow-hidden"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Scanning line effect */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />

        {/* Top decoration */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.6s' }} />
          <div className="flex-1 h-px bg-white/10 ml-2" />
        </div>

        {/* Avatar placeholder */}
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-white/10 flex items-center justify-center mb-5">
          <span className="text-3xl font-black gradient-text">AS</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-1">Ansh Sojitra</h3>
        <p className="text-xs text-cyan-400 tracking-widest uppercase mb-4">
          AI/ML Developer
        </p>

        <div className="space-y-2">
          {['Machine Learning', 'React · TypeScript', 'C++ · Python', 'Problem Solving'].map(
            (skill) => (
              <div key={skill} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-cyan-400" />
                <span className="text-xs text-white/50">{skill}</span>
              </div>
            )
          )}
        </div>

        {/* Corner decorations */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-cyan-400/30 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-purple-500/30 rounded-bl-lg" />
      </motion.div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden" aria-label="About section">
      {/* Background accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="About Me"
          title="Driven by curiosity, built on code."
          subtitle="I'm a developer who loves exploring the intersection of artificial intelligence and software engineering."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-5 text-white/60 text-base leading-relaxed">
              <p>
                I'm <strong className="text-white">Ansh Sojitra</strong>, an aspiring AI/ML developer
                and software engineer passionate about building intelligent, impactful systems. I
                combine a strong foundation in computer science with hands-on experience in machine
                learning, full-stack web development, and systems programming.
              </p>
              <p>
                My journey started with a deep curiosity about{' '}
                <span className="text-cyan-400">how machines can learn</span> — which led me to
                explore everything from implementing ML algorithms from scratch to building production
                REST APIs and chess-playing programs.
              </p>
              <p>
                Beyond writing code, I'm passionate about understanding the{' '}
                <span className="text-purple-400">theory behind the tools</span> — from mathematical
                foundations of gradient descent to the architecture of transformer models. I believe
                the best engineers understand not just <em>how</em> but <em>why</em>.
              </p>
            </div>

            {/* Highlight points */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: 'Location', value: 'India' },
                { label: 'Focus', value: 'AI / ML + Web' },
                { label: 'Languages', value: 'C++, Python, JS/TS' },
                { label: 'Status', value: 'Open to Work' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                >
                  <div className="text-[10px] text-white/30 tracking-widest uppercase mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm text-white font-medium">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Holographic Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <HolographicCard />
          </motion.div>
        </div>

        {/* Focus Areas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-24">
          {focusAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <GlowCard
                key={area.title}
                className="p-6"
                glowColor={['cyan', 'purple', 'blue', 'green'][i] as 'cyan' | 'purple' | 'blue' | 'green'}
              >
                <div className={`w-10 h-10 rounded-xl ${area.bg} border ${area.border} flex items-center justify-center mb-4`}>
                  <Icon size={18} className={area.color} />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{area.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{area.description}</p>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

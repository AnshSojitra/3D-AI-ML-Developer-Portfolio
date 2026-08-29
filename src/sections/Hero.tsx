import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, FileText, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/ui/GithubIcon';
import { HeroScene } from '../components/three/HeroScene';
import { Button } from '../components/ui/Button';
import gsap from 'gsap';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
};

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={16} />
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // GSAP text glitch reveal
    if (nameRef.current) {
      gsap.fromTo(
        nameRef.current,
        { opacity: 0, letterSpacing: '0.5em', filter: 'blur(10px)' },
        {
          opacity: 1,
          letterSpacing: '0.05em',
          filter: 'blur(0px)',
          duration: 1.5,
          delay: 0.3,
          ease: 'power4.out',
        }
      );
    }
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#020202]"
      aria-label="Hero section"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Radial gradient center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* 3D Scene */}
      <HeroScene className="absolute inset-0 w-full h-full" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Status badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-[10px] tracking-[0.25em] uppercase font-medium">
              Available for opportunities
            </span>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Name */}
            <motion.div variants={itemVariants} className="mb-2">
              <span className="text-white/20 text-[11px] tracking-[0.4em] uppercase font-medium block mb-2">
                &lt; developer /&gt;
              </span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white leading-none">
                <span ref={nameRef}>
                  <span className="gradient-text">ANSH</span>
                  <br />
                  SOJITRA
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants} className="mt-5 mb-6">
              <p className="text-[11px] md:text-xs tracking-[0.35em] uppercase text-white/40 font-medium">
                AI / ML Developer
                <span className="mx-3 text-cyan-400">•</span>
                Software Engineer
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-white/50 text-base md:text-lg leading-relaxed max-w-xl mb-10"
            >
              Building intelligent systems, modern web applications and interactive digital
              experiences that push the boundaries of technology.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToProjects}
                glowing
                className="group"
              >
                <ExternalLink size={14} className="transition-transform group-hover:rotate-12" />
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="https://github.com/anshsojitra"
                external
              >
                <GithubIcon size={14} />
                GitHub
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="#"
                aria-label="Download Resume"
              >
                <FileText size={14} />
                Resume
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-8 mt-14"
            >
              {[
                { label: 'Projects', value: '10+' },
                { label: 'Technologies', value: '15+' },
                { label: 'Focus', value: 'AI/ML' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-xs text-white/30 tracking-widest uppercase mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

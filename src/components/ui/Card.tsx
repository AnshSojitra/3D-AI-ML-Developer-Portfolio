import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'blue' | 'green';
  hover?: boolean;
  gradient?: boolean;
}

const glowColors = {
  cyan: 'hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] hover:border-cyan-400/30',
  purple: 'hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] hover:border-purple-500/30',
  blue: 'hover:shadow-[0_0_30px_rgba(0,102,255,0.15)] hover:border-blue-500/30',
  green: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:border-emerald-500/30',
};

export function GlowCard({
  children,
  className = '',
  glowColor = 'cyan',
  hover = true,
  gradient = false,
}: GlowCardProps) {
  return (
    <motion.div
      className={`
        relative rounded-2xl
        bg-white/[0.03] backdrop-blur-xl
        border border-white/[0.06]
        transition-all duration-500
        ${hover ? glowColors[glowColor] : ''}
        ${gradient ? 'gradient-border' : ''}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`${centered ? 'text-center' : ''} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {tag && (
        <span className="inline-block mb-4 px-3 py-1 text-[10px] font-medium tracking-[0.3em] uppercase text-cyan-400 border border-cyan-400/20 rounded-full bg-cyan-400/5">
          {tag}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

interface BadgeProps {
  children: ReactNode;
  color?: 'cyan' | 'purple' | 'blue' | 'green' | 'orange' | 'default';
  className?: string;
}

const badgeColors = {
  cyan: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  default: 'bg-white/5 text-white/60 border-white/10',
};

export function Badge({ children, color = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium border tracking-wide ${badgeColors[color]} ${className}`}
    >
      {children}
    </span>
  );
}

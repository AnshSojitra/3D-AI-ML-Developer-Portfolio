import { motion } from 'framer-motion';
import { timelineItems } from '../data/timeline';
import { SectionHeading, Badge } from '../components/ui/Card';

const typeColors = {
  education: 'cyan',
  project: 'purple',
  learning: 'blue',
  achievement: 'green',
} as const;

const typeLabels = {
  education: 'Education',
  project: 'Project',
  learning: 'Learning',
  achievement: 'Achievement',
} as const;

function TimelineItem({
  item,
  index,
  isLeft,
}: {
  item: (typeof timelineItems)[0];
  index: number;
  isLeft: boolean;
}) {
  return (
    <motion.div
      className={`relative flex items-center gap-8 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}
      initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Content card */}
      <div className={`w-full md:w-[calc(50%-2.5rem)] ${isLeft ? 'md:text-right' : ''}`}>
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-white/[0.1] hover:bg-white/[0.04] transition-all duration-300 group">
          <div className={`flex items-center gap-2 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
            <Badge color={typeColors[item.type]}>{typeLabels[item.type]}</Badge>
            <span className="text-[10px] text-white/30 tracking-widest">{item.year}</span>
          </div>

          <div className={`flex items-start gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
            <span className="text-2xl flex-shrink-0" role="img" aria-label={typeLabels[item.type]}>
              {item.icon}
            </span>
            <div>
              <h3 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors leading-snug mb-0.5">
                {item.title}
              </h3>
              <p className="text-[11px] text-white/30 tracking-wide">{item.subtitle}</p>
            </div>
          </div>

          <p className="text-xs text-white/40 leading-relaxed mb-4">{item.description}</p>

          <div className={`flex flex-wrap gap-1.5 ${isLeft ? 'md:justify-end' : ''}`}>
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] px-2 py-0.5 rounded border border-white/[0.08] text-white/30 bg-white/[0.02]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Center dot — only shown on md+ */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0">
        <motion.div
          className="w-4 h-4 rounded-full border-2 border-cyan-400 bg-black flex-shrink-0 relative z-10"
          whileInView={{ scale: [0.5, 1.2, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="absolute inset-1 rounded-full bg-cyan-400 animate-pulse-glow" />
        </motion.div>
      </div>

      {/* Empty space on other side */}
      <div className="hidden md:block w-[calc(50%-2.5rem)]" />
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden" aria-label="Experience and learning timeline">
      {/* Center line */}
      <div className="absolute left-1/2 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent hidden md:block" aria-hidden="true" />

      {/* Background glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="Journey"
          title="Experience & Learning."
          subtitle="My path through computer science, machine learning, and software engineering."
        />

        {/* Timeline */}
        <div className="relative mt-20 space-y-8">
          {/* Mobile vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent md:hidden" aria-hidden="true" />

          {timelineItems.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} isLeft={i % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

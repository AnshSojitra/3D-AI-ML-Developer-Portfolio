import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { SectionHeading } from '../components/ui/Card';

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <motion.div
      className="group"
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs text-white/70 group-hover:text-white transition-colors">{name}</span>
        <span className="text-[10px] tabular-nums" style={{ color }}>{level}%</span>
      </div>
      <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const activeData = skillCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="skills" className="py-32 relative overflow-hidden" aria-label="Skills section">
      {/* Background accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="Skills"
          title="Technologies I work with."
          subtitle="From ML algorithms to full-stack development — here's my technical toolkit."
        />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-12 mb-10">
          {skillCategories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-[11px] tracking-widest uppercase font-medium transition-all duration-300 border cursor-pointer ${
                activeCategory === cat.id
                  ? 'text-black border-transparent'
                  : 'text-white/50 border-white/10 hover:text-white hover:border-white/20'
              }`}
              style={
                activeCategory === cat.id
                  ? { background: cat.accentColor }
                  : {}
              }
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Main grid: skill bars + big card */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Skill Bars Panel */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-8"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-2 h-8 rounded-full"
                    style={{ background: activeData.accentColor }}
                  />
                  <h3 className="text-lg font-bold text-white">{activeData.label}</h3>
                </div>
                <div className="space-y-5">
                  {activeData.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={activeData.accentColor}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* All categories mini grid */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {skillCategories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'border-white/10 bg-white/[0.04]'
                    : 'border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.02]'
                }`}
                whileHover={{ x: 4 }}
              >
                <div
                  className="text-[10px] font-bold tracking-widest uppercase mb-2"
                  style={{ color: cat.accentColor }}
                >
                  {cat.label}
                </div>
                <div className="flex flex-wrap gap-1">
                  {cat.skills.slice(0, 3).map((s) => (
                    <span
                      key={s.name}
                      className="text-[9px] px-1.5 py-0.5 rounded border border-white/10 text-white/40"
                    >
                      {s.name}
                    </span>
                  ))}
                  {cat.skills.length > 3 && (
                    <span className="text-[9px] text-white/30">+{cat.skills.length - 3}</span>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* All skills chip cloud */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-xs text-white/20 tracking-widest uppercase mb-6">All Technologies</p>
          <div className="flex flex-wrap justify-center gap-2">
            {skillCategories.flatMap((cat) =>
              cat.skills.map((skill) => (
                <motion.span
                  key={`${cat.id}-${skill.name}`}
                  className="px-3 py-1.5 rounded-full text-[11px] text-white/50 border border-white/[0.08] bg-white/[0.02] hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {skill.name}
                </motion.span>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

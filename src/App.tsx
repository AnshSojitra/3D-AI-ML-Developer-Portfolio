import { useState } from 'react'
import { HeroCanvas } from './components/HeroCanvas'
import { Reveal } from './components/Reveal'
import { experience, projects, skills } from './data/portfolio'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const [status, setStatus] = useState('')

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-cyan-400/20 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            AI/ML Portfolio
          </a>
          <ul className="hidden gap-5 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition hover:text-cyan-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="home" className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10 md:py-16">
        <section className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center">
          <Reveal>
            <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-xs font-medium tracking-[0.2em] text-cyan-200">
              AI/ML ENGINEER • FULL-STACK DEVELOPER
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Building intelligent products with modern web experiences.
            </h1>
            <p className="mt-5 max-w-xl text-slate-300">
              I design and deploy machine-learning systems, then craft immersive frontends to make model behavior tangible for users and teams.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                View Projects
              </a>
              <a href="#contact" className="rounded-lg border border-purple-300/40 bg-purple-400/10 px-5 py-2.5 text-sm font-semibold text-purple-100 transition hover:bg-purple-400/20">
                Contact Me
              </a>
            </div>
          </Reveal>
          <Reveal>
            <HeroCanvas />
          </Reveal>
        </section>

        <section id="about" className="scroll-mt-24">
          <Reveal>
            <div className="rounded-2xl border border-cyan-300/20 bg-white/5 p-7 backdrop-blur-xl">
              <h2 className="mb-3 text-2xl font-semibold text-cyan-200">About Me</h2>
              <p className="leading-relaxed text-slate-300">
                I am an AI/ML Engineer and Full-Stack Developer who bridges model research and polished user-facing products. My work spans neural networks, LLM applications, production APIs, and interactive UI systems that communicate complex ML insights clearly.
              </p>
            </div>
          </Reveal>
        </section>

        <section id="skills" className="scroll-mt-24">
          <Reveal>
            <h2 className="mb-5 text-2xl font-semibold text-cyan-200">Skills & Tech Stack</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <div key={skill} className="rounded-xl border border-purple-300/25 bg-purple-400/10 px-4 py-3 text-sm text-purple-50 backdrop-blur-lg">
                  {skill}
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="projects" className="scroll-mt-24">
          <Reveal>
            <h2 className="mb-5 text-2xl font-semibold text-cyan-200">Featured Projects</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className="flex h-full flex-col rounded-2xl border border-cyan-300/20 bg-white/5 p-5 backdrop-blur-xl">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{project.summary}</p>
                  <p className="mt-3 text-xs text-cyan-100/90">Architecture: {project.architecture}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-800/90 px-2.5 py-1 text-xs text-cyan-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3 text-sm">
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="font-medium text-cyan-300 hover:text-cyan-200">
                      Live Demo
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="font-medium text-purple-200 hover:text-purple-100">
                      GitHub
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="experience" className="scroll-mt-24">
          <Reveal>
            <h2 className="mb-5 text-2xl font-semibold text-cyan-200">Experience / Research</h2>
            <div className="space-y-4 border-l border-cyan-300/30 pl-6">
              {experience.map((item) => (
                <article key={item.period} className="relative rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg">
                  <span className="absolute -left-[31px] top-5 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-200">{item.period}</p>
                  <h3 className="mt-1 text-base font-semibold text-white">{item.role}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.details}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="contact" className="scroll-mt-24 pb-10">
          <Reveal>
            <div className="grid gap-6 rounded-2xl border border-purple-300/25 bg-purple-400/10 p-6 backdrop-blur-xl md:grid-cols-[1fr_1.2fr]">
              <div>
                <h2 className="text-2xl font-semibold text-cyan-100">Contact</h2>
                <p className="mt-3 text-sm text-slate-200">
                  Let&apos;s collaborate on AI products, LLM integrations, and interactive data-driven experiences.
                </p>
                <div className="mt-5 space-y-2 text-sm">
                  <a className="block text-cyan-200 hover:text-cyan-100" href="https://github.com/AnshSojitra" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a className="block text-cyan-200 hover:text-cyan-100" href="https://www.linkedin.com/in/anshsojitra" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a className="block text-cyan-200 hover:text-cyan-100" href="mailto:ansh@example.com">
                    ansh@example.com
                  </a>
                </div>
              </div>
              <form
                className="space-y-3"
                onSubmit={(event) => {
                  event.preventDefault()
                  setStatus('Thanks! I will get back to you soon.')
                }}
              >
                <input required placeholder="Name" className="w-full rounded-lg border border-white/20 bg-slate-900/80 px-3 py-2 text-sm outline-none ring-cyan-300/60 transition focus:ring" />
                <input required type="email" placeholder="Email" className="w-full rounded-lg border border-white/20 bg-slate-900/80 px-3 py-2 text-sm outline-none ring-cyan-300/60 transition focus:ring" />
                <textarea required rows={4} placeholder="Message" className="w-full rounded-lg border border-white/20 bg-slate-900/80 px-3 py-2 text-sm outline-none ring-cyan-300/60 transition focus:ring" />
                <button type="submit" className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                  Send Message
                </button>
                {status && <p className="text-sm text-cyan-100">{status}</p>}
              </form>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  )
}

export default App

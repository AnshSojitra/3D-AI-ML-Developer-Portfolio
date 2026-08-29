import { Mail } from 'lucide-react';
import { GithubIcon } from '../ui/GithubIcon';
import { LinkedinIcon } from '../ui/LinkedinIcon';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.05] py-12 mt-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name */}
          <div>
            <span className="text-white font-bold tracking-wider">
              <span className="text-cyan-400">A</span>NSH{' '}
              <span className="text-purple-400">S</span>OJITRA
            </span>
            <p className="text-white/30 text-xs mt-1">AI/ML Developer · Software Engineer</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/anshsojitra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-white/40 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-300"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/in/anshsojitra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-white/40 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="mailto:ansh@example.com"
              className="p-2 rounded-lg text-white/40 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/20 text-xs tracking-wider">
            © {currentYear} Ansh Sojitra
          </p>
        </div>
      </div>
    </footer>
  );
}

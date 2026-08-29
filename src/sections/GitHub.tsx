import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon } from '../components/ui/GithubIcon';
import { useGitHub } from '../hooks/useGitHub';
import { SectionHeading } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'anshsojitra';

const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  'C++': '#f34b7d',
  CSS: '#563d7c',
  HTML: '#e34c26',
  Go: '#00ADD8',
  Rust: '#dea584',
  Java: '#b07219',
  default: '#8b8b8b',
};

function RepoCard({ repo, index }: { repo: ReturnType<typeof useGitHub>['repos'][0]; index: number }) {
  const langColor = languageColors[repo.language || ''] || languageColors.default;

  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -4 }}
      aria-label={`GitHub repository: ${repo.name}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <GithubIcon size={14} className="text-white/30" />
          <h3 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors truncate max-w-[140px]">
            {repo.name}
          </h3>
        </div>
        <ExternalLink size={12} className="text-white/20 group-hover:text-cyan-400/60 transition-colors flex-shrink-0" />
      </div>

      <p className="text-[11px] text-white/40 leading-relaxed mb-4 line-clamp-2 min-h-[2.5rem]">
        {repo.description || 'No description provided.'}
      </p>

      <div className="flex items-center gap-4 text-[10px] text-white/30">
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: langColor }} />
            <span>{repo.language}</span>
          </div>
        )}
        <div className="flex items-center gap-1">
          <Star size={10} />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="flex items-center gap-1">
          <GitFork size={10} />
          <span>{repo.forks_count}</span>
        </div>
      </div>
    </motion.a>
  );
}

function ProfileCard({ user }: { user: ReturnType<typeof useGitHub>['user'] }) {
  if (!user) return null;

  return (
    <motion.div
      className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={user.avatar_url}
        alt={`${user.name || user.login}'s GitHub avatar`}
        className="w-16 h-16 rounded-2xl border border-white/10"
      />
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-base font-semibold text-white">{user.name || user.login}</h3>
        <p className="text-xs text-cyan-400 mb-2">@{user.login}</p>
        {user.bio && <p className="text-xs text-white/40 mb-3">{user.bio}</p>}
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-xs text-white/40">
          <span>
            <strong className="text-white">{user.public_repos}</strong> repos
          </span>
          <span>
            <strong className="text-white">{user.followers}</strong> followers
          </span>
          <span>
            <strong className="text-white">{user.following}</strong> following
          </span>
        </div>
      </div>
      <Button variant="outline" size="sm" href={user.html_url} external>
        <GithubIcon size={12} />
        Profile
      </Button>
    </motion.div>
  );
}

export function GitHubSection() {
  const { user, repos, loading, error } = useGitHub(GITHUB_USERNAME);

  return (
    <section id="github" className="py-32 relative overflow-hidden" aria-label="GitHub section">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.05) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="GitHub"
          title="Open Source & Repos."
          subtitle="Explore my public repositories and contributions on GitHub."
        />

        <div className="mt-14 space-y-8">
          {loading && (
            <div className="flex items-center justify-center gap-3 py-16 text-white/30">
              <Loader2 size={18} className="animate-spin" />
              <span className="text-sm">Loading GitHub data…</span>
            </div>
          )}

          {error && !loading && (
            <div className="flex items-center justify-center gap-3 py-12 text-white/30">
              <AlertCircle size={18} />
              <div>
                <p className="text-sm text-white/50">Couldn't load GitHub data.</p>
                <p className="text-xs text-white/30 mt-0.5">
                  Set <code className="text-cyan-400">VITE_GITHUB_USERNAME</code> in your{' '}
                  <code className="text-cyan-400">.env</code> file.
                </p>
              </div>
            </div>
          )}

          {!loading && user && <ProfileCard user={user} />}

          {!loading && repos.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.map((repo, i) => (
                <RepoCard key={repo.id} repo={repo} index={i} />
              ))}
            </div>
          )}

          <div className="text-center pt-4">
            <Button
              variant="outline"
              size="lg"
              href={`https://github.com/${GITHUB_USERNAME}`}
              external
            >
              <GithubIcon size={14} />
              View GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

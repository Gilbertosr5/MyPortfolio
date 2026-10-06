import { useMemo, useState } from 'react';
import { ArrowUpRight, ExternalLink, FolderGit2, GitFork, Github, Sparkles, Star } from 'lucide-react';
import { githubConfig, socialLinks } from '../config';
import { useLanguage } from '../contexts/LanguageContext';
import type { Translation } from '../i18n/translations';
import type { GitHubRepo } from '../hooks/useGitHub';
import { handleGlowMove, revealDelay, useReveal } from '../hooks/useReveal';
import '../styles/Projects.css';

interface ProjectsProps {
  repos: GitHubRepo[];
  status: 'loading' | 'success' | 'error';
  isFeatured: (repo: GitHubRepo) => boolean;
}

// Cores oficiais de linguagens usadas pelo GitHub
const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  SCSS: '#c6538c',
  Kotlin: '#A97BFF',
  Swift: '#F05138',
  Dart: '#00B4AB',
  'C#': '#178600',
  Shell: '#89e051',
};


// Valor interno do filtro "todas as linguagens"
const ALL = '__all__';

const prettifyName = (name: string) =>
  name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());

const relativeTime = (iso: string, locale: string) => {
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  const diffDays = Math.round((new Date(iso).getTime() - Date.now()) / 86_400_000);
  if (Math.abs(diffDays) < 30) return rtf.format(diffDays, 'day');
  if (Math.abs(diffDays) < 365) return rtf.format(Math.round(diffDays / 30), 'month');
  return rtf.format(Math.round(diffDays / 365), 'year');
};

const ProjectCard = ({ repo, featured, index, t }: { repo: GitHubRepo; featured: boolean; index: number; t: Translation }) => (
  <article
    className={`card card-glow project-card reveal ${featured ? 'project-featured' : ''}`}
    style={revealDelay((index % 3) * 80)}
    onMouseMove={handleGlowMove}
  >
    <div className="project-top">
      <div className="project-icon">
        <FolderGit2 size={20} />
      </div>
      <div className="project-links">
        {repo.homepage && (
          <a href={repo.homepage} target="_blank" rel="noopener noreferrer" aria-label={`${t.projects.demoOf} ${repo.name}`}>
            <ExternalLink size={18} />
          </a>
        )}
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" aria-label={t.projects.codeOf(repo.name)}>
          <Github size={18} />
        </a>
      </div>
    </div>

    {featured && (
      <span className="project-badge">
        <Sparkles size={12} /> {t.projects.featured}
      </span>
    )}

    <h3 className="project-title">
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        {prettifyName(repo.name)}
        <ArrowUpRight size={18} className="project-title-arrow" />
      </a>
    </h3>

    <p className="project-description">
      {repo.description ?? t.projects.noDescription}
    </p>

    {repo.topics && repo.topics.length > 0 && (
      <div className="project-topics">
        {repo.topics.filter(t => t !== 'portfolio').slice(0, 4).map(topic => (
          <span key={topic} className="tech-tag">#{topic}</span>
        ))}
      </div>
    )}

    <footer className="project-meta">
      {repo.language && (
        <span className="meta-item">
          <span className="lang-dot" style={{ background: languageColors[repo.language] ?? 'var(--text-muted)' }} />
          {repo.language}
        </span>
      )}
      {repo.stargazers_count > 0 && (
        <span className="meta-item" title={t.projects.stars}>
          <Star size={14} /> {repo.stargazers_count}
        </span>
      )}
      {repo.forks_count > 0 && (
        <span className="meta-item" title="Forks">
          <GitFork size={14} /> {repo.forks_count}
        </span>
      )}
      <span className="meta-item meta-date">{relativeTime(repo.pushed_at, t.locale)}</span>
    </footer>
  </article>
);

const SkeletonCard = () => (
  <div className="card project-card project-skeleton" aria-hidden="true">
    <div className="sk sk-icon" />
    <div className="sk sk-title" />
    <div className="sk sk-line" />
    <div className="sk sk-line short" />
    <div className="sk sk-meta" />
  </div>
);

export const Projects = ({ repos, status, isFeatured }: ProjectsProps) => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState(ALL);
  const [showAll, setShowAll] = useState(false);

  const languages = useMemo(() => {
    const counts = new Map<string, number>();
    repos.forEach(repo => {
      if (repo.language) counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
    });
    return [ALL, ...[...counts.entries()].sort((a, b) => b[1] - a[1]).map(([lang]) => lang)];
  }, [repos]);

  const filtered = filter === ALL ? repos : repos.filter(repo => repo.language === filter);
  const visible = showAll ? filtered : filtered.slice(0, githubConfig.initialVisible);

  useReveal([status, filter, showAll]);

  return (
    <section className="section projects" id="projetos">
      <div className="container">
        <header className="section-header projects-header reveal">
          <div>
            <span className="section-eyebrow">{t.projects.eyebrow}</span>
            <h2 className="section-title">
              {t.projects.titleStart} <span className="gradient-text">GitHub</span>
            </h2>
            <p className="section-subtitle">
              {t.projects.subtitle}
            </p>
          </div>
        </header>

        {status === 'success' && languages.length > 2 && (
          <div className="filters reveal" role="tablist" aria-label={t.projects.filterLabel}>
            {languages.map(lang => (
              <button
                key={lang}
                role="tab"
                aria-selected={filter === lang}
                className={`filter-chip ${filter === lang ? 'active' : ''}`}
                onClick={() => {
                  setFilter(lang);
                  setShowAll(false);
                }}
              >
                {lang !== ALL && (
                  <span className="lang-dot" style={{ background: languageColors[lang] ?? 'var(--text-muted)' }} />
                )}
                {lang === ALL ? t.projects.all : lang}
              </button>
            ))}
          </div>
        )}

        {status === 'loading' && (
          <div className="projects-grid">
            {Array.from({ length: 6 }, (_, i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {status === 'error' && (
          <div className="card projects-error">
            <Github size={28} />
            <p>{t.projects.error}</p>
            <a href={`${socialLinks.github}?tab=repositories`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              {t.projects.viewOnGithub} <ArrowUpRight size={16} />
            </a>
          </div>
        )}

        {status === 'success' && (
          <>
            <div className="projects-grid">
              {visible.map((repo, index) => (
                <ProjectCard key={repo.id} repo={repo} featured={isFeatured(repo)} index={index} t={t} />
              ))}
            </div>

            <div className="projects-footer">
              {filtered.length > githubConfig.initialVisible && (
                <button className="btn btn-ghost" onClick={() => setShowAll(v => !v)}>
                  {showAll ? t.projects.showLess : t.projects.showAll(filtered.length)}
                </button>
              )}
              <a href={`${socialLinks.github}?tab=repositories`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <Github size={18} /> {t.projects.profile}
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

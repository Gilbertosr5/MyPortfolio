import { ArrowDown, ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import avatarImg from '../assets/Me Cartoon.png';
import { socialLinks } from '../config';
import { useLanguage } from '../contexts/LanguageContext';
import type { GitHubUser } from '../hooks/useGitHub';
import { revealDelay } from '../hooks/useReveal';
import '../styles/Hero.css';

const CAREER_START = new Date(2023, 5); // jun/2023

const useTypewriter = (list: string[]) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = list[index % list.length];
    let wait = isDeleting ? 60 : 120;

    if (!isDeleting && text === word) wait = 1800;
    else if (isDeleting && text === '') wait = 300;

    const timer = setTimeout(() => {
      if (!isDeleting && text === word) {
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex(i => (i + 1) % list.length);
      } else {
        setText(word.slice(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, wait);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, list]);

  return text;
};

interface HeroProps {
  user: GitHubUser | null;
  repoCount: number;
}

export const Hero = ({ user, repoCount }: HeroProps) => {
  const { t } = useLanguage();
  const typed = useTypewriter(t.hero.words);
  const years = Math.max(1, Math.floor((Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 3600 * 1000)));

  const stats = [
    { value: `${years}+`, label: t.hero.stats.years },
    { value: user ? String(user.public_repos) : repoCount ? String(repoCount) : '—', label: t.hero.stats.repos },
    { value: user ? String(user.followers) : '—', label: t.hero.stats.followers },
  ];

  return (
    <section className="hero" id="sobre">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge reveal">
            <span className="pulse-dot" />
            {t.hero.badge}
          </div>

          <h1 className="hero-title reveal" style={revealDelay(80)}>
            {t.hero.greeting} <span className="gradient-text">Gilberto</span>
            <span className="hero-wave" aria-hidden="true">👋</span>
          </h1>

          <p className="hero-subtitle reveal" style={revealDelay(160)}>
            {t.hero.rolePrefix && <span className="role-prefix">{t.hero.rolePrefix}</span>}
            <span className="typing-text">{typed}</span>
            <span className="cursor" aria-hidden="true" />
            {t.hero.roleSuffix && <span className="role-suffix">{t.hero.roleSuffix}</span>}
          </p>

          <p className="hero-description reveal" style={revealDelay(240)}>
            {t.hero.description}
          </p>

          <div className="hero-actions reveal" style={revealDelay(320)}>
            <a href="#projetos" className="btn btn-primary">
              {t.hero.ctaProjects} <ArrowRight size={18} />
            </a>
            <a href="#contato" className="btn btn-ghost">
              {t.hero.ctaContact}
            </a>
          </div>

          <div className="hero-social reveal" style={revealDelay(400)}>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${socialLinks.email}`} aria-label="Email">
              <Mail size={20} />
            </a>
            <span className="hero-location">
              <MapPin size={16} /> {t.hero.location}
            </span>
          </div>
        </div>

        <div className="hero-visual reveal" style={revealDelay(200)}>
          <div className="avatar-frame">
            <div className="avatar-ring" />
            <img src={avatarImg} alt={t.hero.avatarAlt} className="avatar-img" />
            <span className="float-chip chip-1"><i style={{ background: '#61dafb' }} />React</span>
            <span className="float-chip chip-2"><i style={{ background: '#ff8a1f' }} />React Native</span>
            <span className="float-chip chip-3"><i style={{ background: '#3178c6' }} />TypeScript</span>
          </div>
        </div>
      </div>

      <div className="container">
        <dl className="hero-stats reveal" style={revealDelay(480)}>
          {stats.map((stat, i) => (
            <div key={i} className="stat">
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a href="#conhecimentos" className="scroll-hint" aria-label={t.hero.scrollHint}>
        <ArrowDown size={18} />
      </a>
    </section>
  );
};

import { Code2, Database, Layout, Server, Smartphone, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { handleGlowMove, revealDelay } from '../hooks/useReveal';
import '../styles/Skills.css';

const skillsCategories = [
  {
    key: 'languages',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'HTML', 'CSS'],
    wide: true,
  },
  { key: 'mobile', icon: Smartphone, skills: ['React Native', 'Expo'] },
  { key: 'frontend', icon: Layout, skills: ['React', 'Vite', 'Bootstrap', 'Sass'] },
  { key: 'backend', icon: Server, skills: ['Node.js', 'Express', 'REST APIs'] },
  { key: 'database', icon: Database, skills: ['MySQL', 'SQL', 'Firebase'] },
  {
    key: 'tools',
    icon: Wrench,
    skills: ['VS Code', 'Git & GitHub', 'GitHub Copilot', 'Windows & macOS'],
    wide: true,
  },
] as const;

const marquee = ['React', 'TypeScript', 'React Native', 'Node.js', 'JavaScript', 'Python', 'Java', 'MySQL', 'Git', 'Vite', 'Sass', 'Express'];

export const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className="section skills" id="conhecimentos">
      <div className="container">
        <header className="section-header reveal">
          <span className="section-eyebrow">{t.skills.eyebrow}</span>
          <h2 className="section-title">
            {t.skills.titleStart} <span className="gradient-text">{t.skills.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{t.skills.subtitle}</p>
        </header>

        <div className="skills-grid">
          {skillsCategories.map((category, index) => {
            const { icon: Icon, key, skills } = category;
            const { title, description } = t.skills.categories[key];
            const wide = 'wide' in category && category.wide;

            return (
              <article
                key={key}
                className={`card card-glow skill-card reveal ${wide ? 'skill-card-wide' : ''}`}
                style={revealDelay(index * 70)}
                onMouseMove={handleGlowMove}
              >
                <div className="skill-head">
                  <div className="skill-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="skill-title">{title}</h3>
                    <p className="skill-description">{description}</p>
                  </div>
                </div>
                <ul className="skill-list">
                  {skills.map(skill => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

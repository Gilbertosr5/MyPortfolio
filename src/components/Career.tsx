import { Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { revealDelay } from '../hooks/useReveal';
import '../styles/Career.css';

export const Career = () => {
  const { t } = useLanguage();

  return (
    <section className="section career" id="carreira">
      <div className="container">
        <header className="section-header reveal">
          <span className="section-eyebrow">{t.career.eyebrow}</span>
          <h2 className="section-title">
            {t.career.titleStart} <span className="gradient-text">{t.career.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{t.career.subtitle}</p>
        </header>

        <ol className="timeline">
          {t.career.experiences.map((exp, index) => (
            <li key={index} className="timeline-item reveal" style={revealDelay(index * 100)}>
              <div className={`timeline-marker ${exp.current ? 'current' : ''}`}>
                <Briefcase size={16} />
              </div>

              <div className="card timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">{exp.position}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                  <span className={`timeline-period ${exp.current ? 'current' : ''}`}>
                    {exp.current && <span className="pulse-dot" />}
                    {exp.period}
                  </span>
                </div>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-tags">
                  {exp.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

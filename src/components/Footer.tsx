import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../config';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Footer.css';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>
          © {currentYear} Gilberto Ribeiro · {t.footer.madeWith}
        </p>

        <div className="footer-links">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${socialLinks.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="#sobre" className="footer-top" aria-label={t.footer.backToTop}>
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

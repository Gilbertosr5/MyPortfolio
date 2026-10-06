import { Languages, Moon, Sun, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import avatarImg from '../assets/Me Cartoon.png';
import { Flag } from './Flag';
import '../styles/Header.css';

const sectionIds = ['sobre', 'conhecimentos', 'projetos', 'carreira', 'contato'] as const;

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, t, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState('sobre');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Destaca o link da seção visível
  useEffect(() => {
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#sobre" className="logo" onClick={closeMenu}>
          <img src={avatarImg} alt="" className="logo-img" />
          <span className="logo-text">
            gilberto<span className="logo-dot">.dev</span>
          </span>
        </a>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} aria-label={t.header.navLabel}>
          {sectionIds.map(id => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className={active === id ? 'active' : ''}
              aria-current={active === id ? 'true' : undefined}
            >
              {t.header.nav[id]}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            onClick={toggleLanguage}
            className="icon-btn lang-toggle"
            aria-label={t.header.switchLanguage}
            title={t.header.switchLanguage}
          >
            <span className="lang-flag">
              <Flag language={language} />
            </span>
            <span className="lang-badge">
              <Languages size={9} strokeWidth={2.5} />
            </span>
          </button>
          <button
            onClick={toggleTheme}
            className="icon-btn"
            aria-label={theme === 'light' ? t.header.themeToDark : t.header.themeToLight}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            className="icon-btn mobile-menu-toggle"
            onClick={() => setIsMenuOpen(open => !open)}
            aria-label={isMenuOpen ? t.header.closeMenu : t.header.openMenu}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

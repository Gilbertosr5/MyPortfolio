import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import avatarImg from '../assets/Me Cartoon.png';
import '../styles/Header.css';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={avatarImg} alt="Avatar" className="logo-img" />
          <h1>Meu Portfolio</h1>
        </div>
        
        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#conhecimentos" onClick={closeMenu}>Conhecimentos</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#carreira" onClick={closeMenu}>Carreira</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Alternar tema">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import avatarImg from '../assets/Me Cartoon.png';
import '../styles/Header.css';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={avatarImg} alt="Avatar" className="logo-img" />
          <h1>Meu Portfolio</h1>
        </div>
        <nav className="nav">
          <a href="#sobre">Sobre</a>
          <a href="#conhecimentos">Conhecimentos</a>
          <a href="#projetos">Projetos</a>
          <a href="#carreira">Carreira</a>
          <a href="#contato">Contato</a>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Alternar tema">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

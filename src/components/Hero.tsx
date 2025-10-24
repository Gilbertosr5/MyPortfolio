import { Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import '../styles/Hero.css';

export const Hero = () => {
  const words = ['Mobile', 'FrontEnd', 'FullStack', 'Java', 'Node'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const typingSpeed = isDeleting ? 150 : 400;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Digitando
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1));
        } else {
          // Pausa antes de começar a deletar
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deletando
        if (currentText.length > 0) {
          setCurrentText(word.slice(0, currentText.length - 1));
        } else {
          // Vai para a próxima palavra
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <section className="hero" id="sobre">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Olá, eu sou <span className="highlight">Gilberto!</span>
          </h1>
          <p className="hero-subtitle">
            <span>Desenvolvedor </span>
            <span className="typing-text">{currentText}</span>
            <span className="cursor">|</span>
          </p>
          <p className="hero-description">
            Apaixonado por criar soluções elegantes e eficientes através de código.
            Especializado em desenvolvimento mobile moderno e sempre em busca de novos desafios.
          </p>
          <div className="hero-social">
            <a href="https://github.com/Gilbertosr5" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/gilbertosr5/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:gillbertosr5@gmail.com" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

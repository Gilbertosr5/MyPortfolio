import { ExternalLink, Github } from 'lucide-react';
import '../styles/Projects.css';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Chat App',
      description: 'Projeto acadêmico para matéria de Redes de Computadores, desenvolvido para Universidade Paulista (UNIP), com o objetivo de fornecer um chat utilizando WebSockets.',
      tech: ['React', 'JavaScript'],
      github: 'https://github.com/Gilbertosr5/ChatApp-frontend',
      // demo: 'https://demo.com'
    },
    {
      title: 'Music Player',
      description: 'Projeto pessoal para aprendizado web, desenvolvido no inicio do meu aprendizado em JavaScript.',
      tech: ['HTML5', 'CSS', 'JavaScript'],
      github: 'https://github.com/Gilbertosr5/MusicPlayer',
      // demo: 'https://demo.com'
    },
    {
      title: 'Biometry Câmera',
      description: 'Projeto de reconhecimento facial utilizando React Native e Firebase. Projet também acadêmico desenvolvido para Universidade Paulista (UNIP).',
      tech: ['React', 'TypeScript'],
      github: 'https://github.com/Gilbertosr5/biometry-camera',
      // demo: 'https://demo.com'
    }
  ];

  return (
    <section className="projects" id="projetos">
      <div className="projects-container">
        <h2 className="section-title">Projetos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                  Código
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

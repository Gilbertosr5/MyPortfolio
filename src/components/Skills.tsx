import { Code2, Database, Layout, Server, Smartphone, Wrench } from 'lucide-react';
import '../styles/Skills.css';

export const Skills = () => {
  const skillsCategories = [
    {
      icon: <Code2 size={32} />,
      title: 'Linguagens',
      skills: ['JavaScript / TypeScript', 'Python', 'Java', 'SQL', 'HTML', 'CSS']
    },
    {
      icon: <Layout size={32} />,
      title: 'Frontend Web',
      skills: ['ReactJS', 'Bootstrap', 'Sass']
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile',
      skills: ['React Native']
    },
    {
      icon: <Server size={32} />,
      title: 'Backend',
      skills: ['NodeJS', 'Express', 'REST APIs']
    },
    {
      icon: <Database size={32} />,
      title: 'Banco de Dados',
      skills: ['MySQL', 'SQL']
    },
    {
      icon: <Wrench size={32} />,
      title: 'Ferramentas',
      skills: ['VSCode', 'Git e GitHub', 'GitHub Copilot', 'Windows e MacOS']
    }
  ];

  return (
    <section className="skills" id="conhecimentos">
      <div className="skills-container">
        <h2 className="section-title">Conhecimentos</h2>
        <div className="skills-grid">
          {skillsCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{category.icon}</div>
              <h3 className="skill-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

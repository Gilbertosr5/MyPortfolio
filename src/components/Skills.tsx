import { Code2, Database, Layout, Server } from 'lucide-react';
import '../styles/Skills.css';

export const Skills = () => {
  const skillsCategories = [
    {
      icon: <Layout size={32} />,
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'HTML/CSS', 'Tailwind CSS']
    },
    {
      icon: <Server size={32} />,
      title: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL']
    },
    {
      icon: <Database size={32} />,
      title: 'Banco de Dados',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma']
    },
    {
      icon: <Code2 size={32} />,
      title: 'Ferramentas',
      skills: ['Git', 'Docker', 'CI/CD', 'Linux']
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

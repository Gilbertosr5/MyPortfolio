import { Briefcase } from 'lucide-react';
import '../styles/Career.css';

export const Career = () => {
  const experiences = [
    // {
    //   company: 'Empresa Atual',
    //   position: 'Cargo Atual',
    //   period: '2023 - Presente',
    //   description: 'Descrição das suas responsabilidades e conquistas nesta posição.'
    // },
    {
      company: 'ConnectCorp.IT',
      position: 'Desenvolvedor Mobile',
      period: 'maio/2024 - Atual',
      description: 'Responsável pelo setor mobile da empresa, criando e prestando manutenções para seus apps.'
    },
    {
      company: 'ConnectCorp.IT',
      position: 'Suporte',
      period: 'jun/2023 - maio/2024',
      description: 'Prestando suporte aos clientes dos produtos da empresa.'
    }
  ];

  return (
    <section className="career" id="carreira">
      <div className="career-container">
        <h2 className="section-title">Carreira</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">
                <Briefcase size={24} />
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">{exp.position}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-period">{exp.period}</p>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

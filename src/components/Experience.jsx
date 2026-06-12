export default function Experience() {
  const experiences = [
    {
      company: 'Extreme Digital Solutions - EDS',
      title: 'Desenvolvedor Frontend',
      date: 'Maio de 2025 - Presente',
      description: [
        'Estruturei documentação técnica através de engenharia reversa em sistema monolítico legado, reduzindo aproximadamente 35% da curva de aprendizado de novos desenvolvedores.',
        'Mantive cobertura mínima de 80% em testes unitários de microserviços e aplicações frontend.',
        'Reduzi em até 50% o esforço de manutenção através da aplicação de Clean Code, SOLID e padronização arquitetural.',
      ],
      tech: ['Vue.js', 'React.js', 'TypeScript', 'REST APIs', 'Azure DevOps', 'Clean Code', 'SOLID', 'GitFlow']
    },
    {
      company: 'Vindicce',
      title: 'Desenvolvedor Full Stack',
      date: 'Jan de 2025 - Mai de 2025',
      description: [
        'Desenvolvi APIs REST utilizando C# e .NET Core, implementando autenticação JWT.',
        'Reduzi aproximadamente 20% no tempo de resposta de APIs REST através de otimização de consultas SQL.',
        'Implementei testes automatizados utilizando xUnit e Jest.',
      ],
      tech: ['C#', '.NET Core', 'Angular', 'React.js', 'SQL Server', 'xUnit', 'Jest']
    },
    {
      company: 'Devex Soluções',
      title: 'Desenvolvedor Full Stack',
      date: 'Jun de 2024 - Jan de 2025',
      description: [
        'Desenvolvi e evoluí soluções BPMS utilizadas por grandes organizações (SESI, SENAI, FIEMA).',
        'Desenvolvi aplicações web utilizando React, Next.js e C#/.NET.',
        'Apliquei práticas de Clean Code, SOLID e DDD para construção de aplicações de fácil manutenção.',
      ],
      tech: ['Next.js', 'React.js', 'C#', '.NET', 'SQL Server', 'DDD']
    },
    {
      company: 'addCyber - Tecnologia',
      title: 'Desenvolvedor Mobile React Native',
      date: 'Jan de 2022 - Jan de 2023',
      description: [
        'Desenvolvi a versão mobile da plataforma PagoX utilizando React Native.',
        'Implementei componente de scroll infinito estilo TikTok para vídeos e integrei geolocalização.',
        'Participei do deploy da aplicação na Google Play Store.',
      ],
      tech: ['React Native', 'TypeScript', 'Expo', 'Firebase', 'React Query']
    }
  ];

  return (
    <section id="experience" className="section relative">
      <div className="container">
        <h2>Experiência</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <div className="timeline-date">{exp.date}</div>
                <h3 className="timeline-title">{exp.title}</h3>
                <div className="timeline-company">{exp.company}</div>
                
                <ul style={{ listStyleType: 'disc', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                  {exp.description.map((item, i) => (
                    <li key={i} className="timeline-desc">{item}</li>
                  ))}
                </ul>
                
                <div className="timeline-tech">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

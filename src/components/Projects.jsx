import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: 'AI Agents e Generative AI',
      date: 'Março de 2026 - Presente',
      description: 'Aplicação AI-Powered desenvolvida para automatizar interações especializadas utilizando Inteligência Artificial Generativa e arquitetura multiagente.',
      contributions: [
        'Desenvolvimento de AI Agents especializados para diferentes domínios.',
        'Integração com OpenAI API, Claude API e Gemini API.',
        'Implementação de memória persistente para manutenção de contexto.',
        'Desenvolvimento de automações inteligentes e fluxos conversacionais.'
      ],
      tech: ['Generative AI', 'AI Agents', 'OpenAI API', 'Claude API', 'Gemini API', 'TypeScript']
    },
    {
      title: 'Computer Vision e AI Integration',
      date: 'Março de 2026 - Presente',
      description: 'Aplicação web baseada em Inteligência Artificial para análise multimodal de imagens e geração dinâmica de conteúdo personalizado.',
      contributions: [
        'Integração com modelos de IA capazes de interpretar imagens.',
        'Desenvolvimento de fluxos utilizando Computer Vision e Generative AI.',
        'Construção de APIs para comunicação entre frontend, backend e IA.'
      ],
      tech: ['Computer Vision', 'Claude API', 'LLM APIs', 'REST APIs', 'Supabase', 'TypeScript']
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projetos Destaque</h2>
        
        <div className="projects-grid">
          {projects.map((proj, index) => (
            <div key={index} className="project-card glass-panel">
              <div className="project-content">
                <div className="project-date">{proj.date}</div>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.description}</p>
                
                <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-main)' }}>Principais contribuições:</h4>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  {proj.contributions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-tech">
                {proj.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

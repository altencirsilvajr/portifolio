import { FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: 'SpecTen',
      date: '2026 - Presente',
      description: 'Plataforma web para catalogar celulares com specs, fontes, score de confiança, classificador por benchmark e comparação pública.',
      contributions: [
        'Blazor Web App com ASP.NET Core e PostgreSQL.',
        'APIs de busca, comparação e reportes com cobertura sob demanda.',
        'Deploy em produção com health check e metodologia pública de classificação.'
      ],
      tech: ['Blazor', 'ASP.NET Core', 'EF Core', 'PostgreSQL', 'C#'],
      link: 'https://spec-ten-production.up.railway.app'
    },
    {
      title: 'JustRoastMe',
      date: 'Março de 2026 - Presente',
      description: 'Aplicação web baseada em Inteligência Artificial para análise multimodal de imagens e geração dinâmica de conteúdo personalizado.',
      contributions: [
        'Integração com modelos de IA capazes de interpretar imagens.',
        'Desenvolvimento de fluxos utilizando Computer Vision e Generative AI.',
        'Construção de APIs para comunicação entre frontend, backend e IA.'
      ],
      tech: ['Computer Vision', 'Claude API', 'LLM APIs', 'REST APIs', 'Supabase', 'TypeScript'],
      link: 'https://www.justroast.me'
    },
    {
      title: 'blocked-bet',
      date: '2026',
      description: 'Aplicativo mobile para reduzir recaídas em apostas, bloqueando sites de betting e guiando o usuário com intervenções curtas durante janelas de risco.',
      contributions: [
        'Proteção ativa com bloqueio de sites e tela de cooldown.',
        'Autenticação Google OAuth e sincronização entre dispositivos.',
        'Plano de crise, contato de confiança e diagnóstico da proteção no Android.'
      ],
      tech: ['Expo', 'React Native', 'ASP.NET Core', 'PostgreSQL', 'TypeScript'],
      comingSoon: true
    },
    {
      title: 'blocked-prn',
      date: '2026',
      description: 'Aplicativo mobile para reduzir recaídas em pornografia, bloqueando sites adultos e guiando o usuário com intervenções curtas durante janelas de risco.',
      contributions: [
        'Proteção ativa com bloqueio de sites e modo estrito com PIN.',
        'Autenticação Google OAuth e sincronização entre dispositivos.',
        'Plano de recuperação, contato de confiança e diagnóstico da proteção no Android.'
      ],
      tech: ['Expo', 'React Native', 'NestJS', 'PostgreSQL', 'TypeScript'],
      comingSoon: true
    },
    {
      title: 'tfg-weekly',
      date: '2026',
      description: 'Aplicativo mobile que criei para me ajudar a gerar discursos semanais com base bíblica.',
      contributions: [
        'Fluxo mobile para preparação e revisão de discursos semanais.',
        'Geração assistida por IA com rascunhos editáveis.'
      ],
      tech: ['Expo', 'React Native', 'ASP.NET Core', 'TypeScript']
    },
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
                <div className="project-header">
                  <div className="project-date">{proj.date}</div>
                  {proj.comingSoon && (
                    <span className="project-badge">Lançamento oficial em breve</span>
                  )}
                </div>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.description}</p>
                
                <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-main)' }}>Principais contribuições:</h4>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  {proj.contributions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FiExternalLink aria-hidden="true" />
                    Visitar plataforma
                  </a>
                )}
              </div>
              
              <div className="project-tech">
                {proj.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="projects-upcoming">
          Em breve, um SaaS e um jogo também entrarão no catálogo.
        </p>
      </div>
    </section>
  );
}

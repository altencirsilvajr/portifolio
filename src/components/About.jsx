import { FiCode, FiServer, FiCpu } from 'react-icons/fi';

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="container">
        <h2 className="animate-fade-in">Sobre Mim</h2>
        
        <div className="about-grid">
          <div className="about-text glass-panel">
            <p>
              Sou <strong>Desenvolvedor Full Stack</strong> com mais de 4 anos de experiência no desenvolvimento de aplicações web, mobile, APIs REST e integrações complexas, atuando na construção de soluções escaláveis com foco em performance, qualidade de código e evolução contínua de produtos.
            </p>
            <p>
              Atuo principalmente com <strong>C#, .NET Core, React.js, Node.js e React Native</strong>. Participo do desenvolvimento de soluções end-to-end envolvendo backend, frontend, bancos de dados relacionais, integrações corporativas e arquitetura de software.
            </p>
            <p>
              Ao longo da minha trajetória, contribuí para a <strong>redução de aproximadamente 35% na curva de aprendizado</strong> de novos desenvolvedores através da criação de documentação técnica estruturada, além da <strong>redução de até 50% no esforço de manutenção</strong> de aplicações utilizando Clean Code, SOLID, Design Patterns e padronização arquitetural.
            </p>
            <p>
              Também possuo experiência em <strong>AI Integration e Generative AI</strong>, utilizando OpenAI API, Claude API e Gemini API para construção de AI Agents, automação de fluxos e experiências conversacionais.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card glass-panel">
              <FiCode size={32} className="text-primary mb-4 mx-auto" style={{color: 'var(--primary)'}} />
              <div className="stat-value">50%</div>
              <div className="stat-label">Redução de Manutenção</div>
            </div>
            
            <div className="stat-card glass-panel">
              <FiServer size={32} className="text-primary mb-4 mx-auto" style={{color: 'var(--primary)'}} />
              <div className="stat-value">20%</div>
              <div className="stat-label">Melhora de Tempo em APIs</div>
            </div>

            <div className="stat-card glass-panel">
              <FiCpu size={32} className="text-primary mb-4 mx-auto" style={{color: 'var(--primary)'}} />
              <div className="stat-value">+4</div>
              <div className="stat-label">Anos de Experiência</div>
            </div>

            <div className="stat-card glass-panel">
              <div className="stat-value">80%</div>
              <div className="stat-label">Cobertura de Testes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

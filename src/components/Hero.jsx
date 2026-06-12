import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container">
        <div className="hero-content animate-fade-in">
          <span className="hero-subtitle">Olá, eu sou</span>
          <h1>
            Altencir <span className="gradient-text">Junior</span>
          </h1>
          <h2 className="text-2xl mt-4 text-slate-300">
            Full Stack .NET Developer
          </h2>
          <p className="hero-description delay-100">
            C# • .NET Core • React.js • AI Integration • Generative AI
          </p>
          <div className="hero-actions delay-200">
            <a href="#projects" className="btn btn-primary">
              Ver Projetos <FiArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

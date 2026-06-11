import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Contact() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <h2 className="footer-title">Vamos Trabalhar Juntos?</h2>
          <p className="footer-desc">
            Estou aberto a oportunidades em Desenvolvimento Full Stack, contribuindo na construção de produtos escaláveis, integrações complexas e soluções modernas apoiadas por Inteligência Artificial.
          </p>
          
          <div className="contact-links">
            <a href="mailto:altencirsilvajr@gmail.com" className="contact-link">
              <div className="glass-panel" style={{ padding: '1rem', borderRadius: '50%', marginBottom: '0.5rem' }}>
                <FiMail size={24} />
              </div>
              <span>Email</span>
            </a>
            
            <a href="tel:+5521968609445" className="contact-link">
              <div className="glass-panel" style={{ padding: '1rem', borderRadius: '50%', marginBottom: '0.5rem' }}>
                <FiPhone size={24} />
              </div>
              <span>Telefone</span>
            </a>
            
            <a href="https://www.linkedin.com/in/altencir-junior" target="_blank" rel="noreferrer" className="contact-link">
              <div className="glass-panel" style={{ padding: '1rem', borderRadius: '50%', marginBottom: '0.5rem' }}>
                <FiLinkedin size={24} />
              </div>
              <span>LinkedIn</span>
            </a>
            
            <a href="https://github.com/altencirsilvajr" target="_blank" rel="noreferrer" className="contact-link">
              <div className="glass-panel" style={{ padding: '1rem', borderRadius: '50%', marginBottom: '0.5rem' }}>
                <FiGithub size={24} />
              </div>
              <span>GitHub</span>
            </a>
          </div>
          
          <div className="copyright">
            &copy; {new Date().getFullYear()} Altencir Junior. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}

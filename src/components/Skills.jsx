import { FiMonitor, FiServer, FiDatabase, FiCpu, FiTool } from 'react-icons/fi';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FiMonitor size={24} />,
      skills: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'React Native', 'TypeScript', 'JavaScript']
    },
    {
      title: 'Backend',
      icon: <FiServer size={24} />,
      skills: ['C#', '.NET Core', '.NET Framework', 'Node.js', 'REST APIs', 'JWT', 'Microservices']
    },
    {
      title: 'Data & Cloud',
      icon: <FiDatabase size={24} />,
      skills: ['SQL Server', 'PostgreSQL', 'MySQL', 'Azure DevOps', 'CI/CD']
    },
    {
      title: 'AI & Inovação',
      icon: <FiCpu size={24} />,
      skills: ['AI Integration', 'Generative AI', 'AI Agents', 'OpenAI API', 'Claude API', 'Gemini API']
    },
    {
      title: 'Práticas & Testes',
      icon: <FiTool size={24} />,
      skills: ['Clean Code', 'SOLID', 'Design Patterns', 'GitFlow', 'Jest', 'xUnit']
    }
  ];

  return (
    <section id="skills" className="section relative">
      <div className="container">
        <h2>Skills & Competências</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category glass-panel">
              <div className="skill-category-title">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              
              <div className="skill-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

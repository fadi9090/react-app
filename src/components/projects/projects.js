import { useState, useEffect } from 'react';
import './projects.css';

const STATIC_PROJECTS = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React. Features include dark mode, smooth animations, contact form integration, and dynamic skill/project sections.',
    image_url: '/images/background.png',
    github_link: 'https://github.com/yourusername/portfolio',
    skills: [
      { id: 1, name: 'React', icon: '⚛️' },
      { id: 2, name: 'JavaScript', icon: '🟨' },
      { id: 3, name: 'CSS3', icon: '🎨' },
      { id: 4, name: 'HTML5', icon: '🌐' },
    ]
  },
  {
    id: 2,
    title: 'Shopify Store',
    description: 'A fully functional e-commerce store built on Shopify platform. Features include product management, payment gateway integration, custom theme development, and SEO optimization.',
    image_url: '/images/shopify.webp',
    github_link: 'https://github.com/yourusername/shopify-store',
    skills: [
      { id: 5, name: 'Shopify', icon: '🛍️' },
      { id: 6, name: 'Liquid', icon: '💧' },
      { id: 7, name: 'JavaScript', icon: '🟨' },
      { id: 8, name: 'HTML/CSS', icon: '🎨' },
    ]
  },
  {
    id: 3,
    title: 'Go Banking System',
    description: 'A scalable online banking system built with Go using Gin framework. Features microservices architecture, Docker containerization, RESTful APIs, and PostgreSQL database for secure financial transactions.',
    image_url: '/images/go.png',
    github_link: 'https://github.com/yourusername/go-banking',
    skills: [
      { id: 9, name: 'Go', icon: '🐹' },
      { id: 10, name: 'Gin', icon: '🍸' },
      { id: 11, name: 'Docker', icon: '🐳' },
      { id: 12, name: 'PostgreSQL', icon: '🐘' },
      { id: 13, name: 'REST API', icon: '🔌' },
      { id: 14, name: 'Microservices', icon: '🔧' },
    ]
  },
  {
    id: 4,
    title: 'Marketplace with Shopping Cart',
    description: 'A full-featured online marketplace with shopping cart functionality built with Node.js and Express. Features include user authentication, product listings, real-time cart updates, order management, and SQLite database for lightweight data storage.',
    image_url: '/images/nodejs.png',
    github_link: 'https://github.com/yourusername/node-marketplace',
    skills: [
      { id: 15, name: 'Node.js', icon: '🟢' },
      { id: 16, name: 'Express', icon: '🚂' },
      { id: 17, name: 'SQLite', icon: '🗄️' },
      { id: 18, name: 'REST API', icon: '🔌' },
      { id: 19, name: 'EJS', icon: '📄' },
      { id: 20, name: 'Bootstrap', icon: '💻' },
    ]
  }
];

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setProjects(STATIC_PROJECTS);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <section className="projects">
        <h2>My Projects</h2>
        <div className="loading">Loading projects...</div>
      </section>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <section className="projects">
        <h2>My Projects</h2>
        <p>No projects available. Please add projects in the admin panel.</p>
      </section>
    );
  }

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              {project.image_url ? (
                <img 
                  src={project.image_url} 
                  alt={project.title}
                  className="project-image-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="image-placeholder">📸</div>';
                  }}
                />
              ) : (
                <div className="image-placeholder">📸</div>
              )}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            {/* Display skills with icons */}
            {project.skills && project.skills.length > 0 && (
              <div className="project-tech">
                {project.skills.map((skill) => (
                  <span key={skill.id} className="tech-tag">
                    {skill.icon || '🔧'} {skill.name}
                  </span>
                ))}
              </div>
            )}
            
            <div className="project-links">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Live Demo →
                </a>
              )}
              {project.github_link && (
                <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                  GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
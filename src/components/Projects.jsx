import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Connect-CRM",
      description: "Enterprise SaaS Platform with hierarchical role-based dashboards, lead access control, reporting engine, real-time notifications, and Redis caching. Optimized queries to reduce API latency by 40%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Node.js", "Express", "Redis", "SaaS"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Sheet Checking Automation",
      description: "Automated EdTech backend service for processing and annotating PDF exam answer sheets autonomously without manual intervention.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Node.js", "PDF Processing", "EdTech"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Government Web Solutions",
      description: "Developed comprehensive web solutions and dashboards for Bihar State Projects, including teacher assessment platforms and examination evaluation systems.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["MERN Stack", "Dashboard", "E-Governance"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-icon" aria-label="Github Repo">
                      <Github size={24} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link-icon" aria-label="Live Site">
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

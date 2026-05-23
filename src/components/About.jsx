import React from 'react';
import { Code, Server, Database } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text glass-card">
            <p>
              I am a Software Engineer and MERN Stack Developer with a solid background in building scalable web applications. Currently, I am working at CODERRS TANK PVT LTD, delivering high-quality software solutions using modern JavaScript frameworks.
            </p>
            <p>
              With experience at multiple tech companies, I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have also worked extensively with PHP and CodeIgniter. I have successfully developed enterprise SaaS platforms like Connect-CRM, automated EdTech backends, and comprehensive government web solutions for Bihar State projects.
            </p>
            <p>
              Currently pursuing my Bachelor of Science in Computer Science at AKTU University, I am deeply passionate about implementing responsive design principles, optimizing backend latency, and creating robust architectures that solve complex real-world problems.
            </p>
          </div>
          
          <div className="about-cards">
            <div className="feature-card glass-card">
              <Code className="feature-icon" size={32} />
              <h3>Frontend</h3>
              <p>Crafting beautiful, interactive UIs using React, modern CSS, and animations.</p>
            </div>
            <div className="feature-card glass-card">
              <Server className="feature-icon" size={32} />
              <h3>Backend</h3>
              <p>Building secure and scalable server-side applications and RESTful APIs.</p>
            </div>
            <div className="feature-card glass-card">
              <Database className="feature-icon" size={32} />
              <h3>Database</h3>
              <p>Designing efficient database schemas and managing data with SQL and NoSQL.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

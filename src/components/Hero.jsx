import React from 'react';
import { Download, ChevronRight } from 'lucide-react';
import './Hero.css';
import resumePdf from './Juhi Mishra.pdf';
import profilePhoto from './portfolio.jpeg';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in-up">
          <span className="greeting">Hello, I'm</span>
          <h1 className="hero-title">
            <span className="name">Juhi Mishra</span><br />
            Software Engineer
          </h1>
          <h3 className="hero-specialty" style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: '500', opacity: 0.9 }}>
            MERN Stack Developer
          </h3>
          <p className="hero-subtitle">
            I build exceptional and accessible digital experiences for the web.
            Passionate about creating elegant solutions to complex problems.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Let's Talk <ChevronRight size={18} />
            </a>
            <a href={resumePdf} className="btn btn-outline" download="Juhi_Mishra_Resume.pdf">
              Resume <Download size={18} />
            </a>
          </div>
        </div>

        <div className="hero-image-container animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="image-wrapper floating glass-card">
            {/* Using the user's uploaded photo */}
            <img
              src={profilePhoto}
              alt="Juhi Mishra Portrait"
              className="profile-img"
              id="portfolio-photo"
            />
            <div className="glow-effect"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

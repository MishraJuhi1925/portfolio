import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { category: "Frontend", items: ["JavaScript", "React.js", "Redux", "HTML", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express.js", "PHP", "CodeIgniter", "RESTful APIs"] },
    { category: "Database & Tools", items: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Git & GitHub", "Postman", "JWT"] },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-container">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="skill-group glass-card">
              <h3 className="skill-category">{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.items.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

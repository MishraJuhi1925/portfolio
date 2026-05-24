import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
}

export const Projects: React.FC = () => {
  const projectsData: Project[] = [
    {
      id: 1,
      title: "Connect-CRM",
      description: "Enterprise SaaS Platform with hierarchical role-based dashboards, lead access control, reporting engine, real-time notifications, and Redis caching. Optimized queries to reduce API latency by 40%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Node.js", "Express", "Redis", "SaaS"],
      github: "https://github.com/MishraJuhi1925", // Fallback to GitHub profile as placeholder
      live: "#"
    },
    {
      id: 2,
      title: "Sheet Checking Automation",
      description: "Automated EdTech backend service for processing and annotating PDF exam answer sheets autonomously without manual intervention.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Node.js", "PDF Processing", "EdTech"],
      github: "https://github.com/MishraJuhi1925",
      live: "#"
    },
    {
      id: 3,
      title: "Government Web Solutions",
      description: "Developed comprehensive web solutions and dashboards for Bihar State Projects, including teacher assessment platforms and examination evaluation systems.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["MERN Stack", "Dashboard", "E-Governance"],
      github: "https://github.com/MishraJuhi1925",
      live: "#"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 70, damping: 18 },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-accent-blue/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative flex flex-col rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden shadow-glass hover:bg-white/[0.04] hover:-translate-y-2 hover:border-accent-blue/30 transition-all duration-300 hover:shadow-glow-blue"
            >
              {/* Project Image Wrapper */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-[#030014]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/10 hover:scale-110 hover:shadow-glow-cyan transition-all duration-200"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                    {project.live !== "#" ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/10 hover:scale-110 hover:shadow-glow-blue transition-all duration-200"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    ) : (
                      <span className="p-3 bg-white/5 text-white/40 rounded-full border border-white/5 cursor-not-allowed text-xs flex items-center justify-center font-sans">
                        Demo N/A
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Info details */}
              <div className="flex-1 flex flex-col p-6 space-y-4">
                <h3 className="text-xl font-bold text-white font-heading tracking-wide group-hover:text-accent-cyan transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-neutral-400 text-sm font-sans leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-lg bg-accent-blue/10 border border-accent-blue/20 text-accent-cyan text-xs font-medium font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;

import React from 'react';
import { Code, Server, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const cardData = [
    {
      icon: <Code size={36} className="text-accent-cyan" />,
      title: "Frontend Development",
      description: "Crafting beautiful, interactive, and responsive user interfaces using React, TypeScript, and modern styling architectures.",
      glowColor: "group-hover:shadow-glow-cyan group-hover:border-accent-cyan/50",
    },
    {
      icon: <Server size={36} className="text-accent-purple" />,
      title: "Backend Development",
      description: "Building secure, modular, and highly scalable server-side architectures, RESTful APIs, and optimizing query latencies.",
      glowColor: "group-hover:shadow-glow-purple group-hover:border-accent-purple/50",
    },
    {
      icon: <Database size={36} className="text-accent-pink" />,
      title: "Database Management",
      description: "Designing structured, efficient schemas and managing database performance using SQL and NoSQL environments.",
      glowColor: "group-hover:shadow-glow-pink group-hover:border-accent-pink/50",
    },
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[50%] left-[-10%] w-[300px] h-[300px] rounded-full bg-accent-cyan/5 blur-[120px] -z-10" />

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
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left bio paragraph (Glassmorphism) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 p-8 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md shadow-glass space-y-6 text-neutral-300 font-sans leading-relaxed"
          >
            <p>
              I am a <strong className="text-white">Software Engineer</strong> and <strong className="text-white">MERN Stack Developer</strong> with a solid background in building scalable web applications. Currently, I am working at <strong className="text-accent-cyan">CODERRS TANK PVT LTD</strong>, delivering high-quality software solutions using modern JavaScript frameworks.
            </p>
            <p>
              With experience at multiple tech companies, I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have also worked extensively with PHP and CodeIgniter. I have successfully developed enterprise SaaS platforms like <strong className="text-accent-blue">Connect-CRM</strong>, automated EdTech backends, and comprehensive government web solutions for Bihar State projects.
            </p>
            <p>
              Currently pursuing my Bachelor of Science in Computer Science at <strong className="text-white">AKTU University</strong>, I am deeply passionate about implementing responsive design principles, optimizing backend latency, and creating robust architectures that solve complex real-world problems.
            </p>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col space-y-6 w-full"
          >
            {cardData.map((card, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`group flex items-start gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md shadow-glass hover:bg-white/[0.06] hover:scale-102 hover:-translate-y-1 transition-all duration-300 ${card.glowColor}`}
              >
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 flex-shrink-0">
                  {card.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-white font-heading">{card.title}</h3>
                  <p className="text-sm text-neutral-400 font-sans leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;

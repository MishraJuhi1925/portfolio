import React, { useState, useEffect } from 'react';
import { Download, ChevronRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import profilePhoto from '../../assets/portfolio.jpeg';

export const Hero: React.FC = () => {
  const roles = ["Software Engineer", "MERN Stack Developer", "Full Stack Developer"];
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: number;
    const fullText = roles[currentRoleIdx];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80);

        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
          setTypingSpeed(200);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIdx, typingSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background glowing blobs */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-accent-blue/10 blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-accent-purple/10 blur-[130px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 items-center w-full z-10">
        {/* Left Side Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center space-y-6 text-left order-2 md:order-1"
        >
          <motion.span
            variants={itemVariants}
            className="text-accent-cyan font-semibold text-lg tracking-widest font-heading uppercase"
          >
            👋 Hello, I'm
          </motion.span>

          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-heading text-white">
              Juhi <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple">Mishra</span>
            </h1>
            <div className="h-10 md:h-12 flex items-center">
              <h2 className="text-2xl md:text-3xl font-medium text-neutral-300">
                A <span className="text-accent-cyan border-r-2 border-accent-cyan pr-1 font-semibold animate-pulse">{currentText}</span>
              </h2>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-neutral-400 text-base md:text-lg max-w-lg leading-relaxed font-sans"
          >
            I build exceptional, accessible, and high-performance digital experiences for the modern web. 
            Passionate about turning complex backend bottlenecks and beautiful frontend visual UI designs into elegant code.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-purple hover:from-accent-purple hover:to-accent-blue text-white rounded-xl font-medium shadow-glow-blue hover:shadow-glow-purple transition-all duration-300 hover:-translate-y-0.5"
            >
              Let's Talk <ChevronRight size={18} />
            </a>
            <a
              href="/juhi_resume.pdf"
              download="juhi_resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              Resume <Download size={18} />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4">
            <a
              href="https://github.com/MishraJuhi1925"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white hover:scale-115 transition-all duration-200 p-2 bg-white/5 rounded-full border border-white/5 hover:border-white/15 hover:shadow-glow-cyan"
              aria-label="GitHub Profile"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/erjoohimishra13"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white hover:scale-115 transition-all duration-200 p-2 bg-white/5 rounded-full border border-white/5 hover:border-white/15 hover:shadow-glow-blue"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:juhimishra9125@gmail.com"
              className="text-neutral-400 hover:text-white hover:scale-115 transition-all duration-200 p-2 bg-white/5 rounded-full border border-white/5 hover:border-white/15 hover:shadow-glow-purple"
              aria-label="Email Me"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side Avatar with Glowing effects */}
        <div className="flex justify-center items-center order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', damping: 15 }}
            className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px]"
          >
            {/* Outer Spinning Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-blue via-accent-cyan to-accent-purple -z-10 animate-spin-slow blur-[3px]" />
            {/* Inner Glowing Shadow */}
            <div className="absolute inset-2 rounded-full bg-background -z-10" />

            {/* Float container */}
            <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-white/10 bg-background shadow-2xl flex items-center justify-center animate-float">
              <img
                src={profilePhoto}
                alt="Juhi Mishra Portrait"
                className="w-full h-full object-cover scale-[1.05] hover:scale-[1.12] transition-transform duration-500"
              />
            </div>
            
            {/* Decorative orbit particles */}
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent-cyan shadow-glow-cyan animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-accent-purple shadow-glow-purple animate-pulse-slow" style={{ animationDelay: '3s' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

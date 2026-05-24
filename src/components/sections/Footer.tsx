import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/5 bg-[#030014] py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="text-center md:text-left space-y-2">
          <a href="#home" className="text-lg font-bold font-heading tracking-wide">
            <span className="text-white">Juhi</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">Mishra</span>
          </a>
          <p className="text-neutral-500 text-xs font-sans">
            Building digital products, APIs, and modern web experiences.
          </p>
        </div>
        
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-sans text-neutral-400">
          <a href="#home" className="hover:text-white transition-colors duration-200">Home</a>
          <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
          <a href="#skills" className="hover:text-white transition-colors duration-200">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-white/[0.03] text-center">
        <p className="text-neutral-600 text-xs font-sans">
          &copy; {currentYear} Juhi Mishra. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;

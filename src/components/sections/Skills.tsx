import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaGitAlt, FaPhp } from 'react-icons/fa';
import {
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiCodeigniter,
  SiPostman,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiJsonwebtokens
} from 'react-icons/si';

interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  level: number; // percentage
  icon: React.ReactNode;
  color: string; // custom tailwind color or hex
  glowColor: string;
}

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Frontend' | 'Backend' | 'Database' | 'Tools'>('All');

  // Core skills for circular indicators
  const coreSkills = [
    { name: "React.js", level: 92, icon: <FaReact size={32} className="text-[#61dafb]" />, color: "#61dafb" },
    { name: "Node.js", level: 88, icon: <FaNodeJs size={32} className="text-[#339933]" />, color: "#339933" },
    { name: "JavaScript", level: 95, icon: <SiJavascript size={28} className="text-[#f7df1e] rounded" />, color: "#f7df1e" },
    { name: "MongoDB", level: 85, icon: <SiMongodb size={32} className="text-[#47a248]" />, color: "#47a248" }
  ];

  const skillsData: Skill[] = [
    // Frontend
    { name: "JavaScript", category: "Frontend", level: 95, icon: <SiJavascript size={20} />, color: "text-[#f7df1e]", glowColor: "shadow-[0_0_15px_rgba(247,223,30,0.3)] hover:border-[#f7df1e]/40" },
    { name: "React.js", category: "Frontend", level: 92, icon: <FaReact size={22} />, color: "text-[#61dafb]", glowColor: "shadow-[0_0_15px_rgba(97,218,251,0.3)] hover:border-[#61dafb]/40" },
    { name: "Redux", category: "Frontend", level: 85, icon: <SiRedux size={20} />, color: "text-[#764abc]", glowColor: "shadow-[0_0_15px_rgba(118,74,188,0.3)] hover:border-[#764abc]/40" },
    { name: "HTML", category: "Frontend", level: 95, icon: <FaHtml5 size={22} />, color: "text-[#e34f26]", glowColor: "shadow-[0_0_15px_rgba(227,79,38,0.3)] hover:border-[#e34f26]/40" },
    { name: "Tailwind CSS", category: "Frontend", level: 90, icon: <SiTailwindcss size={20} />, color: "text-[#06b6d4]", glowColor: "shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:border-[#06b6d4]/40" },
    
    // Backend
    { name: "Node.js", category: "Backend", level: 88, icon: <FaNodeJs size={22} />, color: "text-[#339933]", glowColor: "shadow-[0_0_15px_rgba(51,153,51,0.3)] hover:border-[#339933]/40" },
    { name: "Express.js", category: "Backend", level: 86, icon: <SiExpress size={20} />, color: "text-neutral-200", glowColor: "shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:border-neutral-400/40" },
    { name: "PHP", category: "Backend", level: 80, icon: <FaPhp size={24} />, color: "text-[#777bb4]", glowColor: "shadow-[0_0_15px_rgba(119,123,180,0.3)] hover:border-[#777bb4]/40" },
    { name: "CodeIgniter", category: "Backend", level: 78, icon: <SiCodeigniter size={20} />, color: "text-[#dd4814]", glowColor: "shadow-[0_0_15px_rgba(221,72,20,0.3)] hover:border-[#dd4814]/40" },
    { name: "RESTful APIs", category: "Backend", level: 92, icon: <SiPostman size={20} />, color: "text-[#ff6c37]", glowColor: "shadow-[0_0_15px_rgba(255,108,55,0.3)] hover:border-[#ff6c37]/40" },
    
    // Database
    { name: "MongoDB", category: "Database", level: 85, icon: <SiMongodb size={22} />, color: "text-[#47a248]", glowColor: "shadow-[0_0_15px_rgba(71,162,72,0.3)] hover:border-[#47a248]/40" },
    { name: "MySQL", category: "Database", level: 82, icon: <SiMysql size={22} />, color: "text-[#00758f]", glowColor: "shadow-[0_0_15px_rgba(0,117,143,0.3)] hover:border-[#00758f]/40" },
    { name: "PostgreSQL", category: "Database", level: 80, icon: <SiPostgresql size={20} />, color: "text-[#336791]", glowColor: "shadow-[0_0_15px_rgba(51,103,145,0.3)] hover:border-[#336791]/40" },
    { name: "Redis", category: "Database", level: 75, icon: <SiRedis size={20} />, color: "text-[#d82c20]", glowColor: "shadow-[0_0_15px_rgba(216,44,32,0.3)] hover:border-[#d82c20]/40" },
    
    // Tools
    { name: "Git & GitHub", category: "Tools", level: 88, icon: <FaGitAlt size={22} />, color: "text-[#f05032]", glowColor: "shadow-[0_0_15px_rgba(240,80,50,0.3)] hover:border-[#f05032]/40" },
    { name: "Postman", category: "Tools", level: 90, icon: <SiPostman size={20} />, color: "text-[#ff6c37]", glowColor: "shadow-[0_0_15px_rgba(255,108,55,0.3)] hover:border-[#ff6c37]/40" },
    { name: "JWT", category: "Tools", level: 85, icon: <SiJsonwebtokens size={20} />, color: "text-[#fb015b]", glowColor: "shadow-[0_0_15px_rgba(251,1,91,0.3)] hover:border-[#fb015b]/40" }
  ];

  const filteredSkills = activeTab === 'All' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeTab);

  const categories: ('All' | 'Frontend' | 'Backend' | 'Database' | 'Tools')[] = [
    'All', 'Frontend', 'Backend', 'Database', 'Tools'
  ];

  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-accent-purple/5 blur-[120px] -z-10" />

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
            My Skills & Expertise
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Circular Indicators for Core Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {coreSkills.map((skill, index) => {
            const radius = 45;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (skill.level / 100) * circumference;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 shadow-glass hover:bg-white/[0.04] transition-colors duration-300"
              >
                <div className="relative w-28 h-28 flex items-center justify-center">
                  {/* SVG Circle indicator */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="56"
                      cy="56"
                      r={radius}
                      className="stroke-neutral-800"
                      strokeWidth="6"
                      fill="transparent"
                    />
                    <motion.circle
                      cx="56"
                      cy="56"
                      r={radius}
                      stroke={skill.color}
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{ strokeDashoffset }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    {skill.icon}
                    <span className="text-xs font-bold text-neutral-400 mt-1">{skill.level}%</span>
                  </div>
                </div>
                <h3 className="text-white font-medium mt-4 font-heading">{skill.name}</h3>
              </motion.div>
            );
          })}
        </div>

        {/* Category Tabs Selector */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-4 py-2 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none ${
                activeTab === tab 
                  ? 'text-white font-bold' 
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-accent-cyan/20 border border-accent-cyan/30 rounded-xl"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className={`group flex flex-col p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 hover:scale-103 ${skill.glowColor}`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors duration-300 ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <span className="font-heading font-semibold text-white tracking-wide">{skill.name}</span>
                  </div>
                  <span className="text-xs font-bold text-neutral-400 group-hover:text-accent-cyan transition-colors duration-300">{skill.level}%</span>
                </div>
                
                {/* Linear Progress Bar */}
                <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-accent-blue to-accent-cyan"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;

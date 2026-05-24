import React, { useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending message...");
    setStatus('sending');
    
    const form = event.currentTarget;
    const formData = new FormData(form);
    
    // Web3Forms Access Key
    formData.append("access_key", "2dd2c4c1-7c05-4873-bd33-1fd18710bcc0");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        setStatus('success');
        form.reset();
        
        // Trigger premium celebration confetti fireworks
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#3b82f6', '#06b6d4', '#8b5cf6', '#d946ef']
        });
      } else {
        console.log("Error", data);
        setResult(data.message || "Failed to send message.");
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setResult("Something went wrong!");
      setStatus('error');
    }
  };

  const infoItems = [
    {
      icon: <Mail size={20} className="text-accent-cyan" />,
      label: "Email",
      value: "juhimishra9125@gmail.com",
      link: "mailto:juhimishra9125@gmail.com"
    },
    {
      icon: <Phone size={20} className="text-accent-blue" />,
      label: "Phone",
      value: "+91 9125896113",
      link: "tel:+919125896113"
    },
    {
      icon: <MapPin size={20} className="text-accent-purple" />,
      label: "Location",
      value: "New Delhi, India",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration blur */}
      <div className="absolute bottom-[10%] left-[20%] w-[350px] h-[350px] rounded-full bg-accent-pink/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex flex-col justify-between p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md shadow-glass"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white font-heading">Contact Information</h3>
              <p className="text-neutral-400 text-sm font-sans leading-relaxed">
                Have an exciting project idea, a position to fill, or just want to say hi? Fill out the form or reach out via my socials.
              </p>
              
              <div className="space-y-6 pt-4">
                {infoItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-neutral-400 text-xs font-heading tracking-wide uppercase">{item.label}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-white hover:text-accent-cyan font-sans transition-colors duration-200">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-sans">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-12 space-y-4">
              <h4 className="text-neutral-300 text-sm font-heading font-medium tracking-wide">Connect with me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/MishraJuhi1925"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-xl border border-white/5 text-neutral-400 hover:text-white hover:scale-110 hover:border-white/20 hover:shadow-glow-cyan transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/erjoohimishra13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-xl border border-white/5 text-neutral-400 hover:text-white hover:scale-110 hover:border-white/20 hover:shadow-glow-blue transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md shadow-glass"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-neutral-300 font-heading">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-sans focus:border-accent-blue/50 focus:bg-white/[0.08] transition-all duration-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-neutral-300 font-heading">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-sans focus:border-accent-blue/50 focus:bg-white/[0.08] transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-neutral-300 font-heading">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project Collaboration"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-sans focus:border-accent-blue/50 focus:bg-white/[0.08] transition-all duration-300"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-300 font-heading">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-sans focus:border-accent-blue/50 focus:bg-white/[0.08] transition-all duration-300 resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-blue bg-[length:200%_auto] hover:bg-right text-white rounded-xl font-medium shadow-glow-blue hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none"
              >
                {status === 'sending' ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
              
              {result && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center font-sans text-sm mt-4 font-semibold ${
                    status === 'success' 
                      ? 'text-accent-green' 
                      : status === 'error' 
                      ? 'text-red-400' 
                      : 'text-neutral-400'
                  }`}
                >
                  {result}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Contact;

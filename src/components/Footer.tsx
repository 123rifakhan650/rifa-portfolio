import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, Mail, ArrowUp, Heart, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/123rifakhan650',
      icon: <Github className="w-4 h-4" />,
      id: 'footer-social-github',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rifa-khanum-512736237',
      icon: <Linkedin className="w-4 h-4" />,
      id: 'footer-social-linkedin',
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/_lightsandmiles',
      icon: <Instagram className="w-4 h-4" />,
      id: 'footer-social-instagram',
    },
    {
      name: 'Email',
      href: 'mailto:rifakhanum14@gmail.com',
      icon: <Mail className="w-4 h-4" />,
      id: 'footer-social-email',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#070A12] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Desktop / Stacked Mobile Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Left: Brand / Name */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#2DD4BF] text-[#0A0E1A] flex items-center justify-center font-bold text-sm">
                R
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Rifa Khanum
              </span>
            </div>
            <p className="text-xs text-[#94A3B8] font-mono">
              Full-Stack Software Engineer &bull; Bengaluru, India
            </p>
          </div>

          {/* Center: Copyright */}
          <div className="text-xs text-[#94A3B8] flex flex-col items-center gap-1">
            <p>&copy; {currentYear} Rifa Khanum. All rights reserved.</p>
            <p className="text-[11px] text-gray-500 flex items-center gap-1">
              <span>Engineered with React, Tailwind CSS & Framer Motion</span>
            </p>
          </div>

          {/* Right: Social Links & Back-to-top */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                id={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#94A3B8] hover:text-[#2DD4BF] hover:border-[#2DD4BF]/40 flex items-center justify-center transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}

            <button
              id="scroll-to-top-btn"
              onClick={scrollToTop}
              title="Back to Top"
              className="w-9 h-9 rounded-xl bg-[#2DD4BF]/10 text-[#2DD4BF] border border-[#2DD4BF]/30 hover:bg-[#2DD4BF] hover:text-[#0A0E1A] flex items-center justify-center transition-all ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

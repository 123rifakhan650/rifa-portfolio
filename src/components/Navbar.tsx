import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Mail, MessageSquare } from 'lucide-react';

interface NavbarProps {
  // Optional callback kept for compatibility if needed
  onOpenCVModal?: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Monitor scroll for header background & active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'skills', 'projects', 'process', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0E1A]/85 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          id="nav-logo"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#2DD4BF] to-[#0D9488] flex items-center justify-center text-[#0A0E1A] font-bold text-lg shadow-md group-hover:scale-105 transition-transform duration-200">
            R
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold tracking-tight text-base sm:text-lg group-hover:text-[#2DD4BF] transition-colors">
              Rifa Khanum
            </span>
            <span className="text-xs text-[#94A3B8] font-mono hidden sm:inline-block">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                id={`nav-link-${item.label.toLowerCase()}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                  isActive
                    ? 'text-[#2DD4BF]'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#2DD4BF] rounded-full shadow-[0_0_8px_#2DD4BF]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls: Theme toggle + Contact button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#94A3B8] hover:text-[#2DD4BF] hover:border-[#2DD4BF]/40 flex items-center justify-center transition-all duration-200"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            id="nav-contact-btn"
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#0A0E1A] bg-[#2DD4BF] hover:bg-[#5EEAD4] active:scale-95 transition-all duration-200 shadow-md shadow-[#2DD4BF]/20 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.08] text-[#94A3B8] flex items-center justify-center"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            className="w-11 h-11 min-h-[44px] rounded-lg bg-white/[0.05] border border-white/[0.08] text-white flex items-center justify-center active:scale-95 transition-transform"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#2DD4BF]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in/Dropdown Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#0A0E1A]/95 backdrop-blur-xl border-b border-white/[0.1] shadow-2xl"
          >
            <div className="px-5 pt-3 pb-6 space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-3 min-h-[44px] rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#2DD4BF]/10 text-[#2DD4BF] border border-[#2DD4BF]/30'
                        : 'text-gray-300 hover:bg-white/[0.05] hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-[#2DD4BF]" />}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/[0.08] flex flex-col gap-2">
                <a
                  id="mobile-contact-btn"
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full min-h-[44px] py-2.5 rounded-xl font-semibold text-sm text-[#0A0E1A] bg-[#2DD4BF] hover:bg-[#5EEAD4] flex items-center justify-center gap-2 shadow-md shadow-[#2DD4BF]/20 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

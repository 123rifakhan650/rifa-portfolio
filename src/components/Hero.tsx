import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, Mail, ArrowRight, Sparkles, Terminal, Code2, Cpu, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const headingWords = [
    { text: 'Architecting', highlight: false },
    { text: 'Full-Stack', highlight: true },
    { text: 'Web', highlight: true },
    { text: 'Applications', highlight: true },
    { text: '&', highlight: false },
    { text: 'AI-Driven', highlight: true },
    { text: 'Solutions.', highlight: false },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/123rifakhan650',
      icon: <Github className="w-5 h-5" />,
      id: 'hero-social-github',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rifa-khanum-512736237',
      icon: <Linkedin className="w-5 h-5" />,
      id: 'hero-social-linkedin',
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/_lightsandmiles',
      icon: <Instagram className="w-5 h-5" />,
      id: 'hero-social-instagram',
    },
    {
      name: 'Email',
      href: 'mailto:rifakhanum14@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      id: 'hero-social-email',
    },
  ];

  const statCards = [
    {
      label: 'Experience',
      value: '2+ Years',
      detail: 'Production software engineering & full-stack development',
      icon: <Terminal className="w-4 h-4 text-[#2DD4BF]" />,
    },
    {
      label: 'Projects Completed',
      value: '5+ Projects',
      detail: 'Scalable web dashboards & AI integrations',
      icon: <Code2 className="w-4 h-4 text-[#2DD4BF]" />,
    },
    {
      label: 'Support Tickets',
      value: '1500+',
      detail: 'Support tickets resolved with high customer satisfaction',
      icon: <CheckCircle2 className="w-4 h-4 text-[#2DD4BF]" />,
    },
  ];

  const scrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Subtle ambient gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-[#2DD4BF]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-900/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Hero Left Column (Text, Actions, Socials) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Role Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#2DD4BF]/30 text-[#2DD4BF] text-xs sm:text-sm font-mono tracking-wide mb-6 shadow-sm shadow-[#2DD4BF]/10"
            >
              <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-ping inline-block" />
              <span>Python Full-Stack Developer &bull; AI & Automation</span>
            </motion.div>

            {/* Main Heading with Animated Words */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              {headingWords.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 * index, ease: 'easeOut' }}
                  className={`inline-block mr-2 sm:mr-3 ${
                    word.highlight
                      ? 'text-[#2DD4BF] drop-shadow-[0_0_20px_rgba(45,212,191,0.35)]'
                      : ''
                  }`}
                >
                  {word.text}
                </motion.span>
              ))}
            </h1>

            {/* Intro paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg text-[#94A3B8] leading-relaxed mb-8 max-w-2xl"
            >
              Hi, I'm <span className="text-white font-semibold">Rifa Khanum</span>, a Full-Stack Software Engineer & Automation Specialist based in Bengaluru. I design and build production web applications, enterprise automation pipelines, technical competency frameworks, and AI-integrated developer tools with Python, Django, React, and modern cloud technologies.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8"
            >
              <button
                id="hero-view-work-btn"
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto min-h-[44px] px-7 py-3 rounded-xl bg-[#2DD4BF] text-[#0A0E1A] font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-[#2DD4BF]/25 hover:bg-[#5EEAD4] active:scale-95 transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-contact-btn"
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto min-h-[44px] px-7 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/[0.06] hover:border-[#2DD4BF]/50 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Let's Talk</span>
              </button>
            </motion.div>

            {/* Social Icons Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-3 pt-2"
            >
              <span className="text-xs uppercase tracking-widest text-[#94A3B8]/80 font-mono mr-2">
                Connect
              </span>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  id={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 min-h-[40px] rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#94A3B8] hover:text-[#2DD4BF] hover:border-[#2DD4BF]/40 hover:bg-[#2DD4BF]/10 flex items-center justify-center transition-colors duration-200"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Interactive Tech Terminal Card & Stat Cards */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center relative w-full">
            
            {/* Developer Terminal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full max-w-md rounded-2xl bg-[#0F172A]/90 border border-white/10 backdrop-blur-xl p-5 shadow-2xl shadow-black/50 mb-5 relative overflow-hidden group hover:border-[#2DD4BF]/40 transition-all duration-300"
            >
              {/* Subtle top glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#2DD4BF]/15 rounded-full blur-2xl pointer-events-none" />
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-gray-400 ml-2">developer.py</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for Roles</span>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-1.5 font-mono text-xs sm:text-[13px] leading-relaxed">
                <p className="text-[#94A3B8]">
                  <span className="text-purple-400">class</span> <span className="text-yellow-300">SoftwareEngineer</span>:
                </p>
                <p className="text-[#94A3B8] pl-4">
                  <span className="text-cyan-400">name</span> = <span className="text-emerald-300">"Rifa Khanum"</span>
                </p>
                <p className="text-[#94A3B8] pl-4">
                  <span className="text-cyan-400">focus</span> = [<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"Django"</span>, <span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"AI/LLMs"</span>]
                </p>
                <p className="text-[#94A3B8] pl-4">
                  <span className="text-cyan-400">mindset</span> = <span className="text-emerald-300">"Building clean, scalable & automated solutions"</span>
                </p>
                <p className="text-[#94A3B8] pl-4 pt-1">
                  <span className="text-purple-400">def</span> <span className="text-blue-400">execute</span>(<span className="text-orange-300">problem</span>):
                </p>
                <p className="text-[#94A3B8] pl-8">
                  <span className="text-purple-400">return</span> <span className="text-yellow-300">production_grade_software</span>(<span className="text-orange-300">problem</span>)
                </p>
              </div>
            </motion.div>

            {/* Core Values Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="w-full max-w-md px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex items-center justify-center text-center gap-2 mb-4 text-xs sm:text-sm font-mono text-[#2DD4BF]/90"
            >
              <Cpu className="w-4 h-4 text-[#2DD4BF] shrink-0" />
              <span>Clean Code &bull; Scalable Solutions &bull; Automation-First</span>
            </motion.div>

            {/* Stat Cards: Stacked cleanly on mobile, floating stacked in right column */}
            <div className="w-full max-w-md flex flex-col gap-3">
              {statCards.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 + idx * 0.1 }}
                  whileHover={{ scale: 1.02, x: -2 }}
                  className="p-3.5 rounded-xl bg-[#111827]/80 backdrop-blur-md border border-white/[0.08] hover:border-[#2DD4BF]/40 transition-all duration-200 flex items-start gap-3 shadow-md shadow-black/20"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 flex items-center justify-center shrink-0 mt-0.5">
                    {stat.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between">
                      <span className="text-white font-bold text-base">{stat.value}</span>
                      <span className="text-xs font-mono text-[#2DD4BF]">{stat.label}</span>
                    </div>
                    <p className="text-xs text-[#94A3B8] mt-0.5 leading-snug">{stat.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

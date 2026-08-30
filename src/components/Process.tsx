import React from 'react';
import { motion } from 'motion/react';
import { Search, Map, Palette, Code, CheckCircle, Rocket, GitCommit } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Understanding requirements, user objectives, and technical constraints.',
      icon: <Search className="w-5 h-5" />,
    },
    {
      number: '02',
      title: 'Plan',
      description: 'Architecting data schemas, system models, and clean API contracts.',
      icon: <Map className="w-5 h-5" />,
    },
    {
      number: '03',
      title: 'Design',
      description: 'Crafting intuitive UI layouts, components, and responsive experiences.',
      icon: <Palette className="w-5 h-5" />,
    },
    {
      number: '04',
      title: 'Develop',
      description: 'Writing modular, scalable full-stack code and integrating services.',
      icon: <Code className="w-5 h-5" />,
    },
    {
      number: '05',
      title: 'Test',
      description: 'Validating edge cases, unit logic, security rules, and performance.',
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      number: '06',
      title: 'Deploy',
      description: 'Automated CI/CD deployment pipelines, monitoring, and iteration.',
      icon: <Rocket className="w-5 h-5" />,
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-[#2DD4BF]/30 text-[#2DD4BF] text-xs font-mono mb-3">
            <GitCommit className="w-3.5 h-3.5" />
            <span>Methodology & Lifecycle</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            My Work Process
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-3">
            A disciplined, end-to-end engineering methodology from initial concept to reliable production.
          </p>
        </motion.div>

        {/* Desktop Horizontal Timeline (hidden on mobile, visible on lg screens) */}
        <div className="hidden lg:block relative mb-12">
          {/* Horizontal Connecting Line */}
          <div className="absolute top-10 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-transparent via-[#2DD4BF]/40 to-transparent z-0" />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: 'easeOut' }}
                className="flex flex-col items-center text-center group"
              >
                {/* Circular Icon Badge */}
                <motion.div
                  whileHover={{ scale: 1.15, borderColor: '#2DD4BF' }}
                  className="w-20 h-20 rounded-full bg-[#111827] border-2 border-white/10 group-hover:border-[#2DD4BF] group-hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] flex flex-col items-center justify-center text-[#2DD4BF] shadow-lg mb-4 transition-colors duration-300 relative"
                >
                  <span className="text-[10px] font-mono font-bold text-[#94A3B8] group-hover:text-white transition-colors">
                    {step.number}
                  </span>
                  <div className="mt-0.5">{step.icon}</div>
                </motion.div>

                {/* Step Title & Description */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#2DD4BF] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed max-w-[170px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline (visible below lg) */}
        <div className="block lg:hidden relative pl-6 sm:pl-8 space-y-8">
          {/* Vertical Connecting Line */}
          <div className="absolute top-4 bottom-4 left-6 sm:left-8 w-0.5 bg-gradient-to-b from-[#2DD4BF]/50 via-teal-500/30 to-transparent -translate-x-1/2 z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative flex items-start gap-4 z-10"
            >
              {/* Step Circle Badge */}
              <div className="w-12 h-12 rounded-full bg-[#111827] border-2 border-[#2DD4BF]/60 flex items-center justify-center text-[#2DD4BF] shadow-md shrink-0 -ml-6 sm:-ml-6 bg-[#0A0E1A]">
                <span className="text-xs font-mono font-bold text-[#2DD4BF]">{step.number}</span>
              </div>

              {/* Step Content Card */}
              <div className="flex-1 p-4 rounded-xl bg-[#111827]/80 border border-white/[0.08] backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-[#2DD4BF]">{step.icon}</div>
                  <h3 className="text-base font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

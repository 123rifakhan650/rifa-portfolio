import React from 'react';
import { motion } from 'motion/react';
import { User, MapPin, Mail, Sparkles, CheckCircle, Briefcase, Code, Layers } from 'lucide-react';

export const AboutSkills: React.FC = () => {
  const skillsList = [
    { name: 'Python / Django / REST APIs', percentage: 92, tag: 'Backend & APIs' },
    { name: 'React.js / JavaScript / TypeScript', percentage: 88, tag: 'Frontend & UI' },
    { name: 'Workflow Automation & Scripting', percentage: 90, tag: 'Automation Engines' },
    { name: 'Competency Frameworks & Matrices', percentage: 86, tag: 'Talent & Architecture' },
    { name: 'AI LLM Integration & Prompting', percentage: 84, tag: 'AI Solutions' },
  ];

  const techBadges = [
    'Python', 'Django', 'React.js', 'JavaScript', 'TypeScript',
    'Workflow Automation', 'Competency Frameworks', 'AI Integration',
    'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'SQL', 'REST APIs',
    'Git & GitHub', 'ETL Pipelines', 'Support Automation'
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-[#2DD4BF]/30 text-[#2DD4BF] text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Profile & Core Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            About Me & Technical Expertise
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-3">
            Bridging robust backend architectures with clean, responsive user interfaces.
          </p>
        </motion.div>

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: About Me Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#111827]/70 backdrop-blur-md border border-white/[0.08] shadow-xl relative overflow-hidden group hover:border-white/20 transition-all duration-300"
          >
            {/* Ambient accent top bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2DD4BF] via-teal-500 to-cyan-600" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#2DD4BF]/10 border border-[#2DD4BF]/30 flex items-center justify-center text-[#2DD4BF]">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">About Me</h3>
                <p className="text-xs text-[#2DD4BF] font-mono">Software Engineer & Problem Solver</p>
              </div>
            </div>

            {/* Factual Bio */}
            <div className="space-y-4 text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-8">
              <p>
                I am a <strong className="text-white font-semibold">Python Full-Stack Software Engineer & Automation Specialist</strong>, specializing in architecting reliable web applications, enterprise competency frameworks, intelligent workflow automations, and AI integrations.
              </p>
              <p>
                My engineering focus sits at the intersection of robust backend logic, clean UI, and automation. I build production-grade web systems with <span className="text-white font-medium">Python, Django, and Flask</span>, reactive interfaces in <span className="text-white font-medium">React, JavaScript, and Node.js</span>, and automated pipelines that have resolved 1,500+ technical support and operational workflows with high SLA compliance.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-white/[0.08]">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <User className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                <div className="overflow-hidden">
                  <span className="block text-[11px] font-mono text-[#94A3B8]/70 uppercase">Name</span>
                  <span className="text-sm font-semibold text-white truncate block">Rifa Khanum</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <MapPin className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                <div className="overflow-hidden">
                  <span className="block text-[11px] font-mono text-[#94A3B8]/70 uppercase">Location</span>
                  <span className="text-sm font-semibold text-white truncate block">Bengaluru, India</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <Mail className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                <div className="overflow-hidden">
                  <span className="block text-[11px] font-mono text-[#94A3B8]/70 uppercase">Email</span>
                  <a
                    href="mailto:rifakhanum14@gmail.com"
                    className="text-xs sm:text-sm font-medium text-white hover:text-[#2DD4BF] transition-colors truncate block"
                  >
                    rifakhanum14@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="w-4 h-4 flex items-center justify-center shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-[#94A3B8]/70 uppercase">Availability</span>
                  <span className="text-xs sm:text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Open to Work
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Skills Pills */}
            <div className="mt-6 pt-5 border-t border-white/[0.08]">
              <span className="text-xs uppercase font-mono text-[#94A3B8] block mb-3">Technologies & Tooling</span>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.04] text-gray-300 border border-white/[0.08] hover:border-[#2DD4BF]/40 hover:text-[#2DD4BF] transition-colors"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: My Expertise & Horizontal Skill Bars (Anchor id: skills) */}
          <motion.div
            id="skills"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#111827]/70 backdrop-blur-md border border-white/[0.08] shadow-xl relative overflow-hidden group hover:border-white/20 transition-all duration-300"
          >
            {/* Ambient accent top bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 via-teal-500 to-[#2DD4BF]" />

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2DD4BF]/10 border border-[#2DD4BF]/30 flex items-center justify-center text-[#2DD4BF]">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">My Expertise</h3>
                  <p className="text-xs text-[#2DD4BF] font-mono">Proficiency & Technical Depth</p>
                </div>
              </div>
              <span className="text-xs font-mono text-[#94A3B8] hidden sm:inline-block">5 Core Areas</span>
            </div>

            <p className="text-sm text-[#94A3B8] mb-7 leading-relaxed">
              Demonstrated hands-on experience building production workflows, handling complex state management, data modeling, and clean system integrations.
            </p>

            {/* Horizontal Animated Skill Bars */}
            <div className="space-y-6">
              {skillsList.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{skill.name}</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-white/[0.05] text-[#94A3B8] font-mono">
                        {skill.tag}
                      </span>
                    </div>
                    <span className="font-mono font-bold text-[#2DD4BF] text-sm">
                      {skill.percentage}%
                    </span>
                  </div>

                  {/* Skill Progress Track */}
                  <div className="h-3 w-full rounded-full bg-white/[0.06] p-0.5 overflow-hidden border border-white/[0.05]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.15 + index * 0.1, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-[#0D9488] via-[#14B8A6] to-[#2DD4BF] shadow-[0_0_12px_rgba(45,212,191,0.4)]"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Engineering Highlights */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                <p className="text-xs text-[#94A3B8]">
                  <strong className="text-white">API Design:</strong> RESTful endpoints, auth tokens, serialization
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                <p className="text-xs text-[#94A3B8]">
                  <strong className="text-white">Automation:</strong> Scripting, ETL pipelines & background tasks
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

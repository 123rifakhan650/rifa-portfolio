import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, CheckCircle2, ChevronDown, ChevronUp, Cpu, Workflow, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLinkActive = (link?: string) => link && link !== '#' && link.trim() !== '';

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'automation':
        return <Workflow className="w-4 h-4 text-[#2DD4BF]" />;
      case 'ai app':
        return <Sparkles className="w-4 h-4 text-[#2DD4BF]" />;
      default:
        return <Layers className="w-4 h-4 text-[#2DD4BF]" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
      className="group flex flex-col rounded-2xl bg-[#111827]/80 backdrop-blur-md border border-white/[0.08] hover:border-[#2DD4BF]/40 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#2DD4BF]/10"
    >
      {/* Header Accent Bar */}
      <div className="p-5 pb-4 border-b border-white/[0.06] bg-gradient-to-r from-white/[0.02] to-[#2DD4BF]/[0.03] flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#2DD4BF]/10 border border-[#2DD4BF]/25 flex items-center justify-center">
            {getCategoryIcon(project.category)}
          </div>
          <span className="text-xs font-mono font-semibold text-[#2DD4BF] tracking-wide uppercase">
            {project.category}
          </span>
        </div>

        {project.domain && (
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono text-[#94A3B8] bg-white/[0.04] border border-white/[0.06] text-right truncate max-w-[200px]">
            {project.domain}
          </span>
        )}
      </div>

      {/* Main Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-[#2DD4BF] transition-colors mb-3 leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-[#94A3B8] leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Key Architectural Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-5 p-3.5 rounded-xl bg-black/20 border border-white/[0.05]">
              <div className="text-xs font-mono text-[#2DD4BF] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Key Deliverables & Architecture</span>
              </div>
              <ul className="space-y-1.5">
                {project.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="text-xs text-gray-300 flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2DD4BF] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2 mb-5">
            {project.techStack?.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/[0.04] text-gray-300 border border-white/[0.06] group-hover:border-[#2DD4BF]/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Footer Specs & Clickable GitHub & Demo Action Buttons */}
          <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 text-xs text-[#2DD4BF] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
              <span>Ready to Build</span>
            </div>

            <div className="flex items-center gap-2">
              {isLinkActive(project.githubLink) && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold py-1.5 px-3 rounded-lg bg-white/[0.06] hover:bg-[#2DD4BF]/15 border border-white/10 hover:border-[#2DD4BF]/40 text-white hover:text-[#2DD4BF] transition-all duration-200 shadow-sm"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              )}
              {isLinkActive(project.liveLink) && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold py-1.5 px-3 rounded-lg bg-[#2DD4BF] text-[#0A0E1A] hover:bg-[#5EEAD4] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Explore</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

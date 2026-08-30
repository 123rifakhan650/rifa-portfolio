import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects.js';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map((p: Project) => p.category))];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter((p: Project) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-[#2DD4BF]/30 text-[#2DD4BF] text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Portfolio & Case Studies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Selected Work
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-3">
            Featured applications, automation systems, and full-stack software built for production.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all min-h-[38px] ${
                selectedFilter === category
                  ? 'bg-[#2DD4BF] text-[#0A0E1A] font-semibold shadow-md shadow-[#2DD4BF]/20'
                  : 'bg-white/[0.04] text-[#94A3B8] hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Dynamic Project Cards Grid: 3-column desktop, 2-column tablet, 1-column mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project: Project, index: number) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

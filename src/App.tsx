/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSkills } from './components/AboutSkills';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Numbers } from './components/Numbers';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0E1A] text-[#94A3B8] font-sans antialiased selection:bg-[#2DD4BF]/30 selection:text-[#2DD4BF] overflow-x-hidden">
      {/* Top Fixed / Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About Me & My Expertise */}
        <AboutSkills />

        {/* Section 3: Selected Work */}
        <Projects />

        {/* Section 4: My Work Process */}
        <Process />

        {/* Section 5: By The Numbers */}
        <Numbers />

        {/* Section 6: Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

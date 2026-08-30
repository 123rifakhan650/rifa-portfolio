# Rifa Khanum — Full-Stack Software Engineer & AI Systems Portfolio

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, high-performance, and responsive personal portfolio website engineered for **Rifa Khanum**, showcasing full-stack web applications, enterprise competency frameworks, support automation engines, and AI integrations.

Designed with a sleek dark theme (`#0A0E1A` rich navy background with `#2DD4BF` teal accents), fluid motion animations, and a 100% self-contained client-side architecture that runs anywhere without requiring external backend servers or complex setup.

---

## 🌟 Key Highlights & Engineering Features

- **Domain-Focused Showcase**: Built specifically to highlight full-stack development, Python/Django backend systems, React interfaces, AI document intelligence, and enterprise workflow automations.
- **Enterprise Competency & Automation Sections**: Dedicated cards detailing real-world engineering impact, including 1,500+ resolved technical support tickets and talent evaluation architectures.
- **Zero-Dependency Static Delivery**: Configured with relative asset resolution (`base: './'`) so anyone can clone and immediately deploy to GitHub Pages, Vercel, Netlify, or static hosts with zero configuration errors.
- **Dynamic Project Architecture**: Centralized data model in `src/data/projects.js` for instant project updates and filtering.
- **Mobile-First Responsive Layout**: Optimized across all viewports (Mobile, Tablet, Desktop) with 44px+ touch targets and accessible contrast ratios.

---

## 🚀 Quick Start (Run Locally in 2 Minutes)

Anyone can clone and run this portfolio locally with standard Node.js:

### 1. Clone the repository
```bash
git clone https://github.com/123rifakhan650/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the URL shown in your terminal).



## 🛠️ Project Structure

```text
├── public/
│   └── favicon.svg          # Custom browser favicon
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Responsive navigation bar with mobile drawer
│   │   ├── Hero.tsx         # Hero section, bio, stat cards & socials
│   │   ├── AboutSkills.tsx  # Competency matrix, skills progress & background
│   │   ├── Process.tsx      # 4-step engineering workflow timeline
│   │   ├── Projects.tsx     # Project showcase with category filters
│   │   ├── ProjectCard.tsx  # Interactive project card with key specs
│   │   ├── Contact.tsx      # Contact form with EmailJS integration
│   │   └── Footer.tsx       # Footer links & copyright
│   ├── data/
│   │   └── projects.js      # Centralized project data file
│   ├── types.ts             # TypeScript interfaces and data models
│   ├── App.tsx              # Main application shell
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global Tailwind styling
├── index.html               # Semantic HTML entry point & SEO meta tags
├── vite.config.ts           # Vite configuration with relative base paths
└── package.json             # Scripts & dependencies
```

---

---

## 💻 Featured Engineering Projects (Ready to Build)

All projects are organized in `src/data/projects.js`. Active GitHub code repositories and live explore links are enabled for your AI & Task Manager apps:

1. **AI Career Counselling Platform (LLM-Powered)** — *[Active GitHub & Explore]*
   - **Stack**: Python, Flask, React, LLM APIs, Prompt Engineering, Tailwind CSS
   - **Description**: Intelligent career guidance platform that evaluates candidate skills and background to generate structured, personalized career progression paths and learning milestones.
   - **GitHub**: [ai-career-counselling-app](https://github.com/123rifakhan650/ai-career-counselling-app)

2. **Full-Stack Task Manager with AI & Docker CI/CD** — *[Active GitHub & Explore]*
   - **Stack**: Python, Django, React, Docker, CI/CD, PostgreSQL, AI Integration
   - **Description**: Production-grade, containerized task management system with Docker Compose and automated CI/CD pipelines, integrated with AI logic for automated task classification and priority scheduling.
   - **GitHub**: [task-manager-ai-docker](https://github.com/123rifakhan650/task-manager-ai-docker)

3. **AI-Powered Course Progress & Learning Dashboard**
   - **Stack**: Python, Django, JavaScript, PostgreSQL, REST APIs, Tailwind CSS
   - **Description**: End-to-end course progress tracking platform with a real-time reactive UI, Django backend architecture, relational database models, and automated reporting workflows for tracking AI/ML course completions.

4. **Enterprise Competency Framework & Skill Gap Matrix**
   - **Stack**: Python, Django, React, PostgreSQL, REST APIs, Tailwind CSS
   - **Description**: Technical competency evaluation platform tracking employee self-assessments, architect-reviewed skill benchmarks, and auto-generating training recommendations to close competency gaps.

5. **Automated Workflow & Data Synchronization Engine**
   - **Stack**: Python, Power Automate, SQL, Automation Scripts, Pandas, REST APIs
   - **Description**: Automated process execution engine replacing manual, Excel-heavy workflows with unattended Python scripts and Power Automate for bulk enrollment, unenrollment, data synchronization, and automated email alerts.

6. **Assessment Analytics & Leadership Reporting Portal**
   - **Stack**: Power BI, SQL, Python, Data Modeling, Excel Analysis
   - **Description**: Business intelligence dashboard analyzing competency assessment data using Power BI and SQL to surface critical skill-gap trends and training ROI for executive leadership.

---

## 🎨 Customization Guide

### 1. Update Projects
Open `src/data/projects.js` and edit the array objects:
```javascript
{
  title: "AI-Powered Course Progress & Learning Dashboard",
  category: "Full Stack", // "Full Stack" | "Automation" | "AI App"
  domain: "Learning Systems & Real-Time Tracking",
  description: "An end-to-end course progress tracking platform...",
  techStack: ["Python", "Django", "JavaScript", "PostgreSQL"],
  highlights: [
    "Independently engineered full-stack UI and scalable backend architecture",
    "Real-time organization-wide analytics into course completion status"
  ],
  githubLink: "https://github.com/123rifakhan650/ai-course-tracking-dashboard",
  liveLink: "https://github.com/123rifakhan650/ai-course-tracking-dashboard"
}
```

### 2. Configure Contact Form
Open `src/components/Contact.tsx` and supply your free [EmailJS](https://www.emailjs.com) service credentials (`EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY`) to receive client messages directly to your inbox.

---



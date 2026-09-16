/**
 * Project Data Collection
 * 
 * To add a new project to your portfolio:
 * 1. Add a new object to the `projects` array below with the following schema:
 *    {
 *      title: "Your Project Name",
 *      category: "Full Stack" | "AI App" | "Frontend" | "Backend" | "Mobile",
 *      description: "A concise 1-2 sentence description of what the application does.",
 *      techStack: ["Python", "Django", "React", "PostgreSQL"],
 *      liveLink: "https://your-live-demo-url.com",
 *      githubLink: "https://github.com/123rifakhan650/your-repo-name"
 *    }
 */

/**
 * Project Data Collection
 * 
 * Sourced directly from Rifa Khanum's engineering experience and technical portfolio:
 * - AI Course Progress Dashboard (Django & JS)
 * - AI Career Counselling App (LLM & React)
 * - Full-Stack Task Manager (Docker, CI/CD, AI Integration)
 * - Enterprise Competency Framework & Skill Gap Platform (Django & React)
 * - Workflow & Support Automation Engine (Python & Power Automate)
 * - Power BI & SQL Leadership Reporting Dashboard
 */

export const projects = [
  {
    title: "AI Career Counselling Platform (LLM-Powered)",
    category: "AI App",
    domain: "AI Systems & Generative LLMs",
    description: "An intelligent career counselling application powered by Large Language Models that analyzes user skills, background, aspirations, and target country to generate personalized career recommendations, skill-gap analysis, Job vs Master's guidance, company insights, and structured career roadmaps.",
    techStack: ["React", "TypeScript", "Node.js", "Express.js", "Gemini API", "LLM Integration", "Prompt Engineering", "REST APIs", "Tailwind CSS", "Vite"],
    highlights: [
       "Custom prompt engineering pipeline for multi-factor skill, experience, and aspiration analysis",
       "Personalized career recommendations with skill-gap analysis and actionable growth roadmaps", 
       "Job vs Master's decision support with country-specific career and company insights"
    ],
    githubLink: "https://github.com/123rifakhan650/ai-career-counselling-app",
    liveLink: "https://ai-career-counselling-app-2.onrender.com/"
  },
  {
    title: "Django Full-Stack Task Orchestrator with AI & Docker CI/CD",
    category: "Full Stack",
    domain: "DevOps & Intelligent Task Systems",
    description: "An enterprise-grade, Django REST Framework-powered task orchestration platform backed by PostgreSQL and React, featuring an interactive Eisenhower Priority Matrix, automated recurring scheduling, and Gemini AI for intelligent workflow automation.",
    techStack: ["Python", "Django", "React", "Docker", "CI/CD", "PostgreSQL", "AI Integration", "TypeScript", "Gemini AI"],
    highlights: [
      "Fully containerized multi-service architecture using Docker, Docker Compose, and automated CI/CD pipelines",
      "Interactive Eisenhower 2×2 Priority Matrix with real-time severity scoring and recurring schedule engine",
      "Gemini AI integration for natural language task parsing, automated decomposition, and priority ranking"
    ],
    githubLink: "https://github.com/123rifakhan650/task-manager-ai-docker",
    liveLink: "https://taskflow-django-api.onrender.com/"
  },
  {
    title: "AI-Powered Course Progress & Learning Dashboard",
    category: "Full Stack",
    domain: "Learning Systems & Real-Time Tracking",
    description: "An end-to-end course progress tracking platform with a real-time reactive UI, Django backend architecture, relational database models, and automated reporting workflows for tracking AI/ML course completions.",
    techStack: ["Python", "Django", "JavaScript", "PostgreSQL", "REST APIs", "HTML", "CSS"],
    highlights: [
      "Independently engineered full-stack UI and scalable backend architecture",
      "Real-time organization-wide analytics into course completion status",
      "Automated reporting workflows and progress visualization models"
    ]
  },
  {
    title: "Enterprise Competency Framework & Skill Gap Matrix",
    category: "Full Stack",
    domain: "Competency Architecture & Assessment",
    description: "A technical competency evaluation platform that tracks employee self-assessments, architect-reviewed skill benchmarks, and auto-generates training recommendations to close competency gaps.",
    techStack: ["Python", "Django", "React", "PostgreSQL", "REST APIs", "Tailwind CSS"],
    highlights: [
      "Dynamic multi-tier employee self-assessment and architect review workflows",
      "Automated rule engine generating targeted training recommendations",
      "Surfaced missing training triggers and closed organization tracking gaps"
    ]
  },
  {
    title: "Automated Workflow & Data Synchronization Engine",
    category: "Automation",
    domain: "Workflow Automation & Scripting",
    description: "An automated process execution engine that replaces manual, Excel-heavy workflows with unattended Python scripts and Power Automate for bulk enrollment, unenrollment, data synchronization, and automated email alerts.",
    techStack: ["Python", "Power Automate", "SQL", "Automation Scripts", "Pandas", "REST APIs"],
    highlights: [
      "Automated bulk user enrollments, record updates, and scheduled email reminders",
      "Eliminated hours of repetitive manual data manipulation and spreadsheet overhead",
      "Significantly elevated training compliance and operational turnaround speed"
    ]
  },
  {
    title: "Assessment Analytics & Leadership Reporting Portal",
    category: "Automation",
    domain: "Data Analytics & Business Intelligence",
    description: "An enterprise business intelligence dashboard analyzing competency assessment data using Power BI, SQL, and advanced reporting models to surface critical skill-gap trends and training effectiveness for leadership.",
    techStack: ["Power BI", "SQL", "Python", "Data Modeling", "Excel Analysis"],
    highlights: [
      "Multi-source data aggregation using complex SQL queries and relational models",
      "Interactive visual dashboards tracking organization-wide skill gap trends",
      "Actionable reporting evaluating training program effectiveness and ROI"
    ]
  }
];


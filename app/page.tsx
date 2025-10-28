'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Code,
  Database,
  Palette,
  Smartphone,
  Globe,
  Award,
  Calendar,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Zap,
  Cpu,
  Layers
} from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' }
  ];

  const projects = [
    {
      title: 'bldspace',
      tagline: 'A space for builders to build together',
      description: 'bldspace is a community platform where people share what they are building, find collaborators, and grow ideas into real projects. Each post focuses on the work itself, not followers or likes. Builders connect through contribution requests, discussions, and shared progress. It’s a clean, distraction-free space built around creativity, openness, and meaningful collaboration.',
      stack: ['Next.js', 'React', 'Firebase', 'TypeScript', 'Tailwind CSS'],
      image: '/projects/bldspace.png',
      logo: '/projects/logo/bldspace.png',
      github: '#',
      live: 'https://bldspace.vercel.app/',
      metrics: 'Facilitated 200+ collaboration requests across 100+ early projects',
      icon: '🚀'
    },
    {
      title: 'ROMA',
      tagline: 'Collaborative Travel Planning Platform',
      description: 'ROMA is a travel planning platform that lets people plan trips together in real time. It brings shared maps, live route visualization, and seamless coordination into one place. The system is built on a scalable cloud setup with geospatial mapping, live data sync, and contextual trip management for a smooth and intuitive planning experience.',
      stack: ['Next.js', 'React', 'Firebase', 'Google Maps Platform', 'GCP Functions', 'WebSockets'],
      image: '/projects/roma.png',
      github: '#',
      live: 'https://roma-nu.vercel.app/',
      metrics: '3× increase in collaboration | 40% faster trip planning | Multi-region cloud deployment',
      icon: '🌍'
    },
    {
      title: 'WorldVibe',
      tagline: 'The Living Social Map',
      description: 'A global platform where people drop short-lived “vibes” (thoughts, photos, or videos) pinned to real locations on an interactive world map. Each vibe lives for 24 hours before fading, creating a constantly evolving view of human emotion and presence across the planet. WorldVibe captures what the world is feeling right now.',
      stack: ['Next.js', 'Google Maps API', 'Firebase', 'Cloud Storage', 'TailwindCSS'],
      image: '/projects/worldvibe.png',
      github: '#',
      live: 'https://worldvibe.vercel.app/',
      metrics: 'Connected users from 30+ countries within the first launch phase',
      icon: '🌍'
    },
    {
      title: 'KriSync',
      tagline: 'Unify, Visualize, and Sync Your Work',
      description: 'KriSync is a unified workspace for developers, freelancers, and small teams to connect all their project data across tools into one interactive canvas. It helps you create project summaries, add integrations, visualize workflows using React Flow, keep notes, set milestones, and track progress all in one place. Designed for those managing multiple projects across platforms, KriSync transforms scattered links and data into a clear, visual narrative of your work.',
      stack: ['React', 'Firebase', 'React Flow', 'Node.js', 'Google Cloud Platform'],
      image: '/projects/krisync.png',
      logo: '/projects/logo/krisync.jpg',
      github: '#',
      live: 'https://www.krisync.com/',
      metrics: 'Simplified multi-platform project tracking for 50+ early users during private beta',
      icon: '🔗'
    },
    {
      title: 'GeetAI',
      tagline: 'Conversational Platform for Spiritual Dialogue',
      description: 'Created an interactive platform that brings the wisdom of the Bhagavad Gita into everyday conversations. GeetAI personifies Lord Krishna, offering calm, contextual, and spiritually grounded guidance through natural dialogue. Powered by Gemma 2 and Pinecone, it understands user intent, recalls context, and delivers meaningful multi-turn discussions rooted in timeless teachings.',
      stack: ['Gemma 2', 'GCP', 'Pinecone', 'TensorFlow', 'FastAPI'],
      image: '/projects/geetai.png',
      logo: '/projects/logo/GeetAI_logo.jpeg',
      github: 'https://github.com/Saurabhh-37/geeta_chatbot',
      live: 'https://geetai.vercel.app/',
      metrics: 'Supports over 1M contextual message exchanges with high semantic precision',
      icon: '🕊️'
    },
    {
      title: 'Construx',
      tagline: 'Construction Workflow Management System',
      description: 'Developed a mobile-first platform that streamlines project coordination, progress tracking, and field data management for construction teams. Construx connects labor, activities, and expenses in real time, ensuring accurate updates and transparent communication across teams. Built with React Native and Firebase, it enables seamless collaboration, reporting, and on-site decision-making from any device.',
      stack: ['React Native', 'Firebase', 'Firestore', 'WebRTC'],
      image: '/projects/construx.png',
      logo: '/projects/logo/construx.png',
      github: '#',
      live: 'https://construx-website.vercel.app/',
      metrics: 'Boosted operational efficiency by 30% across 100+ active construction projects',
      icon: '🧱'
    },
    {
      title: 'CollektEase',
      tagline: 'WhatsApp-Based Billing and Collection Platform',
      description: 'Designed a smart billing system that helps newspaper distributors and local vendors manage monthly collections with ease. CollektEase automates invoice generation and payment reminders through WhatsApp, allows customers to share payment proofs, and simplifies manual verification. Built to handle multi-tenant setups, it offers transparency, faster reconciliation, and effortless cash flow tracking for small businesses.',
      stack: ['React', 'Firebase', 'Cloud Functions', 'Twilio WhatsApp API'],
      image: '/projects/collektease.png',
      logo: '/projects/logo/collektease.png',
      github: '#',
      live: '#',
      metrics: 'Reduced payment delays by 40% and improved collection accuracy across 500+ monthly users',
      icon: '📊'
    },
    {
      title: 'ManageME',
      tagline: 'No-Code Business Analytics Platform',
      description: 'Built a platform that transforms Excel and CSV files into interactive dashboards and insights without writing a single line of code. ManageME helps MSMEs analyze sales, revenue, and performance data through intuitive visualizations, filtering, and reporting. Designed with real-time Firestore syncing and Cloud Functions for automated data processing, it brings enterprise-grade analytics to everyday business users.',
      stack: ['React', 'Firebase', 'Cloud Functions', 'Firestore'],
      image: '/projects/manageme.png',
      logo: '/projects/logo/manageme.png',
      github: '#',
      live: 'https://www.manageme.tech/',
      metrics: 'Adopted by 50+ MSMEs, streamlining reporting workflows and cutting manual analysis time by 60%',
      icon: '📈'
    },
    {
      title: 'Imagic',
      tagline: 'AI-Powered Image Generation & Editing Suite',
      description: 'Developed an advanced AI image generation platform with real-time editing capabilities. Integrated state-of-the-art machine learning models for image synthesis, style transfer, and intelligent photo enhancement.',
      stack: ['React', 'Python', 'TensorFlow', 'OpenCV', 'AWS S3'],
      image: '/projects/imagic.jpg',
      github: '#',
      live: '#',
      metrics: 'Generated 100K+ AI images with 98% user satisfaction',
      icon: '🎨'
    }
  ];

  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'React Native', icon: '📱' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Python (Flask, FastAPI, Django)', icon: '🐍' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Google Cloud Platform', icon: '☁️' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Llama3', icon: '🦙' },
    { name: 'Pinecone', icon: '🌲' },
    { name: 'Vector Search', icon: '🔍' },
    { name: 'LangChain', icon: '⛓️' },
    { name: 'Firestore', icon: '🗄️' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'FAISS', icon: '📊' },
    { name: 'GitHub Actions', icon: '⚡' },
    { name: 'Cloud Functions', icon: '☁️' },
    { name: 'CI/CD Pipelines', icon: '🔄' }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'LogiHackathon Finalist (Dassault Systèmes)',
      description: 'Architected a distributed IoT platform handling 10M+ telemetry data/day',
      icon: '🏆'
    },
    {
      year: '2024',
      title: 'Founded Horizon Studio',
      description: 'Established a technical consultancy specializing in enterprise architecture, SaaS, and AI systems',
      icon: '🚀'
    },
    {
      year: '2025',
      title: 'Advanced AI Infrastructure Research',
      description: 'Currently developing scalable ML orchestration systems and multi-agent conversational architectures',
      icon: '⚡'
    }
  ];

  const experience = [
    {
      title: "WTE Infra Projects Pvt. Ltd., Pune — Jr. Engineer (Dec 2024 – Present)",
      company: "WTE Infra Projects",
      logo: "/logos/wte-logo.png",
      summary:
        "Building scalable IoT systems for real-world infrastructure. I lead the design and deployment of an Online Monitoring System (OMS) powering 100+ water and wastewater treatment plants, bridging cloud, IoT, and real-time analytics.",
      highlights: [
        "Developed a multi-tenant React dashboard with real-time monitoring, role-based access, and multi-site visualization.",
        "Architected a serverless backend using AWS IoT Core, Lambda, API Gateway, and DynamoDB for high-performance data flow.",
        "Implemented CI/CD pipelines via GitHub Actions, enabling automated build, test, and deployment to Vercel.",
        "Designed an edge-to-cloud data pipeline using MQTT protocols and embedded gateways for fault detection and analytics."
      ],
      impact:
        "Enabled reliable 24/7 monitoring across 100+ sites, improving operational visibility and reducing manual reporting overhead by 60%."
    },
    {
      title: "3DExperience Lab — Dassault Systèmes, Pune — 3DExperience Lab Intern (Dec 2023 – Dec 2024)",
      company: "Dassault Systèmes",
      logo: "/logos/dassault-logo.png",
      summary:
        "Worked across IoT, robotics, and AI research projects — blending real-time data systems with human-like intelligence.",
      highlights: [
        "Contributed to FleetSight, a fleet management system integrating IoT and analytics for logistics monitoring.",
        "Built AI-driven interactions for a humanoid robot using Llama3 to enable contextual, human-like conversations.",
        "Prototyped control systems for a precision suture robot, combining mechanical accuracy with AI feedback."
      ],
      impact:
        "Strengthened the lab's AI–IoT integration initiatives, helping prototype next-generation intelligent robotics interfaces."
    },
    {
      title: "Go-Green's Technologies Pvt. Ltd., Mumbai — R&D Intern (Jan 2023 – Dec 2023)",
      company: "Go-Green's Technologies",
      logo: "/logos/gogreen-logo.png",
      summary:
        "Worked on educational IoT tools and community outreach to promote accessible technology learning.",
      highlights: [
        "Developed IoT-enabled educational boards for schools and institutions to demonstrate real-world sensor applications.",
        "Conducted workshops across Maharashtra on IoT fundamentals and practical applications."
      ],
      impact:
        "Trained 500+ students and educators, fostering early adoption of IoT in education."
    }
  ];

  const publications = [
    {
      title: 'IoT Enabled Remote Monitoring Application For Telecom SMPS',
      type: 'Research Paper',
      date: '2024',
      description: 'Published research on developing an IoT-based remote monitoring system for Telecom Switch Mode Power Supply (SMPS) units. The paper presents a comprehensive solution for real-time monitoring, fault detection, and predictive maintenance of critical power infrastructure in telecommunications.',
      link: 'https://www.ijfmr.com/research-paper.php?id=26566',
      tags: ['IoT', 'Telecom', 'Power Systems', 'Remote Monitoring']
    }
  ];

  const blogs = [
    {
      title: 'Trust is Sacred: The One Rule That Should Change How You Build Your Product',
      type: 'Medium Blog',
      date: '2025',
      description:
        'A reflection on designing with respect for people\'s time. When someone opens an app or signs up for a service, they\'re making a choice to hand over their time and attention. This means they\'re trusting you with a slice of their life they\'ll never get back. The single responsibility is to make it worth it.',
      link: 'https://medium.com/@saurabhhagawane/trust-is-sacred-the-one-rule-that-should-change-how-you-build-your-product-d4b78cb2978e', // Add your Medium link here
      tags: ['Product Design', 'Ethics', 'User Experience', 'Trust']
    },
    {
      title: 'The Algorithm Problem: Visibility, Bias, and the Struggle for New Creators',
      type: 'Medium Blog',
      date: '2025',
      description:
        'Why engagement-optimized feeds privilege identity over ideas, bury emerging voices, and create invisible bias—plus thoughts on designing systems that balance scale with fairness and persistence.',
      link: 'https://medium.com/@saurabhhagawane/the-algorithm-problem-visibility-bias-and-the-struggle-for-new-creators-469496c01d58', // Add your Medium link here
      tags: ['Algorithms', 'Discovery', 'Bias', 'Creators']
    },
    {
      title: 'Beyond Screens: Why Generative UI is the Future of Digital Experience',
      type: 'Medium Blog',
      date: '2025',
      description:
        'An argument for Generative UI: interfaces synthesized on-demand that adapt to intent, context, and cognition—shifting designers into system thinkers and raising urgent questions about transparency, agency, and ethics.',
      link: 'https://medium.com/@saurabhhagawane/beyond-screens-why-generative-ui-is-the-future-of-digital-experience-182bf200025b', // Add your Medium link here
      tags: ['Generative UI', 'HCI', 'LLMs', 'Product']
    },
    {
      title: 'Beyond To-Do Lists: Master Your Projects with KriSync’s Visual Workspace',
      type: 'Medium Blog',
      date: '2025',
      description:
        'Why projects fail from fragmentation, and how KriSync\'s visual canvas unifies links, notes, tasks, files, and collaborators into one real-time workspace for freelancers, indie hackers, and small teams.',
      link: 'https://medium.com/@saurabhhagawane/beyond-to-do-lists-master-your-projects-with-krisyncs-visual-workspace-7c863eb6621f', // Add your Medium link here
      tags: ['KriSync', 'Project Management', 'Visual Workspace', 'Productivity']
    },
    {
      title: 'The Code is Not Enough: Build Systems, Not Just Software',
      type: 'Medium Blog',
      date: '2025',
      description:
        'Why great products require system design—thinking in interdependencies, feedback loops, composability, observability, and long-term behavior—not just shipping features and writing code.',
      link: 'https://medium.com/@saurabhhagawane/the-code-is-not-enough-build-systems-not-just-software-55783fd5e9dd', // Add your Medium link here
      tags: ['Systems Thinking', 'Architecture', 'Engineering', 'Scale']
    },
    {
      title: 'The One-Sentence Rule: Why Simplicity Transforms Your Projects',
      type: 'Medium Blog',
      date: '2025',
      description:
        'How forcing a one-sentence product definition drives clarity, scope discipline, and better execution—using KriSync\'s evolution from chaos to a crystal-clear visual project workspace as the case study.',
      link: 'https://medium.com/@saurabhhagawane/the-one-sentence-rule-why-simplicity-transforms-your-projects-d9ac3bf7fa80', // Add your Medium link here
      tags: ['Simplicity', 'Product Focus', 'Clarity', 'Execution']
    },
    {
      title: 'Why Project Management Tools Still Fail Us in 2025: The Unspoken Truth',
      type: 'Medium Blog',
      date: '2025',
      description:
        'A critique of modern PM tools: scattered work, no holistic view, weak context capture, painful onboarding, over/under-powered tooling, and rigid models that ignore creative, fluid workflows—plus a call for unified, visual, evolving workspaces.',
      link: 'https://medium.com/@saurabhhagawane/why-project-management-tools-still-fail-us-in-2025-the-unspoken-truth-48b05bdc61d2', // Add your Medium link here
      tags: ['Project Management', 'Tools', 'Productivity', 'UX']
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      
      // Calculate scroll progress
      setScrollProgress((scrollPosition / documentHeight) * 100);
      
      // Show navbar when scrolled past hero section
      setIsNavbarVisible(scrollPosition > windowHeight * 0.8);
      
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[var(--border)] z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--highlight)]"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 bg-[var(--card-bg)]/80 backdrop-blur-md border-b border-[var(--border)] transition-all duration-300 ${
        isNavbarVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-[var(--foreground)]"
            >
              Saurabh
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? 'text-[var(--accent)] bg-[var(--accent)]/10'
                      : 'text-[var(--secondary)] hover:text-[var(--foreground)]'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-[var(--secondary)] hover:text-[var(--foreground)]"
            >
              <ChevronDown className={`w-6 h-6 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[var(--card-bg)] border-t border-[var(--border)]"
            >
              <div className="px-6 py-2 space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === section.id
                        ? 'text-[var(--accent)] bg-[var(--accent)]/10'
                        : 'text-[var(--secondary)] hover:text-[var(--foreground)]'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between text-center md:text-left py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden min-h-screen">
        {/* --- Subtle Animated Background --- */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--accent)_0%,transparent_70%)] opacity-10 animate-pulse" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,var(--background)_0%,transparent_50%,var(--background)_100%)] animate-gradient-slow" />
        </div>

        {/* --- Left Column: Text --- */}
        <div className="relative z-10 w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-tight whitespace-nowrap">
            Saurabh Hagawane
          </h1>

          <div className="space-y-4">
            <p className="text-lg sm:text-xl text-[var(--secondary)] font-medium">
              Engineer • Architect • AI Systems Builder
            </p>
            
            <div className="space-y-3 text-lg sm:text-xl md:text-2xl text-[var(--secondary)] leading-relaxed">
              <p className="text-base sm:text-lg md:text-xl font-medium">
                Engineering scalable, AI-driven, and cloud-native architectures that translate complex distributed systems into high-performance, maintainable software.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-[var(--accent)]">
              Translating system architecture and product vision into platforms that think, adapt, and scale.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-block px-6 py-3 rounded-xl bg-[var(--accent)] text-[var(--background)] hover:opacity-90 transition-all text-sm sm:text-base font-medium tracking-wide"
            >
              Explore Work
            </a>
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-xl border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--background)] transition-all text-sm sm:text-base font-medium tracking-wide"
            >
              Connect
            </a>
          </div>
        </div>

        {/* --- Right Column: Image with Enhanced Data Flow Animation --- */}
        <div className="relative z-10 mt-8 sm:mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl border border-[var(--accent)] group">
          <img 
                  src="/profile.JPG" 
                  alt="Saurabh Hagawane - Software Engineer & Technical Architect"
                  className="w-full h-full object-cover"
                />
            {/* Professional Portrait Placeholder */}
            <div className="w-full h-full bg-gradient-to-br from-[var(--accent)]/20 to-[var(--highlight)]/20 flex items-center justify-center relative">
              <span className="text-6xl sm:text-7xl md:text-8xl font-bold text-[var(--foreground)] opacity-50">SH</span>
              
              {/* Enhanced Data Flow Animation */}
              <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.2" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Network Nodes */}
                  <motion.circle
                    cx="80" cy="80" r="6"
                    fill="var(--accent)"
                    filter="url(#glow)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 0.8, 1], 
                      opacity: [0, 1, 0.7, 1] 
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 0 
                    }}
                  />
                  <motion.circle
                    cx="200" cy="120" r="4"
                    fill="var(--accent)"
                    filter="url(#glow)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 0.8, 1], 
                      opacity: [0, 1, 0.7, 1] 
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1 
                    }}
                  />
                  <motion.circle
                    cx="320" cy="80" r="5"
                    fill="var(--accent)"
                    filter="url(#glow)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 0.8, 1], 
                      opacity: [0, 1, 0.7, 1] 
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 2 
                    }}
                  />
                  <motion.circle
                    cx="120" cy="280" r="4"
                    fill="var(--accent)"
                    filter="url(#glow)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 0.8, 1], 
                      opacity: [0, 1, 0.7, 1] 
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1.5 
                    }}
                  />
                  <motion.circle
                    cx="280" cy="300" r="5"
                    fill="var(--accent)"
                    filter="url(#glow)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 0.8, 1], 
                      opacity: [0, 1, 0.7, 1] 
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 2.5 
                    }}
                  />
                  
                  {/* Connecting Lines */}
                  <motion.path
                    d="M80,80 Q140,100 200,120"
                    stroke="url(#dataFlow)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: [0, 1, 0.8, 1], 
                      opacity: [0, 0.8, 0.4, 0.8] 
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 0.5 
                    }}
                  />
                  <motion.path
                    d="M200,120 Q260,100 320,80"
                    stroke="url(#dataFlow)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: [0, 1, 0.8, 1], 
                      opacity: [0, 0.8, 0.4, 0.8] 
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1.5 
                    }}
                  />
                  <motion.path
                    d="M120,280 Q200,200 280,300"
                    stroke="url(#dataFlow)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: [0, 1, 0.8, 1], 
                      opacity: [0, 0.8, 0.4, 0.8] 
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 2.5 
                    }}
                  />
                  
                  {/* Data Pulse Effect */}
                  <motion.circle
                    cx="200" cy="200" r="2"
                    fill="var(--accent)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 3, 0], 
                      opacity: [0, 0.6, 0] 
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeOut",
                      delay: 1 
                    }}
                  />
                </svg>
              </div>
            </div>
            
            {/* Gradient overlay for professional feel */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--accent)_0%,transparent_60%)] opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)]">
                Blogs
              </h2>
              <p className="text-xl text-[var(--secondary)] max-w-2xl mx-auto">
                Thought pieces on product, systems, and the craft of building.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogs.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[var(--card-bg)] rounded-xl p-6 border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all group"
                >
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-sm font-medium">
                        {post.type}
                      </span>
                      <span className="text-[var(--secondary)] text-sm">{post.date}</span>
                    </div>
                    <p className="text-[var(--secondary)] leading-relaxed text-sm">
                      {post.description}
                    </p>
                    {post.tags && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-[var(--background)] text-[var(--secondary)] rounded text-xs border border-[var(--border)]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="pt-2">
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent)]/80 font-medium transition-colors"
                      >
                        Read on Medium
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-16 max-w-4xl mx-auto text-[var(--foreground)]">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About</h2>

        <div className="space-y-6 text-lg leading-relaxed text-[var(--secondary)]">
          <p>
            I've always been fascinated by how <span className="font-semibold text-[var(--accent)]">systems connect, evolve, and scale</span> under real-world conditions. My work bridges <span className="font-semibold text-[var(--accent)]">AI platforms</span>, <span className="font-semibold text-[var(--accent)]">distributed systems</span>, and <span className="font-semibold text-[var(--accent)]">cloud-native architectures</span>, building intelligent solutions that blend deep engineering with product intent.
          </p>

          <p>
            I focus on designing <span className="font-semibold text-[var(--accent)]">AI-driven backends</span>, <span className="font-semibold text-[var(--accent)]">data platforms</span>, and <span className="font-semibold text-[var(--accent)]">real-time infrastructure</span> that balance performance, reliability, and maintainability. <span className="font-semibold text-[var(--accent)]">Clean abstractions</span>, <span className="font-semibold text-[var(--accent)]">robust APIs</span>, and <span className="font-semibold text-[var(--accent)]">automation</span> guide how I turn complex ideas into production-ready systems.
          </p>

          <p>
            I've built and led projects like <span className="font-semibold text-[var(--accent)]">KriSync</span>, a unified SaaS interoperability platform; <span className="font-semibold text-[var(--accent)]">ManageME</span>, a no-code analytics suite; and <span className="font-semibold text-[var(--accent)]">GeetAI</span>, an AI conversational system inspired by the Bhagavad Gita. My earlier work spans <span className="font-semibold text-[var(--accent)]">IoT</span>, <span className="font-semibold text-[var(--accent)]">analytics</span>, and <span className="font-semibold text-[var(--accent)]">intelligent supply chain systems</span>.
          </p>

          <p>
            I believe in <span className="font-semibold text-[var(--accent)]">engineering clarity</span>. Systems should be intuitive in design, modular in architecture, and <span className="font-semibold text-[var(--accent)]">reliable at scale</span>. Great engineering isn't about complexity; it's about creating technology that endures.
          </p>
        </div>
      </section>

      {/* Work Philosophy Section */}
      <section id="work" className="py-24 bg-[var(--card-bg)]">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-16"
          >
            <div className="space-y-6">
              <p className="text-lg italic text-[var(--accent)]">
                "Design with empathy, engineer with intent, scale with clarity."
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)]">
                Engineering Systems That Scale, Evolve, and Endure
              </h2>
              <p className="text-xl text-[var(--secondary)] max-w-3xl mx-auto leading-relaxed">
                Every system I design begins with fundamentals: <span className="font-semibold text-[var(--accent)]">clarity in architecture</span>, 
                <span className="font-semibold text-[var(--accent)]"> predictability in performance</span>, and 
                <span className="font-semibold text-[var(--accent)]"> resilience under scale</span>. 
                My focus is on translating complex requirements into maintainable systems that can adapt, optimize, and sustain over time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-[var(--background)]">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)]">
                Engineering in Action
              </h2>
              <p className="text-xl text-[var(--secondary)] max-w-2xl mx-auto">
                Showcasing credibility through outcomes, not just titles — measurable impact across diverse technical challenges.
              </p>
            </div>

              <div className="space-y-8">
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[var(--card-bg)] rounded-xl p-8 border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all"
                  >
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        {/* Company Logo */}
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-[var(--background)] border border-[var(--border)] flex items-center justify-center flex-shrink-0">
                          <img 
                            src={item.logo} 
                            alt={`${item.company} logo`}
                            className="w-12 h-12 object-contain"
                            onError={(e) => {
                              // Fallback to company initials if logo fails to load
                              e.currentTarget.style.display = 'none';
                              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                              if (fallback) {
                                fallback.style.display = 'flex';
                              }
                            }}
                          />
                          <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center text-[var(--accent)] font-bold text-lg hidden">
                            {item.company.split(' ').map(word => word[0]).join('').slice(0, 2)}
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-[var(--foreground)] mb-3">{item.title}</h3>
                          <p className="text-lg text-[var(--secondary)] leading-relaxed">{item.summary}</p>
                        </div>
                      </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-[var(--foreground)] mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="text-[var(--secondary)] flex items-start gap-3">
                            <span className="text-[var(--accent)] mt-1 font-bold">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-[var(--accent)]/10 rounded-lg p-4 border-l-4 border-[var(--accent)]">
                      <p className="text-[var(--foreground)] font-semibold">
                        <span className="text-[var(--accent)]">Impact:</span> {item.impact}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-[var(--background)]">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)]">
                Systems That Speak
              </h2>
              <p className="text-xl text-[var(--secondary)] max-w-2xl mx-auto">
                Showcasing the diversity of builds — from platforms to experiments. Each project card feels like a product case study, not just a portfolio piece.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-[var(--card-bg)] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--border)]"
                >
                  {/* Project Image */}
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.title} project screenshot`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute top-4 right-4">
                    {project.logo ? (
                      <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        className="w-8 h-8 object-contain bg-black/30 rounded-md p-1 backdrop-blur-sm border border-white/10"
                      />
                    ) : (
                      <div className="text-2xl opacity-80 bg-black/20 rounded-full p-2 backdrop-blur-sm">
                        {project.icon}
                      </div>
                    )}
                  </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 mb-3">
                      {project.logo ? (
                        <img
                          src={project.logo}
                          alt={`${project.title} logo`}
                          className="w-8 h-8 object-contain border border-[var(--border)] rounded-md p-1 bg-[var(--background)]"
                        />
                      ) : (
                        <div className="text-3xl">{project.icon}</div>
                      )}
                      <div>
                        <h3 className="text-xl font-bold text-[var(--foreground)]">{project.title}</h3>
                        <p className="text-[var(--accent)] font-medium text-sm">{project.tagline}</p>
                      </div>
                    </div>
                    
                    <p className="text-[var(--secondary)] text-sm leading-relaxed">{project.description}</p>
                    
                    {/* <div className="bg-[var(--accent)]/10 p-3 rounded-lg border-l-4 border-[var(--accent)]">
                      <p className="text-sm font-semibold text-[var(--foreground)]">
                        <span className="text-[var(--accent)]">Outcome:</span> {project.metrics}
                      </p>
                    </div> */}
                    
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-[var(--background)] text-[var(--secondary)] rounded text-xs border border-[var(--border)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="pt-2 flex gap-3">
                      {/* <a 
                        href={project.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[var(--secondary)] hover:text-[var(--accent)] font-medium transition-colors text-sm border border-[var(--border)] px-3 py-1.5 rounded-md hover:border-[var(--accent)]/40"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a> */}
                      <a 
                        href={project.live} 
            target="_blank"
            rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent)]/80 font-medium transition-colors text-sm border border-[var(--accent)] px-3 py-1.5 rounded-md hover:bg-[var(--accent)]/10"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-[var(--card-bg)]">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-16"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)]">
                My Engineering Toolkit
              </h2>
              <p className="text-xl text-[var(--secondary)] max-w-2xl mx-auto">
                Communicating technical depth and breadth visually — showcasing the full spectrum of technologies and tools I work with.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group p-4 bg-[var(--background)] rounded-lg border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-center space-y-2">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <p className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors text-center leading-tight">
                      {tech.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Philosophy Section */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)]">
                Where Technology Meets Vision
              </h2>
              <p className="text-xl text-[var(--secondary)] max-w-3xl mx-auto leading-relaxed">
                I believe in building systems that don't just function, but connect — systems that align technology with human intuition. Every line of code is a decision — about clarity, scalability, and experience.
              </p>
            </div>

            <div className="space-y-8 text-lg text-[var(--secondary)] leading-relaxed">
              <p>
                Whether crafting <span className="font-semibold text-[var(--accent)]">AI-driven workflows</span> or architecting <span className="font-semibold text-[var(--accent)]">SaaS ecosystems</span>, my focus remains on <span className="font-semibold text-[var(--accent)]">sustainable innovation</span> — products that empower, not overwhelm.
              </p>
              
              <div className="bg-[var(--card-bg)] rounded-xl p-8 border border-[var(--border)] max-w-2xl mx-auto">
                <blockquote className="text-xl font-medium text-[var(--foreground)] italic">
                  "Engineering isn't just about efficiency — it's about empathy built into systems."
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="py-24 bg-[var(--background)]">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)]">
                Blogs
              </h2>
              <p className="text-xl text-[var(--secondary)] max-w-2xl mx-auto">
                Thought pieces on product, systems, and the craft of building.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogs.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[var(--card-bg)] rounded-xl p-6 border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-2 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-sm font-medium">
                            {post.type}
                          </span>
                          <span className="text-[var(--secondary)] text-sm">{post.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-[var(--secondary)] leading-relaxed">{post.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-[var(--background)] text-[var(--secondary)] rounded text-xs border border-[var(--border)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent)]/80 font-medium transition-colors"
                    >
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-24 bg-[var(--card-bg)]">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)]">
                Publications & Research
              </h2>
              <p className="text-xl text-[var(--secondary)] max-w-2xl mx-auto">
                Sharing knowledge through technical writing and research in AI, systems architecture, and scalable engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[var(--background)] rounded-xl p-6 border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                          {pub.title}
                        </h3>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-2 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-sm font-medium">
                            {pub.type}
                          </span>
                          <span className="text-[var(--secondary)] text-sm">{pub.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-[var(--secondary)] leading-relaxed">{pub.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pub.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-[var(--card-bg)] text-[var(--secondary)] rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent)]/80 font-medium transition-colors"
                    >
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-[var(--card-bg)]">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)]">
                Milestones That Matter
              </h2>
              <p className="text-xl text-[var(--secondary)] max-w-2xl mx-auto">
                Showcasing recognition and credibility without being boastful — achievements that demonstrate technical excellence and impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--background)] rounded-xl p-6 border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all text-center"
              >
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Top 5 Finalist</h3>
                <p className="text-[var(--secondary)]">LogiHackathon by Dassault Systèmes</p>
                <p className="text-sm text-[var(--accent)] mt-2">Developed real-time Fleet Management system showcased to 500+ participants</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[var(--background)] rounded-xl p-6 border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all text-center"
              >
                <div className="text-4xl mb-4">🕊️</div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">GeetAI Innovation</h3>
                <p className="text-[var(--secondary)]">Conversational AI inspired by the Bhagavad Gita</p>
                <p className="text-sm text-[var(--accent)] mt-2">Built AI-powered spiritual dialogue platform with 95% user satisfaction</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-[var(--background)] rounded-xl p-6 border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all text-center"
              >
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Horizon Founder</h3>
                <p className="text-[var(--secondary)]">AI-driven IT solutions for businesses</p>
                <p className="text-sm text-[var(--accent)] mt-2">Founded technical consultancy delivering 20+ digital solutions with 100% client satisfaction</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Future Section */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)]">
                What's Next
              </h2>
              <p className="text-xl text-[var(--secondary)] max-w-3xl mx-auto leading-relaxed">
                I'm building toward a future where AI-driven SaaS systems seamlessly integrate with how we work, think, and create.
              </p>
            </div>

            <div className="space-y-8 text-lg text-[var(--secondary)] leading-relaxed">
              <p>
                My focus now lies in crafting platforms that <span className="font-semibold text-[var(--accent)]">sync intelligence across products</span>, enabling <span className="font-semibold text-[var(--accent)]">autonomous, adaptive, and connected ecosystems</span>.
              </p>
              
              <p>
                The next decade will redefine how <span className="font-semibold text-[var(--accent)]">humans and machines collaborate</span> — and I want to build that bridge.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[var(--background)]">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)]">
                Let's Build Something Meaningful
              </h2>
              <p className="text-xl text-[var(--secondary)] max-w-2xl mx-auto">
                I'm always open to conversations around AI systems, scalable architectures, or meaningful collaborations.
              </p>
              <p className="text-lg text-[var(--accent)] font-medium">
                Let's connect and build something that lasts.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[var(--accent)] text-[var(--foreground)] rounded-lg font-medium hover:bg-[var(--accent)]/90 transition-colors flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[var(--accent)] text-[var(--accent)] rounded-lg font-medium hover:bg-[var(--accent)] hover:text-[var(--foreground)] transition-colors"
              >
                Download Technical Resume
              </motion.button>
            </div>

            <div className="flex justify-center space-x-6 pt-8">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="https://github.com" 
                className="p-3 rounded-full bg-[var(--card-bg)] hover:bg-[var(--accent)]/10 transition-colors border border-[var(--border)]"
              >
                <Github className="w-6 h-6 text-[var(--secondary)] hover:text-[var(--accent)]" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: -5 }}
                href="https://linkedin.com" 
                className="p-3 rounded-full bg-[var(--card-bg)] hover:bg-[var(--accent)]/10 transition-colors border border-[var(--border)]"
              >
                <Linkedin className="w-6 h-6 text-[var(--secondary)] hover:text-[var(--accent)]" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="mailto:saurabh@example.com" 
                className="p-3 rounded-full bg-[var(--card-bg)] hover:bg-[var(--accent)]/10 transition-colors border border-[var(--border)]"
              >
                <Mail className="w-6 h-6 text-[var(--secondary)] hover:text-[var(--accent)]" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--card-bg)] border-t border-[var(--border)] py-8">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <p className="text-[var(--secondary)]">
            © 2024 Saurabh Hagawane. Built with raw energy and clean code.
          </p>
        </div>
      </footer>
    </div>
  );
}
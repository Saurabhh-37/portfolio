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
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' }
  ];

  const projects = [
    {
      title: 'Fleet Management System',
      tagline: 'Real-time IoT & Cloud Infrastructure for Logistics Operations',
      description: 'Designed and implemented a distributed IoT platform ingesting over 10M+ telemetry data points daily. Built a cloud-native microservices architecture enabling real-time fleet tracking, route optimization, and predictive maintenance using ML pipelines. Optimized message throughput with Redis streams and MQTT brokers, ensuring sub-second synchronization between devices and dashboards.',
      stack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'IoT Sensors', 'GCP Pub/Sub'],
      image: '/api/placeholder/400/300',
      github: '#',
      live: '#',
      metrics: 'Top 5 Finalist — LogiHackathon (Dassault Systèmes)',
      icon: '🏆'
    },
    {
      title: 'ManageME Analytics Platform',
      tagline: 'No-Code Data Analytics Platform for MSMEs',
      description: 'Architected a serverless analytics engine processing 100K+ structured files with automated ETL pipelines. Built a dynamic dashboard rendering engine capable of real-time query visualization using Firebase Functions and BigQuery. Focused on low-latency data retrieval, multi-tenant isolation, and 99.9% uptime for enterprise users.',
      stack: ['React', 'Firebase', 'Cloud Functions', 'BigQuery', 'Chart.js'],
      image: '/api/placeholder/400/300',
      github: '#',
      live: '#',
      metrics: 'Adopted by 500+ MSMEs | Enabled non-technical teams to derive insights without code',
      icon: '📊'
    },
    {
      title: 'GeetAI Conversational Engine',
      tagline: 'Context-Aware Conversational AI for Spiritual Dialogue',
      description: 'Developed a context-preserving conversational AI using Gemma 2, optimized for domain-specific semantic understanding. Engineered an embedding-based retrieval system with Pinecone vector search, enabling natural multi-turn dialogues and long-context memory. Deployed on serverless GCP infrastructure with low latency and scalable concurrency.',
      stack: ['Gemma 2', 'GCP', 'Pinecone', 'TensorFlow', 'FastAPI'],
      image: '/api/placeholder/400/300',
      github: '#',
      live: '#',
      metrics: 'Achieved 95% semantic accuracy across 1M+ conversations',
      icon: '🕊️'
    },
    {
      title: 'KriSync Integration Platform',
      tagline: 'Unified SaaS Data Orchestration Layer',
      description: 'Architected an interoperability platform integrating 50+ SaaS applications under a microservices ecosystem. Built a unified data synchronization engine with real-time delta updates and conflict resolution algorithms. Integrated OAuth 2.0 and API Gateway for secure access control. Emphasized modular scalability and inter-service communication using Pub/Sub and gRPC.',
      stack: ['GCP', 'Firestore', 'Pinecone', 'Microservices', 'OAuth 2.0'],
      image: '/api/placeholder/400/300',
      github: '#',
      live: '#',
      metrics: 'Scaled to handle 10K+ API calls/min across multiple tenant environments',
      icon: '🌐'
    },
    {
      title: 'Construx Project Management Suite',
      tagline: 'AI-Driven Construction Workflow System',
      description: 'Engineered a mobile-first construction management platform supporting real-time project collaboration, AI-driven insights, and automated reporting. Integrated Firestore for synchronized updates, TensorFlow models for predictive resource optimization, and WebRTC for live communication.',
      stack: ['React Native', 'Firebase', 'TensorFlow', 'WebRTC'],
      image: '/api/placeholder/400/300',
      github: '#',
      live: '#',
      metrics: 'Improved operational efficiency by 30% across 100+ active construction projects',
      icon: '🧱'
    },
    {
      title: 'ROMA Travel Intelligence Platform',
      tagline: 'AI-Powered Personalized Travel Planning',
      description: 'Developed an AI-driven recommendation engine leveraging machine learning and dynamic pricing algorithms for personalized trip planning. Built map-based visual interactions using Mapbox, enabling interactive route planning and real-time data insights. Focused on high performance and modular architecture for scalability.',
      stack: ['React', 'Mapbox', 'Firebase', 'ML APIs', 'GraphQL'],
      image: '/api/placeholder/400/300',
      github: '#',
      live: '#',
      metrics: '1000+ personalized trips generated | 40% cost optimization achieved',
      icon: '🌍'
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
      title: 'Building Scalable AI Systems: A Microservices Approach',
      type: 'Technical Blog',
      date: '2024',
      description: 'Comprehensive guide on architecting AI systems using microservices, covering data pipelines, model serving, and real-time inference at scale.',
      link: 'https://medium.com/@saurabh/scalable-ai-systems',
      tags: ['AI Architecture', 'Microservices', 'Scalability']
    },
    {
      title: 'IoT Data Processing at Scale: Lessons from 10M+ Daily Events',
      type: 'Case Study',
      date: '2024',
      description: 'Detailed analysis of building distributed IoT platforms, covering message queuing, data processing pipelines, and real-time analytics.',
      link: 'https://dev.to/saurabh/iot-data-processing',
      tags: ['IoT', 'Data Processing', 'Real-time Analytics']
    },
    {
      title: 'The Future of Conversational AI: Beyond Chatbots',
      type: 'Research Paper',
      date: '2024',
      description: 'Exploring advanced conversational AI architectures, multi-agent systems, and context-aware dialogue management for enterprise applications.',
      link: 'https://arxiv.org/abs/2024.xxxxx',
      tags: ['Conversational AI', 'Multi-agent Systems', 'NLP']
    },
    {
      title: 'Cloud-Native Architecture Patterns for Startups',
      type: 'Technical Blog',
      date: '2023',
      description: 'Practical guide for startups on implementing cloud-native architectures, covering cost optimization, scalability, and operational excellence.',
      link: 'https://medium.com/@saurabh/cloud-native-startups',
      tags: ['Cloud Architecture', 'Startups', 'Cost Optimization']
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
                  <div className="h-48 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--highlight)]/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-50">
                        {project.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-3xl">{project.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--foreground)]">{project.title}</h3>
                        <p className="text-[var(--accent)] font-medium text-sm">{project.tagline}</p>
                      </div>
                    </div>
                    
                    <p className="text-[var(--secondary)] text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="bg-[var(--accent)]/10 p-3 rounded-lg border-l-4 border-[var(--accent)]">
                      <p className="text-sm font-semibold text-[var(--foreground)]">
                        <span className="text-[var(--accent)]">Outcome:</span> {project.metrics}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-[var(--background)] text-[var(--secondary)] rounded text-xs border border-[var(--border)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="pt-2">
                      <a href={project.live} className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent)]/80 font-medium transition-colors text-sm">
                        Read Case Study
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
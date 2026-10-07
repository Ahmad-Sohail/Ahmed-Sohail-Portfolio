import ecommerceThumbnail from '../assets/images/project_ecommerce_preview_1790190047885.jpg';
import portfolioThumbnail from '../assets/images/project_portfolio_preview_1790190058703.jpg';
import dashboardThumbnail from '../assets/images/project_bank_system_preview_1790190069977.jpg';

export const PROJECTS = [
  {
    id: 'ecommerce-storefront',
    title: 'AudioNest E-Commerce Platform',
    subtitle: 'End-to-End Audio Storefront & REST API',
    description: 'Full-Stack Audio Store with React, PHP & MySQL.',
    technologies: ['React', 'MySQL', 'REST API', 'JavaScript', 'PHP' ,'Tailwind CSS'],
    thumbnail: ecommerceThumbnail,
    githubUrl: 'https://github.com/Ahmad-Sohail/AudioNest_E-Commerce',
    liveUrl: '#',
    category: 'Full Stack Web App',
    highlights: [
      'Responsive React-based e-commerce frontend for browsing audio products',
      'Product category filtering and organized product listing experience',
      'Shopping cart functionality with quantity management and persistent cart state',
      'PHP REST API connected with MySQL for product and application data',
      'User authentication with login and signup functionality',
      'Responsive UI built with Tailwind CSS for desktop and mobile devices'
    ],
    architecture: {
      componentTier:  'React frontend organized into reusable components, pages, layouts, and custom hooks',
      stylingSystem: 'Tailwind CSS with responsive layouts designed for desktop, tablet, and mobile screens',
      stateManagement: 'React state and Context API used for shared application state and shopping cart management', 
      backend: 'PHP REST API connected with MySQL database'
    }
  },
  {
    id: 'portfolio-website',
    title: 'Developer Portfolio & Showcase',
    subtitle: 'High-Performance Full-Stack Personal Showcase',
    description: 'A bespoke personal portfolio and content showcase crafted with clean semantic HTML5 markup, customized CSS grid systems, client-side React, and backend API endpoints for inquiries. Engineered for fluid responsiveness and WCAG AA accessibility.',
    technologies: ['React', 'Node.js', 'JavaScript', 'Tailwind CSS', 'CSS Grid', 'REST APIs'],
    thumbnail: portfolioThumbnail,
    githubUrl: 'https://github.com/Ahmad-Sohail',
    liveUrl: '#',
    category: 'Full Stack Web App',
    highlights: [
      'Engineered with strict semantic HTML5 hierarchy and ARIA roles for screen reader accessibility',
      'Customized CSS Grid and Flexbox layout systems adhering to an 8px spatial grid',
      'Integrated contact dispatcher with client-side validation and backend API integration',
      'Optimized asset delivery and fluid typography scaling across mobile, tablet, and ultra-wide viewports'
    ],
    architecture: {
      componentTier: 'Semantic HTML5 structure with landmark regions, accessible skip links, and dialogs',
      stylingSystem: 'Customized CSS Grid and Flexbox layout rules with fluid clamp() typography and spacing tokens',
      stateManagement: 'IntersectionObserver API and native DOM event listeners for seamless scroll tracking'
    }
  },
  {
    id: 'saas-analytics-dashboard',
    title: 'SaaS Analytics & Cloud Dashboard',
    subtitle: 'Interactive Metric Visualizations & KPI Tracking',
    description: 'A modern, high-density full-stack dashboard providing interactive performance analytics, dynamic SVG data charts, responsive data tables with multi-column sorting, and backend metric API routes.',
    technologies: ['React', 'Node.js', 'Express', 'Python', 'MongoDB', 'JavaScript', 'Tailwind CSS', 'SVG Charts'],
    thumbnail: dashboardThumbnail,
    githubUrl: 'https://github.com/Ahmad-Sohail',
    liveUrl: '#',
    category: 'Full Stack Platform',
    highlights: [
      'Custom lightweight SVG charting primitives for sparklines, trend curves, and bar distribution visualizations',
      'Responsive tabular data grid featuring multi-column sorting, client-side pagination, and row filtering',
      'Fluid layout system seamlessly shifting from multi-column desktop widgets to stacked mobile cards',
      'Clean modular ES6+ JavaScript modules ensuring maintainable, reliable component architecture'
    ],
    architecture: {
      componentTier: 'Modular widget architecture with reusable card primitives, status badges, and chart wrappers',
      stylingSystem: 'Tailwind CSS with custom CSS Grid templates for dashboard metric bento layouts',
      stateManagement: 'Reactive component state managing filter intervals, active metric tabs, and sort parameters'
    }
  }
];

export const SKILLS_DATA = [
  {
    id: 'react',
    name: 'React 19',
    category: 'frontend',
    badge: 'Frontend Core',
    isFeatured: true,
    description:
      'Building component-driven, responsive user interfaces with modular architectures, custom hooks, atomic state management, and modern Vite toolchains.',
    footerTags: ['Hooks & Context', 'Modular Architecture', 'State Sync', 'Virtual DOM'],
    theme: {
      text: 'text-[#4F8CFF]',
      border: 'border-[#4F8CFF]/30',
      borderActive: 'active:border-[#4F8CFF]/60',
      badgeBg: 'bg-[#4F8CFF]/15',
      badgeBorder: 'border-[#4F8CFF]/30',
      glow: 'bg-[#4F8CFF]/15 md:bg-[#4F8CFF]/10',
      glowHover: 'group-hover:bg-[#4F8CFF]/20',
      iconBg: 'bg-[#4F8CFF]/20',
      iconBorder: 'border-[#4F8CFF]/40',
      titleHover: 'group-hover:text-[#4F8CFF]',
      hoverColorRgba: 'rgba(79, 140, 255, 0.5)',
      shadow: 'hover:shadow-blue-500/10',
    },
    icon: 'react',
  },
  {
    id: 'nodejs',
    name: 'Node.js & Express',
    category: 'backend',
    badge: 'Backend Core',
    isFeatured: true,
    description:
      'Designing scalable server runtimes, RESTful APIs, modular middleware chains, token-based authentication (JWT), and efficient asynchronous I/O workflows.',
    footerTags: ['RESTful APIs', 'Express Middleware', 'Auth & JWT', 'Async I/O'],
    theme: {
      text: 'text-emerald-300',
      border: 'border-emerald-400/30',
      borderActive: 'active:border-emerald-400/60',
      badgeBg: 'bg-emerald-400/15',
      badgeBorder: 'border-emerald-400/30',
      glow: 'bg-emerald-400/15 md:bg-emerald-400/10',
      glowHover: 'group-hover:bg-emerald-400/20',
      iconBg: 'bg-emerald-500/20',
      iconBorder: 'border-emerald-500/40',
      titleHover: 'group-hover:text-emerald-300',
      hoverColorRgba: 'rgba(52, 211, 153, 0.5)',
      shadow: 'hover:shadow-emerald-500/10',
    },
    icon: 'server',
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    badge: 'Core Language',
    description:
      'Modern ECMAScript standards, asynchronous promises, async/await, closures, and event-loop execution.',
    footerTags: ['ES6+', 'Async / Await', 'DOM & Fetch'],
    theme: {
      text: 'text-amber-300',
      border: 'border-amber-400/25',
      borderActive: 'active:border-amber-400/60',
      iconBg: 'bg-amber-400/20',
      iconBorder: 'border-amber-400/40',
      titleHover: 'group-hover:text-amber-400',
      hoverColorRgba: 'rgba(251, 191, 36, 0.5)',
    },
    icon: 'js',
  },
  {
    id: 'databases',
    name: 'MongoDB & NoSQL',
    category: 'database',
    badge: 'NoSQL Store',
    description:
      'Document-oriented schema design, collections, aggregation pipelines, Mongoose ODM, indexing, and performant CRUD operations.',
    footerTags: ['MongoDB', 'Mongoose', 'Aggregations'],
    theme: {
      text: 'text-emerald-300',
      border: 'border-emerald-400/25',
      borderActive: 'active:border-emerald-400/60',
      iconBg: 'bg-emerald-500/20',
      iconBorder: 'border-emerald-500/40',
      titleHover: 'group-hover:text-emerald-400',
      hoverColorRgba: 'rgba(19, 170, 82, 0.5)',
    },
    icon: 'database',
  },
  {
    id: 'restapi',
    name: 'RESTful APIs',
    category: 'backend',
    badge: 'Network & APIs',
    description:
      'Clean contract design, HTTP status protocols, input sanitization, CORS security, and client integration.',
    footerTags: ['API Contracts', 'Postman Testing', 'CORS Security'],
    theme: {
      text: 'text-sky-300',
      border: 'border-sky-400/25',
      borderActive: 'active:border-sky-400/60',
      iconBg: 'bg-sky-500/20',
      iconBorder: 'border-sky-500/40',
      titleHover: 'group-hover:text-sky-400',
      hoverColorRgba: 'rgba(56, 189, 248, 0.5)',
    },
    icon: 'globe',
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    category: 'frontend',
    badge: 'Design System',
    description:
      'Utility-first styling, consistent spatial tokens, dark themes, and responsive design systems.',
    footerTags: ['Utility System', 'Design Tokens'],
    theme: {
      text: 'text-teal-300',
      border: 'border-teal-400/25',
      borderActive: 'active:border-teal-400/60',
      iconBg: 'bg-teal-400/20',
      iconBorder: 'border-teal-400/40',
      titleHover: 'group-hover:text-teal-400',
      hoverColorRgba: 'rgba(45, 212, 191, 0.5)',
    },
    icon: 'palette',
  },
  {
    id: 'html5-css3',
    name: 'HTML5 & CSS3',
    category: 'frontend',
    badge: 'Web Standards',
    description:
      'Semantic document architecture, accessible landmark elements, fluid CSS Grid and Flexbox layouts.',
    footerTags: ['Semantic HTML5', 'CSS Grid & Flex'],
    theme: {
      text: 'text-orange-300',
      border: 'border-orange-400/25',
      borderActive: 'active:border-orange-400/60',
      iconBg: 'bg-orange-500/20',
      iconBorder: 'border-orange-500/40',
      titleHover: 'group-hover:text-orange-400',
      hoverColorRgba: 'rgba(249, 115, 22, 0.5)',
    },
    icon: 'code',
  },
  {
    id: 'git-github',
    name: 'Git & GitHub',
    category: 'tools',
    badge: 'DevOps & VCS',
    description:
      'Distributed source code tracking, atomic commits, pull request reviews, and CI/CD collaboration.',
    footerTags: ['Branching', 'PR Workflows'],
    theme: {
      text: 'text-rose-300',
      border: 'border-rose-400/25',
      borderActive: 'active:border-rose-400/60',
      iconBg: 'bg-rose-400/20',
      iconBorder: 'border-rose-400/40',
      titleHover: 'group-hover:text-rose-400',
      hoverColorRgba: 'rgba(251, 113, 133, 0.5)',
    },
    icon: 'git',
  },
];

export const EXPERIENCE_DATA = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Progree',
    period: '2026 — Present',
    location: 'Hybrid / Remote',
    type: 'Internship',
    description: 'Contributing directly to production web applications, collaborating with the engineering team to build scalable full-stack features, design RESTful APIs, manage database integrations, and craft responsive UI layouts.',
    achievements: [
      'Engineered responsive full-stack features utilizing React on the client and Node.js/Express REST APIs on the server tier',
      'Designed database schemas and implemented clean CRUD endpoints with input validation and security best practices',
      'Engineered accessible semantic UI structures and responsive CSS layouts across mobile, tablet, and desktop viewports',
      'Participated in structured code reviews, sprint planning discussions, and Git/GitHub collaboration workflows within an agile setting'
    ],
    skills: ['React', 'Node.js', 'Express', 'Python', 'JavaScript', 'REST APIs', 'MongoDB', 'Tailwind CSS', 'Git & GitHub']
  }
];

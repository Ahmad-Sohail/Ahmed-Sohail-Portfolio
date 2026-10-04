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
    name: 'React',
    category: 'frontend',
    level: 'Core Client Framework',
    description: 'Building component-driven, responsive user interfaces with modular architectures, custom hooks, and modern Vite toolchains.',
    tags: ['Hooks', 'Component Architecture', 'State Management', 'Virtual DOM', 'Vite'],
    isFeatured: true
  },
  {
    id: 'nodejs',
    name: 'Node.js & Express',
    category: 'backend',
    level: 'Core Server Runtime',
    description: 'Designing scalable server-side architectures, RESTful APIs, middleware chains, authentication, and HTTP request lifecycles.',
    tags: ['Express.js', 'RESTful APIs', 'Middleware', 'Async I/O', 'JSON Web Tokens'],
    isFeatured: true
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    level: 'Full Stack & Scripting',
    description: 'Developing backend logic, RESTful API services, automated scripts, data processing workflows, and backend algorithms.',
    tags: ['Python 3', 'REST APIs', 'Data Processing', 'Automation Scripts', 'Backend Logic']
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    level: 'Core Language',
    description: 'Deep understanding of modern ECMAScript (ES6+), async/await patterns, event-loop mechanics, closures, and DOM manipulation.',
    tags: ['ES6+', 'Async / Await', 'DOM APIs', 'Event Handling', 'Modular Code']
  },
  {
    id: 'databases',
    name: 'MongoDB (NoSQL)',
    category: 'database',
    level: 'Database Systems',
    description: 'Document-oriented schema design, collections, aggregation pipelines, Mongoose ODM, indexing, and performant query execution.',
    tags: ['MongoDB', 'NoSQL', 'Mongoose ODM', 'Document Collections', 'CRUD Operations']
  },
  {
    id: 'restapi',
    name: 'RESTful APIs & Integration',
    category: 'backend',
    level: 'API Architecture',
    description: 'Designing clean API contracts, HTTP status protocols, endpoint testing, CORS security, and client-server integration.',
    tags: ['Endpoint Design', 'HTTP Protocol', 'CORS Security', 'JSON Handling', 'Postman']
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'Advanced',
    description: 'Utility-first frontend design system implementation, responsive modifiers, design tokens, and cohesive UI styling.',
    tags: ['Utility Classes', 'Design Tokens', 'Dark Theme', 'Responsive Grids', 'Micro-interactions']
  },
  {
    id: 'html5-css3',
    name: 'HTML5 & CSS3 Systems',
    category: 'frontend',
    level: 'Advanced',
    description: 'Modern CSS systems including CSS Grid, Flexbox, custom properties, fluid typography tokens, and WCAG AA accessibility.',
    tags: ['Semantic Tags', 'CSS Grid & Flexbox', 'clamp() Tokens', 'a11y ARIA', 'SEO']
  },
  {
    id: 'git-github',
    name: 'Git & GitHub',
    category: 'tools',
    level: 'Proficient',
    description: 'Distributed version control, atomic commits, branch workflows, pull requests, issue tracking, and collaborative deployment.',
    tags: ['Version Control', 'Pull Requests', 'Branching Strategy', 'Code Reviews', 'CI/CD']
  }
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

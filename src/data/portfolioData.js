import ecommerceThumbnail from '../assets/images/project_ecommerce_preview_1790190047885.jpg';
import portfolioThumbnail from '../assets/images/project_portfolio_preview_1790190058703.jpg';
import forumThumbnail from '../assets/images/project_forum_preview_1792404603918.jpg';
import todoThumbnail from '../assets/images/project_todo_preview_1792404804564.jpg';
import myntraThumbnail from '../assets/images/project_myntra_preview_1792405948942.jpg';
import autodriveThumbnail from '../assets/images/project_autodrive_preview_1792406303752.jpg';
import sidcupThumbnail from '../assets/images/project_sidcup_preview_1792406489313.jpg';
import simonThumbnail from '../assets/images/project_simon_preview_1792406683445.jpg';
import rpsThumbnail from '../assets/images/project_rps_preview_1792406857479.jpg';
import tictactoeThumbnail from '../assets/images/project_tictactoe_preview_1792406858533.jpg';
import youtubeThumbnail from '../assets/images/project_youtube_preview_1792408102031.jpg';
import spotifyThumbnail from '../assets/images/project_spotify_preview_1792408103433.jpg';
import netflixThumbnail from '../assets/images/project_netflix_preview_1792408103088.jpg';

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
    title: 'Ahmed Sohail — Developer Portfolio',
    subtitle: 'Interactive Full-Stack Web Showcase & System Architecture',
    description: 'A modern, high-performance developer portfolio and personal showcase engineered with React 19, Vite, and Tailwind CSS. Features interactive horizontal carousels, categorized technology rails, dark/light theme switching, and WCAG AA accessibility.',
    technologies: ['React 19', 'Tailwind CSS', 'Vite', 'Framer Motion', 'JavaScript', 'Node.js'],
    thumbnail: portfolioThumbnail,
    githubUrl: 'https://github.com/Ahmad-Sohail/Ahmed-Sohail-Portfolio',
    liveUrl: '#',
    category: 'Full Stack Web App',
    highlights: [
      'Interactive horizontal sliding carousels for selected projects and technology stacks with touch-drag gestures',
      'Fluid dark & light theme system with persistent preferences and WCAG AA contrast compliance',
      'Engineered with strict semantic HTML5 hierarchy, ARIA roles, and accessible modal dialogs',
      'Integrated contact dispatcher with client-side validation and direct mail client fallbacks'
    ],
    architecture: {
      componentTier: 'Modular React 19 component architecture with interactive carousel sliders, modals, and hooks',
      stylingSystem: 'Tailwind CSS v4 with custom fluid typography tokens and high-contrast color systems',
      stateManagement: 'React Context API and custom state hooks for theme sync, carousel index, and scroll tracking',
      backend: 'Vite build toolchain on Node.js runtime with asynchronous mail relay dispatch'
    }
  },
  {
    id: 'forum-website',
    title: 'Community Forum & Discussion Platform',
    subtitle: 'Interactive Threaded Discussions, Topics & User Engagement',
    description: 'A full-stack community discussion forum engineered for dynamic conversations, knowledge exchange, and user engagement. Features category boards, threaded replies, user authentication, topic creation, and responsive community interactions.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'REST API', 'HTML5 & CSS3', 'Tailwind CSS'],
    thumbnail: forumThumbnail,
    githubUrl: 'https://github.com/Ahmad-Sohail/Forum_Website',
    liveUrl: '#',
    category: 'Full Stack Community Web App',
    highlights: [
      'Threaded discussion forums with category filtering, topic tags, and search capabilities',
      'User authentication with session handling, author profiles, and post moderation controls',
      'Dynamic discussion reply feeds with real-time timestamps and engagement counters',
      'Relational database schema designed for efficient parent-child thread queries and post relationships'
    ],
    architecture: {
      componentTier: 'Modular UI views for category boards, thread discussions, reply composers, and author cards',
      stylingSystem: 'Clean responsive layouts engineered for fast readability across desktop and mobile devices',
      stateManagement: 'Client-side form validation, active topic filtering, and asynchronous reply submission',
      backend: 'RESTful API endpoints handling user sessions, topic creation, thread querying, and database persistence'
    }
  },
  {
    id: 'todo-app-dom',
    title: 'Interactive Task Flow & Todo App',
    subtitle: 'Vanilla JavaScript DOM Manipulation & Persistent Local Storage',
    description: 'An interactive productivity task management application built with pure vanilla JavaScript, dynamic DOM manipulation, and browser LocalStorage. Features real-time task creation, completion toggling, deletion with animation, priority categorization, and persistent state across browser sessions.',
    technologies: ['JavaScript (ES6+)', 'DOM Manipulation', 'HTML5', 'CSS3', 'LocalStorage', 'Responsive Design'],
    thumbnail: todoThumbnail,
    githubUrl: 'https://github.com/Ahmad-Sohail/Todo-App-with-DOM',
    liveUrl: '#',
    category: 'Frontend Web App',
    highlights: [
      'Engineered with native DOM APIs, custom event listeners, and event delegation for optimal runtime performance',
      'Instant persistent data storage using browser window.localStorage with robust JSON serialization',
      'Dynamic task filtering states (All, Active, Completed) with live counter status metrics',
      'Accessible keyboard controls, inline item editing, and fluid deletion transition effects'
    ],
    architecture: {
      componentTier: 'Modular ES6 JavaScript functions managing task creation, DOM tree insertion, and state sync',
      stylingSystem: 'Clean CSS3 layout with responsive flexbox cards, custom checkboxes, and dark/light modes',
      stateManagement: 'In-memory task collection synchronized bi-directionally with browser LocalStorage',
      backend: 'Client-side runtime leveraging Web Storage APIs with zero external framework dependencies'
    }
  },
  {
    id: 'myntra-ecommerce',
    title: 'Myntra Fashion E-Commerce Clone',
    subtitle: 'Modern Fashion Marketplace, Shopping Bag & Product Catalog',
    description: 'A responsive fashion e-commerce storefront inspired by Myntra. Features dynamic apparel catalog browsing, category and brand filtering, interactive shopping bag management, real-time discount calculation, and persistent checkout cart state.',
    technologies: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'LocalStorage'],
    thumbnail: myntraThumbnail,
    githubUrl: 'https://github.com/Ahmad-Sohail/Myntra_Project',
    liveUrl: '#',
    category: 'Full Stack E-Commerce',
    highlights: [
      'Comprehensive fashion catalog featuring apparel cards, high-res previews, discount tags, and price strike-throughs',
      'Interactive shopping bag and wishlist with persistent state and real-time total order calculations',
      'Dynamic filtering by brand, category, price range, and gender classifications',
      'Fluid mobile-first and desktop-responsive shopping layout with clean checkout interface'
    ],
    architecture: {
      componentTier: 'Modular component architecture with product cards, shopping bag summary, filter sidebar, and header navigation',
      stylingSystem: 'Modern responsive CSS styling inspired by Myntra’s clean retail design system',
      stateManagement: 'Centralized cart state managing added items, quantities, and discount calculations with LocalStorage sync',
      backend: 'Structured product datasets and client-side RESTful API integrations'
    }
  },
  {
    id: 'autodrive-car',
    title: 'Autonomous Self-Driving Car Simulation',
    subtitle: 'Neural Network Steering, Ray-Casting Sensors & Physics Simulation',
    description: 'An interactive 2D autonomous vehicle simulator featuring ray-casting virtual distance sensors, artificial neural network decision making, and real-time physics. Simulates procedural multi-lane traffic, obstacle avoidance, lane-following intelligence, and live neural synapse weight visualization.',
    technologies: ['JavaScript', 'HTML5 Canvas', 'Neural Networks', 'Ray Casting', 'Physics Simulation', 'Python'],
    thumbnail: autodriveThumbnail,
    githubUrl: 'https://github.com/Ahmad-Sohail/Auto_Drive_Car',
    liveUrl: '#',
    category: 'AI & Physics Simulation',
    highlights: [
      'Multi-sensor ray casting detecting road boundaries, traffic vehicles, and lane deviations in real-time',
      'Feedforward neural network steering engine processing sensor inputs to compute acceleration and turning angle',
      'Dynamic multi-lane procedural traffic generation with collision detection and speed variations',
      'Live neural network weight visualization diagram rendering activated synapses and bias layers'
    ],
    architecture: {
      componentTier: 'Canvas animation render loop, vehicle kinematics engine, and sensory ray-casting system',
      stylingSystem: 'Sleek dark-mode simulation dashboard with telemetry readouts and control overlays',
      stateManagement: 'Per-frame vehicle state matrix (coordinates, velocity, angle, sensor intersection points)',
      backend: 'Client-side 60fps HTML5 Canvas simulation with optional Python machine learning integration'
    }
  },
  {
    id: 'sidcup-golf',
    title: 'Sidcup Family Golf — Immersive Web Experience',
    subtitle: 'Advanced GSAP ScrollTrigger Animations & Creative Frontend',
    description: 'An interactive, animation-rich recreation of the Sidcup Family Golf club web experience. Engineered with modern GSAP timelines, ScrollTrigger scroll-driven effects, custom cursor glow followers, 3D perspective card tilts, and smooth video hero overlays.',
    technologies: ['JavaScript (ES6+)', 'HTML5 & CSS3', 'GSAP', 'ScrollTrigger', 'Creative Web', 'Responsive Design'],
    thumbnail: sidcupThumbnail,
    githubUrl: 'https://github.com/Ahmad-Sohail/SidCup_Family_Golf',
    liveUrl: '#',
    category: 'Creative Frontend & Animation',
    highlights: [
      'Advanced GSAP & ScrollTrigger scroll-driven animations with dynamic navbar blur transitions',
      'Custom cursor follower with smooth interpolation, magnetic hover states, and blur glow trails',
      'Interactive 3D tilt perspective facility cards with dynamic lighting and image hover zooms',
      'Full-viewport cinematic background video integration with responsive overlay masking'
    ],
    architecture: {
      componentTier: 'Modular sections including video hero banner, interactive experience cards, and animated quote carousels',
      stylingSystem: 'Modern creative typography and dark aesthetic with electric neon lime accent highlights',
      stateManagement: 'Scroll-linked GSAP timeline triggers and pointer event coordinate tracking',
      backend: 'Static optimized client-side assets with fast CDN video streaming and zero latency'
    }
  },
  {
    id: 'simon-says-game',
    title: 'Simon Says — Interactive Memory Game',
    subtitle: 'Interactive Audio-Visual Sequence Generation & DOM Event Logic',
    description: 'An engaging, retro-inspired Simon Says sequence memory game engineered with pure JavaScript, dynamic DOM event handling, and audio synthesis. Challenges user cognitive recall through randomized light-up color sequences, real-time score tracking, dynamic round difficulty scaling, and high-score records.',
    technologies: ['JavaScript (ES6+)', 'DOM Event Logic', 'HTML5', 'CSS3 Animations', 'Audio Synthesis', 'Game Logic'],
    thumbnail: simonThumbnail,
    githubUrl: 'https://github.com/Ahmad-Sohail/Simon-Says-Game',
    liveUrl: '#',
    category: 'Interactive Web Game',
    highlights: [
      'Algorithmic random pattern generation with incrementally increasing speed and sequence complexity',
      'Audio-visual feedback system with synchronized quadrant flash animations and frequency tones',
      'Accurate user input matching with real-time sequence validation and immediate game-over handling',
      'Persistent high score record keeping and responsive touch/click controls across mobile and desktop'
    ],
    architecture: {
      componentTier: 'Interactive four-quadrant game board, dynamic level header, score counter, and restart modal',
      stylingSystem: 'Vibrant retro-neon styling with CSS3 transitions, radial glow rings, and responsive square layout',
      stateManagement: 'Centralized game state engine tracking gameSequence, userSequence, activeLevel, and bestScore',
      backend: 'Pure client-side browser execution with zero external asset latency and Web Audio API support'
    }
  },
  {
    id: 'stone-paper-scissors',
    title: 'Rock Paper Scissors — Interactive Web Game',
    subtitle: 'Interactive Player vs Computer Gameplay, Win Streaks & Dynamic DOM Effects',
    description: 'An interactive, animated Rock Paper Scissors web game featuring player vs computer algorithmic match generation, real-time score tracking, celebratory outcome badges, winning streak counters, and responsive touch controls.',
    technologies: ['JavaScript (ES6+)', 'DOM Manipulation', 'HTML5', 'CSS3 Animations', 'Game Logic', 'Responsive UI'],
    thumbnail: rpsThumbnail,
    githubUrl: 'https://github.com/Ahmad-Sohail/Stone-Paper-Scissors-Game',
    liveUrl: '#',
    category: 'Interactive Web Game',
    highlights: [
      'Algorithmic computer move generation with fair randomized probability distribution',
      'Real-time scoreboard with dynamic round counters, win streak trackers, and reset controls',
      'Animated hand gesture choices with hover micro-interactions and glowing result banners',
      'Fully responsive touch and click interfaces optimized across mobile and desktop devices'
    ],
    architecture: {
      componentTier: 'Interactive choice selector arena, scoreboard HUD, result message card, and reset triggers',
      stylingSystem: 'Vibrant modern styling with glowing radial choice buttons and smooth outcome badges',
      stateManagement: 'Client-side game loop tracking playerScore, computerScore, roundHistory, and currentWinner',
      backend: 'Lightweight zero-dependency client-side execution with fast browser rendering'
    }
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe — Dynamic Strategy Game',
    subtitle: 'Turn-Based Grid Logic, Winning Combination Detection & Local Persistence',
    description: 'An interactive, turn-based Tic Tac Toe strategy game engineered with pure JavaScript and dynamic DOM grid manipulation. Features real-time turn switching (Player X vs Player O), instant 8-way winning pattern detection, draw recognition, animated win line highlights, and game restart mechanisms.',
    technologies: ['JavaScript (ES6+)', 'DOM Grid Logic', 'HTML5', 'CSS3', 'Game Algorithms', 'Responsive Design'],
    thumbnail: tictactoeThumbnail,
    githubUrl: 'https://github.com/Ahmad-Sohail/Tic-Tac-Toe-Game',
    liveUrl: '#',
    category: 'Interactive Web Game',
    highlights: [
      'Instant 8-way combination validation matrix checking rows, columns, and diagonal vectors',
      'Dynamic player turn toggling (Player X vs Player O) with live turn indicator animations',
      'Celebratory winning line stroke rendering across the victorious three-cell sequence',
      'Clean round history metrics, tie detection, and instant board reset controls'
    ],
    architecture: {
      componentTier: '3x3 interactive game grid, turn status header, scoreboard tracker, and game-over announcement',
      stylingSystem: 'Minimalist dark-mode grid design with neon cyan X and vibrant coral O glowing marks',
      stateManagement: '9-cell board state array validating win condition matrices on each move event',
      backend: 'Pure client-side event-driven game engine with zero external dependencies'
    }
  },
  {
    id: 'youtube-clone',
    title: 'YouTube Video Streaming & Discovery Platform',
    subtitle: 'Video Feed Grid, Custom HTML5 Player & Category Filtering',
    description: 'A responsive, feature-rich YouTube clone application engineered with modern React and Tailwind CSS. Features dynamic video feeds, embedded video playback, genre chip filtering, search discovery, and high-density dark-mode viewing layouts.',
    technologies: ['React', 'JavaScript (ES6+)', 'HTML5 Video', 'CSS3', 'Tailwind CSS', 'REST API'],
    thumbnail: youtubeThumbnail,
    githubUrl: 'https://github.com/Ahmad-Sohail/YouTube-Clone',
    liveUrl: '#',
    category: 'Streaming Video Web App',
    highlights: [
      'Responsive video feed grid displaying thumbnails, channel avatars, duration tags, and view metrics',
      'Watch page interface featuring responsive video player viewport, title metadata, and channel subscribe action',
      'Horizontal scrollable category chips for instant genre switching (Gaming, Coding, Music, Podcasts)',
      'Collapsible sidebar drawer and mobile bottom navigation for fluid multi-device discovery'
    ],
    architecture: {
      componentTier: 'Modular React components for video cards, search bar header, watch page player, and drawer sidebar',
      stylingSystem: 'YouTube-inspired dark mode aesthetic with high-density card grids and red accent highlights',
      stateManagement: 'Active video selection, search query state, and category filtering hooks',
      backend: 'Structured media data catalog and RESTful video feed endpoints'
    }
  },
  {
    id: 'spotify-clone',
    title: 'Spotify Music Streaming & Audio Player',
    subtitle: 'Interactive Audio Playback Engine, Dynamic Playlists & Volume Seeking',
    description: 'A modern, responsive Spotify web player clone featuring rich audio streaming controls, dynamic playlist browsing, track progress seeking, volume manipulation, album art showcases, and animated audio equalizer visualizers.',
    technologies: ['React', 'Web Audio API', 'JavaScript', 'HTML5 Audio', 'CSS3', 'Tailwind CSS'],
    thumbnail: spotifyThumbnail,
    githubUrl: 'https://github.com/Ahmad-Sohail/Spotify-Clone',
    liveUrl: '#',
    category: 'Music Streaming Web App',
    highlights: [
      'Custom HTML5 audio engine with play, pause, skip, shuffle, repeat, and scrubbable progress bar',
      'Dynamic music library with curated playlists, top artist spotlights, and album tracklists',
      'Sticky bottom player bar with live song duration timers, volume slider, and track artwork',
      'Responsive sidebar with user playlists, search discovery, and high-contrast dark green aesthetic'
    ],
    architecture: {
      componentTier: 'Persistent bottom audio controller, album/playlist view, track row lists, and discovery hero',
      stylingSystem: 'Spotify-signature dark surface palette with electric neon green (#1DB954) accent glows',
      stateManagement: 'Centralized audio state store tracking activeTrack, isPlaying, trackProgress, and volumeLevel',
      backend: 'Audio catalog streaming integration with Web Audio API time-update listeners'
    }
  },
  {
    id: 'netflix-clone',
    title: 'Netflix OTT Streaming & Movie Showcase',
    subtitle: 'Cinematic Hero Billboard, Multi-Row Movie Carousels & Modal Previews',
    description: 'An immersive Netflix-inspired entertainment streaming platform featuring a full-bleed billboard hero banner with trailer preview modal, horizontal row carousels by genre, trending movie ratings, and movie detail cards.',
    technologies: ['React', 'TMDB API', 'JavaScript', 'HTML5 & CSS3', 'Tailwind CSS', 'REST API'],
    thumbnail: netflixThumbnail,
    githubUrl: 'https://github.com/Ahmad-Sohail/Netflix-Clone',
    liveUrl: '#',
    category: 'OTT Streaming Web App',
    highlights: [
      'Cinematic full-width hero billboard with dynamic featured film backdrop, synopsis, and action buttons',
      'Multi-genre horizontal scrolling movie rails (Trending Now, Top Rated, Action, Netflix Originals)',
      'Movie detail popup modal with trailer playback, release year, age ratings, and cast information',
      'Responsive glassmorphism sticky navigation header that transitions smoothly on scroll'
    ],
    architecture: {
      componentTier: 'Billboard hero banner, horizontal movie poster rails, detail modal, and search overlay',
      stylingSystem: 'Cinematic stark black background with signature Netflix red (#E50914) accent branding',
      stateManagement: 'Active featured title, modal backdrop state, and categorized TMDB REST API data caching',
      backend: 'TMDB (The Movie Database) REST API endpoints and structured movie catalogs'
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

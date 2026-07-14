import { Project, Experience, Education, Skill, Testimonial } from "../types";

export const personalInfo = {
  name: "Ahmad Hafidz Rino Putra",
  title: "Full Stack Developer",
  subTitle: "Building high-performance, responsive, and robust web & mobile applications with meticulous attention to detail.",
  bio: "I am a dedicated Full Stack Developer specializing in crafting high-quality, scalable digital solutions. With a robust background in modern web engineering and mobile development, I blend performance, clean code, and elegant UI to create seamless user experiences.",
  location: "Bogor, West Java, Indonesia",
  email: "ahmadhafidzrinoputra1312@gmail.com",
  phone: "+62 838 0710 2775",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  stats: [
    { value: "2+", label: "Years of Experience" },
    { value: "15+", label: "Completed Projects" },
    { value: "4+", label: "Companies Engaged" },
    { value: "24/7", label: "Dev Dedication" }
  ]
};

export const skillsData: Skill[] = [
  // Backend (Laravel - Advanced, Express - Intermediate, .NET - Basic, MySQL/PostgreSQL - Intermediate)
  { name: "Laravel", category: "Backend", level: 90, iconName: "Cpu" }, // Advanced
  { name: "Express.js", category: "Backend", level: 65, iconName: "Server" }, // Intermediate
  { name: ".NET", category: "Backend", level: 35, iconName: "Terminal" }, // Basic
  { name: "MySQL / PostgreSQL", category: "Backend", level: 70, iconName: "Database" }, // Intermediate
  
  // Frontend (React - Intermediate, Next - Intermediate, Flutter - Intermediate, TS - Intermediate)
  { name: "React.js", category: "Frontend", level: 72, iconName: "Code2" }, // Intermediate
  { name: "Next.js", category: "Frontend", level: 68, iconName: "Layers" }, // Intermediate
  { name: "Flutter", category: "Frontend", level: 70, iconName: "Smartphone" }, // Intermediate
  { name: "TypeScript", category: "Frontend", level: 68, iconName: "FileCode" }, // Intermediate
  { name: "Tailwind CSS", category: "Frontend", level: 88, iconName: "Palette" }, // Advanced
  
  // Tools & DevOps
  { name: "Git & GitHub", category: "Tools & Devops", level: 85, iconName: "GitBranch" }, // Advanced
  { name: "CI/CD (GitHub Actions)", category: "Tools & Devops", level: 60, iconName: "Infinity" }, // Intermediate
  
  // Soft Skills
  { name: "Problem Solving", category: "Soft Skills", level: 92, iconName: "Brain" }, // Advanced
  { name: "Team Collaboration", category: "Soft Skills", level: 88, iconName: "Users" }, // Advanced
  { name: "System Design", category: "Soft Skills", level: 80, iconName: "Workflow" } // Advanced
];

export const experiencesData: Experience[] = [
  {
    id: "exp1",
    role: "Fullstack Developer",
    company: "Nawatech | Contract",
    period: "07/2025 - Present",
    description: "Developed and maintained web application interfaces using React.js for University projects, ensuring a responsive and consistent user experience.",
    points: [
      "Implemented REST API integrations with .NET based backend services, handling state management, error handling, and network request optimization.",
      "Optimized frontend application performance through lazy loading, code splitting, and memoization, reducing load times and improving user interactions.",
      "Collaborated closely with backend developers to design API contracts, troubleshoot integration issues, and resolve data synchronization problems.",
      "Built reusable and well-documented UI components to accelerate feature development and improve maintainability.",
      "Wrote unit and integration tests using Jest and React Testing Library, while participating in code reviews to maintain code quality standards.",
      "Contributed to deployment pipelines and CI/CD processes using GitHub Actions, enabling secure and automated releases."
    ]
  },
  {
    id: "exp2",
    role: "Mobile Developer",
    company: "PT Cipta Karya Kita | Contract",
    period: "03/2025 - 05/2025",
    description: "Developed and optimized a mobile-based e-commerce application for fresh produce using Flutter, ensuring a smooth and responsive user experience.",
    points: [
      "Integrated APIs to fetch real-time product data and handled secure user authentication for buyers and sellers.",
      "Collaborated with a cross-functional team to design intuitive UI/UX tailored to local user behavior, resulting in improved engagement and usability.",
      "Contributed to implementing cart and checkout features, streamlining the order process and improving transaction efficiency."
    ]
  },
  {
    id: "exp3",
    role: "Fullstack Developer",
    company: "LPG Distribution Business | Contract",
    period: "08/2024 - 10/2024",
    description: "Developed and optimized a Gas Management System using ReactJS for the frontend and ExpressJS for the backend.",
    points: [
      "Integrated RESTful APIs to manage gas stock, sales, and user authentication, improving performance and operational efficiency.",
      "Implemented features such as stock history tracking and PDF export for sales reports to enhance data transparency and documentation.",
      "Collaborated with the team to build scalable, maintainable, and user-friendly solutions for real-time inventory and transaction management."
    ]
  },
  {
    id: "exp4",
    role: "Fullstack Developer",
    company: "PT 4Net Prima Solusi | Internship",
    period: "01/2024 - 06/2024",
    description: "Developed and optimized web-based applications using ReactJS and Laravel, working closely with engineering leads.",
    points: [
      "Contributed to REST API integration, improving overall frontend-backend communication performance.",
      "Collaborated with the team to build efficient, scalable, and modular software solutions."
    ]
  }
];

export const educationData: Education[] = [
  {
    id: "edu1",
    degree: "Bachelor of Information Systems",
    school: "Universitas Terbuka",
    period: "07/2025 - Present",
    description: "Studying Information Systems, with a focus on software development, business process analysis, database management, and information technology solutions. Gaining knowledge in system design, data management, project management, and the application of technology to support organizational and business operations."
  },
  {
    id: "edu2",
    degree: "Software Engineering major",
    school: "Wikrama Vocational Highschool",
    period: "06/2022 - 06/2025",
    description: "Studying software development, covering backend with Laravel, frontend with ReactJS and Flutter, and database management with MySQL. Gained hands-on experience in developing scalable web and mobile applications for business and management needs."
  }
];

export const projectsData: Project[] = [
  {
    id: "proj1",
    title: "University Systems & Portal Interfaces",
    description: "Responsive web interfaces built with React.js for enterprise university platforms, integrated with robust .NET backends.",
    longDescription: "Designed and developed highly interactive, fully responsive frontend systems for academic administration. Built reusable and modular React components, integrated RESTful APIs with .NET backends, handled state state transitions efficiently, and achieved optimized performance via code splitting.",
    tags: ["React.js", "TypeScript", ".NET Core", "REST API", "Tailwind CSS"],
    category: "Web",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    features: [
      "Dynamic data grids with client-side searching and sorting",
      "API request bundling and client-side optimization",
      "Role-based navigation and protected layouts",
      "Comprehensive state management and error feedback overlays"
    ],
    technologies: ["React.js", "TypeScript", "Tailwind CSS", ".NET Core", "Zustand", "REST APIs"]
  },
  {
    id: "proj2",
    title: "Fresh Produce E-Commerce Mobile App",
    description: "A smooth, responsive Flutter mobile application tailored for local fresh produce buying and selling.",
    longDescription: "Engineered a cross-platform mobile e-commerce application using Flutter. Focused heavily on high-fidelity UI animations, secure authentication mechanisms, cart-to-checkout pipelines, and real-time product catalogs fetching from REST APIs to maximize consumer conversion rate.",
    tags: ["Flutter", "Dart", "Firebase", "REST API", "E-Commerce"],
    category: "Mobile",
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    features: [
      "Real-time catalog search and categorization filtering",
      "Secure user authentication for both merchants and buyers",
      "Seamless shopping cart, address coordinates, and payment checkout flow",
      "Optimized offline image caching and fast screen transition speeds"
    ],
    technologies: ["Flutter", "Dart", "Provider", "RESTful APIs", "Firebase Auth", "SQLite"]
  },
  {
    id: "proj3",
    title: "LPG Gas Distribution Management System",
    description: "A centralized dashboard monitoring system to track stock levels, distribution pipelines, and export PDF reports.",
    longDescription: "Designed a Full Stack management portal for tracking LPG gas cylinder transactions and warehousing inventories. Built with a ReactJS frontend and a Node.js/Express backend, utilizing PostgreSQL for secure database transactions and an automated reporting service with PDF export.",
    tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
    category: "Web",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    features: [
      "Dynamic inventory trackers checking real-time cylinder reserves",
      "Automated sales invoicing with instant PDF downloads",
      "Admin panel controlling user permissions and transaction logging",
      "Responsive analytics layout detailing monthly sales graphs"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Recharts", "PDFKit", "Tailwind CSS"]
  },
  {
    id: "proj4",
    title: "Enterprise Web Applications Portal",
    description: "Modular enterprise management systems built utilizing Laravel backend architecture and ReactJS frontends.",
    longDescription: "Developed specialized enterprise management applications during internship, using a Laravel backend and a ReactJS frontend. Focused on accelerating database querying speed, writing clean API endpoints, and organizing intuitive dashboards for complex business data.",
    tags: ["React.js", "Laravel", "PHP", "MySQL", "Tailwind CSS"],
    category: "Web",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    features: [
      "Optimized Eloquent ORM relationships ensuring high performance",
      "Dynamic tables parsing CSV and JSON records",
      "Responsive dashboard layouts presenting crucial KPIs",
      "Unified REST API contracts ensuring clean data flow"
    ],
    technologies: ["React.js", "Laravel", "Eloquent ORM", "MySQL", "REST APIs", "Tailwind CSS"]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Nawatech Project Lead",
    role: "Senior Engineering Manager",
    company: "Nawatech",
    content: "Ahmad is an exceptionally skilled developer who joined our team and immediately made significant contributions to our React projects. His attention to frontend optimization and clean code is highly laudable.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "t2",
    name: "PT Cipta Karya Kita PM",
    role: "Product Manager",
    company: "PT Cipta Karya Kita",
    content: "Working with Ahmad on our Flutter e-commerce application was a great experience. He is proactive, solves complex problems quickly, and delivered a highly fluid mobile experience that our users love.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  }
];

const projects = [
  {
    id: "coffee",
    number: "01",
    title: "SetCoffee",
    category: "E-commerce",
    status: "Completed",

    summary:
      "A coffee storefront built around product discovery and a smoother shopping experience.",

    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "localStorage",
    ],

    github: "https://github.com/delaramfarzad9/coffee-e-commerce",
    demo: "https://setcoffee-shop.vercel.app/",

    image: "/images/projects/coffee/hero.webp",
    alt: "SetCoffee homepage",

    challenge:
      "Manage product filters, availability and shopping cart state while maintaining a clear user experience.",

    implementation: [
      "Product filtering, sorting and bestseller logic.",
      "Shopping cart with quantity controls and calculated totals.",
      "Scroll-position restoration and keyboard interactions.",
      "Out-of-stock notification interface and animations.",
    ],

    learned:
      "Managing shared state, building reusable components and improving shopping interactions.",

    next:
      "Add automated tests and explore real checkout integration.",
  },

  {
    id: "websol",
    number: "02",
    title: "WebSol",
    category: "Responsive interface",
    status: "Concept website",

    summary:
      "A responsive digital agency concept combining visual hierarchy with animated interactions.",

    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Motion for React",
    ],

    github: "https://github.com/delaramfarzad9/landing-page-project",
    demo: "https://landing-page-project-rose.vercel.app/",

    image: "/images/projects/websol/hero.webp",
    alt: "WebSol homepage",

    challenge:
      "Maintain a consistent visual composition and usable navigation across different screen sizes.",

    implementation: [
      "Reusable responsive React components.",
      "Automatic slideshow with manual controls.",
      "Scroll-triggered animations using Motion.",
      "Sticky navigation and keyboard-accessible mobile menu.",
    ],

    learned:
      "Responsive design, animation timing and accessible navigation patterns.",

    next:
      "Improve reduced-motion support and cross-device testing.",
  },

  {
    id: "voyavista",
    number: "03",
    title: "VoyaVista",
    category: "Full-stack integration",
    status: "In development",

    summary:
      "A UK travel discovery application connecting a React interface to a relational database.",

    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "REST API",
    ],

    github: "https://github.com/delaramfarzad9/voyavista",
    demo: "",

    image: "/images/projects/voyavista/hero.webp",
    alt: "VoyaVista homepage with Stonehenge",

    challenge:
      "Connect frontend components to backend endpoints and database records.",

    implementation: [
      "PostgreSQL database hosted on Neon.",
      "REST API endpoints using Express.",
      "Parameterized SQL queries for searching experiences.",
      "Dynamic experience listings and detail pages.",
    ],

    learned:
      "Understanding how data flows between React, Express and PostgreSQL.",

    next:
      "Complete the booking functionality and deploy the full-stack application.",
  },

  {
    id: "taskflow",
    number: "04",
    title: "TaskFlow",
    category: "Application architecture",
    status: "Completed",

    summary:
      "A task management application built entirely with native JavaScript.",

    tech: [
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "ES Modules",
      "Browser APIs",
    ],

    github:
      "https://github.com/delaramfarzad9/JavaScript-Task-Management-Application",

    demo:
      "https://delaramfarzad9.github.io/JavaScript-Task-Management-Application/",

    image: "/images/projects/taskflow/hero.webp",
    alt: "TaskFlow dashboard",

    challenge:
      "Manage complex application state and interactions without using a framework.",

    implementation: [
      "CRUD operations, filtering, sorting and drag and drop.",
      "Undo and redo using the Command Pattern.",
      "localStorage schema migration and URL persistence.",
      "Debounced search and keyboard shortcuts.",
    ],

    learned:
      "Modular JavaScript, browser APIs and persistent application state.",

    next:
      "Improve mobile drag and drop and add automated tests.",
  },
];

export default projects;
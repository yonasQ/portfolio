import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaReact,
} from "react-icons/fa";

export const projects = [
  {
    title: "Inverse Payment Gateway",
    description:
      "Flexible payment gateway handling subscriptions and one-time payments with local and international bank integrations.",
    tags: ["Golang", "PostgreSQL", "AWS", "Redis", "WebSocket"],
    github: "#",
    demo: "#",
  },
  {
    title: "Ride Plus (Ride-Hailing)",
    description:
      "Ethiopia's leading ride-hailing service with corporate programs and street pickup features.",
    tags: ["Golang", "CockroachDB", "Kafka", "Docker", "WebSocket"],
    github: "#",
    demo: "#",
  },
  {
    title: "Multi-Tenant Auth System",
    description:
      "SaaS authorization system with RBAC/ABAC support using Open Policy Agent (OPA).",
    tags: ["Golang", "OPA", "gRPC", "CockroachDB"],
    github: "#",
  },
  {
    title: "Kluff ERP System",
    description:
      "Customizable ERP platform with dynamic workflows and multi-tenant support.",
    tags: ["Golang", "PostgreSQL", "Next.js", "OPA"],
    github: "#",
  },
  {
    title: "Restaurant Ordering Platform",
    description:
      "Microservices-based food ordering system with real-time tracking and chat.",
    tags: ["Node.js", "Golang", "MongoDB", "AWS", "Redis"],
    github: "#",
  },
  {
    title: "SSO Authentication System",
    description:
      "Centralized authentication using OAuth 2.0 and OpenID Connect (OIDC).",
    tags: ["Golang", "OAuth 2.0", "OIDC", "CockroachDB"],
    github: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Complete product listing platform with admin dashboard and payment integration",
    tags: ["React", "Node.js", "MongoDB", "Redux", "REST API"],
    backendFocus: [
      "High-performance product API",
      "Payment processing",
      "Order management",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Hotel Booking System",
    description:
      "Full-stack booking platform with real-time availability and management dashboards",
    tags: ["React", "Node.js", "SQL", "GraphQL", "Sequelize"],
    backendFocus: [
      "Booking engine",
      "Inventory management",
      "Payment integration",
    ],
    github: "#",
    demo: "#",
  },
];

export const backendProjects = [
  {
    title: "Inverse Payment Gateway",
    description:
      "Payment processing system handling domestic and international transactions",
    tags: ["Golang", "PostgreSQL", "AWS", "Redis", "WebSocket"],
    backendFocus: [
      "Bank integrations",
      "Subscription logic",
      "Fraud detection",
    ],
    github: "#",
  },
  {
    title: "Ride Plus (RideET)",
    description:
      "Ride-hailing service with corporate programs and street pickup",
    tags: ["Golang", "CockroachDB", "Kafka", "Docker"],
    backendFocus: ["Real-time matching", "Virtual wallets", "Dynamic pricing"],
    github: "#",
  },
  {
    title: "Multi-Tenant Auth System",
    description: "SaaS authorization with RBAC/ABAC support using OPA",
    tags: ["Golang", "OPA", "gRPC", "CockroachDB"],
    backendFocus: [
      "Policy engine",
      "Tenant isolation",
      "Permission management",
    ],
    github: "#",
  },
  {
    title: "Kluff ERP System",
    description: "Customizable ERP platform with dynamic workflows",
    tags: ["Golang", "PostgreSQL", "Next.js", "OPA"],
    backendFocus: [
      "Workflow engine",
      "Dynamic modules",
      "Multi-tenant support",
    ],
    github: "#",
  },
];

export const experiences = [
  {
    role: "Lead Full-Stack Developer",
    company: "Two-f Capital",
    date: "Apr 2022 - Present",
    responsibilities: [
      "Led development of Inverse Payment Gateway handling domestic/international transactions",
      "Built Ride Plus (RideET) platform with corporate programs and street pickup features",
      "Developed multi-tenant authorization system using Open Policy Agent (OPA)",
      "Implemented SSO system with OAuth 2.0 and OIDC protocols",
      "Mentored junior developers in both frontend and backend best practices",
    ],
    tech: ["Golang", "PostgreSQL", "AWS", "Kafka", "Redis", "OPA", "React"],
  },
  {
    role: "Backend Engineer (Remote)",
    company: "Kluff (USA)",
    date: "Jan 2024 - Aug 2024",
    responsibilities: [
      "Developed highly customizable ERP backend with dynamic workflows",
      "Implemented multi-tenant authorization system using OPA",
      "Optimized PostgreSQL queries improving performance by 40%",
      "Collaborated with frontend team on Next.js integration",
    ],
    tech: ["Golang", "PostgreSQL", "Next.js", "gRPC", "OPA"],
  },
  {
    role: "Backend Developer",
    company: "Paymax (Nigeria)",
    date: "Dec 2023 - Aug 2024",
    responsibilities: [
      "Built microservices-based restaurant ordering platform",
      "Implemented real-time order tracking and chat system using WebSocket",
      "Developed scalable architecture using AWS services",
      "Optimized database queries for high-traffic scenarios",
    ],
    tech: ["Node.js", "Golang", "MongoDB", "AWS", "WebSocket", "Redis"],
  },
  {
    role: "Full-Stack Developer",
    company: "Mohas",
    date: "Dec 2022 - May 2023",
    responsibilities: [
      "Developed e-commerce product listing platform with admin dashboard",
      "Built responsive frontend with React and Material UI",
      "Implemented RESTful APIs with Node.js and Express",
      "Collaborated with cross-functional teams to design new features",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Redux", "TypeScript"],
  },
  {
    role: "Full-Stack Developer",
    company: "RCNDC",
    date: "Aug 2021 - Mar 2022",
    responsibilities: [
      "Developed Alga Hotel Booking platform with dashboards",
      "Built backend services and database models for booking system",
      "Implemented GraphQL API for efficient data fetching",
      "Created responsive UI components with React",
    ],
    tech: ["React", "Node.js", "SQL", "GraphQL", "Sequelize", "TypeScript"],
  },
];

export const skills = [
  {
    name: "Languages",
    items: ["Golang", "JavaScript/TypeScript", "SQL"],
    icon: FaCode,
  },
  {
    name: "Backend",
    items: [
      "Node.js",
      "Express",
      "RESTful API Design",
      "gRPC & Protocol Buffers",
      "GraphQL",
      "WebSocket",
      "Microservices",
    ],
    icon: FaServer,
  },
  {
    name: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux & Zustand",
      "React Query",
      "Framer Motion",
    ],
    icon: FaReact,
  },
  {
    name: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3, Lambda, VPC,...)",
      "Docker",
      "Kubernetes",
      "Kafka",
      "CI/CD",
    ],
    icon: FaCloud,
  },
  {
    name: "Databases",
    items: [
      "PostgreSQL",
      "CockroachDB",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "DynamoDB",
    ],
    icon: FaDatabase,
  },
  {
    name: "Security",
    items: [
      "OAuth 2.0 & OIDC",
      "Open Policy Agent (OPA)",
      "RBAC/ABAC",
      "JWT & Session Management",
    ],
    icon: FaShieldAlt,
  },
  {
    name: "Toold & Methods",
    items: [
      "Microservices",
      "Test-Driven Development",
      "Domain-Driven Design",
      "Agile",
      "System Architecture",
      "Performance Optimization",
      "Git & GitHub",
    ],
    icon: FaCode,
  },
];

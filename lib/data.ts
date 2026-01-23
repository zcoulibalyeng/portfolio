
export const personalInfo = {
  name: "Zakaria Coulibaly",
  roles: ["Software Engineer", "AI/ML Engineer", "MLOps", "Open for Research"],
  location: "United States",
  email: "zcoulibalyeng@gmail.com",
  bio: "I'm a Software Engineer specializing in AI/ML systems and production deployment. Recent M.S. in Computer Science (AI/ML) from UIUC.\n" +
      "I'm the person who reads the source code instead of just the documentation. I need to understand how things work under the hood.\n" +
      "I don't just train models—I architect the systems that deploy them. From PyTorch development to Kubernetes orchestration, I build end-to-end ML pipelines that scale in production.\n",
  tagline: "Building the future with safe AI and elegant code",
  social: {
    github: "https://github.com/levisstrauss",
    linkedin: "https://www.linkedin.com/in/codemon",
    twitter: "https://x.com/zcoulibalyeng",
  },
  stats: {
    projects: 10,
    certifications: 4,
    technologies: 15,
    repositories: 10,
  },
}

export const education = [
  {
    degree: "Master in Computer Science",
    school: "University of Illinois Urbana-Champaign",
    period: "May 2025 - Present",
    gpa: "3.94/4.0",
    focus: "Machine Learning & AI Systems",
  },
  {
    degree: "Bachelor in Computer Science with minor in Mathematics",
    school: "Penn State University",
    period: "May 2022 - May 2024",
    gpa: "3.25/4.0",
    focus: "Software Engineering & Mathematics",
  },
]

// export const experience = [
//   {
//     title: "Graduate Student, AI/Machine Learning",
//     company: "University of Illinois Urbana-Champaign",
//     period: "Summer 2024",
//     description:
//         "Developed novel approaches for multi-agent systems and contributed to research on emergent behaviors in large language models.",
//     achievements: ["Published research paper", "Improved model efficiency by 15%"],
//     technologies: ["Python", "PyTorch", "Transformers"],
//   },
//   {
//     title: "ML Engineer Intern",
//     company: "Google",
//     period: "Summer 2023",
//     description:
//         "Built and deployed machine learning pipelines for Google Cloud's AI Platform, focusing on scalable inference systems.",
//     achievements: ["Reduced latency by 40%", "Served 1M+ requests/day"],
//     technologies: ["TensorFlow", "Kubernetes", "GCP"],
//   },
//   {
//     title: "Software Developer",
//     company: "Microsoft",
//     period: "2022 - 2023",
//     description:
//         "Developed full-stack features for Microsoft Teams, focusing on real-time collaboration and accessibility improvements.",
//     achievements: ["Shipped 5 major features", "Improved accessibility score"],
//     technologies: ["TypeScript", "React", "Azure"],
//   },
//   {
//     title: "Research Assistant",
//     company: "UC Berkeley AI Lab",
//     period: "2021 - 2023",
//     description:
//         "Conducted research on computer vision and natural language processing, publishing findings in top-tier conferences.",
//     achievements: ["3 publications", "Best Paper Award"],
//     technologies: ["Python", "PyTorch", "OpenCV"],
//   },
// ]

export const experience = [
  {
    title: "Graduate Student, AI/Machine Learning",
    company: "University of Illinois Urbana-Champaign",
    period: "May 2025 - Present",
    description:
        "Pursuing M.S. in Computer Science with concentration in AI/ML. Engaged in advanced coursework in deep learning, natural language processing, and computer vision.",
    achievements: [
      "Built distributed systems projects including fault-tolerant key-value stores",
      "Developed ML models for computer vision and NLP applications",
      "Completed hands-on projects in deep learning and distributed systems",
    ],
    technologies: ["Python", "PyTorch", "C++", "Distributed Systems", "NLP", "Computer Vision", "Database Systems", "deep Learning"],
  }
]


export const certifications = [
  {
    title: "Machine Learning DevOps Engineer",
    issuer: "Udacity",
    date: "2026",
    description: "Advanced certification for Machine Learning DevOps, expertise in building and deploying ML models.",
    color: "bg-gradient-to-br from-orange-500 to-red-500",
    verified: true,
    link: "https://www.udacity.com/certificate/e/0c699dbe-7d47-11ef-94e9-f7039a0d526a",
  },
  {
    title: "AWS Machine Learning Fundamentals",
    issuer: "Udacity",
    date: "2025",
    description: "Professional certification for designing, implementing, and maintaining ML solutions on AWS.",
    color: "bg-gradient-to-br from-yellow-500 to-orange-500",
    verified: true,
    link: "https://www.udacity.com/certificate/e/b2cfd164-2936-11f0-a704-9ba895d878fb",
  },
  {
    title: "Agentic AI",
    issuer: "Udacity",
    date: "2025",
    description: "Comprehensive program covering Agentic AI best practices of Agentic workflows.",
    color: "bg-gradient-to-br from-blue-500 to-purple-500",
    verified: true,
    link: "https://www.udacity.com/certificate/e/78648a20-ca89-11f0-8cc3-2fa948ef0123",
  },
  {
    title: "Machine Learning Specialization.",
    issuer: "Stanford online & DeepLearning.AI on coursera",
    date: "2024",
    description: "Comprehensive certification covering Supervised/Unsupervised learning, " +
        "Regression/Classification Recommenders/Reinforcement learning",
    color: "bg-gradient-to-br from-primary to-yellow-600",
    verified: true,
    link: "https://www.coursera.org/account/accomplishments/specialization/KQ6F9ZM7FHH5",
  },
]

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
  // { label: "Blog", href: "#blog" },
]

export const projects = [
  {
    title: "ML Workflow for Image Classification",
    description:
        "End-to-end ML pipeline on AWS with automated training, deployment, and inference using serverless architecture.",
    image: "/ml-workflow.png",
    technologies: ["AWS SageMaker", "Lambda", "Step Functions", "Python", "S3", "CloudWatch"],
    github: "https://github.com/levisstrauss/build-machine-learning-workflow-on-aws",
    demo: "",
    category: "mlops",
    stats: { stars: 1, forks: 1 },
    year: "2025",
    duration: "2 months",
    team: "Solo Project",
    status: "Active",
    license: "MIT",
    overview: [
      "Designed and implemented a complete MLOps pipeline on AWS that automates the entire machine learning lifecycle from data ingestion to model deployment.",
      "The pipeline leverages AWS Step Functions to orchestrate training jobs, model evaluation, and deployment decisions, enabling fully automated retraining cycles without manual intervention."
    ],
    challenges: [
      {
        title: "Serverless Orchestration",
        description: "Designed Step Functions workflow to coordinate SageMaker training, evaluation, and deployment stages with error handling and retry logic."
      },
      {
        title: "Scalable Inference",
        description: "Deployed model endpoints with Lambda functions for serverless, auto-scaling image classification API that handles variable traffic loads."
      },
      {
        title: "CI/CD Integration",
        description: "Implemented continuous deployment workflow for model retraining and monitoring in production environment with automated rollback capabilities."
      }
    ],
    results: [
      { value: "100%", label: "Automated Pipeline" },
      { value: "<2s", label: "Inference Latency" },
      { value: "99.9%", label: "Uptime" }
    ]
  },
  {
    title: "NYC Airbnb Price Prediction",
    description:
        "Production-grade ML pipeline with automated data versioning, experiment tracking, and model registry for predicting Airbnb listing prices.",
    image: "/airbnb-prediction.png",
    technologies: ["Python", "MLflow", "Weights & Biases", "Hydra", "Scikit-learn", "Pandas"],
    github: "https://github.com/levisstrauss/build-ml-pipeline-for-short-term-rental-prices",
    demo: "",
    category: "mlops",
    stats: { stars: 1, forks: 1 },
    year: "2026",
    duration: "6 weeks",
    team: "Solo Project",
    status: "Active",
    license: "MIT",
    overview: [
      "Built a comprehensive MLOps pipeline that handles the full lifecycle of a price prediction model, from data ingestion to deployment-ready artifacts.",
      "The system implements best practices for reproducibility, including data versioning, experiment tracking with W&B, and automated hyperparameter optimization using Hydra configuration management."
    ],
    challenges: [
      {
        title: "Data Drift Detection",
        description: "Implemented statistical drift detection using KL divergence to identify when incoming data distributions shift, triggering automated retraining cycles."
      },
      {
        title: "Experiment Reproducibility",
        description: "Configured Hydra for hyperparameter management enabling fully reproducible experiments with versioned configurations and artifact tracking."
      },
      {
        title: "Model Registry",
        description: "Set up MLflow model registry with staging and production environments, enabling controlled promotion of validated models."
      }
    ],
    results: [
      { value: "85%", label: "R² Score" },
      { value: "100+", label: "Experiments Tracked" },
      { value: "Weekly", label: "Retrain Cycle" }
    ]
  },
  {
    title: "Enterprise RAG System with Amazon Bedrock",
    description:
        "Scalable search application using AWS serverless infrastructure for instant retrieval of technical specifications across multiple product lines.",
    image: "/rag-system.png",
    technologies: ["AWS Bedrock", "Terraform", "Aurora PostgreSQL", "Python", "Streamlit", "pgvector"],
    github: "https://github.com/levisstrauss/aws-bedrock-rag-system",
    demo: "",
    category: "ai",
    stats: { stars: 1, forks: 1 },
    year: "2026",
    duration: "3 months",
    team: "Solo Project",
    status: "Active",
    license: "MIT",
    overview: [
      "Architected an enterprise-grade RAG (Retrieval-Augmented Generation) system that enables natural language queries over technical documentation, making specifications instantly accessible to non-technical users.",
      "The system uses AWS Bedrock for LLM inference, Aurora PostgreSQL with pgvector for vector storage, and implements infrastructure-as-code with Terraform for reproducible deployments."
    ],
    challenges: [
      {
        title: "Vector Search Optimization",
        description: "Designed HNSW indexing strategy for vector similarity search, achieving sub-second query times across thousands of technical documents."
      },
      {
        title: "Infrastructure as Code",
        description: "Implemented complete Terraform configuration managing VPC isolation, database setup, S3 storage, and automated CI/CD deployment pipeline."
      },
      {
        title: "Query Validation",
        description: "Built validation layer to ensure query accuracy and prevent hallucinations, achieving 100% accuracy on specification lookups through careful prompt engineering."
      }
    ],
    results: [
      { value: "100%", label: "Query Accuracy" },
      { value: "5", label: "Product Lines" },
      { value: "<1s", label: "Response Time" }
    ]
  },
  {
    title: "Census Income Classification",
    description:
        "Full-stack ML deployment with FastAPI REST API, CI/CD automation, and interactive frontend for real-time income predictions.",
    image: "/census-classifier.png",
    technologies: ["Python", "FastAPI", "Scikit-learn", "Streamlit", "GitHub Actions", "Render"],
    github: "https://github.com/levisstrauss/census-income-classifier",
    demo: "https://levisstrauss-census-income-classifier-frontendapp-lefxu3.streamlit.app",
    category: "mlops",
    stats: { stars: 1, forks: 1 },
    year: "2026",
    duration: "1 month",
    team: "Solo Project",
    status: "Active",
    license: "MIT",
    overview: [
      "Deployed a production-ready machine learning system that predicts whether an individual's income exceeds $50K based on census data, with emphasis on model fairness and bias detection.",
      "The project demonstrates full-stack ML engineering skills including API development, CI/CD automation, cloud deployment, and building user-facing interfaces."
    ],
    challenges: [
      {
        title: "Bias Detection",
        description: "Implemented slice-based model evaluation across 8 demographic features to detect performance disparities and potential bias in predictions."
      },
      {
        title: "CI/CD Pipeline",
        description: "Built automated testing and deployment pipeline with GitHub Actions, ensuring code quality and seamless deployments to Render."
      },
      {
        title: "Real-time Inference",
        description: "Developed FastAPI REST API with input validation and Streamlit frontend for interactive predictions with immediate feedback."
      }
    ],
    results: [
      { value: "79.7%", label: "Precision" },
      { value: "8", label: "Features Analyzed" },
      { value: "100%", label: "CI/CD Coverage" }
    ]
  }
]


// export const projects = [
//   {
//     title: "Enterprise RAG System for Technical Documentation Search System",
//     description:
//         "GPT-powered code completion tool that understands context and provides intelligent suggestions for multiple programming languages.",
//     technologies: ["Python", "OpenAI API", "FastAPI", "React"],
//     github: "https://github.com/alexchen/ai-code-assistant",
//     demo: "https://code-assistant.demo",
//     category: "ai",
//     stats: { stars: 350, forks: 45 }, // Project face visual
//     status: "Active",
//     license: "MIT",
//
//     overview: [
//       "This project showcases my ability to design and implement complex systems from the ground up, focusing on scalability, performance, and user experience.",
//       "The goal was to create a solution that not only works but excels in production environments, handling real-world edge cases and maintaining high availability."
//     ],
//
//     challenges: [
//       {
//         title: "Scalability & Performance",
//         description: "Optimized vector search to handle 100k+ documents with sub-second query times."
//       },
//       {
//         title: "Complex State Management",
//         description: "Implemented efficient caching and state management for real-time updates."
//       },
//       {
//         title: "Real-time Data Processing",
//         description: "Built streaming pipeline for continuous document ingestion and indexing."
//       }
//     ],
//
//     results: [
//       { value: "320+", label: "GitHub Stars" },
//       { value: "45+", label: "Forks" },
//       { value: "99%", label: "Uptime" }
//     ]
//   }
// ]

// export const projects = [
//   {
//     title: "Enterprise RAG System for Technical Documentation Search System",
//     description:
//         "GPT-powered code completion tool that understands context and provides intelligent suggestions for multiple programming languages.",
//     technologies: ["Python", "OpenAI API", "FastAPI", "React"],
//     github: "https://github.com/alexchen/ai-code-assistant",
//     demo: "https://code-assistant.demo",
//     category: "ai",
//     stats: { stars: 320, forks: 45 },
//   }
// ]
  // {
  //   title: "Neural Style Transfer",
  //   description:
  //       "Real-time style transfer application that transforms photos into artwork using deep learning, running entirely in the browser.",
  //   technologies: ["TensorFlow.js", "React", "WebGL"],
  //   github: "https://github.com/alexchen/neural-style",
  //   demo: "https://neural-style.demo",
  //   category: "ai",
  //   stats: { stars: 180, forks: 28 },
  // },
  // {
  //   title: "Distributed Training Platform",
  //   description:
  //       "Scalable platform for training large ML models across multiple nodes with automatic fault tolerance and checkpoint management.",
  //   technologies: ["Kubernetes", "Python", "Ray", "PyTorch"],
  //   github: "https://github.com/alexchen/dist-training",
  //   category: "ai",
  //   stats: { stars: 250, forks: 62 },
  // },
  // {
  //   title: "Smart Trading Bot",
  //   description:
  //       "Algorithmic trading system using reinforcement learning to make data-driven trading decisions with risk management.",
  //   technologies: ["Python", "RL", "PostgreSQL", "Docker"],
  //   github: "https://github.com/alexchen/trading-bot",
  //   category: "fullstack",
  //   stats: { stars: 150, forks: 35 },
  // },
  // {
  //   title: "Computer Vision Security",
  //   description:
  //       "Real-time object detection and tracking system for security applications using YOLO and custom-trained models.",
  //   technologies: ["Python", "YOLO", "OpenCV", "CUDA"],
  //   github: "https://github.com/alexchen/cv-security",
  //   category: "ai",
  //   stats: { stars: 95, forks: 22 },
  // },
  // {
  //   title: "NL Query Engine",
  //   description:
  //       "Natural language to SQL converter that allows non-technical users to query databases using plain English.",
  //   technologies: ["Python", "GPT-4", "PostgreSQL", "FastAPI"],
  //   github: "https://github.com/alexchen/nl-query",
  //   demo: "https://nl-query.demo",
  //   category: "ai",
  //   stats: { stars: 210, forks: 48 },
  // },
  // {
  //   title: "E-Commerce Platform",
  //   description:
  //       "Full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.",
  //   technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  //   github: "https://github.com/alexchen/ecommerce",
  //   demo: "https://ecommerce.demo",
  //   category: "web",
  //   stats: { stars: 145, forks: 32 },
  // },
  // {
  //   title: "Real-time Chat Application",
  //   description:
  //       "Scalable messaging platform with WebSocket support, end-to-end encryption, and media sharing capabilities.",
  //   technologies: ["React", "Node.js", "Socket.io", "Redis"],
  //   github: "https://github.com/alexchen/chat-app",
  //   demo: "https://chat.demo",
  //   category: "web",
  //   stats: { stars: 88, forks: 19 },
  // },
  // {
  //   title: "DevOps Dashboard",
  //   description:
  //       "Comprehensive monitoring and deployment platform integrating CI/CD pipelines, container orchestration, and real-time metrics.",
  //   technologies: ["Go", "React", "Kubernetes", "Prometheus"],
  //   github: "https://github.com/alexchen/devops-dash",
  //   category: "fullstack",
  //   stats: { stars: 175, forks: 41 },
  // },



import { Code, Brain, Globe, Cloud, Database, Terminal } from "lucide-react"

export const skillCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    icon: Code,
    description: "Core languages I use daily for building robust applications",
    skills: ["Python", "TypeScript/JavaScript", "Java", "C/C++", "SQL"],
  },
  {
    id: "aiml",
    title: "AI & Machine Learning",
    icon: Brain,
    description: "Frameworks and tools for building intelligent systems",
    skills: ["PyTorch", "Scikit-learn", "Hugging Face", "LangChain", "NumPy, Pandas & Matplotlib"],
  },
  {
    id: "web",
    title: "Web Development",
    icon: Globe,
    description: "Modern frameworks for building exceptional user experiences",
    skills: ["React", "Next.js", "Node.js", "FastAPI", "Tailwind CSS", "GraphQL", "REST APIs", "streamlit & Gradio"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Infrastructure and deployment at scale",
    skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform", "Linux"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    description: "Data storage and management solutions",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Pinecone", "MySQL"],
  },
  {
    id: "tools",
    title: "Tools & Practices",
    icon: Terminal,
    description: "Development tools and best practices",
    skills: [
      "Git",
      "Agile",
      "System Design",
      "Testing",
      "Documentation",
      "Code Review",
      "Performance Optimization",
      "Security",
    ],
  },
]


// export const blogPosts = [
//   {
//     title: "Building Scalable AI Systems: Lessons from Production",
//     excerpt:
//         "Key insights from deploying ML models at scale, including architecture patterns and monitoring strategies.",
//     date: "2024-10-15",
//     readTime: "8 min",
//     tags: ["AI", "MLOps", "Architecture"],
//   },
//   {
//     title: "The Future of Agentic Software Development",
//     excerpt: "Exploring how autonomous AI agents are changing the landscape of software development.",
//     date: "2024-09-22",
//     readTime: "12 min",
//     tags: ["AI Agents", "Future", "Development"],
//   },
//   {
//     title: "Optimizing Neural Networks for Edge Deployment",
//     excerpt: "Techniques for model compression, quantization, and optimization for resource-constrained devices.",
//     date: "2024-08-10",
//     readTime: "10 min",
//     tags: ["Edge AI", "Optimization", "Mobile"],
//   },
//   {
//     title: "Understanding Transformer Architecture",
//     excerpt: "A deep dive into the architecture that powers modern large language models.",
//     date: "2024-07-05",
//     readTime: "15 min",
//     tags: ["Transformers", "NLP", "Deep Learning"],
//   },
// ]


// export const testimonials = [
//   {
//     name: "Dr. Sarah Mitchell",
//     role: "Research Lead",
//     company: "OpenAI",
//     quote:
//         "Alex is one of the most talented engineers I've worked with. Their ability to bridge the gap between cutting-edge research and production-ready systems is remarkable. They consistently delivered innovative solutions that exceeded expectations.",
//     linkedin: "https://linkedin.com/in/sarahmitchell",
//   },
//   {
// ]

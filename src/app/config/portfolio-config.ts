/**
 * Portfolio Configuration File
 *
 * This file contains all personal information and content for the portfolio.
 * Update this file to customize your portfolio without touching component code.
 *
 * @author Sanskriti Yadav
 */

// ============================================
// PERSONAL INFORMATION
// ============================================
export const personalInfo = {
  name: 'Sanskriti',
  title: 'Software Engineer & Test Automation Expert',
  tagline: 'Building Scalable Systems with a Focus on Quality & Automation',
  bio: 'Result-driven software engineer with 6+ years of experience in test automation, full-stack development, and cloud technologies. Proven track record of delivering high-quality solutions that drive business success and enhance user experience. Passionate about leveraging technology to solve complex problems and continuously learning new skills.',
  // Contact Information
  contact: {
    email: 'sanskriti2501@gmail.com',
    phone: '+971542434062',
    location: 'Dubai, UAE',
    availability: 'Open to Opportunities'
  },

  // Social Links
  social: {
    linkedin: 'https://www.linkedin.com/in/sanskriti-yadav',
    github: 'https://github.com/SanskritiAYadav',
    recommendations: 'https://www.linkedin.com/in/sanskriti-yadav/details/recommendations/?detailScreenTabIndex=0'
  },

  // Assets
  assets: {
    profilePhoto: '/src/imports/ProfilePic.PNG',
    resume: '/src/imports/Sanskriti-Resume_QA.pdf'
  }
};

// ============================================
// PROFESSIONAL ROLES & BADGES
// ============================================
export const roles = [
  { title: 'Software Engineer', color: 'bg-white text-black', icon: '💻' },
  { title: 'Test Automation Expert', color: 'bg-blue-200 text-black', icon: '🤖' },
  { title: 'Data Analyst', color: 'bg-yellow-300 text-black', icon: '⚡' },
  { title: 'Business Analyst', color: 'bg-purple-400 text-white', icon: '✨' }
];

// ============================================
// ABOUT SECTION - WHO I AM
// ============================================
export const aboutItems = [
  {
    icon: '👩‍💻',
    title: 'Developer',
    description: 'Building robust web applications with React, Django, and modern tech stacks'
  },
  {
    icon: '🧪',
    title: 'Quality Engineer',
    description: 'Ensuring excellence through comprehensive testing frameworks and automation'
  },
  {
    icon: '☁️',
    title: 'AI Enthusiast',
    description: 'Experienced with AI/ML tools and frameworks, passionate about leveraging AI for innovative solutions'
  },
  {
    icon: '🎯',
    title: 'Problem Solver',
    description: 'Strategic thinker with a knack for identifying and resolving complex issues efficiently'
  },
  {
    icon: '📊',
    title: 'Data Analyst',
    description: 'Transforming raw data into actionable insights for informed decision-making'
  }
];

// ============================================
// TECHNICAL SKILLS
// ============================================
export const skills = {
  'Programming Languages': ['JavaScript', 'TypeScript', 'Java', 'Python', 'SQL'],
  'Testing & Automation': ['Playwright', 'Cypress', 'Postman', 'JMeter', 'SoapUI'],
  'Frontend': ['React', 'React Router', 'Axios', 'HTML5', 'CSS3'],
  'Backend': ['Django', 'Django REST Framework', 'PostgreSQL', 'JWT Auth'],
  'Data Analytics & Visualization': ['Power BI', 'Tableau', 'Excel', 'Python Data Libraries'],
  'DevOps & Cloud': ['Jenkins', 'Docker', 'AWS', 'Azure DevOps', 'GitHub Actions', 'Kubernetes'],
  'Tools & Management': ['JIRA', 'Trello', 'Power BI', 'Monday.com', 'Git', 'Dynatrace']
};

// ============================================
// WORK EXPERIENCE
// ============================================
export const experience = [
  {
    role: 'Career Break - Freelance Software Engineer',
    company: 'Self-Employed',
    period: 'May 2024 → Present',
    location: 'Dubai - Remote',
    logo: '🚀',
    color: 'bg-gradient-to-br from-pink-100 to-purple-100',
    highlights: [
      'Designed and deployed React-based web application for usage analytics and error logs',
      'Designed end-to-end automation framework using Cypress for UAE Government\'s generative AI-powered chatbot',
      'Playwright-based automation framework for e-commerce platform, reducing manual testing time by 70% and increasing test coverage to 95%',
      'Implemented comprehensive test suites and integrated them into CI/CD pipelines using Jenkins and Docker',
      'Data analysis and visualization using PivotTables to provide actionable insights for business stakeholders',
      'Designed stock prediction portal using Django REST Framework and React.js with JWT authentication, protected routes, and RESTful API integration for secure stock prediction and portfolio management'
    ]
  },
  {
    role: 'Test Developer',
    company: 'IBM India Pvt. Ltd.',
    period: 'Jan 2020 → April 2024',
    location: 'Bangalore - India',
    logo: '💼',
    color: 'bg-gradient-to-br from-blue-100 to-indigo-100',
    highlights: [
      'Achieved $100M cost avoidance by identifying critical bugs in pre-release',
      'Developed comprehensive automation frameworks using Playwright, Cypress, SOAP-UI, Jmeter and Postman for IBM\'s flagship product, significantly reducing manual testing efforts and improving test coverage',
      'Collaborated with cross-functional teams to integrate automated tests into CI/CD pipelines using Jenkins and Docker, ensuring seamless deployment and continuous quality assurance',
      'Collaborated with developers and stakeholders to stay current on product features and intended functionality',
      'Developed comprehensive test plans and strategies, aligning with project objectives and requirements'

    ]
  },
  {
    role: 'Software Test Engineer',
    company: 'Experis IT',
    period: 'Jan 2018 → Nov 2019',
    location: 'Delhi NCR - India',
    logo: '⚡',
    color: 'bg-gradient-to-br from-green-100 to-teal-100',
    highlights: [
      'Executed comprehensive manual and automated test cases',
      'Collaborated with cross-functional teams in Agile environment',
      'Authored and maintained efficient test cases for the entire team'
    ]
  }
];

// ============================================
// FEATURED PROJECTS
// ============================================
export const projects = [
  {
    title: 'IPAT - IBM Pricing Analytics Tool',
    subtitle: 'Finance | Pricing | Data Science & ML',
    description: 'Developed and maintained testing strategies for a worldwide pricing analytics tool focusing on monthly model price trends, discounts, and gross profit analysis for validator/bundle products across affected countries.',
    tags: ['React', 'Python', 'Data Analytics', 'Testing Framework'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    category: 'Enterprise Application'
  },
  {
    title: 'U-Ask Chatbot',
    subtitle: 'CRM | AI & ML',
    description: 'Designed end-to-end automation framework using Cypress for UAE Government\'s generative AI-powered chatbot. Supports residents with public services in Arabic and English using ChatGPT.',
    tags: ['Cypress', 'AI/ML', 'Automation', 'Testing'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
    category: 'AI & Automation',
    links: { github: 'https://github.com/SanskritiAYadav/CaseStudy-UAskChatbot' }
  },
  {
    title: 'Stock Prediction Portal',
    subtitle: 'Portfolio Management | AI & ML',
    description: 'Full-stack web application using Django REST Framework and React.js with JWT authentication, protected routes, and RESTful API integration for secure stock prediction and portfolio management.',
    tags: ['React', 'Django', 'JWT', 'REST API', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    category: 'Full Stack Development',
    links: { github: 'https://github.com/SanskritiAYadav/stock-prediction-portal' }
  },
  {
    title: 'ORI - IBM Operational Risk Insights',
    subtitle: 'Risk Management | Data Analytics',
    description: 'Developed and maintained testing strategies for a risk management tool that provides insights into operational risks, helping organizations identify and mitigate potential issues before they impact production.',
    tags: ['React', 'Python', 'Data Analytics', 'Testing Framework'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    category: 'AI Initiative for Risk Management on Enterprise Level'
  }
];

// ============================================
// CERTIFICATIONS
// ============================================
export const certifications = [
  { name: 'ISTQB Certified Tester (Foundation Level)', issuer: 'ISTQB', year: '2025', icon: '🏆' },
  { name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', year: '2026', icon: '☁️' },
  { name: 'Postman API Fundamentals Student Expert', issuer: 'Postman', year: '2024', icon: '📮' },
  { name: 'IBM Cloud Essentials', issuer: 'IBM', year: '2021', icon: '💼' },
  { name: 'IBM Agile Explorer', issuer: 'IBM', year: '2020', icon: '🎯' }
];

// ============================================
// TESTIMONIALS
// ============================================
export const testimonials = [
  {
    text: 'Sanskriti has an exceptional ability to identify critical issues before they impact production. Her attention to detail and systematic approach saved us significant costs.',
    author: 'Rajesh Kumar',
    role: 'Senior Manager, IBM',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80'
  },
  {
    text: 'Working with Sanskriti on automation frameworks was transformative. She brought deep expertise in Playwright and Cypress, and her frameworks are still in production.',
    author: 'Priya Sharma',
    role: 'Tech Lead, Product Team',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80'
  },
  {
    text: 'Her strategic insight in both development and testing makes her invaluable. Sanskriti doesn\'t just write code—she ensures it works flawlessly in production.',
    author: 'Michael Chen',
    role: 'DevOps Engineer',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80'
  }
];

// ============================================
// AWARDS & ACHIEVEMENTS
// ============================================
export const achievements = [
  {
    title: '$100M Cost Avoidance',
    description: 'Identified and resolved critical bugs in pre-release stages for IBM flagship product',
    year: '2023',
    icon: '💰'
  },
  {
    title: 'Academic Excellence Scholarship',
    description: 'Awarded 25% College Scholarship for achieving more than 85% in 10th and 12th grade board exams',
    year: '2013',
    icon: '🎓'
  },
  {
    title: 'GITEX Global Attendee',
    description: 'Attended world\'s largest Tech, AI & Startup Show in Dubai',
    year: '2025',
    icon: '🌐'
  },
  {
    title: 'Microsoft AI Tour',
    description: 'Participated in Microsoft AI Tour at Atlantis The Palm, Dubai',
    year: '2025',
    icon: '🤖'
  },
  {
    title: 'Gold Medal in Sports Event',
    description: 'Won a gold medal in the inter-college sports tournament',
    year: '2014',
    icon: '🏅'
  }
];
// ============================================
// EDUCATION
// ============================================
export const education = [
  {
    degree: 'Bachelor of Technology (B.Tech - ECE)',
    institution: 'Amity University',
    year: '2012-2016',
    location: 'India'
  }
];

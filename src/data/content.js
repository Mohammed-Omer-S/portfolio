export const profile = {
  name: 'Mohammed Omer',
  role: 'Software Engineer • MERN Stack Developer',
  tagline: 'I build fast, accessible, and reliable web systems — from pixel to production.',
  resumeUrl: 'https://drive.google.com/uc?export=download&id=1uxU0SGm6bJg-q1Cn_SMDZwYAswEQj6sI',
  // Replace with the endpoint Formspree gives you after creating a form
  // at https://formspree.io — looks like "https://formspree.io/f/xxxxabcd"
  formspreeEndpoint: 'https://formspree.io/f/mjgqwved',
  social: {
    github: 'https://github.com/Mohammed-Omer-S',
    linkedin: 'https://www.linkedin.com/in/mohammed-omer-b8b49325a',
    leetcode: 'https://leetcode.com/u/Mohammed_Omer/',
  },
  email: 'mohammedomer.pvt@gmail.com',
};

export const timeline = [
  {
    id: 'exp-1',
    type: 'work',
    title: 'Web Development Intern',
    org: 'Five Seven IT Solutions PVT LTD',
    period: 'Dec 2025 — Jan 2026',
    summary: 'Actively participated in various Web Development projects, gaining hands-on experience in technologies and real-time implementation.',
    details: [
      'Developed a production-grade personal website with a focus on web accessibility (WCAG compliance) and optimized performance metrics.',
      'Architected deployment pipelines on cloud platforms like Vercel and Render, gaining expertise in environment configuration and automated builds.',
      'Mastered professional version control workflows, utilizing Git for complex merge management, issue tracking, and collaborative software development.',
    ],
  },
  {
    id: 'edu-1',
    type: 'education',
    title: 'B.E. Computer Science And Engineering',
    org: 'Khaja Bandanawaz University',
    period: '2022 — 2026',
    summary: 'CGPA 9.43/10',
    details: [
      'Final-year project: CareerSync - A Digital Platform For Campus Recruitment.',
    ],
  },
  {
    id: 'oss-1',
    type: 'opensource',
    title: 'Open Source Contributor',
    org: 'N/A',
    period: '2026 — Present',
    summary: 'N/A',
    details: [
      'N/A.',
      'N/A.',
    ],
  },
  {
    id: 'proj-1',
    type: 'project',
    title: 'Academic Capstone — CareerSync',
    org: 'Team of 4',
    period: '2025-2026',
    summary: 'A Digital Platform For Campus Recruitment.',
    details: [
      'A full-stack web application that I built to simplify and digitize the campus placement process.',
      'Replaces manual spreadsheet/WhatsApp-based placement coordination with one unified platform, reducing missed deadlines and improving transparency.',
    ],
  },
];

export const skillCategories = [
  {
    label: 'Programming Languages',
    skills: [
      { name: 'Java', level: 3 },
      { name: 'Python', level: 2 },
      { name: 'JavaScript', level: 3 },
    ],
  },
  {
    label: 'Web Technologies / Frameworks',
    skills: [
      { name: 'React', level: 3 },
      { name: 'Tailwind CSS', level: 2 },
      { name: 'Node.js / Express', level: 3 },
      { name: 'HTML', level: 4 },
      { name: 'CSS', level: 3 },
    ],
  },
  {
    label: 'Databases',
    skills: [
      { name: 'MySQL', level: 3 },
      { name: 'MongoDB', level: 3 },
    ],
  },
  {
    label: 'Core Concepts',
    skills: [
      { name: 'Data Structures & Algorithms', level: 3 },
      { name: 'Object-Oriented Programming(OOP)', level: 3 },
      { name: 'Operating System', level: 3 },
      { name: 'DBMS', level: 3 },
      { name: 'Computer Networks', level: 3 },
    ],
  },
];

export const projects = [
  {
    id: 'p1',
    title: 'AI Resume Parser & Scorer',
    category: 'Full-Stack',
    problem: 'To solve a problem I kept running into while applying for jobs-never knowing how well my resume actually matched a job posting before hitting submit.',
    solution: 'Instead of manually comparing keywords by eye, I built a tool that does it for me using AI.',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'Axios', 'Multer', 'Framer motion', 'Google Gemini API'],
    challenges: 'Midway through development, a dependency (pdf-parse) changed its entire API in a new version, breaking PDF extraction-I debugged it by inspecting the package actual exports and refactored to its new class-based interface.',
    impact: 'Turns a manual, multi-minute resume-to-job-description comparison into an instant, structured AI report-giving job seekers fast, actionable feedback without relying on paid ATS-checking tools.',
    links: { github: 'https://github.com/Mohammed-Omer-S/resume-scorer.git', live: 'https://resume-scorer-nu.vercel.app' },
  },
  {
    id: 'p2',
    title: 'CareerSync-A Digital Platform For Campus Recruitment',
    category: 'Full-Stack',
    problem: 'Campus placement in most colleges is still managed through spreadsheets, WhatsApp groups, and manual emails. Students miss deadlines, companies struggle to manage applicants, and TPOs spend hours on coordination.',
    solution: 'A full-stack web application that I built to simplify and digitize the campus placement process.',
    stack: ['React', 'Tailwind CSS', 'Socket.io', 'Node.js', 'MongoDB', 'Express', 'Nodemailer', 'Multer', 'JWT'],
    challenges: 'Implementing real-time chat and notifications across 3 user roles while keeping data in sync using Socket.io alongside REST APIs.',
    impact: 'Replaces manual spreadsheet/WhatsApp-based placement coordination with one unified platform, reducing missed deadlines and improving transparency.',
    links: { github: 'https://github.com/Mohammed-Omer-S/careersync.git', live: 'https://careersync-delta-ecru.vercel.app' },
  },
  {
    id: 'p3',
    title: 'Personal Portfolio Website',
    category: 'Frontend',
    problem: 'Needed a fast, accessible, production-grade personal site to showcase projects and experience to recruiters.',
    solution: 'Engineered a lightweight React/Vite site using route-level code-splitting, privacy-focused analytics, and a seamless serverless contact backend.',
    stack: ['React', 'Tailwind CSS', 'HTML', 'Framer Motion', 'Plausible Analytics', 'Formspree'],
    challenges: 'Implemented complex animations while ensuring accessibility by centralizing motion states to respect user preferences.',
    impact: 'Delivered a high-performance site with full WCAG 2.2 AA compliance, balancing sophisticated design with technical efficiency.',
    links: { github: 'https://github.com/Mohammed-Omer-S/portfolio', live: 'https://portfolio-alpha-weld-gmpv5e6i7a.vercel.app' },
  },
];

export const proofLinks = [
  { label: 'GitHub', url: profile.social.github, stat: '30+ contributions/yr' },
  { label: 'LinkedIn', url: profile.social.linkedin, stat: '500+ network' },
  { label: 'LeetCode', url: profile.social.leetcode, stat: 'Getting Started' },
];
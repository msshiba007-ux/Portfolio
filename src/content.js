// START HERE: All personal information lives in this file.
// Replace every [bracketed placeholder] below with your own details.
export const profile = {
  name: 'Mariam Saralidze',
  role: 'Data Science & AI Engineering',
  headline: 'Turning data into',
  headlineAccent: 'understanding.',
  introduction: 'Hi, I’m Mariam. I’m building a foundation in data science, machine learning, and AI — with curiosity at the heart of every question.',
  about: 'I’m Mariam Saralidze, focused on understanding data and the ideas behind intelligent systems. My learning brings together Python, statistics, machine learning, and deep learning. I’m interested in the full journey: asking a useful question, exploring the evidence, and communicating what it means.',
  email: 'msshiba007@gmail.com', // Add your email here to enable the contact form.
  portrait: '/heroImage.jpg', // Optional: put a photo in public/ and enter its path, e.g. /portrait.jpg
  links: [
    { label: 'GitHub', url: 'https://github.com/msshiba007-ux' }, // Paste your full GitHub profile URL.
    // { label: 'LinkedIn', url: '' }, // Paste your full LinkedIn profile URL.
  ]
};  

export const education = [
  {
    date: '[2023 - 2026]',
    title: 'School',
    organization: 'Tbilisi Public School №199 of Physics and Mathematics',
    description: '',
  },
  {
    date: 'November 2026',
    title: 'Complete Data Science Bootcamp',
    organization: '365 Careers · Udemy',
    description: 'Completed 32.5 hours of training spanning Python, statistics, machine learning, and deep learning.',
  },
  {
    date: 'November 2026 - Present',
    title: 'AI Engineering Bootcamp GeoLab/TBC',
    organization: 'GeoLab · TBC',
    description: 'Started a 3-month AI Engineering Bootcamp, covering advanced topics in machine learning, deep learning, and AI applications.',
  },
];

// Add entries using the same shape as education. No invented work history is displayed.
export const experience = [
  {
    date: '',
    title: '',
    organization: '',
    description: '',
  },
];

export const certificates = [
  {
    title: 'The Data Science Course: Complete Data Science Bootcamp 2026',
    issuer: '365 Careers · Udemy',
    date: 'November 10, 2026',
    image: '/certificates/data-science-preview.png',
    pdf: '/certificates/mariam-saralidze-data-science.pdf',
    verificationUrl: 'https://www.udemy.com/certificate/UC-1b46c93f-f427-4235-b0fd-5c79f1ffbfda/',
  },
];

// The toolkit reflects the linked course curriculum, not a claimed proficiency score.
export const skillGroups = [
  { title: 'Code & data', description: 'The foundations for working with data.', tools: [
    { name: 'Python', icon: 'python' }, { name: 'NumPy', icon: 'numpy' }, { name: 'pandas', icon: 'pandas' },
  ] },
  { title: 'Analysis & visualization', description: 'Explore patterns. Make findings clear.', tools: [
    { name: 'Matplotlib', icon: 'plot' }, { name: 'Seaborn', icon: 'waves' }, { name: 'Tableau', icon: 'tableau' },
  ] },
  { title: 'Machine & deep learning', description: 'From statistical models to neural networks.', tools: [
    { name: 'scikit-learn', icon: 'scikitlearn' }, { name: 'statsmodels', icon: 'stats' }, { name: 'TensorFlow', icon: 'tensorflow' },
  ] },
];

// Add real projects here. Each appears as a card; no component edits needed.
// { title: 'Project name', description: 'Problem, approach, and result.', tags: ['Python'], url: 'https://...', image: '/projects/example.png' }
export const projects = [
  {
    title: '[Project title]',
    description: '[The problem, your approach, and the result.]',
    tags: ['[Technology]', '[Method]'],
    url: '', // Repository or live demo URL. Leave blank until ready.
    image: '', // Optional image path, e.g. /projects/my-project.png
  },
];
export const courseUrl = 'https://www.udemy.com/course/the-data-science-course-complete-data-science-bootcamp/';

import { Project, Experience, BlogPost, SocialLink } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  // { name: 'Blog', href: '#blog' }, // Hidden for now
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/anandkumarSWE', icon: 'Github' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/anandkumar-/', icon: 'Linkedin' },
];

export const PROFESSIONAL_EXPERIENCE: Experience[] = [
  {
    id: 'prof-1',
    role: 'Software Engineer II, Pricing Experience',
    company: 'Airbnb',
    period: 'June 2022 - Aug 2024',
    description: [
      'Owned Airbnb\'s Host Promotions system, providing an overall 44% reduction in latency for the main backend Java service.',
      'Implemented expanded New Host Promotion feature helping new listings become active more quickly.',
      'Simplified PDP Price Display and removed taxes for better alignment with competitors, raising first-time booked listings by 4.3%.',
      'Implemented fee-inclusive "Upfront Pricing" for Guest Search, PDP, and Checkout pages, resolving top social media complaint.',
      'Refactored entire Strikethrough Pricing feature backend, reducing code implementation by 10,000+ lines.',
      'Developed frontend for Host Calendar\'s new Year View, resulting in 10,000+ views in Q1 after launch.'
    ],
    technologies: ['Java', 'React', 'GraphQL', 'Spinnaker', 'SQL'],
    logo: 'https://cdn.simpleicons.org/airbnb/FF5A5F',
    color: '#FF5A5F',
    darkColor: '#FF5A5F'
  },
  {
    id: 'prof-2',
    role: 'Software Engineer I, Pricing Experience',
    company: 'Airbnb',
    period: 'Mar 2020 - June 2022',
    description: [
      'Migrated team\'s deployment pipelines to Spinnaker, authoring runbooks and reducing org-wide rollbacks.',
      'Developed internal tool for Marketing to create geo-based Promotion Campaigns, generating significant revenue during COVID recovery.',
      'Improved accuracy of Discounted Stays Search feature by including listings where Hosts manually reduced prices.',
      'Drove IPO and SOX Compliance audits for backend services, adding PagerDuty and Datadog alerts for error spikes.'
    ],
    technologies: ['Java', 'Spinnaker', 'Datadog', 'Thrift', 'Hive'],
    logo: 'https://cdn.simpleicons.org/airbnb/FF5A5F',
    color: '#FF5A5F',
    darkColor: '#FF5A5F'
  },
  {
    id: 'prof-3',
    role: 'Teaching Assistant',
    company: 'UC San Diego',
    period: 'Apr 2017 – Mar 2019',
    description: [
      'Taught OOP concepts and assisted students in implementing data structures in C, C++, and Java.',
      'Designed lab classes for teaching various software tools (Git, Vim, gdb, Makefiles) to students.',
      'Mentored students in creating full-fledged applications from concept to delivery.'
    ],
    technologies: ['C++', 'Java', 'C', 'Git', 'Linux'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/University_of_California%2C_San_Diego_logo.svg/512px-University_of_California%2C_San_Diego_logo.svg.png',
    color: '#182B49',
    darkColor: '#60A5FA'
  }
];

export const INTERNSHIP_EXPERIENCE: Experience[] = [
  {
    id: 'intern-1',
    role: 'Airbnb Experiences Intern',
    company: 'Airbnb',
    period: 'Summer 2019',
    description: [
      'Trained Gradient Boosted Decision Tree model to demote Experiences most likely to be cancelled in search ranking.',
      'Created personalized Search Autosuggestion based on user history.'
    ],
    technologies: ['Python', 'Machine Learning', 'Scala', 'Hive'],
    logo: 'https://cdn.simpleicons.org/airbnb/FF5A5F',
    color: '#FF5A5F',
    darkColor: '#FF5A5F'
  },
  {
    id: 'intern-2',
    role: 'Software Engineer Intern',
    company: 'Yelp',
    period: 'Spring 2019',
    description: [
      'Implemented Python comparison algorithm for ad campaigns, yielding $1.5M/year revenue gain upon integration.',
      'Designed system to measure similarity of multi-location ad campaigns.'
    ],
    technologies: ['Python', 'Testify', 'Jupyter', 'SQL'],
    logo: 'https://cdn.simpleicons.org/yelp/D32323',
    color: '#D32323',
    darkColor: '#EF4444'
  },
  {
    id: 'intern-3',
    role: 'Software Engineer Intern',
    company: 'Uber',
    period: 'Summer 2018',
    description: [
      'Developed Geobase (Golang) for realtime driver/rider indexing optimized by Redis GEOAPI.',
      'Minimizing search scope across a city, saving $1.3M/year in query costs.'
    ],
    technologies: ['Golang', 'Redis', 'Apache Thrift'],
    logo: 'https://cdn.simpleicons.org/uber/000000',
    color: '#000000',
    darkColor: '#FFFFFF'
  },
  {
    id: 'intern-4',
    role: 'CSE Course Tools Developer',
    company: 'UC San Diego',
    period: '2018',
    description: [
      'Developed a suite of tools in Node.js and ReactJS designed to manage and administer software engineering course for ~350 students per quarter.'
    ],
    technologies: ['Node.js', 'ReactJS', 'JavaScript'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/University_of_California%2C_San_Diego_logo.svg/512px-University_of_California%2C_San_Diego_logo.svg.png',
    color: '#002856',
    darkColor: '#60A5FA'
  },
  {
    id: 'intern-5',
    role: 'Software Engineering Intern',
    company: 'Lytx',
    period: 'Summer 2017',
    description: [
      'Developed Typescript/C# web client for driver monitoring tools.',
      'Redesigned Angular UI with streamlined login system.',
      'Developed Workspace tool for clients to monitor driver behaviors.'
    ],
    technologies: ['Angular', 'Typescript', 'C#', 'Jasmine'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Lytx_Inc._Logo.svg/512px-Lytx_Inc._Logo.svg.png',
    color: '#4B286D',
    darkColor: '#A855F7'
  },
  {
    id: 'intern-6',
    role: 'Engineering Intern',
    company: 'NASA',
    period: 'Winter-Spring 2015',
    description: [
      'Designed automated Model Mars rover (CAD) and earned MVP award for leading Software team.',
      'Implemented programmatic navigation for obstacle courses.'
    ],
    technologies: ['C++', 'CAD', 'Robotics'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg',
    color: '#0B3D91',
    darkColor: '#3B82F6'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'FlexApp',
    description: 'A smart scheduling tool that uses Google Maps and Calendar APIs to organize tasks based on location and user-defined priority. Features automatic route optimization and calendar integration.',
    tags: ['React', 'Node.js', 'Google Maps API', 'OAuth 2.0'],
    imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800',
    repoUrl: 'https://github.com/anandkumarSWE'
  },
  {
    id: 'p2',
    title: 'Gradetracker',
    description: 'Android application helping students track grades across multiple courses with support for complex weighted categories and hypothetical score calculation.',
    tags: ['Android', 'Java', 'XML', 'SQLite'],
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800',
    repoUrl: 'https://github.com/anandkumarSWE'
  },
  {
    id: 'p3',
    title: 'Distributed File Compressor',
    description: 'C++ implementation of Huffman Coding tree for variable-length compression, achieving 40% reduction in file sizes for text-heavy datasets.',
    tags: ['C++', 'Algorithms', 'Data Structures'],
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800',
    repoUrl: 'https://github.com/anandkumarSWE'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Optimizing High-Traffic Pricing Systems',
    excerpt: 'Lessons learned from reducing latency by 44% in Airbnb\'s pricing infrastructure using caching strategies and query optimization.',
    date: 'Sep 15, 2024',
    readTime: '6 min read',
    category: 'System Design'
  },
  {
    id: 'b2',
    title: 'The Evolution of Frontend State Management',
    excerpt: 'Comparing Redux, Context API, and modern signals. When to use which and how to avoid prop drilling in complex applications.',
    date: 'Aug 22, 2024',
    readTime: '4 min read',
    category: 'Frontend'
  },
  {
    id: 'b3',
    title: 'Building Resilient CI/CD Pipelines with Spinnaker',
    excerpt: 'A guide to automating deployments and reducing rollbacks through automated canary analysis and robust runbooks.',
    date: 'Jul 10, 2024',
    readTime: '8 min read',
    category: 'DevOps'
  }
];
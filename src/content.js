// Central place for all portfolio content.
import heroPhoto from './assets/hero-photo.jpeg'
import aboutPhoto from './assets/about-photo.jpeg'

export const profile = {
  name: 'Anisha Sharon',
  email: 'anishasharon00@gmail.com',
  location: 'Karnataka, India',
    resumeUrl: '/Anisha_Sharon_CV.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/anisha-sharon-9a79b4211/',
    github: 'https://github.com/Anisha-8',
    threads: 'https://www.threads.com/@ahni_israel8',
    instagram: 'https://www.instagram.com/ahni_israel8',
  },
  heroImage: heroPhoto,
  aboutImage: aboutPhoto,
}

export const heroCopy = {
  eyebrow: 'Crafting polished digital experiences',
  headline: 'Hey, I\u2019m Anisha Sharon.',
  subheadline:
    'I build scalable backends, fluid apps & intelligent AI experiments.',
  body: 'Bridging solid backend logic with intuitive frontend design. Currently architecting high-integrity EDI workflows, building responsive native clients, and exploring deep learning systems.',
}

export const techTicker = [
  'Python',
  'C# & .NET',
  'EDIFACT & ANSI X12',
  'React.js',
  '.NET MAUI',
  'Django & DRF',
  'FastAPI',
  'Kotlin & CameraX',
  'Tailwind CSS',
  'SQL Server & MySQL',
  'OpenCV & Dlib',
  'TensorFlow / LSTM',
  'Google Magenta RNN',
  'Claude & Stitch AI',
  'Git & Postman',
]

export const about = {
  eyebrow: 'About Me',
  headingLead: "I'm Anisha Sharon",
  headingTail:
    '\u2014 an engineer drawn to the quiet beauty of systems that work seamlessly.',
  paragraphs: [
    'Currently, I work full-time as an EDI and Web Developer at TgL Communications, where I translate complex, mission-critical business transactions into rock-solid software pipelines. What began years ago as a curious explorer fascinated by lines of code has grown into a deep-rooted passion for software engineering that touches real humans every single day.',
    "For me, great code isn't just about syntax or algorithmic purity \u2014 it's about empathy. Whether I'm synchronizing high-throughput EDI integrations across continents, squeezing milliseconds out of biometric facial recognition clients, or training neural sequence models in Python, I pour genuine intention into every layer.",
    'I believe in staying quietly relentless: always learning, always refining, and finding equal joy in the architecture behind the scenes and the crisp, tactile polish on the glass.',
  ],
  metrics: [
    { value: '4+ Yrs', label: 'Professional Dev' },
    { value: '1 Paper', label: 'AI Music Research' },
    { value: '8+ Stack', label: 'Enterprise Projects' },
  ],
}

export const experience = [
  {
    role: 'EDI and Web Developer',
    company: 'TgL Communications \u00b7 Auburn, USA',
    dates: 'Mar 2022 \u2014 Present',
    points: [
      { label: 'EDI Development & Integration:', text: 'Built and maintained B2B EDI integrations in C#, ASP.NET, and .NET using EDIFACT and ANSI X12 standards, handling Purchase Orders, Invoices, and Shipments over secure FTP/SFTP/HTTPS and VAN networks.' },
      { label: 'Inventory Management System:', text: 'Architected and maintained enterprise inventory modules with ASP.NET MVC, C#, SQL Server, and DevExtreme reporting for comprehensive stock analytics.' },
      { label: 'Business Clients:', text: 'Deployed high-performance production websites for international enterprise clients including COSMOIND & Hudson Jung.' },
      { label: 'Face Recognition Attendance System:', text: 'Built cross-platform client with .NET MAUI, XAML, CSHTML, and native Android Kotlin/CameraX; engineered end-to-end optimizations that decreased latency from ~2000ms down to ~850-900ms.' },
    ],
    tags: ['C# / .NET', 'EDIFACT & ANSI X12', 'ASP.NET MVC', '.NET MAUI & Kotlin', 'SQL Server'],
  },
  {
    role: 'Python Backend Developer Intern',
    company: 'NewGen Softech \u00b7 Bangalore, India',
    dates: 'Feb 2026 \u2014 May 2026',
    points: [
      { text: 'Engineered and deployed robust RESTful APIs in Python and Django Rest Framework (DRF) powering both Learning Management Systems (LMS) and Digital Ledger applications.' },
      { text: 'Spearheaded authentication security, granular CRUD operations, Role-Based Access Control (RBAC), and high-throughput database query optimizations across SQLite and MySQL.' },
    ],
    tags: ['Python', 'Django & DRF', 'RESTful APIs', 'RBAC Auth'],
  },
  {
    role: 'Process Associate',
    company: 'Pacific Gaming Private Limited \u00b7 Bangalore, India',
    dates: 'Feb 2022 \u2014 Jun 2022',
    points: [
      { text: 'Delivered real-time customer support to active online gamers via high-concurrency live chat channels.' },
      { text: 'Conducted rapid incident resolution, gameplay session anomaly analysis, and consistently maintained high customer satisfaction benchmarks.' },
    ],
    tags: ['Live Support', 'Incident Resolution', 'User Experience'],
  },
]

export const projects = [
  {
    tag: 'Computer Vision',
    icon: 'touch_app',
    title: 'Computer Cursor Control System',
    description:
      'Hands-free computer interaction system designed for accessibility. Uses facial gesture detection and landmark tracking with OpenCV and Dlib to execute pointer movement and click events in real time without external sensors.',
    tech: ['Python', 'OpenCV', 'Dlib', 'PyAutoGUI'],
    linkLabel: 'Explore Code',
  },
  {
    tag: 'Django Backend',
    icon: 'receipt_long',
    title: 'Digital Ledger for Medical Shops',
    description:
      'Engineered a resilient digital ledger and pharmaceutical inventory tracker in Django and Python. Features automated invoice generation, transactional auditing, supplier balance tracking, and role-based operational permissions.',
    tech: ['Django', 'Python DRF', 'Billing', 'SQLite'],
    linkLabel: 'View Architecture',
  },
  {
    tag: 'Full Stack Web',
    icon: 'school',
    title: 'Learning Management System (LMS)',
    description:
      'Full-stack academic portal built with Django REST Framework and React. Integrates role-based student and instructor dashboards, course progress tracking, grading engines, and optimized MySQL data models.',
    tech: ['Django REST', 'React.js', 'MySQL', 'JWT Auth'],
    linkLabel: 'Explore Repository',
  },
]

export const aiProjects = [
  {
    tag: 'Generative RNN',
    icon: 'graphic_eq',
    title: 'AI Music Studio',
    description:
      "Intelligent algorithmic drum sequencing engine using Python and Google Magenta's DrumsRNN model. Features customizable tempo, live rhythmic generation, and interactive MIDI export capabilities.",
    tech: ['Python', 'Magenta DrumsRNN', 'MIDI I/O'],
    linkLabel: 'View Studio Engine',
  },
  {
    tag: 'CNN + LSTM',
    icon: 'auto_stories',
    title: 'Image Caption Generation',
    description:
      'Deep learning vision-to-language model trained on the Flickr8k benchmark. Integrates a convolutional neural network (CNN) for spatial feature extraction with a sequential LSTM network for automated natural language description generation.',
    tech: ['TensorFlow', 'CNN', 'LSTM', 'Flickr8k'],
    linkLabel: 'Explore Neural Model',
  },
  {
    tag: 'Vision Latency Opt',
    icon: 'face',
    title: 'Face Recognition Attendance',
    description:
      'Enterprise verification client combining .NET MAUI with Android Kotlin and CameraX. Engineered end-to-end model and network optimizations, slashing verification latency from ~2000ms down to ~850-900ms.',
    tech: ['.NET MAUI', 'Kotlin', 'CameraX', 'REST API'],
    linkLabel: 'Inspect Client',
  },
]

export const research = {
  title: 'AI \u2013 Assisted Grid Based Music Sequencing: A study using Tenori-off',
  date: 'December 2025',
  paperUrl: 'https://joirem.com/wp-content/uploads/journal/published_paper/volume-03/issue-12/J_nYdFtNy5.pdf',
  description:
    'An exploratory inquiry investigating human-computer co-creativity in modern musical pattern synthesis. The study documents and evaluates heuristic agents within interactive, grid-based generative interfaces designed to lower cognitive barriers in electronic composition and algorithmic harmony generation.',
  tags: ['Interactive HCI', 'Generative Algorithms', 'Tenori-off Architecture', 'Heuristic Audio Agents'],
}

export const education = {
  postgrad: {
    title: "Master's in Computer Application (MCA)",
    org: 'PESITM \u00b7 Visvesvaraya Technological University (VTU)',
    description:
      'Advanced curriculum covering distributed systems, deep learning architectures, enterprise database optimization, and high-performance backend patterns.',
  },
  undergrad: {
    title: "Bachelor's in Computer Application (BCA)",
    org: 'PESIAMS \u00b7 Kuvempu University',
    description:
      'Strong foundation in data structures, algorithms, object-oriented design, web application fundamentals, and relational database management systems.',
  },
  certifications: [
    {
      badge: 'Udemy Professional \u00b7 2026',
      title: 'Blazor & .NET Core Web API Full Stack',
      description: 'C# WebAssembly, EF Core, REST APIs & JWT authentication.',
    },
    {
      badge: 'IIT Accredited \u00b7 2026',
      title: 'AI Search & Problem Solving',
      description: 'Heuristic search algorithms, state-space trees & machine learning foundations.',
    },
    {
      badge: 'VTU Accredited \u00b7 2025',
      title: 'Research Methodologies & IPR',
      description: 'Formal scientific publishing, empirical research & intellectual property rights.',
    },
    {
      badge: 'Specialization Certifications',
      title: 'Python & REST Architecture',
      description: 'Advanced Python patterns, Django Rest Framework & microservice integrations.',
    },
  ],
}

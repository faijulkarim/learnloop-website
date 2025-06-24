// courses-data.js
const courses = [
  {
    id: "0",
    title: "Python Fundamentals for Beginners",
    level: "Beginner",
    description:
      "This course is designed for absolute beginners who want to learn Python programming from scratch.",
    instructor: {
      name: "Md. Faijul Karim",
      img: "img/faijul-karim.jpg",
      bio: "EEE Graduate, Robotics & Programming Enthusiast"
    },
    image: "/img/python_fundamentals.png",
    syllabus: [
      {
        title: "Introduction to Python",
        lessons: ["What is Python?", "Setting up the environment", "Basic syntax and data types"]
      },
      {
        title: "Control Structures",
        lessons: ["Conditional statements", "Loops (for, while)", "Error handling"]
      },
      {
        title: "Functions and Modules",
        lessons: ["Defining functions", "Importing modules", "Using libraries"]
      }
    ],
    formLink: "#"
  },
  {
    id: "1",
    title: "Web Development for Full Stack Developer",
    level: "Advanced",
    description:
      "A comprehensive course covering both front-end and back-end web development technologies.",
    instructor: {
      name: "Md. Faijul Karim",
      img: "img/faijul-karim.jpg",
      bio: "EEE Graduate, Web Development Expert"
    },
    image: "/img/web_development.png",
    syllabus: [
      {
        title: "HTML & CSS Basics",
        lessons: ["HTML structure", "CSS styling", "Responsive design"]
      },
      {
        title: "JavaScript Fundamentals",
        lessons: ["Variables and data types", "Functions", "DOM manipulation"]
      },
      {
        title: "Back-End Development",
        lessons: ["Node.js basics", "Express framework", "Database integration"]
      }
    ],
    formLink: "#"
  },
  {
    id: "2",
    title: "Ethical Hacking Course for Beginners",
    level: "Beginner",
    description:
      "Learn the basics of ethical hacking and cybersecurity principles to protect systems from attacks.",
    instructor: {
      name: "Md. Faijul Karim",
      img: "img/faijul-karim.jpg",
      bio: "Cybersecurity Enthusiast, Ethical Hacker"
    },
    image: "/img/Ethical_Hacking.jpeg",
    syllabus: [
      {
        title: "Introduction to Ethical Hacking",
        lessons: ["What is ethical hacking?", "Types of hackers", "Legal and ethical issues"]
      },
      {
        title: "Network Security Basics",
        lessons: ["Understanding networks", "Common vulnerabilities", "Security protocols"]
      },
      {
        title: "Tools and Techniques",
        lessons: ["Using Kali Linux", "Basic penetration testing tools", "Reporting findings"]
      }
    ],
    formLink: "#"
  },
  {
    id: "3",
    title: "Python for Hacking",
    level: "Beginner",
    description:
      "This course teaches how to use Python for ethical hacking and cybersecurity tasks.",
    instructor: {
      name: "Sakib Haque Zisan",
      img: "img/sakib-haque-zisan.jpg",
      bio: "Cyber Security Researcher । Bug Hunter । CTF Player। Mentor। Chief of Team - Bengal Black Diamond 'Gray Hat Hacker's Community"
    },
    image: "img/python_for_hacking.jpg",
    syllabus: [
      {
        title: "Week 1",
        lessons: ["Basic Classes", "Introduction"]
      },
      {
        title: "Week 2",
        lessons: ["Python Programming", "Print messages with Python", "Python Variable","Type Conversion, User Input in Python"]
      },
      {
        title: "Week 3",
        lessons: ["Python in Logical Implementation", "Contidional Statement (if-else) in Python", "Use of Operators in Python Programming Language","Nested if-else in Python", "Loop in Python"]
      },
      {
        title: "Week 4",
        lessons: ["Python for Hacking", "List and Dictionary in Python", "File Handling: Read, Write, Create in Python", "Create Password Cracking Tool with Python","Package Lists in Python","Track Location using Phone number with Python","Create Private Keylogger Tool with Python","Introduction to Scapy"]
      },
      {
        title: "Week 5",
        lessons: ["Bonus Course", "Monitor online Activities like a Hacker"]
      }
    ],
    formLink: "#"
  },
  {
    id: "4",
    title: "Self Learning Hacking Mission",
    level: "Beginners",
    description:
      "Embark on a self-paced journey to learn ethical hacking with practical exercises and challenges.",
    instructor: {
      name: "Md. Faijul Karim",
      img: "img/faijul-karim.jpg",
      bio: "Cybersecurity Enthusiast, Ethical Hacker"
    },
    image: "/img/self_learning_hacking_mission.png",
    syllabus: [
      {
        title: "Getting Started",
        lessons: ["Setting up your environment", "Understanding the basics of hacking", "Tools overview"]
      },
      {
        title: "Practical Exercises",
        lessons: ["Basic network scanning", "Vulnerability assessment", "Exploitation techniques"]
      },
      {
        title: "Challenges",
        lessons: ["Capture the Flag (CTF) exercises", "Real-world scenarios", "Reporting and documentation"]
      },
    ],
    formLink: "https://forms.gle/JTfdMHzrL93gCku96"
  },
  {
    id: "5",
    title: "Web Design course for Beginners",
    level: "Beginner",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and basic JavaScript to create beautiful websites.",
    instructor: {
      name: "upcoming soon..."
      //img: "img/upcoming-soon.jpg",
      //bio: "upcoming soon..."
    },
    image: "img/web_design.jpeg",
    syllabus: [
      {
        title: "HTML Basics",
        lessons: ["Understanding HTML structure", "Creating web pages", "Using tags and attributes"]
      },
      {
        title: "CSS Fundamentals",
        lessons: ["Styling with CSS", "Box model", "Flexbox and Grid layout"]
      },
      {
        title: "JavaScript Introduction",
        lessons: ["Basic JavaScript syntax", "DOM manipulation", "Event handling"]
      }
    ],
    formLink: "#"
  },
  {
    id: "6",
    title: "Android Development Course Basic to Advanced",
    level: "Advanced",
    description:
      "A complete guide to Android development, from basic concepts to advanced app development techniques.",
    instructor: {
      name: "upcoming soon..."
      //img: "img/upcoming-soon.jpg",
      //bio: "upcoming soon..."
    },
    image: "img/android_development.jpeg",
    syllabus: [
      {
        title: "Introduction to Android",
        lessons: ["Setting up the development environment", "Understanding Android architecture", "Creating your first app"]
      },
      {
        title: "UI Design",
        lessons: ["Layouts and views", "Material design principles", "Responsive design"]
      },
      {
        title: "Advanced Topics",
        lessons: ["Networking in Android", "Data storage options", "Publishing apps on Google Play"]
      }
    ],
    formLink: "#"
  },
  {
    id: "7",
    title: "Pre-Recorded Web Pentesting Essentials Course",
    level: "Intermediate",
    description:
      "A pre-recorded course covering essential web penetration testing techniques and tools.",
    instructor: {
      name: "Sakib Haque Zisan",
      img: "img/sakib-haque-zisan.jpg",
      bio: "Cyber Security Researcher । Bug Hunter । CTF Player। Mentor। Chief of Team - Bengal Black Diamond 'Gray Hat Hacker's Community"
    },
    image: "img/web_pentesting.jpg",
    syllabus: [
      {
        title: "Week 1",
        lessons: ["Introduction", "Data Communiaction", "Web Communication"]
      },
      {
        title: "Week 2",
        lessons: ["Web Application Pentesting",
                  "Recon",
                  "Setup Lab",
                  "Tools",
                  "Target Machine",
                  "Openvas Installation",
                  "Fix Errors",
                  "Configure",
                  "Wireshark",
                  "Wordpress Security Testing",
                  "JDK 8 Setup",
                  "Web Server Scanning",
                  "Vulnerability Testing",
                  "Zed Attack Proxy",
                  "MITM Attack"]
      },
      {
      title: "Week 3",
        lessons: ["Web Attacks & Tools",
"Burp suite Basics",
"Payload Positioning",
"OWASP Top 10",
"Lab 01 Setup",
"Practice Session",
"Lab 02 Setup and Practice"]
      },
      {
        title: "Week4",
        lessons: ["Offensive & Defensive Security",
"Metasploit",
"John the Ripper",
"THC Hydra"]
      },
      {
        title: "Week 5",
        lessons: ["Conclusion",
"Report Writing",
"Career Roadmap"]
      }
    ],
    formLink: "https://forms.gle/pn4pLUDvGC1Ht4E86"
  },
  {
    id: "8",
    title: "Python with Django Web Development",
    level: "Intermediate",
    description:
      "Learn how to build web applications using Python and the Django framework, covering both front-end and back-end development.",
    instructor: {
      name: "upcoming soon..."
      //img: "img/upcoming-soon.jpg",
      //bio: "upcoming soon..."
    },
    image: "img/python_with_django.png",
    syllabus: [
      {
        title: "Django Basics",
        lessons: ["Setting up Django", "Creating your first project", "Understanding models and views"]
      },
      {
        title: "Front-End Development",
        lessons: ["Templates and static files", "Form handling", "User authentication"]
      },
      {
        title: "Advanced Django Features",
        lessons: ["REST APIs with Django REST Framework", "Deployment strategies", "Testing and debugging"]
      }
    ],
    formLink: "#"
  },
  {
    id: "9",
    title: "JavaScript for Hacking",
    level: "Intermediate",
    description:
      "This course teaches how to use JavaScript for ethical hacking and cybersecurity tasks.",
    instructor: {
      name: "Firoz Mahmud",
      img: "img/firoz-mahmud.png",
      bio: "Instructor at Byte Capsule Ltd."
    },
    image: "img/javascript_for_hacking.jpg",
    syllabus: [
      {
        title: "Week 1",
        lessons: ["Basic Classes", "Introduction"]
      },
      {
        title: "Week 2",
        lessons: [
          "JavaScript Programming",
          "Print messages with JavaScript",
          "JavaScript Variables",
          "Type Conversion",
          "User Input in JavaScript"
        ]
      },
      {
        title: "Week 3",
        lessons: [
          "Conditional Statements (if-else)",
          "Loops in JavaScript",
          "Functions and Scope",
          "Error Handling"
        ]
      },
      {
        title: "Week 4",
        lessons: [
          "DOM Manipulation for Hacking",
          "Browser Exploits",
          "Client-Side Validation Bypass",
          "Payload Injection Techniques"
        ]
      },
      {
        title: "Week 5",
        lessons: [
          "Practical Projects",
          "Keylogger with JS",
          "XSS Attack Simulation",
          "Career Path in JavaScript Security"
        ]
      }
    ],
    formLink: "https://forms.gle/VaqD8wvtSYo1HEAP7"
  },

  {
    id: "10",
    title: "Motion Graphics",
    level: "Intermediate",
    description: "Master the art of visual storytelling with our Motion Graphics course. Learn to create stunning animations, dynamic text effects, and professional-grade video content using industry-standard tools.",
    instructor: {
      name: "Md. Faijul Karim",
      img: "img/faijul-karim.jpg",
      bio: "Cybersecurity Enthusiast, Ethical Hacker"
    },
    image: "img/motion_graphics.jpeg",
  syllabus: [
    {
      title: "Week 1",
      lessons: ["Introduction to Motion Graphics", "Principles of Animation", "Understanding Keyframes"]
    },
    {
      title: "Week 2",
      lessons: ["Working with Adobe After Effects", "Creating Text Animations", "Masking and Layering"]
    },
    {
      title: "Week 3",
      lessons: ["Shape Animations", "Logo Animation Projects", "Using Effects and Presets"]
    },
    {
      title: "Week 4",
      lessons: ["Audio Synchronization", "Motion Tracking", "Transitions and Visual Effects"]
    },
    {
      title: "Week 5",
      lessons: ["Final Project: Promotional Video", "Exporting and Optimization", "Freelancing Tips & Portfolio"]
    }
  ],
  formLink: "#"
  },
  {
  id: "11",
  title: "AI Script for Video Editing",
  discount: 40,
  type: "Advanced",
  original: 6000,
  instructor: {
      name: "Md. Faijul Karim",
      img: "img/faijul-karim.jpg",
      bio: "Cybersecurity Enthusiast, Ethical Hacker"
    },
  image: "img/ai_script_video_editing.jpeg",
  description:
    "Master the future of content creation with AI! This advanced-level course teaches you how to use artificial intelligence tools to generate scripts, automate editing, add subtitles, create text-to-video content, and build a professional video editing workflow enhanced by cutting-edge technology.",
  syllabus: [
    {
      title: "Week 1",
      lessons: ["Introduction to AI in Video Editing", "Future Scope of AI in Creative Media"]
    },
    {
      title: "Week 2",
      lessons: ["AI Tools Overview (ChatGPT, Descript, Synthesia, Pictory)", "Understanding AI Workflows"]
    },
    {
      title: "Week 3",
      lessons: ["Scriptwriting with ChatGPT and Jasper", "Scene Planning & Breakdown"]
    },
    {
      title: "Week 4",
      lessons: ["Voiceover Generation (ElevenLabs, Murf AI)", "Matching Voice with Scenes"]
    },
    {
      title: "Week 5",
      lessons: ["Text-to-Video Tools (Pictory, Lumen5)", "Slide-based Visuals Creation"]
    },
    {
      title: "Week 6",
      lessons: ["AI for Subtitles and Transcriptions", "Using YouTube Auto-captioning & Other Tools"]
    },
    {
      title: "Week 7",
      lessons: ["AI Editing with Descript", "Automated Cuts and Filler Word Removal"]
    },
    {
      title: "Week 8",
      lessons: ["Visual Enhancement using AI", "AI Upscaling and Color Grading"]
    },
    {
      title: "Week 9",
      lessons: ["AI for Music and Sound Design", "Generating Royalty-Free Audio"]
    },
    {
      title: "Week 10",
      lessons: ["AI-Based Video Summarization", "Auto Thumbnail and Title Generation"]
    },
    {
      title: "Week 11",
      lessons: ["Combining Multiple AI Tools in a Workflow", "Creating Full Videos with AI"]
    },
    {
      title: "Week 12",
      lessons: ["Shorts/Reels Creation Using AI", "Optimizing Content for Social Media"]
    },
    {
      title: "Week 13",
      lessons: ["Working with APIs for Automation", "Auto-Publish to YouTube/Instagram"]
    },
    {
      title: "Week 14",
      lessons: ["Freelancing with AI Video Editing", "How to Offer AI-Powered Services"]
    },
    {
      title: "Week 15",
      lessons: ["Final Project Submission", "Portfolio Review and Career Guidance"]
    }
  ],
  formLink: "#"
  }
];

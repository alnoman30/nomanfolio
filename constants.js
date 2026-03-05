export const METADATA = {
  author: "Abdullah Al Noman",
  title: "Abdullah Al Noman | Portfolio",
  description:
    "Abdullah Al Noman, a passionate Laravel developer dedicated to building modern, scalable, and high-performance web applications that deliver seamless user experiences and clean, maintainable code.",
  siteUrl: "https://alnoman.vercel.app/",
  twitterHandle: "@alnoman30hehe",
  instagramHandle: "@noman.hehe",
  keywords: [
    "Abdullah Al Noman",
    "Frontend Engineer",
    "laravel Developer",
    "Software Engineer",
    "Portfolio",
    "Nomanfolio",
    "Noman hehe",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dxcqb5aj5/image/upload/v1772097983/portfolio_-_Abdullah_Al_Noman_jtvbsr.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A skilled Laravel developer",
  "I build things for the web",
  "I create clean and modern applications",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: alnomaan30@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/abdullah-al-noman30/",
  },
  {
    name: "github",
    url: "https://github.com/alnoman30",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/noman.hehe/",
  },
  {
    name: "twitter",
    url: "https://x.com/alnoman30hehe",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "nodejs",
    "vite",
    "python",
    "php",
    "firebase",
    "figma",
  ],
  librariesAndFrameworks: [
    "laravel",
    "react",
    "tailwindcss",
    "bootstrap",
    "styledcomponents",
    "netlify",
    "vscode",
    "pycharm"
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "github",  ],
};

export const PROJECTS = [
  {
    name: "ClickVerse",
    imageKey: "clickverse",
    description: "Blog site Laravel 11 RestFull API with Admin panel 👊",
    gradient: ["#0F172A", "#1E293B"], // midnight blue to dark slate (electric/tech feel)
    url: "https://github.com/alnoman30/clcikverse-fullstack-laravel",
    tech: ["laravel", "mysql", "postman", "html"],
  },
  {
    name: "Laravel Task Manager",
    imageKey: "lvtask",
    description: "Built with Laravel 11 & Blade template ☝",
    gradient: ["#F4D03F", "#58D68D"], // warm gold to fresh green(cherry blossom inspired)
    url: "https://github.com/alnoman30/Laravel-Task-Manager-Project",
    tech: ["laravel", "mysql", "html", "css"],
  },
  {
    name: "Panto Furniture",
    imageKey: "panto",
    description: "Built with ReactJS + Tailwind CSS ✍🏻",
    gradient: ["#5D4037", "#8D6E63"], // dark brown to medium brown
    url: "https://alnoman-panto-design.vercel.app/",
    tech: ["tailwindcss", "react", "html", "css"],
  },
  {
    name: "Canvix Agency",
    imageKey: "canvix",
    description: "Build with ReactJS & Tailwind CSS 🤝",
    gradient: ["#FF9800", "#F57C00"], // warm orange to deep orange
    url: "https://alnoman-canvix-agency.vercel.app",
    tech: ["react", "tailwindcss", "javascript", "figma"],
  },
  {
    name: "Task Assistant",
    imageKey: "taskassistant",
    description: "ReactJS Task Assistant manager App 🎙",
    gradient: ["#6366F1", "#4F46E5"], // indigo to deep indigo
    url: "https://alnoman-task-assistant.vercel.app/",
    tech: ["javascript", "react", "css", "html"],
  },
];

export const WORK_CONTENTS = {
  EDUCATION: [
    {
      title: "Bachelor of Science (BSc)",
      description:
        "Daffodil International University (2020 - 2024)",
      description2:
      "I have completed BSc in Computer Science and Engineering (CSE), with skills in programming, software development, and emerging technologies.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Computer Science &amp; Engineering (CSE).
        </div>
      ),
    },
    {
      title: "Higher Secondary Centificate (HSC)",
      description:
        "Ideal College, Dhanmondi (2018-2019)",
      description2:
      "Successfully completed HSC with a focus on Science, demonstrating strong foundations in Physics, Chemistry, Biology, and Mathematics.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Depertment of Science
        </div>
      ),
    },
    {
      title: "Secondary School Certificate (SSC) ",
      description:
      "Ashrafabad High School, Dhaka (2017)",
      description2:
        "Successfully completed SSC with strong performance in Science, Mathematics, English, and Social Studies, demonstrating dedication and solid academic foundations.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Depertment of Science
        </div>
      ),
    },
  ],
  EXPERIENCE: [
    {
      title: "Getweb Inc.",
      description:
        "I work at this software-based IT company in Dhaka, Bangladesh, as a junior Web Developer and Sales Development Representative. I develop user-friendly web applications and engage with clients to drive growth, combining technical skills with coommunication and problem-solving",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Sales Development Representative
        </div>
      ),
    },
    {
      title: "Creative IT Institute",
      description:
        "Learn to build modern, mobile-friendly websites that adapt seamlessly to all devices. Master HTML, CSS, and responsive design techniques to create visually appealing and user-friendly web experiences.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Responsive Web Design
        </div>
      ),
    },
    {
      title: "Computer Programming Club (CPC) - DIU",
      description:
        "A voluntary organization aims to help students learn and apply through various activities",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Programming
        </div>
      ),
    },
    {
      title: "Prothom Alo Bondhushava - DIU",
      description:
        "A voluntary organization aimed at community service and social development",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Bondhushava
        </div>
      ),
    },
  ],
 
};

export const GTAG = "G-TX9WM23M0Q";

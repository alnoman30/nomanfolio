export const METADATA = {
  author: "Abdullah Al Noman",
  title: "Abdullah Al Noman | Portfolio",
  description:
    "Abdullah Al Noman, a passionate Laravel developer dedicated to building modern, scalable, and high-performance web applications that deliver seamless user experiences and clean, maintainable code.",
  siteUrl: "https://alnoman.vercel.app/",
  twitterHandle: "@alnoman30hehe",
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
    "sass",
    "nodejs",
    "webpack",
    "vite",
    "firebase",
    "figma",
    "tanstack",
  ],
  librariesAndFrameworks: [
    "expo",
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "chakra-ui",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "cursor", "sanity"],
};

export const PROJECTS = [
  {
    name: "NextBoss",
    imageKey: "nextboss",
    description: "Get hired through DMs not resumes 🤝",
    gradient: ["#FF69B4", "#FFB6C1"], // hot pink to light pink (cherry blossom inspired)
    // url: "https://nextboss.in",
    tech: ["typescript", "react", "expo", "react-query"],
  },
  {
    name: "ReadyAI",
    imageKey: "ready-ai",
    description: "AI that gets you interview ready 🎯",
    gradient: ["#F4D03F", "#58D68D"], // warm gold to fresh green
    url: "https://play.google.com/store/apps/details?id=com.app.readyai",
    tech: ["typescript", "react"],
  },
  {
    name: "Medium",
    imageKey: "medium",
    description: "Built with NextJS + Tailwind CSS ✍🏻",
    gradient: ["#FF9800", "#F57C00"], // warm orange to deep orange
    url: "https://shubh73-medium.vercel.app/",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity"],
  },
  {
    name: "Inshorts",
    imageKey: "inshorts",
    description: "Voice-enabled news using Alan AI 🎙",
    gradient: ["#6366F1", "#4F46E5"], // indigo to deep indigo
    url: "https://shubh73-inshorts.netlify.app/",
    tech: ["javascript", "react", "chakra-ui", "alan"],
  },
];

export const WORK_CONTENTS = {
  GRAPEVINE: [
    {
      title: "Grapevine",
      description:
        "Grapevine is your anonymous office chat, letting coworkers speak openly, share gossip and connect without filters. Building on that same belief, Round1 AI brings it to hiring using AI-driven interviews to replace guesswork with genuine and meaningful conversations.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Connect anonymously. Share freely.
        </div>
      ),
    },
    {
      title: "Pioneering",
      description:
        "Hiring was broken — manual, biased, and slow. We launched Round1 AI to fix that: authentic voice interviews, built-in bias checks and real-time insights. Today, it powers thousands of interviews each week, letting teams hire smarter, faster and fairer.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Senior Frontend Engineer
        </div>
      ),
    },
    {
      title: "Elevate",
      description:
        "The early web app struggled with slow performance and zero retention. I rebuilt it from the ground up with a sleek UI, faster load times and SEO-optimized. Then seeded a rich content layer to spark discovery. The payoff? 6x more impressions and 10x the organic installs all without ads, just momentum.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer
        </div>
      ),
    },
  ],
  DUKAAN: [
    {
      title: "Dukaan",
      description:
        "Dukaan is a platform that enables businesses to launch their online stores at ease.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Revolutionizing commerce, one click at a time
        </div>
      ),
    },
    {
      title: "Transformation",
      description:
        "Since 2023, the Dukaan Seller Dashboard struggled with technical issues and a broken user experience due to accumulated technical debt. Leading a team of two junior developers, we migrated the dashboard from CSR to SSR, redesigned the UI, and overhauled the codebase in the process. This resolved the technical debt and vastly improved the user experience, making it Dukaan's largest and most impactful migration.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Senior Frontend Engineer
        </div>
      ),
    },
    {
      title: "Evolution",
      description:
        "Recognizing the need for improved performance and user engagement, I spearheaded the migration of the Dukaan App from native to React-Native for iOS and Android platforms. This strategic move led to a X% enhancement in app performance and a Y% boost in user engagement, representing a significant milestone in the app's evolution.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer
        </div>
      ),
    },
    {
      title: "Optimization",
      description:
        "Leveraging user feedback and analytics, I improved the seller web dashboard design, reducing bounce rates. Simultaneously, I overhauled the build process, slashing bundle size and boosting overall performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer Intern
        </div>
      ),
    },
  ],
 
};

export const GTAG = "G-TX9WM23M0Q";

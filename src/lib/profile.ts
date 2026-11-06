export const profile = {
  name: "Christian Barbin",
  role: "Senior Full Stack Engineer",
  location: "Manila, Philippines",
  locationShort: "Manila, PH",
  email: "Christian.Barbin.9390@outlook.com",
  years: "8+",
  summary:
    "I design, build, and maintain web products across the full lifecycle — interfaces in React and Next.js, services in Node, and the AWS work that gets them to production. Eight years in, the work I care about is still the same: readable systems that solve a real business problem.",
  focus:
    "Recent work centers on Next.js and NestJS, with TypeScript on both sides of the stack. I have led front-end teams, cut waste out of data fetching, and shipped realtime features without letting the codebase get brittle.",
} as const;

export const contacts: readonly {
  label: string;
  value: string;
  href: string;
  icon: "mail" | "linkedin" | "github" | "discord" | "telegram" | "upwork";
}[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: "mail",
  },
  {
    label: "LinkedIn",
    value: "",
    href: "",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "SunShine8391",
    href: "https://github.com/SunShine8391",
    icon: "github",
  },
  {
    label: "Discord",
    value: "sunshine9390",
    href: "https://discord.com/users/sunshine9390",
    icon: "discord",
  },
  {
    label: "Telegram",
    value: "@Chris3180",
    href: "https://t.me/Chris3180",
    icon: "telegram",
  },
  {
    label: "Upwork",
    value: "View profile",
    href: "https://www.upwork.com/freelancers/~01f9fb861bb8aadd03",
    icon: "upwork",
  },
];

export const outcomes = [
  {
    figure: "70%",
    label: "Fewer network requests",
    detail: "TanStack Query caching removed a data-fetching bottleneck on a production CRM.",
  },
  {
    figure: "20%",
    label: "Faster CI/CD",
    detail: "AWS Lambda and CDK changes shortened the deployment path.",
  },
  {
    figure: "5",
    label: "Engineers led",
    detail: "Client-side lead on a React product, with the team shipping as one codebase.",
  },
  {
    figure: "10+",
    label: "Apps shipped",
    detail: "Front-end and back-end applications in React, Node, and TypeScript.",
  },
] as const;

export const experience = [
  {
    company: "TetraCare",
    role: "Senior Full Stack & AI Engineer",
    period: "Mar 2022 — Aug 2026",
    summary:
      "High-performance CRM work for Hotwire, covering the client, the API surface, and AWS delivery.",
    points: [
      "Built the CRM with current React and Next.js patterns, keeping the UI fast under real operational load.",
      "Cut network requests by up to 70% with TanStack Query caching.",
      "Led client-side development of a React application and a team of five front-end engineers.",
      "Added realtime conversations over WebSockets so decisions did not wait on a refresh.",
      "Shipped tested, reusable UI in Node.js, React, Next.js, Vue, HTML, and Tailwind CSS.",
      "Ran AWS deployments with Lambda and CDK and improved CI/CD speed by 20%.",
    ],
  },
  {
    company: "Located Lab",
    role: "Senior Full-Stack Engineer",
    period: "Jun 2020 — Feb 2022",
    summary:
      "Consumer product work in Node, JavaScript, and React, including a ground-up front-end architecture.",
    points: [
      "Shipped consumer features through pair programming in Node.js, JavaScript, and React.",
      "Designed a React architecture from scratch that made new features straightforward to add.",
      "Designed and developed more than ten front-end and back-end applications in React, Node, and TypeScript.",
      "Built the primary interactive map for community discovery, matched to Figma and held to a high visual bar.",
      "Used Sentry for realtime error tracking and kept production issues from piling up.",
    ],
  },
  {
    company: "NJPropertyRecords",
    role: "Full Stack Developer",
    period: "Nov 2019 — May 2020",
    summary:
      "Data-heavy product work: charts, generated forms, and a mobile pass over ModelCenter.",
    points: [
      "Integrated React components with D3 for interactive charts.",
      "Built a JSON-driven form system that generated forms and validated them on the client and the server.",
      "Shipped a responsive, mobile-optimized version of ModelCenter.",
      "Set up health monitoring and user-behavior analytics.",
    ],
  },
  {
    company: "Real Estate Startup",
    role: "Front-End Developer",
    period: "Apr 2019 — Nov 2019",
    summary:
      "UI systems for an early product, from design consistency through a React proof of concept.",
    points: [
      "Led UI development so design stayed consistent and cycles got shorter.",
      "Introduced a React proof of concept that sped up product decisions.",
      "Built React product tours for a feature that improved customer adoption by 20% and was tied to $1M in revenue.",
      "Tuned stored procedures and back-end queries, improving application performance by 46%.",
    ],
  },
] as const;

export const skillGroups = [
  {
    label: "Interface",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Vue.js",
      "Tailwind CSS",
      "HTML & CSS",
      "Responsive UI",
      "Material UI",
      "Styled Components",
      "Sass",
      "Redux",
      "MobX",
      "Storybook",
      "D3.js",
      "Gatsby",
    ],
  },
  {
    label: "Services",
    items: [
      "Node.js",
      "NestJS",
      "REST",
      "GraphQL",
      "Apollo",
      "Prisma",
      "WebSockets",
      "TanStack Query",
    ],
  },
  {
    label: "Data & cloud",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Supabase",
      "Firebase",
      "AWS Lambda",
      "AWS CDK",
      "AWS ECS",
      "Elastic Beanstalk",
      "GCP",
      "CI/CD",
    ],
  },
  {
    label: "Practice",
    items: ["GitHub", "Jira", "Sentry", "Figma", "WordPress", "Bootstrap"],
  },
] as const;

export const education = {
  school: "Ateneo de Manila University",
  degree: "Bachelor of Computer Science (BCompSc), Computer Science",
} as const;

export const certificate = {
  name: "HackerRank — JavaScript (Intermediate)",
  id: "63336ce4fdb9",
} as const;

export const languages = [
  { name: "English", level: "Full professional proficiency" },
] as const;

export const interests = ["Music", "Reading", "Basketball", "Travel", "Hiking"] as const;

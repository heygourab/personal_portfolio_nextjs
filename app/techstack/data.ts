export enum TechCategory {
  FRAMEWORKS = "Frameworks",
  DATABASE = "Database & ORM",
  AI = "AI Development",
  BACKEND = "Backend",
}

export interface TechItem {
  title: string;
  description: string;
}

export interface TechSection {
  category: TechCategory;
  items: TechItem[];
}

export const techStackData: TechSection[] = [
  {
    category: TechCategory.FRAMEWORKS,
    items: [
      {
        title: "Flutter",
        description:
          "My first “Hello World” in Flutter dates back to 2021 — and I haven't looked back since. From MVPs to production-ready apps, Flutter's cross-platform magic and UI flexibility have been my go-to for mobile development.",
      },

      {
        title: "Next.js",
        description:
          "I dived into Next.js in mid-2024 and instantly clicked with the framework. Server-side rendering, file-based routing, and the React ecosystem? Love at first deploy. It's now the backbone of all my web projects",
      },
    ],
  },
  {
    category: TechCategory.BACKEND,
    items: [
      {
        title: "Node.js",
        description:
          "For scalable backend services and APIs, Node.js is my weapon of choice. JavaScript end-to-end? Yes, please. It lets me move fast and build confidently on the server side.",
      },
    ],
  },

  {
    category: TechCategory.AI,
    items: [
      {
        title: "OpenAI",
        description: `I use the OpenAI API for all my AI-powered apps — from intelligent chatbots to text processors. It gives me the freedom to innovate without sweating infra or model tuning.`,
      },
      {
        title: "PyTorch",
        description:
          "When I want to get my hands dirty with neural networks, PyTorch is my lab. It’s where I build, train, and experiment with deep learning architectures.",
      },
    ],
  },
];

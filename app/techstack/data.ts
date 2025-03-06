export enum TechCategory {
  FRAMEWORKS = "Frameworks",
  STYLING = "Styling & Animation",
  DATABASE = "Database & ORM",
  AI = "AI",
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
        title: "Next.js",
        description:
          "I started Learning Next.js in June 2024 and since then I have been using it for all my web projects. I've fallen in love with this framework.",
      },
      {
        title: "Flutter",
        description:
          "I created my first Hello World app in the year of 2021. Since then I have been using it for all my mobile projects.",
      },
    ],
  },
  {
    category: TechCategory.STYLING,
    items: [
      {
        title: "Tailwind",
        description:
          "I craft beautiful user interfaces using Tailwind CSS, bringing life and polish to every project.",
      },
      {
        title: "Framer Motion",
        description:
          "I use Framer Motion for creating fluid animations and delightful transitions.",
      },
      {
        title: "GSAP",
        description:
          "I use GSAP for creating complex animations and interactive experiences.",
      },
    ],
  },
  {
    category: TechCategory.AI,
    items: [
      {
        title: "OpenAI",
        description: `I use OpenAi Api for all my Ai projects. It provides me with the
        flexibility to create Ai models without worrying about the
        infrastructure and scalability.`,
      },
      {
        title: "PyTorch",
        description:
          "I'm currently learning PyTorch for creating custom Ai models.",
      },
    ],
  },
];

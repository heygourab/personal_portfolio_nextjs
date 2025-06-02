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
          "My love affair with Flutter started in 2021. It's like having a magic wand that poofs out native apps for everywhere (iOS, Android, web) from one codebase. Saves me from arguing with platform-specific quirks. Mostly :)",
      },
      {
        title: "Next.js",
        description:
          "Hopped on the Next.js in '24 and haven't been able to jump off - it's too fast.. moon! Building websites feels like I've unlocked a cheat code with its speed and built-in SEO smooth. Server components are just the cherry on top of this 'not needing therapy anymore.",
      },
    ],
  },
  {
    category: TechCategory.BACKEND,
    items: [
      {
        title: "Node.js",
        description:
          "Node.js: Because who needs sleep when you can have JavaScript running your entire stack? It's my go-to for building backends that scale without making my server cry. Keeps me writing JS, keeps me sane (mostly).",
      },
    ],
  },

  {
    category: TechCategory.AI,
    items: [
      {
        title: "OpenAI",
        description: `Integrating AI? Black magic and more like.`,
      },
      {
        title: "PyTorch",
        description:
          "When I'm feeling brave and want to wrestle with tensors. DL Stuffs :)",
      },
    ],
  },
];

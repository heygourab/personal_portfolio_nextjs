export const TechItem = ({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) => (
  <>
    <h3 className="mt-3 text-lg font-semibold tracking-wide">
      {index}. {title}
    </h3>
    <p className="text-pretty tracking-wide text-sm font-medium ">
      {description}
    </p>
  </>
);

interface Items {
  title: string;
  description: string;
}

const frameworks: Items[] = [
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
];

const databases: Items[] = [
  {
    title: "Mongodb",
    description:
      "MongoDB is my go-to database for all my projects. I love the flexibility and scalability it provides.",
  },
  {
    title: "PostgreSQL",
    description:
      "I use PostgreSQL for projects that require ACID compliance and complex queries.",
  },
  {
    title: "Prisma (ORM)",
    description:
      "Prisma is my ORM of choice. It provides me a type-safe and intuitive way to interact with databases.",
  },
];

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold mt-12  tracking-wide">Tech stack</h1>
      <p className="mt-2 text-pretty tracking-wide text-sm">
        Here&apos;s where i spend most of time, Building, Testing and Learning.
      </p>
      <h2 className="mt-8 text-xl font-semibold tracking-wide underline underline-offset-2 decoration-1">
        Frameworks
      </h2>
      {frameworks.map((framework, index) => (
        <TechItem
          key={framework.title}
          index={index + 1}
          title={framework.title}
          description={framework.description}
        />
      ))}
      <h2 className="mt-8 text-xl font-semibold tracking-wide underline underline-offset-2 decoration-1">
        Styling & Animation
      </h2>
      <h3 className="mt-3 text-lg font-semibold">1. Tailwind</h3>
      <p className="text-pretty tracking-wide text-sm">
        I craft beautiful user interfaces using Tailwind CSS, bringing life and
        polish to every project.
      </p>
      <h3 className="mt-3 text-lg font-semibold">2. Framer Motion</h3>
      <p className="text-pretty tracking-wide text-sm">
        I use Framer Motion for creating fluid animations and delightful
        transitions.
      </p>
      <h3 className="mt-3 text-lg font-semibold">
        3. GSAP (GreenSock Animation Platform)
      </h3>
      <p className="text-pretty tracking-wide text-sm">
        I use GSAP for creating complex animations and interactive experiences.
      </p>

      <h2 className="mt-8 text-xl font-semibold tracking-wide underline underline-offset-2 decoration-1">
        Database & ORM
      </h2>
      {databases.map((database, index) => (
        <TechItem
          key={database.title}
          index={index + 1}
          title={database.title}
          description={database.description}
        />
      ))}

      <h2 className="mt-8 text-xl font-semibold tracking-wide underline underline-offset-2 decoration-1">
        Ai.
      </h2>
      <h3 className="mt-3 text-lg font-semibold">1. OpenAi Api</h3>
      <p className="text-pretty tracking-wide text-sm">
        I use OpenAi Api for all my Ai projects. It provides me with the
        flexibility to create Ai models without worrying about the
        infrastructure and scalability.
      </p>
    </>
  );
}

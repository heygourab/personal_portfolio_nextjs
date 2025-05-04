import { techStackData, TechItem as TechItemType } from "./data";

interface TechItemProps {
  title: string;
  description: string;
}

const TechItem = ({ title, description }: TechItemProps) => (
  <article className="mt-4">
    <h3 className="text-lg font-semibold tracking-wide">{title}</h3>
    <p className="mt-1 text-sm leading-relaxed font-medium tracking-wide text-[#151b21] md:text-base">
      {description}
    </p>
  </article>
);

interface TechSectionProps {
  category: string;
  items: TechItemType[];
}

const TechSection = ({ category, items }: TechSectionProps) => (
  <section className="mt-8">
    <h2 className="text-xl font-semibold tracking-wide underline decoration-1 underline-offset-2">
      {category}
    </h2>
    <div className="space-y-3">
      {items.map((item) => (
        <TechItem
          key={item.title}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  </section>
);

export default function Page() {
  return (
    <div className="space-y-6">
      <header className="mt-12">
        <h1 className="text-2xl font-bold tracking-wide">Tech Stack</h1>
        <p className="mt-2 max-w-prose text-sm leading-relaxed tracking-wide text-[#151b21] md:text-base">
          Here&apos;s where I spend most of my time — building, testing, and
          learning.
        </p>
      </header>

      {techStackData.map((section) => (
        <TechSection
          key={section.category}
          category={section.category}
          items={section.items}
        />
      ))}
    </div>
  );
}

import { techStackData, TechItem as TechItemType } from "./data";

const TechItem = ({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) => (
  <div className="mt-3">
    <h3 className="text-lg font-semibold tracking-wide">
      {index}. {title}
    </h3>
    <p className="text-sm font-medium tracking-wide text-pretty text-[#e0e0e0]">
      {description}
    </p>
  </div>
);

const TechSection = ({
  category,
  items,
}: {
  category: string;
  items: TechItemType[];
}) => (
  <section className="mt-8">
    <h2 className="text-xl font-semibold tracking-wide underline decoration-1 underline-offset-2">
      {category}
    </h2>
    {items.map((item, index) => (
      <TechItem
        key={item.title}
        index={index + 1}
        title={item.title}
        description={item.description}
      />
    ))}
  </section>
);

export default function Page() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="mt-12 text-3xl font-bold tracking-wide">Tech Stack</h1>
        <p className="mt-2 text-sm tracking-wide text-pretty">
          Here&apos;s where i spend most of time, Building, Testing and
          Learning.
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

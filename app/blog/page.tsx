import { AnimatedTitle } from "../components/AnimatedTitle";

export default function page() {
  return (
    <section>
      <h1 className="text-3xl font-bold mt-12 tracking-wide">
        <AnimatedTitle title={"My Blog"} />
      </h1>
    </section>
  );
}

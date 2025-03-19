import Link from "next/link";
import { AnimatedTextIntro } from "./components/AnimatedTextIntro";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl text-balance mt-8 md:mt-12 font-semibold tracking-wide">
        Gourab S.
      </h1>
      <AnimatedTextIntro />
      <ul className="mt-8 font-medium text-base underline list-disc list-inside underline-offset-2 space-y-2 decoration-1 text-[#e0e0e0]">
        <li>
          <Link href="/techstack">Tech Stack</Link>
        </li>
        <li>
          <Link href="/project">Projects</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <a href="http://github.com/heygourab">Github</a>
        </li>
      </ul>
    </>
  );
}

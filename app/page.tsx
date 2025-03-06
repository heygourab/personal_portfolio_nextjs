import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl mt-12 font-semibold  tracking-wide">Gourab S.</h1>
      <p className="mt-4  text-pretty tracking-wide text-sm">
        Hi! I&apos;m Gourab, a developer dedicated to crafting beautiful UIs and
        delivering better user experiences. I write clean, efficient, and
        maintainable code and love solving complex problems.
      </p>
      <ul className="mt-8 font-medium text-xl underline list-disc list-inside underline-offset-2 space-y-2 decoration-1">
        <li>
          <Link href="/techstack">Tech Stack</Link>
        </li>
        <li>
          <Link href="/project">Projects</Link>
        </li>
        <li>
          <Link href="/blog">Blogs</Link>
        </li>
        <li>
          <a href="http://github.com/heygourab">Github</a>
        </li>
        <li>
          <a href="https://www.upwork.com/freelancers/~01e5c2e730d8114ebc?mp_source=share">
            Hire me.
          </a>
        </li>
      </ul>
    </>
  );
}

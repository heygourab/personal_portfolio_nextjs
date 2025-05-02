import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import profilePicture from "../public/me.png";

const NavItem = ({
  href,
  label,
  external = false,
}: {
  href: string;
  label: string;
  external?: boolean;
}) => {
  const content = (
    <span className="group flex items-center">
      {label}
      <ArrowUpRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
    </span>
  );

  return (
    <li>
      {external ? (
        <a
          href={href}
          className="inline-flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      ) : (
        <Link href={href} className="inline-flex">
          {content}
        </Link>
      )}
    </li>
  );
};

export default function Home() {
  return (
    <>
      <div className="mt-8 flex flex-col md:mt-12 md:text-3xl">
        <Image
          src={profilePicture}
          alt={"Profile Picture of Gourab S."}
          width={128}
          height={128}
          fetchPriority="high"
          className="size-12 rounded-full border object-cover md:size-16"
        />

        <h1 className="mt-4 text-2xl font-semibold tracking-wide text-balance">
          Gourab S. – I Design, I Develop, I Deliver.
        </h1>
      </div>
      <p className="mt-4 text-sm text-pretty text-[#151b21] md:text-base">
        I started as a Flutter developer, developing clean and responsive mobile
        apps for both iOS & Android. Over time, I picked up both backend and
        frontend work, so now I handle a bit of everything. I also design UI/UX
        for web and mobile apps, making sure things look good and feel easy to
        use.
      </p>

      <ul className="mt-8 space-y-2 text-base font-semibold underline decoration-1 underline-offset-2">
        <NavItem href="/techstack" label="Tech Stack" />
        <NavItem href="/project" label="Projects" />
        <NavItem href="/blog" label="Blog" />
        <NavItem href="https://github.com/heygourab" label="Github" external />
      </ul>
    </>
  );
}

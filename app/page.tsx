import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import profilePicture from "../public/me.png";

interface NavItemProps {
  href: string;
  label: string;
  external?: boolean;
}

const NavItem = ({ href, label, external = false }: NavItemProps) => {
  const classes =
    "group inline-flex items-center underline underline-offset-2 decoration-1 font-semibold";

  const icon = (
    <ArrowUpRightIcon className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
  );

  return (
    <li>
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {label} {icon}
        </a>
      ) : (
        <Link href={href} className={classes}>
          {label} {icon}
        </Link>
      )}
    </li>
  );
};

export default function Home() {
  return (
    <>
      <div className="mt-8 flex flex-col items-start md:mt-12">
        <Image
          src={profilePicture}
          alt="Profile picture of Gourab S."
          width={80}
          height={80}
          priority
          className="size-16 rounded-full border object-cover md:size-20"
        />
        <h1 className="mt-4 text-2xl font-bold tracking-wide text-balance md:text-3xl">
          Gourab S. — I Design, I Develop, I Deliver.
        </h1>
      </div>
      <p className="mt-4 text-sm text-pretty text-[#151b21] md:text-base">
        I started as a Flutter developer, developing clean and responsive mobile
        apps for both iOS & Android. Over time, I picked up both backend and
        frontend work, so now I handle a bit of everything. I also design UI/UX
        for web and mobile apps, making sure things look good and feel easy to
        use.
      </p>
      <ul className="mt-8 space-y-2">
        <NavItem href="/techstack" label="Tech Stack" />
        <NavItem href="/project" label="Projects" />
        <NavItem href="/blog" label="Blog" />
        <NavItem href="https://github.com/heygourab" label="GitHub" external />
      </ul>
    </>
  );
}

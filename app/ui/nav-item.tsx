import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
  external?: boolean;
}

export const NavItem = ({ href, label, external = false }: NavItemProps) => {
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

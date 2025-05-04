import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="mt-12 flex flex-col items-start justify-between space-y-2 pb-4 text-base md:flex-row md:justify-center md:space-x-12">
      <div>
        <p className="font-semibold">Location:</p>
        <address className="group flex space-x-2 text-[#151b21] not-italic">
          <span>India</span>
          <a
            href="https://maps.app.goo.gl/8kz3z7h4qV8JqqmdA"
            className="flex cursor-pointer items-center hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>25°13&apos;12.00&quot; N 88°46&apos;12.00&quot; E</span>
            <ArrowUpRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </address>
      </div>
      <div>
        <p className="font-semibold">Contact:</p>
        <a
          href="mailto:gourabblg901@gmail.com"
          target="_blank"
          className="text-[#151b21] hover:underline"
        >
          gourabblg901@gmail.com
        </a>
      </div>
      <div>
        <p className="font-semibold">Copyright:</p>
        <p className="text-[#151b21]">
          &copy; {new Date().getFullYear()} Gourab S.
        </p>
      </div>
    </footer>
  );
}

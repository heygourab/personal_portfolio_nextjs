import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer
      className="mt-12 flex flex-col items-start space-y-2 pb-8 text-base md:flex-row md:justify-center md:space-x-12"
      aria-label="Site Footer"
    >
      <div>
        <p className="font-semibold">Location:</p>
        <address className="group flex space-x-2 text-sm text-neutral-800 not-italic">
          <span>India</span>
          <a
            href="https://maps.app.goo.gl/8kz3z7h4qV8JqqmdA"
            className="flex cursor-pointer items-center hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open location in Google Maps"
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
          className="text-sm text-neutral-800 hover:underline"
          aria-label="Send email to gourabblg901@gmail.com"
        >
          gourabblg901@gmail.com
        </a>
      </div>
      <div>
        <p className="font-semibold">Social:</p>
        <a
          href="https://x.com/heygourab"
          className="flex items-center gap-2"
          aria-label="Visit @heygourab on X (formerly Twitter)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1200"
            height="1227"
            fill="none"
            viewBox="0 0 1200 1227"
            className="size-4"
          >
            <path
              fill="#000"
              d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
            />
          </svg>
          <span className="text-sm text-neutral-800 hover:underline">
            @heygourab
          </span>
        </a>
      </div>
      <div>
        <p className="font-semibold">Copyright:</p>
        <p className="text-sm text-neutral-800">
          &copy; {new Date().getFullYear()} Gourab S.
        </p>
      </div>
    </footer>
  );
}

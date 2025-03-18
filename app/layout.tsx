import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import "./globals.css";

const generalSan = localFont({
  src: "../public/Satoshi-Regular.woff2",
});

export const metadata: Metadata = {
  title: "Gourab S. | Full-Stack Developer Portfolio",
  description:
    "Gourab S. – Full-Stack Developer specializing in Next.js, Flutter, and AI solutions. Explore my projects in web development, mobile apps, and RAG systems.",
  keywords: [
    "Gourab S.",
    "Gourab Sarkar",
    "Heygourab",
    "Full-Stack Developer",
    "Next.js Developer",
    "Flutter Developer",
    "AI Development",
    "Web Development",
    "Mobile App Development",
    "RAG Systems",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "UI/UX Design",
    "React",
    "Node.js",
  ],
  openGraph: {
    title: "Gourab S. | Full-Stack Developer Portfolio",
    description:
      "Discover Gourab S., a Full-Stack Developer skilled in Next.js, Flutter, and AI. View my portfolio of innovative web and mobile projects.",
    type: "website",
    url: "https://heygourab.vercel.app/",
    siteName: "Gourab S. Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gourab S. | Full-Stack Developer Portfolio",
    description:
      "Gourab S. – Full-Stack Developer with expertise in Next.js, Flutter, and AI. Check out my web and mobile projects!",
  },
  verification: {
    google: "ARWp3X0opOMDCC4wwObbbB6gRrIZemaA5gBcHyTQfyY",
  },
};

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row md:justify-center md:space-x-12  space-y-2 justify-between items-start mt-12 text-base pb-4">
      <div>
        <p className="font-semibold">Location:</p>
        <address className="not-italic text-[#e0e0e0] space-x-2 flex ">
          <span>India</span>
          <a
            href="https://maps.app.goo.gl/8kz3z7h4qV8JqqmdA"
            className="hover:underline flex items-center cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>25°13&apos;12.00&quot; N 88°46&apos;12.00&quot; E</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </address>
      </div>
      <div>
        <p className="font-semibold">Contact:</p>
        <a
          href="mailto:gourabblg901@gmail.com"
          target="_blank"
          className="hover:underline text-[#e0e0e0]"
        >
          gourabblg901@gmail.com
        </a>
      </div>
      <div>
        <p className="font-semibold">Copyright</p>
        <p className="text-[#e0e0e0]">
          &copy; {new Date().getFullYear()} Gourab S.
        </p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${generalSan.className} antialiased`}>
        <div className="flex flex-col justify-between p-8 pt-0 md:pt-8 min-h-screen">
          <main className="max-w-[65ch] w-full flex flex-col mx-auto">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

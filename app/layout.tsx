import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const generalSan = localFont({
  src: "../public/font/GeneralSans-Regular.woff2",
});

export const metadata: Metadata = {
  title: "Gourab S. | Full-Stack Developer Portfolio",
  description:
    "Gourab S. - Full-Stack Developer specializing in Flutter, Next.js, and AI solutions. Explore my projects in web development, mobile apps, and RAG systems.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${generalSan.className} antialiased`}>
        <div className="flex min-h-screen flex-col justify-between p-8 pt-0 md:pt-8">
          <main className="mx-auto flex w-full max-w-[72ch] flex-col">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

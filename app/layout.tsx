import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const generalSan = localFont({
  src: "../public/GeneralSans-Regular.woff2",
});

export const metadata: Metadata = {
  title: "Gourab S.",
  description:
    "Full-stack developer specializing in Next.js, Flutter, and AI solutions. Experienced in building modern web applications, mobile apps, and RAG systems. Expertise in MongoDB, PostgreSQL, and UI/UX development with Tailwind CSS.",
  keywords: [
    "Full-stack developer",
    "Next.js",
    "Flutter",
    "AI development",
    "MongoDB",
    "PostgreSQL",
    "UI/UX design",
    "Web development",
    "Mobile apps",
    "React",
    "Node.js",
    "Gourab S.",
    "Heygourab",
  ],
  openGraph: {
    title: "Gourab S.",
    description:
      "Full-stack developer specializing in Next.js, Flutter, and AI solutions. View my projects and technical expertise.",
    type: "website",
  },
};

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row md:justify-center md:space-x-8  space-y-2 justify-between items-start mt-12 text-base pb-4">
      <div>
        <p className="font-semibold">Location:</p>
        <address className="not-italic text-[#e0e0e0]">
          India{" "}
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

      <div className="space-y-1">
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
      <Head>
        <meta
          name="google-site-verification"
          content="e3Rtlfe9uOCHudYRqJXEef-DmnHrB6jFPBDZ8Re6O6o"
        />
      </Head>
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

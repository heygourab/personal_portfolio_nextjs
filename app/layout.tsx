import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const generalSan = localFont({
  src: "../public/GeneralSans-Regular.woff2",
});

export const metadata: Metadata = {
  title: "Gourab S. | Portfolio",
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
    title: "Gourab S. | Full-stack Developer Portfolio",
    description:
      "Full-stack developer specializing in Next.js, Flutter, and AI solutions. View my projects and technical expertise.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${generalSan.className} antialiased`}>
        <div className="flex flex-col justify-between p-8 pt-0 min-h-screen">
          <main className="max-w[60ch] w-full flex flex-col mx-auto">
            {children}
          </main>
          <footer className="flex  justify-between items-start mt-12 text-sm pb-4">
            <div className="space-y-1">
              <p className="font-medium">Location</p>
              <address className="not-italic flex flex-col">
                Balurghat, West Bengal
                <br />
                India 733101
                <a
                  href="https://maps.app.goo.gl/8kz3z7h4qV8JqqmdA"
                  className="mt-2 hover:underline cursor-pointer "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  25°13&apos;12.00&quot; N 88°46&apos;12.00&quot; E
                </a>
              </address>
            </div>
            <div className="space-y-4 text-right">
              <div className="space-y-1">
                <p className="font-medium">Contact:</p>
                <a
                  href="mailto:gourabblg901@gmail.com"
                  target="_blank"
                  className="hover:underline"
                >
                  gourabblg901@gmail.com
                </a>
              </div>
              <div className="space-y-1">
                <p className="font-medium">Copyright</p>
                <p>&copy; {new Date().getFullYear()} Gourab S.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

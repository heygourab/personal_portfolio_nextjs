import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${generalSan.className} antialiased`}>
        <div className="flex min-h-screen flex-col justify-between p-8 pt-0 md:pt-8">
          {children}
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

"use client";

import Image from "next/image";
import notFoundGif from "@/public/404.gif";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <Image
        src={notFoundGif}
        alt="Page not found"
        width={500}
        height={500}
        className="shadow-md"
        priority
      />
      <h1 className="text-xl font-bold">Page Not Found | 404</h1>
      <Link href="/" className="font-bold underline underline-offset-2">
        Go Back
      </Link>
    </div>
  );
}

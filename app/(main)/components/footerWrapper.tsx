"use client";
import { usePathname } from "next/navigation";
import Footer from "./footer";

export default function FooterWrapper() {
  const pathName = usePathname();

  if ([""].includes(pathName)) {
    return null;
  } else return <Footer />;
}

import Image from "next/image";
import profilePicture from "@/public/me.png";
import { NavItem } from "./ui/nav-item";
import * as motion from "motion/react-client";
import Intro from "./components/intro";

export default function Home() {
  return (
    <>
      <div className="mt-8 flex flex-col items-start md:mt-12">
        <motion.div
          drag
          dragElastic={0.35}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          className="size-16 cursor-grab overflow-clip rounded-full object-cover shadow-lg shadow-[#fd510d]/20 active:cursor-grabbing md:size-20"
        >
          <Image
            src={profilePicture}
            alt="Profile picture of Gourab S."
            width={80}
            height={80}
            priority
            className="pointer-events-none object-cover select-none"
            draggable={false}
          />
        </motion.div>
        <Intro />
      </div>
      <p className="mt-4 text-sm text-pretty text-neutral-700 md:text-base">
        I started as a Flutter developer, developing clean and responsive mobile
        apps for both iOS & Android. Over time, I picked up both backend and
        frontend work, so now I handle a bit of everything. I also design UI/UX
        for web and mobile apps, making sure things look good and feel easy to
        use.
      </p>
      <ul className="mt-8 space-y-2">
        <NavItem href="/techstack" label="Tech Stack" />
        <NavItem href="/project" label="Projects" />
        <NavItem href="/blog" label="Blog" />
        <NavItem href="https://heygourab.medium.com" label="Writing" external />
        <NavItem href="https://github.com/heygourab" label="GitHub" external />
      </ul>
    </>
  );
}

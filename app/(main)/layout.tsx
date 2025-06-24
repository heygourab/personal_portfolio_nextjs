import FooterWrapper from "./components/footerWrapper";
import * as motion from "motion/react-client";
import AnimatedPageTransition from "./components/animatedPageTransition";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(12px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="mx-auto flex min-h-screen w-full max-w-[84ch] flex-col justify-between"
    >
      <AnimatedPageTransition>{children}</AnimatedPageTransition>
      <FooterWrapper />
    </motion.div>
  );
}

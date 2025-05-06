import FooterWrapper from "./components/footerWrapper";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="mx-auto flex w-full max-w-[84ch] flex-col">
        {children}
      </main>
      <FooterWrapper />
    </>
  );
}

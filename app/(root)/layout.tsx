import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex gap-3 flex-col min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </section>
  );
}

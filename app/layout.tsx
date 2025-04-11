import type { Metadata } from "next";
import "./globals.css";
import { fontPrimary } from "./fonts";

export const metadata: Metadata = {
  title: "Swadhesi",
  description: "Swadhesi a kids wear brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontPrimary.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

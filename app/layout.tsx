import type { Metadata } from "next";
import { Comfortaa, Mulish,  } from "next/font/google";
import "./globals.css";

// Mulish

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

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
        className={`${mulish.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

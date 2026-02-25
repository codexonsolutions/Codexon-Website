import type { Metadata } from "next";
import { Raleway, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Codexon Solutions",
  description: "Crafting Future Software Today",
  icons: {
    icon: "/Codexon-Logo.svg",
    shortcut: "/Codexon-Logo.svg",
    apple: "/Codexon-Logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${plusJakartaSans.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

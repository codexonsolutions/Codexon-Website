import type { Metadata } from "next";
import AboutFeatured from "@/components/about/featured";

export const metadata: Metadata = {
  title: "About Our Vision",
  description:
    "Learn more about Codexon's mission, values, and our commitment to technical excellence.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutFeatured />
    </main>
  );
}

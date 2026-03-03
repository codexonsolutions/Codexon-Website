import type { Metadata } from "next";
import AboutFeatured from "@/components/about/featured";
import AboutWhoWeAre from "@/components/about/whoWeAre";
import AboutHowWeAid from "@/components/about/howWeAid";
import AboutProvideStats from "@/components/about/provideStats";

export const metadata: Metadata = {
  title: "About Our Vision",
  description:
    "Learn more about Codexon's mission, values, and our commitment to technical excellence.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutFeatured />
      <AboutWhoWeAre />
      <AboutHowWeAid />
      <AboutProvideStats />
    </main>
  );
}

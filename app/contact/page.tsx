import type { Metadata } from "next";
import ContactHero from "@/components/contact/contactHero";
import ContactDetailsPanel from "@/components/contact/contactDetailsPanel";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Connect with Codexon to discuss your software development needs and schedule a consultation.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactDetailsPanel />
    </main>
  );
}

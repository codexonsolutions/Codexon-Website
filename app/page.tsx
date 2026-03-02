import Featured from "@/components/home/featured";
import Intro from "@/components/home/intro";
import WhatWeDo from "@/components/home/whatwedo";
import AgileProcess from "@/components/home/agileProcess";
import Testimonials from "@/components/home/testimonials";
import Contact from "@/components/home/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transforming Ideas Into Software Success Stories",
  description: "Innovative software solutions to scale your business. We specialize in mobile, web, and cloud technologies.",
};

export default function Home() {
  return (
    <main>
      <Featured />
      <Intro />
      <WhatWeDo />
      <AgileProcess />
      <Testimonials />
      <Contact />
    </main>
  );
}

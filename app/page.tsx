import Featured from "@/components/home/featured";
import Intro from "@/components/home/intro";
import WhatWeDo from "@/components/home/whatwedo";
import AgileProcess from "@/components/home/agileProcess";
import Testimonials from "@/components/home/testimonials";
import CaseStudies from "@/components/home/caseStudies";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <main>
      <Featured />
      <Intro />
      <WhatWeDo />
      <AgileProcess />
      <Testimonials />
      <CaseStudies />
      <Contact />
    </main>
  );
}

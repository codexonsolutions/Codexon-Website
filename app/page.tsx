import Featured from "@/components/home/Featured";
import Intro from "@/components/home/Intro";
import WhatWeDo from "@/components/home/whatwedo";
import AgileProcess from "@/components/home/AgileProcess";
import Testimonials from "@/components/home/Testimonials";
import CaseStudies from "@/components/home/CaseStudies";
import Contact from "@/components/home/Contact";

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

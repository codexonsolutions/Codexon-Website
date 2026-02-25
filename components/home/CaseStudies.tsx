import Image from "next/image";
import Link from "next/link";

export default function CaseStudies() {
  return (
    <section className="w-full overflow-hidden bg-[#121214]">
      <div className="h-[4px] w-full bg-[#6b4df2]" />

      <div className="mx-auto w-[80%] py-10 md:py-14">
        <div className="relative grid grid-cols-1 items-end gap-8 lg:grid-cols-[0.42fr_1fr] lg:gap-12">
          <div className="relative ml-0 mr-auto w-full max-w-[260px] translate-x-0 lg:mx-0 lg:max-w-[285px] lg:-translate-y-14 lg:translate-x-40">
            <Image
              src="/project2.png"
              alt="Mobile product view"
              width={300}
              height={560}
              className="h-auto w-full rounded-[10px] object-cover opacity-80"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[10px] bg-black/22" />
          </div>

          <div className="relative ml-auto w-full max-w-[760px] translate-x-0 lg:mx-auto lg:translate-y-5 lg:translate-x-20">
            <Image
              src="/project1.png"
              alt="Web product dashboard"
              width={950}
              height={620}
              className="h-auto w-full rounded-[10px] object-cover opacity-85"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[10px] bg-black/25" />
          </div>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 lg:-translate-y-1">
            <Link
              href="#"
              className="pointer-events-auto inline-flex min-h-[56px] items-center justify-center rounded-full bg-white px-8 text-[clamp(1rem,2.8vw,1.75rem)] font-medium leading-none text-black shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:scale-[1.02] md:min-h-[72px] md:px-16"
              style={{ color: "#000000" }}
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

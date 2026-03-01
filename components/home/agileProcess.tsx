const processSteps = [
  { id: "01", title: "Planning" },
  { id: "02", title: "Defining the User Experience" },
  { id: "03", title: "The Technical Foundations" },
  { id: "04", title: "Implementation" },
  { id: "05", title: "Repeat the cycle" },
  { id: "06", title: "The Launch" },
];

function SparkIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 2.8L11.7 7L16 8.7L11.7 10.4L10 14.6L8.3 10.4L4 8.7L8.3 7L10 2.8Z" fill="currentColor" />
    </svg>
  );
}

export default function AgileProcess() {
  return (
    <section className="relative z-10 -mt-8 w-full overflow-hidden rounded-t-[28px] rounded-b-none bg-gradient-to-br from-[#0d2f8c] via-[#1266c6] to-[#18ace7] px-0 py-10 sm:-mt-10 sm:py-12 lg:-mt-14 lg:py-16">
      <div className="mx-auto w-[80%]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.55fr] lg:gap-12">
          <div className="flex flex-col justify-center pt-2">
            <span className="inline-flex w-fit items-center rounded-full border border-white/55 px-5 py-2 text-[14px] font-medium text-white">
              How We Work
            </span>
            <h2 className="mt-5 max-w-[12ch] font-display text-[clamp(2.1rem,4.8vw,4.3rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
              Our Agile Process
            </h2>
            <p className="mt-4 max-w-[30ch] text-[clamp(1rem,1.8vw,1.65rem)] leading-[1.3] text-white/95">
              We have our unique ways of building your ideas efficiently and quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.id}
                className="relative flex min-h-[170px] flex-col justify-between rounded-2xl border border-white/8 bg-[#2f5e9b]/45 p-4 text-white backdrop-blur-[1px] sm:min-h-[190px] lg:min-h-[220px]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[12px] font-medium text-white/70">{step.id}</span>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/12 text-white/85">
                    <SparkIcon />
                  </span>
                </div>
                <h3 className="max-w-[14ch] text-[clamp(1.55rem,2.1vw,2.05rem)] font-medium leading-[1.05] text-white">
                  {step.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

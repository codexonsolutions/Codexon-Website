import Image from "next/image";

export default function Intro() {
  return (
    <section className="w-full rounded-t-[28px] bg-[#e9e9ec] py-14 md:py-20">
      <div className="mx-auto w-[80%]">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.12fr_1fr]">
          <div className="relative min-h-[320px] overflow-hidden rounded-[20px] md:min-h-[430px]">
            <Image
              src="/images/design.png"
              alt="Design Develop Deploy"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
            <h2 className="absolute bottom-6 left-6 font-display text-[42px] font-semibold leading-[0.98] tracking-[-0.03em] text-white md:text-[58px]">
              Design
              <br />
              Develop
              <br />
              Deploy
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1.45fr_1fr]">
              <div className="rounded-[20px] bg-[#efeff1] p-6">
                <h3 className="font-display text-[34px] font-semibold leading-tight" style={{ color: "#000000" }}>
                  Web
                </h3>
                <p className="mt-2 max-w-[28ch] text-[14px] leading-[1.45] text-[#838993]">
                  We design and build high-performance web experiences that are fast, scalable, and easy to maintain.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#6b4df2] text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <path d="M3 12H21M12 3C14.5 5.4 14.5 18.6 12 21M12 3C9.5 5.4 9.5 18.6 12 21" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-white text-[#6b4df2]">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="5.2" y="2.2" width="9.6" height="15.6" rx="2.2" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M8.2 14.2H11.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-white text-[#6b4df2]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 18H18C20.7614 18 23 15.7614 23 13C23 10.3078 20.8752 8.11202 18.2099 8.00262C17.2395 5.66939 14.9408 4 12.25 4C8.76924 4 5.91484 6.77657 5.79012 10.2551C3.62462 10.6257 2 12.5128 2 14.75C2 17.2613 4.23871 19.5 6.75 19.5H7"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center rounded-[20px] bg-gradient-to-br from-[#7757ff] to-[#6742e9] p-6 text-center text-white">
                <p className="font-display text-[58px] font-semibold leading-[0.95]">25+</p>
                <p className="mt-2 text-[24px]">Projects</p>
                <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[13px] font-semibold text-[#5b41d6]">
                  Delivered
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#5b41d6] text-white">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.2 6.1L4.7 8.6L9.8 3.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-[20px] bg-[#f2f2f3] px-6 py-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#ede8fb] text-[#6b4df2]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="7.2" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M10 6V10.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <div className="flex items-baseline gap-3">
                <p className="font-display text-[44px] font-semibold leading-none tracking-[-0.03em] text-[#1d2631]">3+</p>
                <p className="text-[22px] font-medium leading-none text-[#1d2631]">Years of Experience</p>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-[20px] bg-[#f2f2f3] px-6 py-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#ede8fb] text-[#6b4df2]">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.2 9.2a2.2 2.2 0 1 0 0-4.4a2.2 2.2 0 0 0 0 4.4Z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M14.8 9.2a2.2 2.2 0 1 0 0-4.4a2.2 2.2 0 0 0 0 4.4Z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M3.8 16.8c.5-2.4 2.1-3.8 4.4-3.8s3.9 1.4 4.4 3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M9.4 16.8c.4-2.1 1.8-3.3 3.8-3.3c2 0 3.4 1.2 3.8 3.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <div className="flex items-baseline gap-3">
                <p className="font-display text-[44px] font-semibold leading-none tracking-[-0.03em] text-[#1d2631]">10+</p>
                <p className="text-[22px] font-medium leading-none text-[#1d2631]">Collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Testimonial = {
  name: string;
  role: string;
  headline: string;
  review: string;
  avatar: string;
  avatarBg: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Samad Khan",
    role: "Founder, RetailOps PK",
    headline: "Reliable Delivery for Fast-Moving Teams",
    review:
      "Codexon rebuilt our admin dashboard and checkout flow in under six weeks. Our team now ships updates faster, and support tickets dropped noticeably after launch.",
    avatar: "SK",
    avatarBg: "from-[#6d55ff] to-[#4b7eff]",
  },
  {
    name: "Muhammad Hajjaj",
    role: "Director, Hajjaj Logistics",
    headline: "Strong Engineering With Clear Handover",
    review:
      "Their developers understood our operations quickly and delivered a stable portal with role-based access. The handover was clean and documentation was complete.",
    avatar: "MH",
    avatarBg: "from-[#6f4dff] to-[#9a63ff]",
  },
  {
    name: "Abdul Jalil",
    role: "Product Lead, EduConnect",
    headline: "A Practical MVP Process That Works",
    review:
      "We needed a reliable MVP with room to scale. Codexon helped us prioritize features, met every milestone, and stayed responsive throughout the whole project.",
    avatar: "AJ",
    avatarBg: "from-[#3f7dff] to-[#2ab7ff]",
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Manager, Elevation Studio",
    headline: "Excellent Collaboration Across Time Zones",
    review:
      "Communication was excellent across time zones, and the final web app matched our design standards. Their QA process was one of the strongest we have worked with.",
    avatar: "ER",
    avatarBg: "from-[#ff7b7b] to-[#ffb26b]",
  },
  {
    name: "Daniel Rossi",
    role: "CTO, Swift Web Solutions",
    headline: "Legacy Modernization Without Disruption",
    review:
      "Codexon modernized our legacy modules without disrupting active clients. Performance improved right away, and the codebase is now much easier for our team to maintain.",
    avatar: "DR",
    avatarBg: "from-[#00a56a] to-[#36cf8c]",
  },
  {
    name: "Sophie Laurent",
    role: "Co-Founder, Vision Atelier",
    headline: "Structured Execution From Kickoff to Launch",
    review:
      "From kickoff to delivery, the process felt structured and professional. They translated business goals into practical technical decisions and delivered on schedule.",
    avatar: "SL",
    avatarBg: "from-[#5a68ff] to-[#57a8ff]",
  },
];

function QuoteIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.3 6.8H3.8C3.8 9.9 5.3 11.9 8 13V10.8C6.9 10.2 6.4 9.4 6.3 8.4V6.8ZM13.5 6.8H11C11 9.9 12.5 11.9 15.2 13V10.8C14.1 10.2 13.6 9.4 13.5 8.4V6.8Z" fill="currentColor" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full bg-[#e9e9ec] pb-20 pt-16 md:pb-24 md:pt-20">
      <div className="mx-auto w-[80%]">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-[#f3f3f4] px-5 py-2 text-[14px] font-medium text-black">
          <span>Why Choose Us</span>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ece6ff] text-[#6b4df2]">
            <svg width="10" height="10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2.7L11.8 7L16.3 7.4L12.9 10.4L14 14.8L10 12.4L6 14.8L7.1 10.4L3.7 7.4L8.2 7L10 2.7Z" fill="currentColor" />
            </svg>
          </span>
        </div>

        <h2
          className="mx-auto mt-8 max-w-[14ch] text-center font-display text-[clamp(2rem,4.2vw,4rem)] font-semibold leading-[1.1] tracking-[-0.03em] md:max-w-[22ch]"
          style={{ color: "#000000" }}
        >
          <span className="md:whitespace-nowrap">Glowing Testimonials</span>
          <br className="hidden md:block" />
          <span className="md:whitespace-nowrap">that Speak Volumes</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-2xl bg-[#f3f3f4] p-6">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6b4df2] text-white">
                <QuoteIcon />
              </span>
              <h3 className="mt-4 text-[28px] font-semibold leading-[1.2]" style={{ color: "#000000" }}>
                {item.headline}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.5] text-[#5f6672]">
                {item.review}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${item.avatarBg} text-[13px] font-semibold text-white`}
                >
                  {item.avatar}
                </span>
                <div>
                  <p className="text-[15px] font-semibold leading-tight text-black">{item.name}</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.04em] text-[#6e7380]">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

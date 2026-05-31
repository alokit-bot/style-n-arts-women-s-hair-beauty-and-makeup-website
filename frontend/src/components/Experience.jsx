import { ShieldCheck, MessageCircleHeart, Users, Accessibility } from "lucide-react";

const BLOCKS = [
  {
    icon: ShieldCheck,
    title: "Hygiene you can see",
    body:
      "Sanitised tools for every guest, single-use waxing strips and clean linens between appointments. The basics, done well.",
  },
  {
    icon: MessageCircleHeart,
    title: "Consultation first",
    body:
      "We listen before we lift the scissors. Tell us your routine, your event date, your budget — we tailor from there.",
  },
  {
    icon: Users,
    title: "Women-focused service",
    body:
      "A calm space made by women, for women. From students dropping in for threading to brides booking a full day.",
  },
  {
    icon: Accessibility,
    title: "Wheelchair accessible",
    body:
      "Step-free entrance and accessible parking near the salon. Tell us when you book — we’ll keep things easy.",
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="py-20 md:py-28 bg-[#FDF8F7]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059]">
            The Experience
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#222] mt-3">
            Quiet hands.{" "}
            <span className="italic text-[#9E3C55]">Clear standards.</span>
          </h2>
          <p className="text-[#4A4A4A] mt-5 leading-relaxed">
            A neighbourhood salon should feel like a second home — only with better
            lighting. Here’s what guests in HSR and ITI Layout tell us they love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {BLOCKS.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                data-testid={`experience-card-${i}`}
                className="group bg-white rounded-3xl p-7 border border-[#EEDDDE] hover:border-[#DAB6BC] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FDF8F7] border border-[#EEDDDE] flex items-center justify-center group-hover:bg-[#9E3C55] group-hover:border-[#9E3C55] transition-colors">
                  <Icon className="w-5 h-5 text-[#C5A059] group-hover:text-[#E8D3A2] transition-colors" />
                </div>
                <h3 className="font-display text-xl text-[#222] mt-6">
                  {b.title}
                </h3>
                <p className="text-sm text-[#4A4A4A] mt-3 leading-relaxed">
                  {b.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

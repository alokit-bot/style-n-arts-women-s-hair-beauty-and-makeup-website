import { Phone, Check, Heart } from "lucide-react";
import { BUSINESS } from "../lib/constants";

const INCLUDES = [
  "HD bridal base + airbrush option",
  "Eye makeup, lashes & contouring",
  "Hair styling — bun, curls or open",
  "Saree / lehenga draping assistance",
  "Touch-up kit for the ceremony",
  "Pre-bridal consultation included",
];

export const BridalHighlight = () => {
  return (
    <section
      id="bridal"
      data-testid="bridal-section"
      className="relative bg-[#9E3C55] text-[#FAF9F6] overflow-hidden"
    >
      <div className="absolute -top-24 -left-20 w-[360px] h-[360px] rounded-full bg-[#D89BA9]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-20 w-[420px] h-[420px] rounded-full bg-[#C5A059]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
        <div className="lg:col-span-6 lg:order-2">
          <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/29368877/pexels-photo-29368877.jpeg"
              alt="Bride in traditional Indian bridal makeup and jewellery"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:flex absolute lg:bottom-24 lg:right-6 bg-[#FAF9F6] text-[#222] rounded-2xl px-5 py-4 shadow-2xl border border-white/20 items-center gap-3">
            <Heart className="w-5 h-5 text-[#9E3C55] fill-[#9E3C55]" />
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.18em] text-[#4A4A4A]">
                Bridal package
              </p>
              <p className="font-display text-lg">from ₹12,999</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:order-1">
          <span className="text-xs uppercase tracking-[0.28em] text-[#E8D3A2]">
            Bridal & Party
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight mt-3 leading-[1.1]">
            For the day everyone <br className="hidden sm:block" />
            <span className="italic text-[#E8D3A2]">remembers your face.</span>
          </h2>
          <p className="mt-6 text-[#FAF9F6]/85 max-w-lg leading-relaxed">
            From sangeet sparkle to mandap-ready bridal looks, our makeup
            artists work with your skin tone, outfit and ceremony brief — so the
            photos look as good as the moment.
          </p>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {INCLUDES.map((line, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm"
                data-testid={`bridal-include-${i}`}
              >
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#E8D3A2]/20 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#E8D3A2]" />
                </span>
                <span className="text-[#FAF9F6]/95">{line}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3 items-center">
            <a
              href={BUSINESS.phoneTel}
              data-testid="bridal-call-cta"
              className="inline-flex items-center gap-2 bg-[#FAF9F6] text-[#9E3C55] hover:bg-[#E8D3A2] hover:text-[#222] transition-colors rounded-full px-7 py-3.5 text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              Book a consultation
            </a>
            <span className="text-xs text-[#FAF9F6]/70">
              Party makeup from ₹2,999 · Trials available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

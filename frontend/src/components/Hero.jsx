import { Phone, MapPin, Star, ArrowUpRight, Sparkles } from "lucide-react";
import { BUSINESS } from "../lib/constants";

export const Hero = () => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-[#F5E6E8]/70 to-transparent -z-10" />
      <div className="absolute -right-32 top-24 w-[520px] h-[520px] rounded-full bg-[#D89BA9]/20 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 reveal in">
          <div
            data-testid="hero-eyebrow"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur border border-[#EEDDDE] mb-7"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-xs uppercase tracking-[0.22em] text-[#4A4A4A]">
              HSR Layout · Bengaluru
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[68px] leading-[1.02] tracking-tight text-[#222] font-medium">
            A women-first salon, <br className="hidden sm:block" />
            <span className="italic text-[#9E3C55]">styled by skill</span>,<br className="hidden sm:block" />
            trusted by HSR.
          </h1>

          <p className="mt-7 max-w-xl text-[#4A4A4A] text-base md:text-lg leading-relaxed">
            Hair, skincare, nails and bridal makeup — done with patience, hygiene and
            real Bengaluru know-how. Walk in for a haircut, book ahead for the wedding day.
            Either way, you’re in good hands.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={BUSINESS.phoneTel}
              data-testid="hero-call-cta"
              className="group inline-flex items-center gap-2.5 bg-[#9E3C55] text-white hover:bg-[#8A3349] transition-all duration-300 rounded-full px-7 py-3.5 text-sm md:text-base font-medium shadow-md hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Call to Book
              <ArrowUpRight className="w-4 h-4 -ml-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              data-testid="hero-directions-cta"
              className="inline-flex items-center gap-2.5 border border-[#222] text-[#222] hover:bg-[#222] hover:text-[#FAF9F6] transition-all duration-300 rounded-full px-7 py-3.5 text-sm md:text-base font-medium"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm">
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              data-testid="hero-rating-link"
              className="flex items-center gap-2 text-[#222] hover:text-[#9E3C55] transition-colors"
            >
              <div className="flex items-center gap-0.5 text-[#C5A059]">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-medium">{BUSINESS.rating}</span>
              <span className="text-[#4A4A4A]">· {BUSINESS.reviews} Google reviews</span>
            </a>
            <a
              href={BUSINESS.phoneTel}
              data-testid="hero-phone-inline"
              className="hidden sm:inline text-[#4A4A4A] hover:text-[#9E3C55] transition-colors"
            >
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative reveal in">
          <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl shadow-[#9E3C55]/15">
            <img
              src="https://images.pexels.com/photos/3993290/pexels-photo-3993290.jpeg"
              alt="Hair stylist working in a modern salon"
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          <div
            data-testid="hero-floating-rating-badge"
            className="absolute -left-4 sm:-left-8 bottom-6 bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-[#EEDDDE] px-5 py-4 flex items-center gap-4"
          >
            <div className="flex flex-col leading-none">
              <span className="font-display text-3xl text-[#222]">{BUSINESS.rating}</span>
              <div className="flex items-center gap-0.5 text-[#C5A059] mt-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-[#EEDDDE]" />
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.18em] text-[#4A4A4A]">Google</p>
              <p className="text-sm text-[#222] font-medium mt-0.5">{BUSINESS.reviews} Reviews</p>
            </div>
          </div>

          <div className="hidden md:flex absolute -top-4 -right-2 bg-[#9E3C55] text-white text-[11px] uppercase tracking-[0.2em] rounded-full px-4 py-2 shadow-lg">
            Open · till 9:30 PM
          </div>
        </div>
      </div>
    </section>
  );
};

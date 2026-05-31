import { Phone, MapPin, ArrowUpRight } from "lucide-react";
import { BUSINESS } from "../lib/constants";

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#1a1416] text-[#FAF9F6] relative overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#9E3C55]/25 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <p className="font-display text-4xl md:text-5xl leading-none">
              Style <span className="italic text-[#E8D3A2]">n</span> Arts
            </p>
            <p className="text-xs uppercase tracking-[0.28em] text-[#FAF9F6]/65 mt-3">
              Women's Hair · Beauty · Makeup
            </p>
            <p className="text-[#FAF9F6]/75 mt-6 max-w-md text-sm leading-relaxed">
              A women-first beauty salon in HSR Layout, Bengaluru — rated{" "}
              {BUSINESS.rating}★ by {BUSINESS.reviews} guests on Google.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.22em] text-[#E8D3A2] mb-4">
              Visit
            </p>
            <p className="text-sm leading-relaxed text-[#FAF9F6]/85">
              {BUSINESS.addressLines.map((l, i) => (
                <span key={i}>
                  {l}
                  <br />
                </span>
              ))}
            </p>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              data-testid="footer-maps-link"
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-[#E8D3A2] hover:text-white transition-colors"
            >
              <MapPin className="w-4 h-4" /> Open in Google Maps
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.22em] text-[#E8D3A2] mb-4">
              Get in touch
            </p>
            <a
              href={BUSINESS.phoneTel}
              data-testid="footer-call-link"
              className="inline-flex items-center gap-2 text-base text-[#FAF9F6] hover:text-[#E8D3A2] transition-colors"
            >
              <Phone className="w-4 h-4" /> {BUSINESS.phoneDisplay}
            </a>
            <p className="text-sm text-[#FAF9F6]/75 mt-4">
              {BUSINESS.hours}
            </p>
            <a
              href={BUSINESS.phoneTel}
              data-testid="footer-call-cta"
              className="mt-6 inline-flex items-center gap-2 bg-[#9E3C55] hover:bg-[#8A3349] transition-colors rounded-full px-5 py-2.5 text-sm font-medium"
            >
              <Phone className="w-4 h-4" /> Call to Book
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between text-xs text-[#FAF9F6]/60">
          <p>© {new Date().getFullYear()} Style n Arts. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#bridal" className="hover:text-white transition-colors">
              Bridal
            </a>
            <a href="#gallery" className="hover:text-white transition-colors">
              Gallery
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

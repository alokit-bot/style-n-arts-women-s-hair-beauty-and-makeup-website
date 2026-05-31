import { Phone, MapPin, Clock, ArrowUpRight, Navigation } from "lucide-react";
import { BUSINESS } from "../lib/constants";

const HOURS = [
  { day: "Mon — Sat", time: "10:00 AM — 9:30 PM" },
  { day: "Sunday", time: "10:00 AM — 9:30 PM" },
];

export const Contact = () => {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-20 md:py-28 bg-[#FAF9F6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-5">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059]">
            Visit Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#222] mt-3 leading-[1.1]">
            Pop in to the salon in{" "}
            <span className="italic text-[#9E3C55]">HSR Layout.</span>
          </h2>
          <p className="text-[#4A4A4A] mt-5 leading-relaxed max-w-md">
            Easy to spot, easier to park near. We’re right next to ITI Layout
            Park — first floor, with a wheelchair-accessible entrance.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-[#FDF8F7] border border-[#EEDDDE] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#9E3C55]" />
              </div>
              <div className="leading-relaxed">
                <p className="text-xs uppercase tracking-[0.18em] text-[#4A4A4A]">
                  Address
                </p>
                <p className="text-[#222] mt-1 text-sm md:text-base">
                  {BUSINESS.addressLines.map((l, i) => (
                    <span key={i}>
                      {l}
                      <br />
                    </span>
                  ))}
                </p>
                <p className="text-xs text-[#4A4A4A] mt-2 italic">
                  {BUSINESS.landmark}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-[#FDF8F7] border border-[#EEDDDE] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#9E3C55]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#4A4A4A]">
                  Phone
                </p>
                <a
                  href={BUSINESS.phoneTel}
                  data-testid="contact-phone-link"
                  className="text-[#222] hover:text-[#9E3C55] mt-1 inline-flex items-center gap-1 transition-colors"
                >
                  {BUSINESS.phoneDisplay}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-[#FDF8F7] border border-[#EEDDDE] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#9E3C55]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#4A4A4A]">
                  Hours
                </p>
                <ul className="mt-1 text-sm text-[#222] space-y-0.5">
                  {HOURS.map((h) => (
                    <li
                      key={h.day}
                      className="flex gap-3 justify-between max-w-xs"
                    >
                      <span>{h.day}</span>
                      <span className="text-[#4A4A4A]">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#9E3C55] mt-2 font-medium">
                  Open today · {BUSINESS.hoursShort}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={BUSINESS.phoneTel}
              data-testid="contact-call-cta"
              className="inline-flex items-center gap-2 bg-[#9E3C55] text-white hover:bg-[#8A3349] transition-colors rounded-full px-6 py-3 text-sm font-medium"
            >
              <Phone className="w-4 h-4" /> Call to Book
            </a>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              data-testid="contact-directions-cta"
              className="inline-flex items-center gap-2 border border-[#222] text-[#222] hover:bg-[#222] hover:text-[#FAF9F6] transition-colors rounded-full px-6 py-3 text-sm font-medium"
            >
              <Navigation className="w-4 h-4" /> Get Directions
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noreferrer noopener"
            data-testid="contact-map-card"
            className="block relative rounded-[28px] overflow-hidden border border-[#EEDDDE] shadow-lg group"
          >
            <iframe
              title="Style n Arts location on Google Maps"
              src="https://www.google.com/maps?q=Style+n+Arts+HSR+Layout+Bengaluru&output=embed"
              className="w-full h-[460px] md:h-[560px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between bg-white/95 backdrop-blur rounded-2xl px-5 py-4 border border-[#EEDDDE] shadow-md pointer-events-none">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#4A4A4A]">
                  Style n Arts
                </p>
                <p className="text-sm text-[#222] mt-0.5">
                  {BUSINESS.addressShort}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[#9E3C55] text-sm font-medium">
                Open in Maps
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

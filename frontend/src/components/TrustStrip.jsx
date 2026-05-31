import { Star, Clock, MapPin, Award } from "lucide-react";
import { BUSINESS } from "../lib/constants";

const ITEMS = [
  {
    icon: Star,
    title: `${BUSINESS.rating} ★ rated`,
    subtitle: `${BUSINESS.reviews} Google reviews`,
  },
  {
    icon: Award,
    title: `${BUSINESS.yearsInBusiness} years`,
    subtitle: "Trusted neighbourhood salon",
  },
  {
    icon: MapPin,
    title: "HSR Layout",
    subtitle: "Near ITI Layout Park",
  },
  {
    icon: Clock,
    title: BUSINESS.hoursShort,
    subtitle: "Walk-ins welcome",
  },
];

export const TrustStrip = () => {
  return (
    <section
      data-testid="trust-strip"
      className="bg-[#FDF8F7] border-y border-[#EEDDDE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          {ITEMS.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={i}
                data-testid={`trust-item-${i}`}
                className="flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-full bg-white border border-[#EEDDDE] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div className="leading-tight">
                  <p className="font-display text-lg md:text-xl text-[#222]">
                    {it.title}
                  </p>
                  <p className="text-xs md:text-sm text-[#4A4A4A] mt-1">
                    {it.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

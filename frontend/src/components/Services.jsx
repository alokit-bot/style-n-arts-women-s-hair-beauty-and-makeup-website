import { Phone } from "lucide-react";
import { SERVICE_GROUPS, BUSINESS } from "../lib/constants";

const ServiceGroup = ({ group }) => (
  <div
    data-testid={`service-group-${group.id}`}
    className="bg-white rounded-3xl p-7 md:p-10 border border-[#EEDDDE] shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="flex items-baseline justify-between gap-3 mb-2">
      <h3 className="font-display text-2xl md:text-3xl text-[#222]">
        {group.title}
      </h3>
      <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059]">
        Menu
      </span>
    </div>
    <p className="text-sm text-[#4A4A4A] mb-7">{group.subtitle}</p>

    <ul className="space-y-4">
      {group.items.map((it) => (
        <li
          key={it.name}
          className="price-row text-[15px] md:text-base"
          data-testid={`service-item-${group.id}-${it.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
        >
          <span className="text-[#222]">{it.name}</span>
          <span className="dots" aria-hidden="true" />
          <span className="font-medium text-[#9E3C55] whitespace-nowrap">
            {it.price}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export const Services = () => {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059]">
              The Menu
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#222] mt-3">
              Honest pricing,
              <span className="italic text-[#9E3C55]"> no surprises.</span>
            </h2>
            <p className="text-[#4A4A4A] mt-5 leading-relaxed">
              Every service starts with a short consultation so we get the look
              and the budget right. Prices in INR — call us if you’d like a
              personalised package.
            </p>
          </div>
          <a
            href={BUSINESS.phoneTel}
            data-testid="services-call-cta"
            className="inline-flex items-center gap-2 self-start md:self-auto bg-[#222] text-white hover:bg-[#9E3C55] transition-colors rounded-full px-6 py-3 text-sm font-medium"
          >
            <Phone className="w-4 h-4" />
            Ask for a quote
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICE_GROUPS.map((g) => (
            <ServiceGroup key={g.id} group={g} />
          ))}
        </div>

        <p className="text-xs text-[#4A4A4A] mt-8 max-w-2xl">
          * Prices may vary based on hair length, product choice and add-ons.
          We’ll always share the final price before we begin.
        </p>
      </div>
    </section>
  );
};

import { Phone, MapPin, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { BUSINESS } from "../lib/constants";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Bridal", href: "#bridal" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#FAF9F6]/85 border-b border-[#EEDDDE]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          data-testid="header-logo"
          className="flex flex-col leading-none"
        >
          <span className="font-display text-xl md:text-2xl text-[#222] tracking-tight">
            Style <span className="italic text-[#9E3C55]">n</span> Arts
          </span>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#4A4A4A] mt-0.5">
            Hair · Beauty · Makeup
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="link-underline text-sm tracking-wide text-[#222] hover:text-[#9E3C55] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noreferrer noopener"
            data-testid="header-directions-btn"
            className="hidden lg:inline-flex items-center gap-2 text-sm text-[#222] hover:text-[#9E3C55] transition-colors px-3 py-2"
          >
            <MapPin className="w-4 h-4" />
            Directions
          </a>
          <a
            href={BUSINESS.phoneTel}
            data-testid="header-call-btn"
            className="inline-flex items-center gap-2 bg-[#9E3C55] text-white hover:bg-[#8A3349] transition-all duration-300 rounded-full px-5 py-2.5 text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            Call to Book
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
          className="md:hidden p-2 text-[#222]"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="md:hidden bg-[#FAF9F6] border-t border-[#EEDDDE]"
        >
          <div className="px-4 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                className="py-3 text-base text-[#222] border-b border-[#EEDDDE]"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 mt-5">
              <a
                href={BUSINESS.phoneTel}
                data-testid="mobile-call-btn"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#9E3C55] text-white rounded-full px-4 py-3 text-sm font-medium"
              >
                <Phone className="w-4 h-4" /> Call
              </a>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                data-testid="mobile-directions-btn"
                className="flex-1 inline-flex items-center justify-center gap-2 border border-[#9E3C55] text-[#9E3C55] rounded-full px-4 py-3 text-sm font-medium"
              >
                <MapPin className="w-4 h-4" /> Directions
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

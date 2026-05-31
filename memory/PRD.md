# Style n Arts — Women's Hair, Beauty & Makeup

## Original Problem Statement
Build a complete, polished, frontend-only single-page website for "Style n Arts Women's hair, Beauty and Makeup", a women-focused beauty salon in HSR Layout, Bengaluru. Frontend-only (no backend, no DB). tel: links for calls, Google Maps URL for directions, INR pricing.

## Architecture
- **Stack:** React (CRA + craco) + Tailwind CSS, single-page site.
- **No backend used.** Backend folder untouched.
- **Routing:** Single page with hash anchors (`#services`, `#bridal`, `#experience`, `#gallery`, `#contact`).
- **Fonts:** Playfair Display (display) + Manrope (body) loaded from Google Fonts via `public/index.html`.

## File Layout
- `frontend/src/App.js` — composes sections, mounts IntersectionObserver for scroll reveal.
- `frontend/src/lib/constants.js` — business facts, phone, address, maps URL, service menu.
- `frontend/src/components/Header.jsx` — sticky glass header, anchors, call CTA, mobile menu.
- `frontend/src/components/Hero.jsx` — split hero with rating badge, dual CTAs.
- `frontend/src/components/TrustStrip.jsx` — 4 KPIs (4.9★, 7+ yrs, HSR, open till 9:30).
- `frontend/src/components/Services.jsx` — 4 menu cards with dotted price leaders, INR.
- `frontend/src/components/BridalHighlight.jsx` — deep-rose section with bridal image + inclusions.
- `frontend/src/components/Experience.jsx` — bento of hygiene / consult / women-focused / accessible.
- `frontend/src/components/Gallery.jsx` — asymmetric image grid with caption chips.
- `frontend/src/components/Contact.jsx` — address / phone / hours + embedded Google Maps card.
- `frontend/src/components/Footer.jsx` — dark charcoal footer with phone & maps link.
- `frontend/src/index.css` — design tokens, fonts, scroll reveal, dotted-price utility.

## Brand
- Palette: deep rose `#9E3C55`, blush `#FDF8F7`, ivory `#FAF9F6`, gold accents `#C5A059`, charcoal text `#222`.
- Typography: Playfair Display headings + Manrope body.

## Business Facts (locked, do not invent extras)
- Phone display: `+91 77607 11425`; tel: `tel:+917760711425`.
- Maps URL: pre-supplied Google Maps place URL used in every directions CTA.
- Rating: 4.9★ · 1,700+ Google reviews · 7+ years · Open till 9:30 PM.
- Address: 308, 1st Floor, 5th Main Rd, ITI Layout, Hosapalaya, HSR Layout, Bengaluru 560068.

## Implemented (Dec 2025)
- Sticky header (glass on scroll), nav anchors, Call + Directions CTAs, mobile menu.
- Hero with rating badge, dual CTAs (tel + maps), Indian salon imagery.
- Trust strip (4 KPIs).
- Service menu with 13 items across Hair / Skin / Hands & Feet / Makeup, INR prices, dotted leaders.
- Bridal & party highlight with inclusions list and price-from badge.
- Experience bento (hygiene, consultation, women-focused, wheelchair accessibility).
- Asymmetric gallery grid (5 images, hover scale).
- Contact section with full address, hours table, embedded Google Maps card.
- Dark footer with phone, address, maps link, copyright.
- All CTAs use `tel:+917760711425` or the official Google Maps URL.
- All interactive elements carry `data-testid` attributes.
- Scroll-reveal animation, mobile-first responsive layout.

## Constraints Respected
- No backend, no API calls (axios import removed).
- No claims of staff names, awards, or services not provided.
- No mention of Nextahalli / Alokit / Avi / AI / generated / demo.
- INR pricing throughout; phone formatted as `+91 77607 11425`.

## Backlog / Next
- P1: Add WhatsApp CTA (`https://wa.me/917760711425`) alongside Call buttons.
- P1: Real photo gallery from the salon (replace stock).
- P2: Testimonials carousel pulling recent Google review snippets (manually curated).
- P2: Booking form via Fresha deep link.
- P2: Light SEO schema.org `LocalBusiness` JSON-LD in `index.html`.

const IMAGES = [
  {
    src: "https://images.pexels.com/photos/30809480/pexels-photo-30809480.jpeg",
    alt: "Indian bridal glam — full hair and makeup",
    span: "md:col-span-6 md:row-span-2 aspect-[4/5]",
    label: "Bridal glam",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df",
    alt: "Hair styling and blow dry",
    span: "md:col-span-3 aspect-square",
    label: "Hair styling",
  },
  {
    src: "https://images.unsplash.com/photo-1626383137804-ff908d2753a2",
    alt: "Modern beauty salon interior",
    span: "md:col-span-3 aspect-square",
    label: "Salon interior",
  },
  {
    src: "https://images.pexels.com/photos/696285/pexels-photo-696285.jpeg",
    alt: "Hair colour and treatment service",
    span: "md:col-span-3 aspect-[4/5]",
    label: "Hair colour",
  },
  {
    src: "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg",
    alt: "Facial and skincare treatment",
    span: "md:col-span-3 aspect-[4/5]",
    label: "Skincare",
  },
];

export const Gallery = () => {
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059]">
              In the chair
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#222] mt-3">
              A peek at our <span className="italic text-[#9E3C55]">work</span>.
            </h2>
          </div>
          <p className="text-sm text-[#4A4A4A] max-w-sm">
            Real services, real guests, real Bengaluru lighting. No filters needed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5 auto-rows-min">
          {IMAGES.map((img, i) => (
            <figure
              key={i}
              data-testid={`gallery-item-${i}`}
              className={`relative overflow-hidden rounded-2xl md:rounded-3xl border border-[#EEDDDE] group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-90" />
              <figcaption className="absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.22em] text-[#FAF9F6] bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                {img.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

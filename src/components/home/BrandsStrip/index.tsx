const brands = [
  "Dulux", "Jotun", "Asian Paints", "Berger", "Grohe", "Kohler",
  "TOTO", "Hansgrohe", "Legrand", "Schneider", "Philips", "Havells",
  "Bosch", "DeWalt", "Hilti", "Stanley", "Geberit", "Marazzi",
  "RAK Ceramics", "Porcelanosa",
];

export default function BrandsStrip() {
  const doubled = [...brands, ...brands];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          Trusted Brands We Carry
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee gap-6 w-max">
          {doubled.map((brand, i) => (
            <div
              key={i}
              className="flex-none px-6 py-3 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-semibold text-gray-700 whitespace-nowrap select-none"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

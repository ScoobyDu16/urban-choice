import { useCallback, useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  children: ReactNode;
  opts?: EmblaOptionsType;
  autoplay?: boolean;
  autoplayDelay?: number;
  showArrows?: boolean;
  showDots?: boolean;
  arrowVariant?: "overlay" | "outside";
  className?: string;
}

export default function Carousel({
  children,
  opts,
  autoplay = false,
  autoplayDelay = 4000,
  showArrows = true,
  showDots = false,
  arrowVariant = "overlay",
  className = "",
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...opts });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [paused, setPaused] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    if (!autoplay || !emblaApi || paused) return;
    const timer = setInterval(() => emblaApi.scrollNext(), autoplayDelay);
    return () => clearInterval(timer);
  }, [emblaApi, autoplay, autoplayDelay, paused]);

  const arrowBase =
    "absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer";
  const arrowOverlay =
    "bg-black/40 hover:bg-black/70 text-white w-10 h-10 md:w-12 md:h-12 backdrop-blur-sm";
  const arrowOutside =
    "bg-white hover:bg-orange-500 hover:text-white text-gray-700 shadow-lg w-10 h-10 border border-gray-200";

  const arrowCls = `${arrowBase} ${arrowVariant === "overlay" ? arrowOverlay : arrowOutside}`;

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex touch-pan-y">{children}</div>
      </div>

      {showArrows && (
        <>
          <button
            onClick={scrollPrev}
            aria-label="Previous slide"
            className={`${arrowCls} ${arrowVariant === "overlay" ? "left-3 md:left-5" : "-left-5"}`}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next slide"
            className={`${arrowCls} ${arrowVariant === "overlay" ? "right-3 md:right-5" : "-right-5"}`}
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {showDots && scrollSnaps.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === selectedIndex
                  ? "w-6 h-2 bg-orange-500"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

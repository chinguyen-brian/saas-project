'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type PromoCarouselProps = {
  images?: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
};

export default function PromoCarousel({
  images = ['/img/sale-1.png', '/img/sale-2.png'],
  autoPlay = true,
  autoPlayInterval = 5000,
}: PromoCarouselProps) {
  const count = images.length;
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goPrev = () => setIndex((i) => (i - 1 + count) % count);
  const goNext = () => setIndex((i) => (i + 1) % count);
  const goTo = (i: number) => setIndex(((i % count) + count) % count);

  useEffect(() => {
    if (!autoPlay || isPaused) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % count),
      autoPlayInterval
    );
    return () => clearInterval(t);
  }, [autoPlay, autoPlayInterval, isPaused, count]);


  return (
    <div
      className="w-full relative select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Carousel container 19:6 ratio */}
      <div
        className="relative w-full overflow-hidden rounded-2xl"
        style={{ paddingTop: '25%' }}
      >
        <div
          className="flex absolute top-0 left-0 h-full transition-transform duration-500 ease-in-out"
          style={{
            width: `100%`,
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {images.map((src, i) => (
            <div key={i} className="shrink-0 w-full h-full relative">
              <Image
                src={src}
                alt={`promo-${i}`}
                fill
                className="object-cover object-center"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Left / Right buttons */}
      <button
        aria-label="Previous"
        onClick={goPrev}
        className="absolute -left-3 md:-left-9 top-1/2 -translate-y-1/2 bg-blue-50 hover:bg-white text-blue-400 p-2 md:p-6 rounded-full shadow focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        aria-label="Next"
        onClick={goNext}
        className="absolute -right-3 md:-right-9 top-1/2 -translate-y-1/2 bg-blue-50 hover:bg-white text-blue-400 p-2 md:p-6 rounded-full shadow focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full ${
              i === index ? 'bg-white' : 'bg-white/50'
            } focus:outline-none`}
          />
        ))}
      </div>
    </div>
  );
}

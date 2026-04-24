import { useEffect, useEffectEvent, useRef, useState } from "react";
import { hero } from "@/data/site";
import { uiText } from "@/data/uiText";

const AUTOPLAY_MS = hero.autoplayMs ?? 5000;
const TICK_MS = 50;

export default function HeroSection() {
  const slides = hero.slides;
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const elapsed = useRef(0);

  const goTo = (index) => {
    setActiveIndex(index);
    elapsed.current = 0;
    setProgress(0);
  };

  const stepSlide = (dir) =>
    goTo((activeIndex + dir + slides.length) % slides.length);

  const advanceSlide = useEffectEvent(() => {
    elapsed.current += TICK_MS;
    const pct = Math.min((elapsed.current / AUTOPLAY_MS) * 100, 100);
    setProgress(pct);
    if (elapsed.current >= AUTOPLAY_MS) {
      elapsed.current = 0;
      setActiveIndex((i) => (i + 1) % slides.length);
    }
  });

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(advanceSlide, TICK_MS);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#0c0806] text-white"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          aria-hidden={i !== activeIndex}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(12,8,6,0.88)_0%,rgba(12,8,6,0.55)_50%,rgba(12,8,6,0.18)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[rgba(12,8,6,0.9)] to-transparent" />
      <div className="absolute bottom-8 right-6 z-20 flex items-center gap-2.5">
        <button
          aria-label={uiText.hero.previousSlide}
          onClick={() => stepSlide(-1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/6 text-white/70 transition hover:border-white/55 hover:bg-white/12 hover:text-white"
        >
          <svg
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 12 12"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7.5 2L3.5 6l4 4" />
          </svg>
        </button>
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={uiText.hero.goToSlide(i + 1)}
              onClick={() => goTo(i)}
              className={`h-0.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-7 bg-[rgba(245,201,169,0.9)]"
                  : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>
        <button
          aria-label={uiText.hero.nextSlide}
          onClick={() => stepSlide(1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/6 text-white/70 transition hover:border-white/55 hover:bg-white/12 hover:text-white"
        >
          <svg
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 12 12"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4.5 2L8.5 6l-4 4" />
          </svg>
        </button>
      </div>
      <div
        className="absolute bottom-0 left-0 z-30 h-[2px] bg-[rgba(245,201,169,0.7)] transition-[width] duration-[80ms] linear"
        style={{ width: `${progress}%` }}
      />
    </section>
  );
}

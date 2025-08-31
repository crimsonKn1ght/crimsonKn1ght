import React from 'react';
import { Github } from 'lucide-react';
import { cn } from "@/lib/utils";
import { BackgroundGradient } from "./background-gradient";

const Slide = ({ pub, openModal, current, index, handleSlideClick }) => {
  const slideRef = React.useRef<HTMLDivElement>(null);

  const xRef = React.useRef(0);
  const yRef = React.useRef(0);
  const frameRef = React.useRef<number>();

  React.useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      // Note: We are targeting the inner div now for the CSS variable
      const innerCard = slideRef.current.querySelector('[data-id="inner-card"]');
      if (innerCard) {
        (innerCard as HTMLElement).style.setProperty("--x", `${x}px`);
        (innerCard as HTMLElement).style.setProperty("--y", `${y}px`);
      }


      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  return (
    <li
      className="flex flex-1 flex-col items-center justify-center w-[70vmin] h-[70vmin] mx-[4vmin] z-10"
      onClick={() => handleSlideClick(index)}
    >
      <div
        ref={slideRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98)"
              : "scale(1)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
        className="w-full"
      >
        <BackgroundGradient containerClassName="rounded-2xl">
          <div data-id="inner-card" className="relative rounded-2xl overflow-hidden bg-slate-900">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-150 ease-out"
              style={{
                backgroundImage: `url(${pub.image})`,
                transform:
                  current === index
                    ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                    : "none",
              }}
            >
              <div className="absolute inset-0 bg-black/60 transition-all duration-1000" />
            </div>
            <article
              className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${
                current === index ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <span
                  className={cn(
                    `text-xs px-3 py-1 rounded-full transition-all duration-300`,
                    pub.statusColor,
                    current === index && "shadow-lg border border-white/20"
                  )}
                >
                  {pub.status}
                </span>
                <span
                  className="text-xs text-slate-400"
                  style={{ textShadow: "0px 0px 5px rgba(0,0,0,0.7)" }}
                >
                  {pub.meta}
                </span>
              </div>
              <h3
                className="text-lg font-bold text-white mb-3"
                style={{ textShadow: "0px 0px 8px rgba(0,0,0,0.8)" }}
              >
                {pub.title}
              </h3>
              <p
                className="text-sm text-slate-300 leading-relaxed mb-4"
                style={{ textShadow: "0px 0px 5px rgba(0,0,0,0.7)" }}
              >
                {pub.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      "text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded transition-all duration-300",
                      current === index && "shadow-md border border-blue-500/50"
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-center gap-3 mt-6">
                <button
                  onClick={() => openModal(pub.details)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full sm:w-auto"
                >
                  More details
                </button>
                {pub.codeLink ? (
                  <a
                    href={pub.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors text-center w-full sm:w-auto"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                ) : (
                  <button className="border border-slate-600 text-slate-400 px-6 py-2 rounded-lg font-semibold cursor-not-allowed w-full sm:w-auto">
                    Code Soon
                  </button>
                )}
              </div>
            </article>
          </div>
        </BackgroundGradient>
      </div>
    </li>
  );
};

export default Slide;

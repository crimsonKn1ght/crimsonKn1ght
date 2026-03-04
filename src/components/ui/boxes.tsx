"use client";
import React from "react";
import { cn } from "@/lib/utils";

const colors = [
  "#93c5fd",
  "#f9a8d4",
  "#86efac",
  "#fde047",
  "#fca5a5",
  "#d8b4fe",
  "#a5b4fc",
  "#c4b5fd",
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const Box = React.memo(({ i, j }: { i: number; j: number }) => {
  const [bgColor, setBgColor] = React.useState("");

  return (
    <div
      onMouseEnter={() => setBgColor(getRandomColor())}
      onMouseLeave={() => setBgColor("")}
      style={{
        backgroundColor: bgColor || undefined,
        transition: bgColor ? "none" : "background-color 2s",
      }}
      className="relative h-8 w-16 border-t border-r border-slate-700"
    >
      {j % 2 === 0 && i % 2 === 0 ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-slate-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
      ) : null}
    </div>
  );
});

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  // Reduced from 150×100 (15,000 elements) to 70×50 (3,500 elements).
  // Plain divs replace motion.divs — no Framer Motion overhead per cell.
  const rows = new Array(70).fill(1);
  const cols = new Array(50).fill(1);

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <div key={`row` + i} className="relative h-8 w-16 border-l border-slate-700">
          {cols.map((_, j) => (
            <Box key={`col` + j} i={i} j={j} />
          ))}
        </div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);

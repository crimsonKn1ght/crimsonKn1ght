"use client";
import React from "react";
import { cn } from "@/lib/utils";

// Lightweight, pure-CSS grid background.
// Replaces the previous version that mounted thousands of stateful <div> cells
// (each with its own useState + mouse handlers) plus hundreds of inline SVGs.
// A single element with repeating-linear-gradient lines reproduces the skewed
// grid aesthetic at a tiny fraction of the DOM / runtime cost.
export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
        backgroundImage:
          "linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)",
        backgroundSize: "64px 32px",
      }}
      className={cn(
        "pointer-events-none absolute -top-1/4 left-1/4 z-0 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 opacity-40",
        className
      )}
      {...rest}
    />
  );
};

export const Boxes = React.memo(BoxesCore);

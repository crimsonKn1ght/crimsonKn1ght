import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const gradientClass =
    "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]";

  return (
    <div className={cn("relative group", containerClassName)}>
      {/* Blurred glow layer — CSS animation replaces Framer Motion for compositor-thread performance */}
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition-opacity duration-500",
          animate && "animate-gradient-shift",
          gradientClass
        )}
      />
      {/* Sharp gradient border layer */}
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1]",
          animate && "animate-gradient-shift",
          gradientClass
        )}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};

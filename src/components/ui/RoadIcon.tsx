"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion } from "motion/react";
import { forwardRef } from "react";

interface RoadIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const RoadIcon = forwardRef<HTMLDivElement, RoadIconProps>(
	({ className, size = 28, ...props }, ref) => {

		const pathVariants: Variants = {
			animate: {
				pathLength: [0, 1],
				opacity: [0, 1],
				transition: { 
                    duration: 2, 
                    ease: "easeInOut", 
                    repeat: Infinity, 
                    repeatType: "loop",
                    repeatDelay: 1.5 
                },
			},
		};

		return (
			<motion.div
				ref={ref}
				className={cn("inline-flex", className)}
				{...props}
			>
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<motion.path
                        d="M4 19l4-14"
                        variants={pathVariants}
                        animate="animate"
                    />
					<motion.path
                        d="M16 5l4 14"
                        variants={pathVariants}
                        animate="animate"
                    />
					<motion.path
                        d="M12 8v8"
                        variants={pathVariants}
                        animate="animate"
                    />
				</motion.svg>
			</motion.div>
		);
	},
);

RoadIcon.displayName = "RoadIcon";
export { RoadIcon };

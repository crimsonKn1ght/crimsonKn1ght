"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion } from "motion/react";
import { forwardRef } from "react";


interface LinkedInIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const LinkedInIcon = forwardRef<HTMLDivElement, LinkedInIconProps>(
	({ className, size = 28, ...props }, ref) => {

		const iconVariants: Variants = {
			animate: {
				scale: [1, 1.08, 0.95, 1],
				rotate: [0, -3, 3, 0],
				transition: { duration: 1.3, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 },
			},
		};

		const drawVariants: Variants = {
			animate: {
				pathLength: [0, 1],
				opacity: [0.7, 1],
				transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.2 },
			},
		};

		return (
			<motion.div
				ref={ref}
				className={cn("inline-flex items-center justify-center", className)}
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
					animate="animate"
					variants={iconVariants}
				>
					<motion.path
						d="M16 8a6 6 0 0 1 6 6v7h-4v-7
              a2 2 0 0 0-2-2 
              2 2 0 0 0-2 2v7h-4v-7
              a6 6 0 0 1 6-6z"
						variants={drawVariants}
					/>
					<motion.rect
						width="4"
						height="12"
						x="2"
						y="9"
						variants={drawVariants}
					/>
					<motion.circle cx="4" cy="4" r="2" variants={drawVariants} />
				</motion.svg>
			</motion.div>
		);
	},
);

LinkedInIcon.displayName = "LinkedInIcon";
export { LinkedInIcon };

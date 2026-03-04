"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion } from "motion/react";
import { forwardRef } from "react";

interface BlocksIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const BlocksIcon = forwardRef<HTMLDivElement, BlocksIconProps>(
	({ className, size = 28, ...props }, ref) => {

		const svgVariants: Variants = {
			animate: {
				rotate: [0, -2, 2, 0],
				scale: [1, 1.05, 0.95, 1],
				transition: {
					duration: 1.6,
					ease: [0.42, 0, 0.58, 1],
					repeat: Infinity,
          repeatDelay: 1.2
				},
			},
		};

		const pathVariants: Variants = {
			animate: {
				pathLength: [0, 1],
				opacity: [0.5, 1],
				transition: {
					duration: 1.4,
					ease: [0.42, 0, 0.58, 1],
					repeat: Infinity,
          repeatDelay: 1.4
				},
			},
		};

		const rectVariants: Variants = {
			animate: {
				scale: [1, 1.2, 0.9, 1],
				transition: {
					duration: 1.2,
					ease: [0.42, 0, 0.58, 1],
					repeat: Infinity,
          repeatDelay: 1.6
				},
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
					variants={svgVariants}
				>
					<motion.path
						d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"
						variants={pathVariants}
					/>
					<motion.rect
						x="14"
						y="2"
						width="8"
						height="8"
						rx="1"
						variants={rectVariants}
					/>
				</motion.svg>
			</motion.div>
		);
	},
);

BlocksIcon.displayName = "BlocksIcon";
export { BlocksIcon };

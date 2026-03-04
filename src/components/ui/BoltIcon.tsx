"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion } from "motion/react";
import { forwardRef } from "react";


interface BoltIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const BoltIcon = forwardRef<HTMLDivElement, BoltIconProps>(
	({ className, size = 28, ...props }, ref) => {

		const iconVariants: Variants = {
			animate: {
				scale: [1, 1.08, 0.95, 1],
				rotate: [0, -2, 2, 0],
				transition: { duration: 1.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 },
			},
		};

		const pathVariants: Variants = {
			animate: {
				pathLength: [0, 1],
				transition: { duration: 1.3, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.1 },
			},
		};

		const circleVariants: Variants = {
			animate: {
				scale: [1, 1.3, 0.9, 1],
				opacity: [1, 0.6, 1],
				transition: { duration: 1.1, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.2 },
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
						d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
						variants={pathVariants}
					/>
					<motion.circle cx="12" cy="12" r="4" variants={circleVariants} />
				</motion.svg>
			</motion.div>
		);
	},
);

BoltIcon.displayName = "BoltIcon";
export { BoltIcon };

"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion } from "motion/react";
import { forwardRef } from "react";


interface MailsIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const MailsIcon = forwardRef<HTMLDivElement, MailsIconProps>(
	({ className, size = 28, ...props }, ref) => {

		const svgVariants: Variants = {
			animate: {
				y: [0, -3, 3, -2, 0],
				scale: [1, 1.05, 0.95, 1],
				transition: {
					duration: 1.6,
					ease: [0.42, 0, 0.58, 1],
					repeat: Infinity,
          repeatDelay: 1.5,
				},
			},
		};

		const flapVariants: Variants = {
			animate: {
				rotate: [-4, 4, -3, 0],
				opacity: [1, 0.7, 1],
				transition: {
					duration: 1.2,
					ease: [0.42, 0, 0.58, 1],
					repeat: Infinity,
          repeatDelay: 1.7,
				},
			},
		};

		const outlineVariants: Variants = {
			animate: {
				opacity: [0.7, 1, 0.5, 1],
				transition: {
					duration: 1.4,
					ease: [0.42, 0, 0.58, 1],
					repeat: Infinity,
          repeatDelay: 1,
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
						d="M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732"
						variants={outlineVariants}
					/>
					<motion.path
						d="m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5"
						variants={flapVariants}
					/>
					<motion.rect
						x="7"
						y="3"
						width="15"
						height="12"
						rx="2"
						variants={outlineVariants}
					/>
				</motion.svg>
			</motion.div>
		);
	},
);

MailsIcon.displayName = "MailsIcon";
export { MailsIcon };

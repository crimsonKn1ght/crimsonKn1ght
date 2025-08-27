"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion } from "motion/react";
import { forwardRef } from "react";

interface ContactProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const ContactIcon = forwardRef<HTMLDivElement, ContactProps>(
	({ className, size = 28, ...props }, ref) => {

		const rectVariants: Variants = {
			animate: {
				strokeDashoffset: [100, 0],
				opacity: [0.3, 1],
				transition: { duration: 0.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.4 },
			},
		};

		const circleVariants: Variants = {
			animate: {
				scale: [0.5, 1.2, 1],
				opacity: [0, 1],
				transition: { duration: 0.6, delay: 0.25, ease: "easeOut", repeat: Infinity, repeatDelay: 1.6 },
			},
		};

		const lineVariants: Variants = {
			animate: {
				x: [-10, 0],
				opacity: [0, 1],
				transition: { duration: 0.4, ease: "easeOut", delay: 0.4, repeat: Infinity, repeatDelay: 1.8 },
			},
		};

		const curveVariants: Variants = {
			animate: {
				strokeDashoffset: [30, 0],
				opacity: [0, 1],
				transition: { duration: 0.6, delay: 0.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.7 },
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
					className="lucide lucide-contact-icon lucide-contact"
				>
					<motion.path
						d="M16 2v2"
						variants={lineVariants}
						animate="animate"
					/>
					<motion.path
						d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"
						strokeDasharray="30"
						strokeDashoffset="0"
						variants={curveVariants}
						animate="animate"
					/>
					<motion.path
						d="M8 2v2"
						variants={lineVariants}
						animate="animate"
					/>
					<motion.circle
						cx="12"
						cy="11"
						r="3"
						variants={circleVariants}
						animate="animate"
					/>
					<motion.rect
						x="3"
						y="4"
						width="18"
						height="18"
						rx="2"
						strokeDasharray="100"
						strokeDashoffset="0"
						variants={rectVariants}
						animate="animate"
					/>
				</motion.svg>
			</motion.div>
		);
	},
);

ContactIcon.displayName = "ContactIcon";
export { ContactIcon };

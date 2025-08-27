"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface ContactHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface ContactProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const ContactIcon = forwardRef<ContactHandle, ContactProps>(
	({ className, size = 28, ...props }, ref) => {
		const controls = useAnimation();
		const isControlled = useRef(false);

		useImperativeHandle(ref, () => {
			isControlled.current = true;
			return {
				startAnimation: () => controls.start("animate"),
				stopAnimation: () => controls.start("normal"),
			};
		});

		const handleEnter = useCallback(() => {
			if (!isControlled.current) controls.start("animate");
		}, [controls]);

		const handleLeave = useCallback(() => {
			if (!isControlled.current) controls.start("normal");
		}, [controls]);

		const rectVariants: Variants = {
			normal: { strokeDashoffset: 0, opacity: 1 },
			animate: {
				strokeDashoffset: [100, 0],
				opacity: [0.3, 1],
				transition: { duration: 0.8, ease: "easeInOut" },
			},
		};

		const circleVariants: Variants = {
			normal: { scale: 1, opacity: 1 },
			animate: {
				scale: [0.5, 1.2, 1],
				opacity: [0, 1],
				transition: { duration: 0.6, delay: 0.25, ease: "easeOut" },
			},
		};

		const lineVariants: Variants = {
			normal: { x: 0, opacity: 1 },
			animate: {
				x: [-10, 0],
				opacity: [0, 1],
				transition: { duration: 0.4, ease: "easeOut", delay: 0.4 },
			},
		};

		const curveVariants: Variants = {
			normal: { opacity: 1, strokeDashoffset: 0 },
			animate: {
				strokeDashoffset: [30, 0],
				opacity: [0, 1],
				transition: { duration: 0.6, delay: 0.5, ease: "easeInOut" },
			},
		};

		return (
			<motion.div
				className={cn("inline-flex items-center justify-center", className)}
				onMouseEnter={handleEnter}
				onMouseLeave={handleLeave}
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
						initial="normal"
						animate={controls}
					/>
					<motion.path
						d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"
						strokeDasharray="30"
						strokeDashoffset="0"
						variants={curveVariants}
						initial="normal"
						animate={controls}
					/>
					<motion.path
						d="M8 2v2"
						variants={lineVariants}
						initial="normal"
						animate={controls}
					/>
					<motion.circle
						cx="12"
						cy="11"
						r="3"
						variants={circleVariants}
						initial="normal"
						animate={controls}
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
						initial="normal"
						animate={controls}
					/>
				</motion.svg>
			</motion.div>
		);
	},
);

ContactIcon.displayName = "ContactIcon";
export { ContactIcon };

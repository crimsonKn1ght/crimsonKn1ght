"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface BookmarkIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface BookmarkIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const BookmarkIcon = forwardRef<BookmarkIconHandle, BookmarkIconProps>(
	({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
		const controls = useAnimation();
		const sparkControls = useAnimation();
		const isControlled = useRef(false);

		useImperativeHandle(ref, () => {
			isControlled.current = true;
			return {
				startAnimation: () => {
					controls.start("animate");
					sparkControls.start("animate");
				},
				stopAnimation: () => {
					controls.start("normal");
					sparkControls.start("normal");
				},
			};
		});

		const handleEnter = useCallback(() => {
			if (!isControlled.current) {
				controls.start("animate");
				sparkControls.start("animate");
			}
		}, [controls, sparkControls]);

		const handleLeave = useCallback(() => {
			if (!isControlled.current) {
				controls.start("normal");
				sparkControls.start("normal");
			}
		}, [controls, sparkControls]);

		const bookmarkVariants: Variants = {
			normal: { scale: 1 },
			animate: {
				scale: [1, 1.15, 0.9, 1],
				transition: { duration: 1.2, repeat: 0, ease: "easeInOut" },
			},
		};

		const sparkVariants: Variants = {
			normal: { opacity: 0, scale: 0 },
			animate: {
				opacity: [0.8, 0, 0],
				scale: [1, 1.5, 0],
				transition: { duration: 1.2, repeat: 0, ease: "easeOut" },
			},
		};

		return (
			<motion.div
				className={cn("relative inline-flex", className)}
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
					variants={bookmarkVariants}
					animate={controls}
					initial="normal"
				>
					<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
				</motion.svg>

				<motion.div
					className="absolute -top-1 right-0"
					animate={sparkControls}
					initial="normal"
				>
					<motion.svg
						xmlns="http://www.w3.org/2000/svg"
						width={size / 3}
						height={size / 3}
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						variants={sparkVariants}
					>
						<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
					</motion.svg>
				</motion.div>
			</motion.div>
		);
	},
);

BookmarkIcon.displayName = "BookmarkIcon";
export { BookmarkIcon };

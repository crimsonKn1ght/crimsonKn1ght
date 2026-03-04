"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion } from "motion/react";
import { forwardRef } from "react";

interface BookmarkIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const BookmarkIcon = forwardRef<HTMLDivElement, BookmarkIconProps>(
	({ className, size = 28, ...props }, ref) => {

		const bookmarkVariants: Variants = {
			animate: {
				scale: [1, 1.15, 0.9, 1],
				transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.3 },
			},
		};

		const sparkVariants: Variants = {
			animate: {
				opacity: [0.8, 0, 0],
				scale: [1, 1.5, 0],
				transition: { duration: 1.2, repeat: Infinity, ease: "easeOut", repeatDelay: 1.3 },
			},
		};

		return (
			<motion.div
				ref={ref}
				className={cn("relative inline-flex", className)}
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
					animate="animate"
				>
					<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
				</motion.svg>

				<motion.div
					className="absolute -top-1 right-0"
					animate="animate"
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

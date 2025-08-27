"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface CircleChevronDownIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface CircleChevronDownIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const CircleChevronDownIcon = forwardRef<
	CircleChevronDownIconHandle,
	CircleChevronDownIconProps
>(({ className, size = 28, ...props }, ref) => {
	const circleControls = useAnimation();
	const arrowControls = useAnimation();
	const isControlled = useRef(false);

	useImperativeHandle(ref, () => {
		isControlled.current = true;
		return {
			startAnimation: () => {
				circleControls.start("animate");
				arrowControls.start("animate");
			},
			stopAnimation: () => {
				circleControls.start("normal");
				arrowControls.start("normal");
			},
		};
	});

	const handleEnter = useCallback(() => {
		if (!isControlled.current) {
			circleControls.start("animate");
			arrowControls.start("animate");
		}
	}, [circleControls, arrowControls]);

	const handleLeave = useCallback(() => {
		if (!isControlled.current) {
			circleControls.start("normal");
			arrowControls.start("normal");
		}
	}, [circleControls, arrowControls]);

	const circleVariants: Variants = {
		normal: { scale: 1, opacity: 1 },
		animate: {
			scale: [1, 1.1, 0.9, 1.05, 1],
			opacity: 1,
			transition: {
				duration: 1.2,
				ease: "easeInOut",
			},
		},
	};

	const arrowVariants: Variants = {
		normal: { y: 0, opacity: 1 },
		animate: {
			y: [-10, 0],
			opacity: [0, 1],
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
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
			>
				<motion.circle
					cx="12"
					cy="12"
					r="10"
					animate={circleControls}
					initial="normal"
					variants={circleVariants}
				/>
				<motion.path
					d="m16 10-4 4-4-4"
					animate={arrowControls}
					initial="normal"
					variants={arrowVariants}
				/>
			</motion.svg>
		</motion.div>
	);
});

CircleChevronDownIcon.displayName = "CircleChevronDownIcon";
export { CircleChevronDownIcon };

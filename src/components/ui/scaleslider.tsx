"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  useTransform,
  MotionValue,
} from "framer-motion";

interface ScaleSliderProps {
  defaultValue?: number;
  minValue?: number;
  maxValue?: number;
  damping?: number;
  stiffness?: number;
  onChange?: (value: number) => void;
  value?: number;
}

const AnimatedValue = ({
  value,
  progress,
  minValue,
  maxValue,
}: {
  value: number;
  progress: MotionValue<number>;
  minValue: number;
  maxValue: number;
}) => {
  const previousValue = useRef(value);
  const direction = value > previousValue.current ? 1 : -1;
  const isFirstRender = useRef(true);

  useEffect(() => {
    previousValue.current = value;
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
  }, [value]);

  return (
    <div className="flex">
      <motion.div
        key={value}
        initial={
          isFirstRender.current ? false : { y: direction * 15, opacity: 0 }
        }
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -direction * 15, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full text-right"
      >
        {value}
      </motion.div>
      <span className="pl-1"> / {maxValue}</span>
    </div>
  );
};

export const ScaleSlider: React.FC<ScaleSliderProps> = ({
  defaultValue = 1,
  minValue = 1,
  maxValue = 6,
  damping = 20,
  stiffness = 300,
  onChange,
  value,
}) => {
  const [currentValue, setCurrentValue] = useState(defaultValue);
  const range = maxValue - minValue;
  const notchSize = 100 / range; // percentage step per project

  const x = useMotionValue(((defaultValue - minValue) / range) * 100);
  const xSpring = useSpring(x, { damping, stiffness });
  const width = useTransform(xSpring, [0, 100], ["0%", "100%"]);

  const progress = useTransform(x, (latest) => {
    return (latest % notchSize) / notchSize;
  });

  // Sync with external `value`
  useEffect(() => {
    if (value !== undefined) {
      const newX = ((value - minValue) / range) * 100;
      x.set(newX);
    }
  }, [value, minValue, range, x]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const percent = parseFloat(e.target.value);

    // snap while dragging
    const snapped = Math.round(percent / notchSize) * notchSize;
    x.set(snapped);
  };

  const handleDragEnd = () => {
    const closestNotch = Math.round(x.get() / notchSize) * notchSize;
    x.set(closestNotch);
  };

  // Update currentValue + call onChange
  useEffect(() => {
    const unsubscribe = x.onChange((latest) => {
      const newValue = Math.round((latest / 100) * range) + minValue;
      setCurrentValue(newValue);   // always update
      if (onChange) {
        onChange(newValue);
      }
    });

    return () => unsubscribe();
  }, [x, range, minValue, onChange]);


  return (
    <div className="mx-auto mt-8 w-full max-w-md">
      <div className="relative flex h-12 items-center gap-3 rounded-full bg-black pl-4 pr-6 dark:bg-white">
        {/* Value Indicator */}
        <div className="relative flex h-6 w-12 items-center justify-center whitespace-nowrap text-sm font-semibold text-white dark:text-black">
          <AnimatedValue
            value={value ?? currentValue}
            progress={progress}
            minValue={minValue}
            maxValue={maxValue}
          />
        </div>
        <div className="relative h-1/3 w-full">
          {/* Gray background with notches */}
          <div className="absolute inset-0 rounded-full bg-neutral-800 dark:bg-neutral-300">
            <div className="absolute inset-0 flex items-center justify-between px-1">
              {[...Array(range + 1)].map((_, i) => (
                <div
                  key={i}
                  className="h-2 w-2 rounded-full bg-neutral-400"
                ></div>
              ))}
            </div>
          </div>

          {/* Slider */}
          <motion.div
            className="absolute inset-y-0 left-0 z-10 rounded-l-full bg-white dark:bg-black"
            style={{ width }}
          >
            {/* Thumb */}
            <motion.div className="absolute right-0 top-1/2 h-6 w-6 -translate-y-1/2 translate-x-1/2 rounded-full border-2 border-neutral-800 bg-white shadow-md dark:border-neutral-300 dark:bg-black" />
          </motion.div>

          {/* Slider input */}
          <input
            type="range"
            min="0"
            max="100"
            step={notchSize} // snap between projects
            value={((value ?? currentValue) - minValue) / range * 100}
            onChange={handleChange}
            onPointerUp={handleDragEnd}
            className="absolute -inset-x-3 inset-y-0 z-20 w-[calc(100%+1.5rem)] cursor-pointer opacity-0"
          />
        </div>
      </div>
    </div>
  );
};

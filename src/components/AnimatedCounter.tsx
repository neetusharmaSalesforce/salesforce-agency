"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type AnimatedCounterProps = {
  end: number;
  suffix?: string;
  label: string;
};

export default function AnimatedCounter({
  end,
  suffix = "",
  label,
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref}>
      <p className="text-3xl font-bold text-blue-600">
        {inView ? (
          <CountUp
            end={end}
            duration={2}
            suffix={suffix}
          />
        ) : (
          `0${suffix}`
        )}
      </p>

      <p className="mt-1 text-sm text-gray-600">
        {label}
      </p>
    </div>
  );
}
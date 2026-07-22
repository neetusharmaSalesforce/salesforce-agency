"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      const percentage = (scrollTop / documentHeight) * 100;

      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress);

    return () =>
      window.removeEventListener(
        "scroll",
        updateProgress
      );
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[9999] h-1 w-full bg-transparent">

      <div
        className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-150"
        style={{
          width: `${progress}%`,
        }}
      />

    </div>
  );
}
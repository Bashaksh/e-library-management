"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const beamContainerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     if (!beamContainerRef.current) return;
  //     const rect = beamContainerRef.current.getBoundingClientRect();
  //     const x = e.clientX - rect.left;
  //     const y = e.clientY - rect.top;
  //     setMousePosition({ x, y });
  //   };

  //   document.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  return (
    <div
      ref={beamContainerRef}
      className={cn(
        "h-full w-full overflow-hidden [perspective:1000px] opacity-70",
        className
      )}
    >
      <div
        className="absolute inset-0 [transform-style:preserve-3d]"
        style={{
          transform: `rotateX(${mousePosition.y / 20}deg) rotateY(${
            -mousePosition.x / 20
          }deg)`,
        }}
      >
        <div className="absolute top-[40%] left-1/2 h-60 w-1/4 -translate-x-1/2 -translate-y-1/2 bg-[#3A86FF] opacity-20 blur-[80px]" />
        <div className="absolute top-[40%] left-1/4 h-60 w-1/4 -translate-x-1/2 -translate-y-1/2 bg-[#8338EC] opacity-20 blur-[80px]" />
        <div className="absolute top-3/4 left-3/4 h-60 w-1/4 -translate-x-1/2 -translate-y-1/2 bg-[#3A86FF] opacity-20 blur-[80px]" />
      </div>
    </div>
  );
};
"use client";
import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SparklesProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleColor?: string;
  particleDensity?: number;
}

export const SparklesCore = (props: SparklesProps) => {
  const {
    id,
    className,
    background = "transparent",
    minSize = 0.6,
    maxSize = 1.5,
    particleColor = "#FFFFFF",
    particleDensity = 60,
  } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const particles = useRef<any[]>([]);
  const animationRef = useRef<number | null>(null);

  const init = () => {
    if (!canvasRef.current) return;
    context.current = canvasRef.current.getContext("2d");
    
    const { innerWidth, innerHeight } = window;
    canvasRef.current.width = innerWidth;
    canvasRef.current.height = innerHeight;
    
    const particlesCount = Math.floor((innerWidth * innerHeight) / 10000) * particleDensity;
    particles.current = Array.from({ length: particlesCount }).map(_ => ({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      size: minSize + Math.random() * (maxSize - minSize),
      opacity: Math.random(),
      directionX: Math.random() * 2 - 1,
      directionY: Math.random() * 2 - 1,
    }));
  };

  const animate = () => {
    if (!context.current || !canvasRef.current) return;
    
    context.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    
    particles.current.forEach((particle, i) => {
      particle.x += particle.directionX * 0.2;
      particle.y += particle.directionY * 0.2;
      
      if (particle.x < 0 || particle.x > canvasRef.current!.width) {
        particle.directionX *= -1;
      }
      
      if (particle.y < 0 || particle.y > canvasRef.current!.height) {
        particle.directionY *= -1;
      }
      
      context.current!.beginPath();
      context.current!.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.current!.closePath();
      context.current!.fillStyle = `${particleColor}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
      context.current!.fill();
    });
    
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    init();
    animate();

    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [maxSize, minSize, particleColor, particleDensity]);

  return (
    <div
      ref={canvasContainerRef}
      className={cn("fixed inset-0 z-0", className)}
      style={{
        background,
      }}
    >
      <canvas
        id={id}
        ref={canvasRef}
        className="absolute inset-0"
      />
    </div>
  );
};
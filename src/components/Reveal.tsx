"use client";

import { useInView } from "@/hooks/useInView";

interface RevealProps {
  children: React.ReactNode;
  animation?: "fadeInUp" | "fadeIn" | "scaleIn";
  delay?: number;
  className?: string;
}

export default function Reveal({ children, animation = "fadeInUp", delay = 0, className = "" }: RevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const delayClass = delay > 0 ? `delay-${delay}` : "";
  const animationClass = isInView ? `animate-${animation}` : "";

  // Siempre empezamos con opacity-0, y cuando isInView es true, añadimos la animación
  const baseClass = !isInView ? "opacity-0" : "";

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`${baseClass} ${animationClass} ${delayClass} ${className}`.trim()}>
      {children}
    </div>
  );
}

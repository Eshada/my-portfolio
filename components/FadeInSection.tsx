"use client";

import { FC, useRef, useEffect, ReactNode, useState } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number; // أضفنا الـdelay بالثواني
  id?:string;
}

const FadeInSection: FC<FadeInSectionProps> = ({ children, className = "", delay = 0  , id}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay * 1000);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
    {...(id ? { id } : {})}      ref={ref}
      className={`${className} transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;

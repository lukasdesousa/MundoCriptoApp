import React, { useState, useEffect, useRef } from "react";
import { RevealContent } from "./styled";

interface ScrollRevealProps {
  children: React.ReactNode;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null); // Correção na tipagem

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 } // Trigger quando 10% do elemento estiver visível
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <RevealContent ref={elementRef} $isVisible={isVisible}>
      {children}
    </RevealContent>
  );
};

export default ScrollReveal;

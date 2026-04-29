import { ReactNode, useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  key?: string | number;
}

export default function ScrollReveal({ children, className = "", delay = 0, once = true }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          if (once) observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: "-50px" 
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [once]);

  const style = delay ? { transitionDelay: `${delay}s` } : {};

  return (
    <div
      ref={ref}
      className={`${className} scroll-reveal-container`}
      style={style}
    >
      {children}
    </div>
  );
}

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  key?: any;
}

export default function ScrollReveal({ children, className = "", delay = 0, once = true }: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
      variants={{
        hidden: { opacity: 1 }, // We use classes for internal animations
        visible: { opacity: 1 }
      }}
      className={`${className} scroll-reveal-container`}
      onViewportEnter={(entry) => {
        if (entry?.target) {
          entry.target.classList.add('is-visible');
        }
      }}
    >
      {children}
    </motion.div>
  );
}

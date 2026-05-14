/**
 * AnimatedSection Component
 *
 * Wraps content with scroll-triggered animations using Framer Motion.
 * Makes the portfolio feel alive with smooth entrance animations.
 *
 * @param children - Content to animate
 * @param delay - Animation delay in seconds (default: 0)
 * @param className - Additional CSS classes
 */

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function AnimatedSection({
  children,
  delay = 0,
  className = '',
  direction = 'up'
}: AnimatedSectionProps) {
  // Define initial positions based on direction
  const initialPosition = {
    up: { opacity: 0, y: 30 },
    down: { opacity: 0, y: -30 },
    left: { opacity: 0, x: 30 },
    right: { opacity: 0, x: -30 }
  };

  const animatePosition = {
    up: { opacity: 1, y: 0 },
    down: { opacity: 1, y: 0 },
    left: { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      initial={initialPosition[direction]}
      whileInView={animatePosition[direction]}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1] // Custom easing for smooth animation
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

import { ReactNode } from 'react';

import { motion } from 'framer-motion';

export interface FadePageProps {
  className?: string;
  delay?: number;
  duration?: number;
  children?: ReactNode;
}

const FadePage: React.FC<FadePageProps> = ({
  className = '',
  delay = 0.05,
  duration = 0.55,
  children,
}) => (
  <motion.div
    className={className}
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
      transition: {
        delay,
        ease: [0.445, 0.05, 0.55, 0.95],
        duration,
      },
    }}
    exit={{
      opacity: 0,
      transition: {
        delay,
        ease: [0.445, 0.05, 0.55, 0.95],
        duration,
      },
    }}
  >
    {children}
  </motion.div>
);

export default FadePage;

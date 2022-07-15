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
  delay = 0,
  duration = 0.28,
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
        ease: 'easeIn',
        duration,
      },
    }}
    exit={{
      opacity: 0,
      transition: {
        delay,
        ease: 'easeIn',
        duration,
      },
    }}
  >
    {children}
  </motion.div>
);

export default FadePage;

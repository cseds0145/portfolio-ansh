import React from 'react';
import { motion } from 'framer-motion';

interface ZeroGBadgeProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export const ZeroGBadge: React.FC<ZeroGBadgeProps> = ({
  children,
  delay = 0,
  duration = 5,
  yOffset = 10,
  className = '',
}) => {
  return (
    <motion.div
      animate={{
        y: [-yOffset, yOffset, -yOffset],
        rotate: [-1, 1.5, -1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
        delay: delay,
      }}
      whileHover={{
        scale: 1.08,
        y: -yOffset * 1.5,
        transition: { duration: 0.2 },
      }}
      className={`inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-[#121214]/90 px-3.5 py-1.5 text-xs font-medium text-zinc-200 shadow-glass backdrop-blur-md transition-colors hover:border-sky-400 hover:text-white hover:shadow-ice-sm ${className}`}
    >
      {children}
    </motion.div>
  );
};

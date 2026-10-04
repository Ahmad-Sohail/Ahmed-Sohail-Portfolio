import { motion } from 'framer-motion';

/**
 * Reusable ScrollReveal wrapper component powered by Framer Motion.
 * Animates children as they scroll into the viewport cleanly without clipping on mobile or desktop.
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 20,
  className = '',
  once = true,
  scale = false,
}) {
  // Safe distance limit to prevent horizontal overflow and clipped text on mobile
  const safeDist = Math.min(distance, 20);

  const directions = {
    up: { y: safeDist, x: 0 },
    down: { y: -safeDist, x: 0 },
    left: { x: 12, y: 0 },
    right: { x: -12, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initialOffset = directions[direction] || directions.up;

  const initial = {
    opacity: 0,
    ...initialOffset,
    ...(scale ? { scale: 0.96 } : {}),
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
    ...(scale ? { scale: 1 } : {}),
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount: 0.05, margin: '0px 0px -20px 0px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggered container for revealing lists of cards on scroll.
 */
export function StaggerContainer({
  children,
  className = '',
  staggerChildren = 0.1,
  delayChildren = 0,
  once = true,
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.05, margin: '0px 0px -20px 0px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
  direction = 'up',
  distance = 18,
}) {
  const safeDist = Math.min(distance, 18);
  const offsets = {
    up: { y: safeDist, x: 0 },
    down: { y: -safeDist, x: 0 },
    left: { x: 10, y: 0 },
    right: { x: -10, y: 0 },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      ...(offsets[direction] || offsets.up),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

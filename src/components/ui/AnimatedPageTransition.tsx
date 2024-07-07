import { motion } from 'framer-motion';

export function AnimatedPageTransition() {
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-white origin-top"
        initial={{ y: '100%'}}
        animate={{ y: ['100%', 0, '-100%'] }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}

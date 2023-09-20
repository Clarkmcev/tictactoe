import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  draw: any;
};

function Circle({ draw }: Props) {
  return (
    <motion.svg
      width="500"
      height="500"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="105"
        cy="105"
        r="60"
        stroke="#f3f4f6"
        variants={draw}
        custom={1}
      />
    </motion.svg>
  );
}

export default Circle;

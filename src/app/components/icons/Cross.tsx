import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  draw: any;
};

function Cross({ draw }: Props) {
  return (
    <motion.svg
      width="400"
      height="400"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
    >
      <motion.line
        x1="60"
        y1="60"
        x2="200"
        y2="200"
        stroke="#f3f4f6"
        variants={draw}
        custom={1}
      />
      <motion.line
        x1="60"
        y1="200"
        x2="200"
        y2="60"
        stroke="#f3f4f6"
        variants={draw}
        custom={1}
      />
    </motion.svg>
  );
}

export default Cross;
